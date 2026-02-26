'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

const post = {
  slug: 'ai-search-developers',
  title: 'Developers: Here\'s What You Need to Know About AI Search Optimization',
  excerpt: 'Technical guide for developers on optimizing websites for AI search models. Learn which schema markups and structures matter most.',
  date: '2026-03-24',
  readingTime: 9,
  category: 'Technical Development',
  tags: ['Web Development', 'Schema Markup', 'AI Optimization', 'Technical SEO'],
  content: `# Developers: Here's What You Need to Know About AI Search Optimization

If you're building for the web in 2026, you need to think about AI search differently than traditional SEO.

The technical requirements are shifting. The ranking factors are changing. The optimization tactics that worked for Google are only part of the equation now.

## The Technical Shift

Traditional SEO optimized for specific technical signals:
- Keywords in meta tags
- Backlinks and domain authority
- Page speed and Core Web Vitals
- Mobile-friendliness
- XML sitemaps

AI search optimization requires:
- E-E-A-T signals embedded in content structure
- Clear author information and credentials
- Structured data that explicitly defines expertise
- Content quality and comprehensiveness
- Citation patterns and information architecture

These aren't entirely different, but they're definitely not the same.

## What Developers Need to Implement

### 1. Schema Markup Matters More

AI models rely heavily on structured data. Schema markup isn't optional anymore—it's foundational.

Priority schemas for AI search:
- **Article schema** with author information
- **Organization schema** with credentials and expertise
- **Person schema** for author bios with qualifications
- **BreadcrumbList schema** for information hierarchy
- **FAQPage schema** for Q&A content
- **NewsArticle schema** for timely content

Example implementation:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/authors/author-name",
    "description": "Author credentials and expertise"
  },
  "datePublished": "2026-03-24",
  "articleBody": "Content here..."
}
```

### 2. Author Information is Critical

Make author credentials and expertise immediately visible and machine-readable.

Requirements:
- Author bios with qualifications
- Professional experience and background
- Credentials and certifications
- Links to social profiles or professional pages
- Clear indication of expertise areas

Don't hide this in footers. Make it prominent and structured.

### 3. Content Structure for AI Understanding

AI models need to understand your information architecture.

Best practices:
- Clear heading hierarchy (H1, H2, H3)
- Descriptive headings that indicate content structure
- Introduction paragraphs that summarize content
- Logical content flow that AI can parse
- Explicit relationships between concepts

### 4. E-E-A-T Signals in Code

Make your E-E-A-T signals explicit in your markup:
- Experience: Content that shows real-world application
- Expertise: Credentials, education, certifications
- Authoritativeness: Citations, mentions, media coverage
- Trustworthiness: About page, privacy policy, contact info

### 5. Content Quality Indicators

AI models evaluate content quality through:
- Comprehensiveness (covering topics thoroughly)
- Accuracy (citing sources, citing studies)
- Freshness (publication and update dates)
- Uniqueness (original insights and data)
- User experience (readability, formatting)

## What Doesn't Change (Still Important)

- Core Web Vitals still matter (though less than before)
- Mobile responsiveness is still required
- Accessibility standards are still essential
- Security (HTTPS) is still required
- Clean, crawlable site architecture is still important

## Implementation Roadmap

**Phase 1: Foundation (Week 1)**
- Implement Article and Author schema
- Add author bios with credentials
- Ensure robots.txt allows AI crawlers

**Phase 2: Structure (Week 2-3)**
- Implement all recommended schema types
- Restructure content with clear hierarchy
- Add E-E-A-T signals throughout site

**Phase 3: Content (Week 4+)**
- Audit existing content for comprehensiveness
- Add original data and insights
- Update author information across site

**Phase 4: Monitoring (Ongoing)**
- Monitor how content appears in AI responses
- Track citation patterns
- Adjust content based on performance

## Tools and Resources

- **Schema.org**: Official schema documentation
- **Google Rich Results Test**: Test your schema markup
- **Yoast SEO**: Schema generation for WordPress
- **Structured Data Testing Tool**: Validate structured data

## The Real Opportunity

Most developers are still building with traditional SEO in mind. The ones who build with AI discoverability as a first-class concern will have a significant advantage.

This isn't about hacks or shortcuts. It's about building websites that are actually well-structured, properly documented, and easily understood by both humans and AI.

Good technical implementation for AI search is actually just... good web development.

The websites built this way will perform better across all platforms—Google, Bing, Claude, ChatGPT, and beyond.`,
};

const postUrl = `https://hansenwebservices.com/blog/${post.slug}`;

export default function BlogPostPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full pt-8 px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="w-full py-16 px-6 flex justify-center border-b border-slate-700">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-8 text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-16 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <div className="prose prose-invert max-w-none mb-16">
            <style>{`
              .prose {
                --tw-prose-body: rgb(209 213 219);
                --tw-prose-headings: rgb(255 255 255);
                --tw-prose-lead: rgb(156 163 175);
                --tw-prose-links: rgb(34 211 238);
                --tw-prose-bold: rgb(255 255 255);
                --tw-prose-counters: rgb(107 114 128);
                --tw-prose-bullets: rgb(75 85 99);
                --tw-prose-hr: rgb(55 65 81);
                --tw-prose-quotes: rgb(156 163 175);
                --tw-prose-quote-borders: rgb(55 65 81);
                --tw-prose-captions: rgb(156 163 175);
                --tw-prose-code: rgb(209 213 219);
                --tw-prose-pre-code: rgb(209 213 219);
                --tw-prose-pre-bg: rgb(30 41 59);
                --tw-prose-th-borders: rgb(75 85 99);
                --tw-prose-td-borders: rgb(75 85 99);
              }

              .prose h1 {
                font-size: 2.25rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: bold;
                background: linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }

              .prose h2 {
                font-size: 1.875rem;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-weight: bold;
                color: rgb(255, 255, 255);
              }

              .prose h3 {
                font-size: 1.5rem;
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
                font-weight: bold;
                color: rgb(255, 255, 255);
              }

              .prose p {
                margin-bottom: 1rem;
                line-height: 1.75;
              }

              .prose a {
                color: rgb(34, 211, 238);
                text-decoration: underline;
                font-weight: 500;
              }

              .prose a:hover {
                color: rgb(0, 184, 212);
              }

              .prose code {
                background-color: rgb(30, 41, 59);
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.875em;
              }

              .prose pre {
                background-color: rgb(15, 23, 42);
                padding: 1rem;
                border-radius: 0.5rem;
                overflow-x: auto;
              }

              .prose table {
                width: 100%;
                margin: 1.5rem 0;
                border-collapse: collapse;
              }

              .prose th, .prose td {
                padding: 0.75rem;
                text-align: left;
                border: 1px solid rgb(75, 85, 99);
              }

              .prose th {
                background-color: rgb(30, 41, 59);
                font-weight: bold;
                color: rgb(255, 255, 255);
              }

              .prose ul, .prose ol {
                margin: 1rem 0;
                padding-left: 1.5rem;
              }

              .prose li {
                margin-bottom: 0.5rem;
              }

              .prose blockquote {
                border-left: 4px solid rgb(34, 211, 238);
                padding-left: 1rem;
                color: rgb(156, 163, 175);
                font-style: italic;
              }
            `}</style>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <SocialShare url={postUrl} title={post.title} description={post.excerpt} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-16 border-t border-slate-700"
          >
            <h3 className="text-2xl font-bold text-white mb-8">More Articles</h3>
            <div className="flex gap-4">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg"
                >
                  Back to Blog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
