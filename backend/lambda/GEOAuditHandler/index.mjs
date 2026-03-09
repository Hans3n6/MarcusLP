import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import https from "https";
import http from "http";

const ses = new SESClient({ region: "us-east-1" });

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, resets on cold start)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map(); // key: IP, value: { count, resetAt }
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Fetch helper – uses only built-in Node modules, follows redirects (max 3)
// ---------------------------------------------------------------------------
const MAX_BODY = 1024 * 1024; // 1 MB
const USER_AGENT = "HWS-GEO-Audit/1.0";

function fetchWithTimeout(targetUrl, timeoutMs = 8000, maxRedirects = 3) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(targetUrl);
    const mod = parsedUrl.protocol === "https:" ? https : http;

    const req = mod.get(
      targetUrl,
      {
        headers: { "User-Agent": USER_AGENT },
        timeout: timeoutMs,
      },
      (res) => {
        // Follow redirects
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (maxRedirects <= 0) {
            resolve({ statusCode: res.statusCode, body: "", error: "Too many redirects" });
            return;
          }
          const redirectUrl = new URL(res.headers.location, targetUrl).href;
          fetchWithTimeout(redirectUrl, timeoutMs, maxRedirects - 1).then(resolve).catch(reject);
          return;
        }

        let chunks = [];
        let totalLength = 0;

        res.on("data", (chunk) => {
          totalLength += chunk.length;
          if (totalLength <= MAX_BODY) {
            chunks.push(chunk);
          }
        });

        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            body: Buffer.concat(chunks).toString("utf-8"),
          });
        });

        res.on("error", (err) => {
          resolve({ statusCode: 0, body: "", error: err.message });
        });
      }
    );

    req.on("timeout", () => {
      req.destroy();
      resolve({ statusCode: 0, body: "", error: "Request timed out" });
    });

    req.on("error", (err) => {
      resolve({ statusCode: 0, body: "", error: err.message });
    });
  });
}

// ---------------------------------------------------------------------------
// Analysis modules
// ---------------------------------------------------------------------------

function analyzeSchemaMarkup(html) {
  const findings = [];
  let score = 0;

  // 1. JSON-LD present (7 pts)
  const jsonLdRegex = /<script\s[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const jsonLdMatches = [...html.matchAll(jsonLdRegex)];
  if (jsonLdMatches.length > 0) {
    score += 7;
    findings.push({ check: "JSON-LD present", status: "pass", detail: `Found ${jsonLdMatches.length} JSON-LD block(s)` });
  } else {
    findings.push({ check: "JSON-LD present", status: "fail", detail: "No JSON-LD structured data found", recommendation: "Add JSON-LD structured data to help AI engines understand your content" });
  }

  // Parse all JSON-LD blocks
  const schemas = [];
  for (const match of jsonLdMatches) {
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed)) {
        schemas.push(...parsed);
      } else {
        schemas.push(parsed);
      }
    } catch {
      // malformed JSON-LD, skip
    }
  }

  // Also check for @graph arrays
  const allTypes = new Set();
  function collectTypes(obj) {
    if (!obj || typeof obj !== "object") return;
    if (obj["@type"]) {
      const types = Array.isArray(obj["@type"]) ? obj["@type"] : [obj["@type"]];
      types.forEach((t) => allTypes.add(t));
    }
    if (obj["@graph"] && Array.isArray(obj["@graph"])) {
      obj["@graph"].forEach(collectTypes);
    }
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === "object") collectTypes(obj[key]);
    }
  }
  schemas.forEach(collectTypes);

  // 2. Organization schema (7 pts)
  if (allTypes.has("Organization") || allTypes.has("LocalBusiness") || allTypes.has("Corporation")) {
    score += 7;
    findings.push({ check: "Organization schema", status: "pass", detail: "Organization or LocalBusiness schema found" });
  } else {
    findings.push({ check: "Organization schema", status: "fail", detail: "No Organization schema found", recommendation: "Add Organization or LocalBusiness JSON-LD to establish your brand entity for AI search" });
  }

  // 3. Article/Author schema (6 pts)
  const hasArticle = allTypes.has("Article") || allTypes.has("BlogPosting") || allTypes.has("NewsArticle") || allTypes.has("WebPage");
  const hasAuthor = schemas.some((s) => s.author || (s["@graph"] && s["@graph"].some((g) => g.author)));
  if (hasArticle && hasAuthor) {
    score += 6;
    findings.push({ check: "Article/Author schema", status: "pass", detail: "Article schema with author attribution found" });
  } else if (hasArticle) {
    score += 3;
    findings.push({ check: "Article/Author schema", status: "partial", detail: "Article schema found but missing author attribution", recommendation: "Add an 'author' field to your Article schema for better AI citation" });
  } else {
    findings.push({ check: "Article/Author schema", status: "fail", detail: "No Article or Author schema found", recommendation: "Add Article JSON-LD with author info so AI engines can cite your content" });
  }

  // 4. BreadcrumbList (5 pts)
  if (allTypes.has("BreadcrumbList")) {
    score += 5;
    findings.push({ check: "BreadcrumbList schema", status: "pass", detail: "BreadcrumbList schema found" });
  } else {
    findings.push({ check: "BreadcrumbList schema", status: "fail", detail: "No BreadcrumbList schema found", recommendation: "Add BreadcrumbList JSON-LD to help AI engines understand your site hierarchy" });
  }

  return { score, maxScore: 25, label: "Schema Markup", findings };
}

function analyzeMetaTags(html) {
  const findings = [];
  let score = 0;

  // 1. Title tag (7 pts)
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    const len = title.length;
    if (len >= 30 && len <= 60) {
      score += 7;
      findings.push({ check: "Title tag", status: "pass", detail: `Title found (${len} chars) - ideal length` });
    } else if (len > 0) {
      score += 4;
      const hint = len < 30 ? "too short (aim for 30-60 chars)" : "too long (aim for 30-60 chars)";
      findings.push({ check: "Title tag", status: "partial", detail: `Title found (${len} chars) - ${hint}`, recommendation: "Adjust title length to 30-60 characters for optimal AI and search display" });
    }
  } else {
    findings.push({ check: "Title tag", status: "fail", detail: "No title tag found", recommendation: "Add a descriptive <title> tag (30-60 characters)" });
  }

  // 2. Meta description (7 pts)
  const descMatch = html.match(/<meta\s[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']([\s\S]*?)["'][^>]*\/?>/i)
    || html.match(/<meta\s[^>]*content\s*=\s*["']([\s\S]*?)["'][^>]*name\s*=\s*["']description["'][^>]*\/?>/i);
  if (descMatch) {
    const desc = descMatch[1].trim();
    const len = desc.length;
    if (len >= 120 && len <= 160) {
      score += 7;
      findings.push({ check: "Meta description", status: "pass", detail: `Meta description found (${len} chars) - ideal length` });
    } else if (len > 0) {
      score += 4;
      const hint = len < 120 ? "too short (aim for 120-160 chars)" : "too long (aim for 120-160 chars)";
      findings.push({ check: "Meta description", status: "partial", detail: `Meta description found (${len} chars) - ${hint}`, recommendation: "Adjust meta description to 120-160 characters for best AI summary extraction" });
    }
  } else {
    findings.push({ check: "Meta description", status: "fail", detail: "No meta description found", recommendation: "Add a meta description (120-160 characters) - AI engines use this as a primary content summary" });
  }

  // 3. Open Graph tags (6 pts)
  const ogTitle = /<meta\s[^>]*property\s*=\s*["']og:title["']/i.test(html);
  const ogDesc = /<meta\s[^>]*property\s*=\s*["']og:description["']/i.test(html);
  const ogImage = /<meta\s[^>]*property\s*=\s*["']og:image["']/i.test(html);
  const ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;
  if (ogCount === 3) {
    score += 6;
    findings.push({ check: "Open Graph tags", status: "pass", detail: "All key OG tags found (og:title, og:description, og:image)" });
  } else if (ogCount > 0) {
    score += 3;
    const missing = [];
    if (!ogTitle) missing.push("og:title");
    if (!ogDesc) missing.push("og:description");
    if (!ogImage) missing.push("og:image");
    findings.push({ check: "Open Graph tags", status: "partial", detail: `${ogCount}/3 OG tags found - missing: ${missing.join(", ")}`, recommendation: `Add missing Open Graph tags: ${missing.join(", ")}` });
  } else {
    findings.push({ check: "Open Graph tags", status: "fail", detail: "No Open Graph tags found", recommendation: "Add og:title, og:description, and og:image meta tags for social and AI previews" });
  }

  // 4. Canonical URL (5 pts)
  const hasCanonical = /<link\s[^>]*rel\s*=\s*["']canonical["']/i.test(html);
  if (hasCanonical) {
    score += 5;
    findings.push({ check: "Canonical URL", status: "pass", detail: "Canonical URL tag found" });
  } else {
    findings.push({ check: "Canonical URL", status: "fail", detail: "No canonical URL found", recommendation: "Add a <link rel=\"canonical\"> tag to prevent duplicate content issues in AI indexing" });
  }

  return { score, maxScore: 25, label: "Meta Tags & SEO", findings };
}

function analyzeContentStructure(html, pageUrl) {
  const findings = [];
  let score = 0;

  // Strip HTML for text analysis
  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textContent.split(/\s+/).filter((w) => w.length > 0).length;

  // 1. Heading hierarchy (7 pts)
  const h1Matches = html.match(/<h1[\s\S]*?<\/h1>/gi) || [];
  const h2Matches = html.match(/<h2[\s\S]*?<\/h2>/gi) || [];
  const h3Matches = html.match(/<h3[\s\S]*?<\/h3>/gi) || [];
  const h1Count = h1Matches.length;
  const hasH2 = h2Matches.length > 0;
  const hasH3 = h3Matches.length > 0;

  if (h1Count === 1 && hasH2) {
    score += 7;
    findings.push({ check: "Heading hierarchy", status: "pass", detail: `Good hierarchy: 1 H1, ${h2Matches.length} H2(s), ${h3Matches.length} H3(s)` });
  } else if (h1Count === 1) {
    score += 4;
    findings.push({ check: "Heading hierarchy", status: "partial", detail: "Single H1 found but no H2 sub-headings", recommendation: "Add H2 sub-headings to create a clear content hierarchy for AI parsing" });
  } else if (h1Count > 1) {
    score += 2;
    findings.push({ check: "Heading hierarchy", status: "partial", detail: `${h1Count} H1 tags found - should have exactly 1`, recommendation: "Use exactly one H1 tag per page. AI engines use the H1 as the primary topic identifier" });
  } else {
    findings.push({ check: "Heading hierarchy", status: "fail", detail: "No H1 tag found", recommendation: "Add a single H1 tag that clearly states the page topic for AI engines" });
  }

  // 2. Content length (7 pts)
  if (wordCount >= 300) {
    score += 7;
    findings.push({ check: "Content length", status: "pass", detail: `${wordCount} words - sufficient content for AI indexing` });
  } else if (wordCount >= 150) {
    score += 4;
    findings.push({ check: "Content length", status: "partial", detail: `${wordCount} words - consider adding more content`, recommendation: "Aim for 300+ words of substantive content. AI engines favor comprehensive, authoritative pages" });
  } else {
    findings.push({ check: "Content length", status: "fail", detail: `Only ${wordCount} words found - thin content`, recommendation: "Add at least 300 words of unique, valuable content. Thin pages are rarely cited by AI search" });
  }

  // 3. Structured content - lists/tables (6 pts)
  const hasLists = /<(ul|ol)[\s\S]*?<\/(ul|ol)>/i.test(html);
  const hasTables = /<table[\s\S]*?<\/table>/i.test(html);
  if (hasLists && hasTables) {
    score += 6;
    findings.push({ check: "Structured content", status: "pass", detail: "Lists and tables found - well-structured content" });
  } else if (hasLists || hasTables) {
    score += 4;
    findings.push({ check: "Structured content", status: "partial", detail: `${hasLists ? "Lists" : "Tables"} found but missing ${hasLists ? "tables" : "lists"}`, recommendation: "Use both lists and tables where appropriate. AI engines extract structured data more accurately" });
  } else {
    findings.push({ check: "Structured content", status: "fail", detail: "No lists or tables found", recommendation: "Add ordered/unordered lists and tables to structure your content for AI extraction" });
  }

  // 4. Internal linking (5 pts)
  let parsedOrigin = "";
  try {
    parsedOrigin = new URL(pageUrl).origin;
  } catch {
    // skip
  }
  const linkRegex = /<a\s[^>]*href\s*=\s*["']([^"'#]+)["'][^>]*>/gi;
  const internalLinks = new Set();
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const href = linkMatch[1];
    try {
      if (href.startsWith("/") || (parsedOrigin && new URL(href, pageUrl).origin === parsedOrigin)) {
        internalLinks.add(href);
      }
    } catch {
      // skip invalid URLs
    }
  }

  if (internalLinks.size >= 3) {
    score += 5;
    findings.push({ check: "Internal linking", status: "pass", detail: `${internalLinks.size} internal links found` });
  } else if (internalLinks.size > 0) {
    score += 2;
    findings.push({ check: "Internal linking", status: "partial", detail: `Only ${internalLinks.size} internal link(s) found`, recommendation: "Add 3+ internal links to help AI engines discover and understand your site structure" });
  } else {
    findings.push({ check: "Internal linking", status: "fail", detail: "No internal links found", recommendation: "Add internal links to connect your pages. This helps AI crawlers map your site content" });
  }

  return { score, maxScore: 25, label: "Content Structure", findings };
}

function analyzeAIAccessibility(html, robotsTxt, sitemapResult, pageResult) {
  const findings = [];
  let score = 0;

  // 1. robots.txt AI bot access (8 pts, 2 per bot)
  const aiBots = ["GPTBot", "ClaudeBot", "PerplexityBot", "Googlebot"];
  let botScore = 0;
  const allowedBots = [];
  const blockedBots = [];

  if (robotsTxt.error || !robotsTxt.body) {
    // No robots.txt = all bots allowed by default
    botScore = 8;
    allowedBots.push(...aiBots);
  } else {
    const rtContent = robotsTxt.body.toLowerCase();
    for (const bot of aiBots) {
      // Check if bot is specifically disallowed
      const botLower = bot.toLowerCase();
      // Look for user-agent block targeting this bot with disallow
      const botSectionRegex = new RegExp(
        `user-agent:\\s*${botLower}[\\s\\S]*?(?=user-agent:|$)`,
        "i"
      );
      const botSection = robotsTxt.body.match(botSectionRegex);

      // Check wildcard disallow-all
      const wildcardRegex = /user-agent:\s*\*[\s\S]*?(?=user-agent:|$)/i;
      const wildcardSection = robotsTxt.body.match(wildcardRegex);

      let isBlocked = false;
      if (botSection && /disallow:\s*\//i.test(botSection[0])) {
        isBlocked = true;
      } else if (wildcardSection && /disallow:\s*\/\s*$/m.test(wildcardSection[0]) && !botSection) {
        // Wildcard blocks all and no specific allow for this bot
        isBlocked = true;
      }

      if (!isBlocked) {
        botScore += 2;
        allowedBots.push(bot);
      } else {
        blockedBots.push(bot);
      }
    }
  }
  score += botScore;

  if (blockedBots.length === 0) {
    findings.push({ check: "AI bot access", status: "pass", detail: `All AI bots allowed: ${allowedBots.join(", ")}` });
  } else if (allowedBots.length > 0) {
    findings.push({ check: "AI bot access", status: "partial", detail: `Blocked: ${blockedBots.join(", ")}. Allowed: ${allowedBots.join(", ")}`, recommendation: `Unblock ${blockedBots.join(", ")} in robots.txt to appear in AI search results` });
  } else {
    findings.push({ check: "AI bot access", status: "fail", detail: "All major AI bots are blocked in robots.txt", recommendation: "Allow GPTBot, ClaudeBot, PerplexityBot, and Googlebot in robots.txt to be indexed by AI search" });
  }

  // 2. Sitemap present (7 pts)
  if (sitemapResult.statusCode >= 200 && sitemapResult.statusCode < 400 && sitemapResult.body && sitemapResult.body.includes("<")) {
    score += 7;
    findings.push({ check: "Sitemap", status: "pass", detail: "sitemap.xml found and accessible" });
  } else {
    findings.push({ check: "Sitemap", status: "fail", detail: "No sitemap.xml found at /sitemap.xml", recommendation: "Create a sitemap.xml to help AI crawlers discover all your pages efficiently" });
  }

  // 3. Page loads successfully (5 pts)
  if (pageResult.statusCode >= 200 && pageResult.statusCode < 400) {
    score += 5;
    findings.push({ check: "Page accessibility", status: "pass", detail: `Page loaded successfully (HTTP ${pageResult.statusCode})` });
  } else if (pageResult.error) {
    findings.push({ check: "Page accessibility", status: "fail", detail: `Page failed to load: ${pageResult.error}`, recommendation: "Ensure your page is accessible and loads within a reasonable time" });
  } else {
    findings.push({ check: "Page accessibility", status: "fail", detail: `Page returned HTTP ${pageResult.statusCode}`, recommendation: "Fix server errors to ensure AI bots can access your content" });
  }

  // 4. Semantic HTML (5 pts, 1 per element)
  const semanticElements = ["main", "article", "nav", "header", "footer"];
  let semanticScore = 0;
  const foundElements = [];
  const missingElements = [];
  for (const el of semanticElements) {
    const regex = new RegExp(`<${el}[\\s>]`, "i");
    if (regex.test(html)) {
      semanticScore += 1;
      foundElements.push(`<${el}>`);
    } else {
      missingElements.push(`<${el}>`);
    }
  }
  score += semanticScore;

  if (semanticScore === 5) {
    findings.push({ check: "Semantic HTML", status: "pass", detail: `All semantic elements found: ${foundElements.join(", ")}` });
  } else if (semanticScore > 0) {
    findings.push({ check: "Semantic HTML", status: "partial", detail: `Found: ${foundElements.join(", ")}. Missing: ${missingElements.join(", ")}`, recommendation: `Add missing semantic elements (${missingElements.join(", ")}) to help AI engines parse your page structure` });
  } else {
    findings.push({ check: "Semantic HTML", status: "fail", detail: "No semantic HTML elements found", recommendation: "Use <main>, <article>, <nav>, <header>, <footer> to give AI engines clear page structure" });
  }

  return { score, maxScore: 25, label: "AI Accessibility", findings };
}

// ---------------------------------------------------------------------------
// Grade mapping
// ---------------------------------------------------------------------------
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B+";
  if (score >= 70) return "B";
  if (score >= 60) return "C+";
  if (score >= 50) return "C";
  return "D";
}

// ---------------------------------------------------------------------------
// LLM-specific scoring
// ---------------------------------------------------------------------------
const MODEL_WEIGHTS = {
  chatgpt: {
    name: 'ChatGPT',
    schemaMarkup: 20,
    metaTags: 25,
    contentStructure: 30,
    aiAccessibility: 25,
    description: 'Prioritizes E-E-A-T signals, author credentials, and comprehensive content. Uses Bing index.',
  },
  claude: {
    name: 'Claude',
    schemaMarkup: 15,
    metaTags: 20,
    contentStructure: 40,
    aiAccessibility: 25,
    description: 'Values original analysis, structured content, and penalizes marketing fluff. Uses Brave Search.',
  },
  perplexity: {
    name: 'Perplexity',
    schemaMarkup: 35,
    metaTags: 20,
    contentStructure: 25,
    aiAccessibility: 20,
    description: 'Structured data is critical. Weights freshness highest. Actively searches for comparison tables.',
  },
  gemini: {
    name: 'Gemini',
    schemaMarkup: 20,
    metaTags: 35,
    contentStructure: 20,
    aiAccessibility: 25,
    description: 'Leverages Google index. Traditional SEO signals like backlinks and domain authority matter most.',
  },
};

function calculateModelScores(categories) {
  const { schemaMarkup, metaTags, contentStructure, aiAccessibility } = categories;
  const modelScores = {};

  for (const [modelKey, weights] of Object.entries(MODEL_WEIGHTS)) {
    // Weighted score: (rawScore / maxScore) * weight for each category
    const weighted =
      (schemaMarkup.score / schemaMarkup.maxScore) * weights.schemaMarkup +
      (metaTags.score / metaTags.maxScore) * weights.metaTags +
      (contentStructure.score / contentStructure.maxScore) * weights.contentStructure +
      (aiAccessibility.score / aiAccessibility.maxScore) * weights.aiAccessibility;

    const score = Math.round(weighted);

    modelScores[modelKey] = {
      score,
      grade: getGrade(score),
      name: weights.name,
      description: weights.description,
      weights: {
        schemaMarkup: weights.schemaMarkup,
        metaTags: weights.metaTags,
        contentStructure: weights.contentStructure,
        aiAccessibility: weights.aiAccessibility,
      },
      tips: generateModelTips(modelKey, categories),
    };
  }

  return modelScores;
}

function generateModelTips(modelKey, categories) {
  const tips = [];
  const { schemaMarkup, metaTags, contentStructure, aiAccessibility } = categories;

  // Helper to check if a specific check failed/is partial
  const findCheck = (category, checkName) =>
    category.findings.find(f => f.check === checkName);

  if (modelKey === 'chatgpt') {
    // ChatGPT cares most about author credentials and E-E-A-T
    const authorCheck = findCheck(schemaMarkup, 'Article/Author schema');
    if (authorCheck && authorCheck.status !== 'pass') {
      tips.push('ChatGPT heavily weights author credentials. Add Article schema with detailed author info (name, credentials, expertise) to boost citation probability.');
    }
    const contentCheck = findCheck(contentStructure, 'Content length');
    if (contentCheck && contentCheck.status !== 'pass') {
      tips.push('ChatGPT favors comprehensive, authoritative content. Aim for 1,000+ words with clear expertise signals.');
    }
    const headingCheck = findCheck(contentStructure, 'Heading hierarchy');
    if (headingCheck && headingCheck.status !== 'pass') {
      tips.push('Use a clear H1 → H2 → H3 hierarchy. ChatGPT uses headings to identify topic authority.');
    }
    if (tips.length === 0) {
      tips.push('Your site is well-optimized for ChatGPT. Consider adding "Best X" list content and regular update dates — ChatGPT cites these formats 43% of the time.');
    }
  }

  if (modelKey === 'claude') {
    // Claude cares about original analysis, hates marketing fluff
    const contentCheck = findCheck(contentStructure, 'Content length');
    if (contentCheck && contentCheck.status !== 'pass') {
      tips.push('Claude values thorough, original analysis over summaries. Add substantive content with unique insights, data, or frameworks.');
    }
    const structuredCheck = findCheck(contentStructure, 'Structured content');
    if (structuredCheck && structuredCheck.status !== 'pass') {
      tips.push('Claude favors well-structured, skimmable content. Add lists, tables, and clear section breaks.');
    }
    const semanticCheck = findCheck(aiAccessibility, 'Semantic HTML');
    if (semanticCheck && semanticCheck.status !== 'pass') {
      tips.push('Use semantic HTML elements (<article>, <main>, <section>). Claude uses these to parse page structure.');
    }
    if (tips.length === 0) {
      tips.push('Your site structure is strong for Claude. Focus on adding original analysis and avoiding hyperbolic marketing copy — Claude actively penalizes promotional language.');
    }
  }

  if (modelKey === 'perplexity') {
    // Perplexity: structured data is critical, tables are gold
    const jsonLdCheck = findCheck(schemaMarkup, 'JSON-LD present');
    if (jsonLdCheck && jsonLdCheck.status !== 'pass') {
      tips.push('Perplexity relies heavily on structured data. Add JSON-LD schema — especially FAQPage and HowTo types, which Perplexity actively searches for.');
    }
    const structuredCheck = findCheck(contentStructure, 'Structured content');
    if (structuredCheck && structuredCheck.status !== 'pass') {
      tips.push('Add comparison tables to your content. Perplexity actively extracts structured tables and virtually guarantees a citation when they\'re present.');
    }
    const sitemapCheck = findCheck(aiAccessibility, 'Sitemap');
    if (sitemapCheck && sitemapCheck.status !== 'pass') {
      tips.push('Create a sitemap.xml. Perplexity maintains its own index and uses sitemaps for discovery.');
    }
    if (tips.length === 0) {
      tips.push('Strong foundation for Perplexity. Keep content fresh and regularly updated — Perplexity weights recency more heavily than any other AI model.');
    }
  }

  if (modelKey === 'gemini') {
    // Gemini: traditional SEO, domain authority, Google index
    const metaDescCheck = findCheck(metaTags, 'Meta description');
    if (metaDescCheck && metaDescCheck.status !== 'pass') {
      tips.push('Gemini leverages Google\'s index where meta descriptions are critical. Optimize your meta description (120-160 chars) for both search and AI visibility.');
    }
    const ogCheck = findCheck(metaTags, 'Open Graph tags');
    if (ogCheck && ogCheck.status !== 'pass') {
      tips.push('Complete your Open Graph tags. Gemini uses Google\'s Knowledge Graph, and OG tags feed into entity recognition.');
    }
    const botCheck = findCheck(aiAccessibility, 'AI bot access');
    if (botCheck) {
      const detail = botCheck.detail || '';
      if (detail.includes('Google-Extended') || detail.includes('Googlebot')) {
        // These are blocked
        tips.push('CRITICAL: Do not block Google-Extended in robots.txt. Unlike other models, blocking Gemini\'s crawler also blocks its citation feature.');
      }
    }
    if (tips.length === 0) {
      tips.push('Your site is well-positioned for Gemini. Focus on building backlinks and domain authority — Gemini is the most selective model (only 2.47 citations per response) and favors established domains.');
    }
  }

  return tips.slice(0, 3);
}

// ---------------------------------------------------------------------------
// Lead notification email via SES
// ---------------------------------------------------------------------------
async function sendLeadNotification(url, email, overallScore, grade, modelScores) {
  try {
    const params = {
      Source: "Hansen Web Services <noreply@hansenwebservices.com>",
      Destination: { ToAddresses: ["marcush1802@gmail.com"] },
      Message: {
        Subject: {
          Data: `GEO Audit Lead: ${email} (Overall: ${overallScore}/100 | ChatGPT: ${modelScores.chatgpt.score} | Claude: ${modelScores.claude.score} | Perplexity: ${modelScores.perplexity.score} | Gemini: ${modelScores.gemini.score})`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `New GEO Audit Lead\n\nEmail: ${email}\nURL Audited: ${url}\nScore: ${overallScore}/100 (Grade: ${grade})\nTimestamp: ${new Date().toISOString()}\n\n---\nSent from HWS GEO Audit Tool`,
            Charset: "UTF-8",
          },
          Html: {
            Data: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #22d3ee; }
    .value { margin-top: 5px; }
    .score { font-size: 24px; font-weight: bold; color: #a855f7; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New GEO Audit Lead</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">URL Audited:</div>
        <div class="value"><a href="${url}">${url}</a></div>
      </div>
      <div class="field">
        <div class="label">Score:</div>
        <div class="value"><span class="score">${overallScore}/100 (${grade})</span></div>
      </div>
      <div class="field">
        <div class="label">Timestamp:</div>
        <div class="value">${new Date().toISOString()}</div>
      </div>
    </div>
    <div class="footer">Sent from HWS GEO Audit Tool</div>
  </div>
</body>
</html>`,
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    await ses.send(command);
    console.log("Lead notification sent for:", email);
  } catch (err) {
    console.error("Failed to send lead notification:", err.message);
    // Non-fatal: don't let SES failure break the audit response
  }
}

// ---------------------------------------------------------------------------
// Lambda handler
// ---------------------------------------------------------------------------
export const handler = async (event) => {
  // CORS is handled by Lambda Function URL config — do NOT set CORS headers here
  // to avoid duplicate Access-Control-Allow-Origin values.
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    console.log("GEO Audit request received");

    // Rate limiting
    const clientIp =
      event.requestContext?.http?.sourceIp ||
      event.requestContext?.identity?.sourceIp ||
      "unknown";
    if (isRateLimited(clientIp)) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Please try again later (max 5 audits per hour).",
        }),
      };
    }

    // Parse body
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    const { url: rawUrl, email } = body || {};

    // Validate URL
    if (!rawUrl || typeof rawUrl !== "string") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: "Missing required field: url" }),
      };
    }

    let targetUrl;
    try {
      // Add protocol if missing
      const urlStr = rawUrl.match(/^https?:\/\//) ? rawUrl : `https://${rawUrl}`;
      targetUrl = new URL(urlStr);
      if (!["http:", "https:"].includes(targetUrl.protocol)) {
        throw new Error("Invalid protocol");
      }
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: "Invalid URL format. Please provide a valid website URL." }),
      };
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: "Invalid email format." }),
      };
    }

    const pageUrl = targetUrl.href;
    const origin = targetUrl.origin;

    // Fetch page, robots.txt, and sitemap.xml in parallel
    console.log("Fetching:", pageUrl);
    const [pageResult, robotsResult, sitemapResult] = await Promise.all([
      fetchWithTimeout(pageUrl),
      fetchWithTimeout(`${origin}/robots.txt`),
      fetchWithTimeout(`${origin}/sitemap.xml`),
    ]);

    const html = pageResult.body || "";

    // Run analysis modules
    const schemaMarkup = analyzeSchemaMarkup(html);
    const metaTags = analyzeMetaTags(html);
    const contentStructure = analyzeContentStructure(html, pageUrl);
    const aiAccessibility = analyzeAIAccessibility(html, robotsResult, sitemapResult, pageResult);

    const overallScore = schemaMarkup.score + metaTags.score + contentStructure.score + aiAccessibility.score;
    const grade = getGrade(overallScore);
    const modelScores = calculateModelScores({ schemaMarkup, metaTags, contentStructure, aiAccessibility });

    // Collect top recommendations (from failed/partial checks)
    const topRecommendations = [];
    const allCategories = [schemaMarkup, metaTags, contentStructure, aiAccessibility];
    for (const cat of allCategories) {
      for (const f of cat.findings) {
        if (f.recommendation && topRecommendations.length < 5) {
          topRecommendations.push(f.recommendation);
        }
      }
    }

    // Send lead notification if email provided
    if (email) {
      await sendLeadNotification(pageUrl, email, overallScore, grade, modelScores);
    }

    const response = {
      success: true,
      url: pageUrl,
      timestamp: new Date().toISOString(),
      overallScore,
      grade,
      modelScores,
      categories: {
        schemaMarkup,
        metaTags,
        contentStructure,
        aiAccessibility,
      },
      topRecommendations,
    };

    console.log("Audit complete:", pageUrl, "Score:", overallScore, "Grade:", grade);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "An unexpected error occurred during the audit.",
        details: error.message,
      }),
    };
  }
};
