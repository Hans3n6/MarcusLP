'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

const post = {
  slug: 'ai-search-digital-marketing',
  title: 'How AI Search is Changing Everything Digital Marketers Do',
  excerpt: 'Discover how AI models like ChatGPT and Claude are reshaping digital marketing strategy and why traditional approaches are becoming obsolete.',
  date: '2026-03-10',
  readingTime: 8,
  category: 'Digital Marketing',
  tags: ['AI Search', 'Marketing Strategy', 'ChatGPT', 'Content Strategy'],
  content: `# How AI Search is Changing Everything Digital Marketers Do

The digital marketing landscape is shifting beneath our feet, and most marketers haven't noticed yet.

For the past decade, digital marketing has been synonymous with Google. You optimize for Google rankings, you get traffic, you convert. That playbook is still relevant, but it's no longer the whole game.

Today, your audience is searching differently.

## The New Search Reality

Your potential customers aren't just typing questions into Google anymore. They're asking ChatGPT for product recommendations. They're using Perplexity for research. They're asking Claude for detailed analysis. And when these AI models generate answers, they cite sources.

The numbers tell the story:
- ChatGPT: 200M+ active users
- Claude: Growing faster than any product in history
- Perplexity: The "AI-native Google"
- Microsoft Copilot: Baked into Windows and Office

This isn't a niche trend. This is how a significant portion of your audience is now searching for information.

## The Fundamental Shift

Traditional SEO strategy: Compete for ranking positions → Get traffic → Convert customers

AI search strategy: Get cited as a trusted source → Become the authority → Build lasting credibility

These aren't the same game. In fact, they require different tactics entirely.

When Google ranks your page #1, it's because your page matched certain algorithm signals. When an AI model cites your content, it's because the model trusts your source more than the alternatives.

Trust is the new ranking signal.

## What This Means for Digital Marketers

### 1. Your Content Strategy Changes

In traditional SEO, you optimize for keywords. You find search volume, you rank for those terms, you win.

In AI search, you're optimizing for authority and credibility. You're answering questions that AI models actually trust you to answer. You're creating content that's so good, so authentic, that an AI system would naturally reference it.

This means less keyword stuffing, more genuine expertise. Less "how do I rank for X," more "how do I become the definitive source for X."

### 2. Authority Matters More Than Ever

E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) were always important for Google. They're absolutely critical for AI search.

AI models are specifically trained to identify trustworthy sources. They can tell when someone is speaking from real experience versus regurgitating information. They can identify when an author actually knows what they're talking about.

This is good news if you have real expertise. It's bad news if you've been relying on keyword tactics.

### 3. Multiple Channels, Not Just One

For two decades, SEO meant Google. There was one algorithm to please, one ranking system to understand.

Now you're optimizing for multiple AI models, each with different training data and citation preferences. ChatGPT prioritizes different sources than Perplexity. Claude has different trust signals than Google's AI Overviews.

This sounds complex, but the principle is simple: create content that's genuinely trustworthy, and it will perform across multiple platforms.

### 4. Being Discoverable Becomes Critical

Google's crawler finds your site. But AI models? They might not have training data from your site at all.

Making sure your content is discoverable by AI training models is now as important as making sure Google can crawl your site. This means:
- Creating public, indexable content (not behind paywalls)
- Being active in places where AI training data is sourced
- Building authority signals that AI systems can recognize
- Having clear author credentials and credibility

## The Practical Shift for Digital Marketers

So what should you actually do differently?

**1. Create original content and insights**
Stop rewriting what everyone else is saying. Share what you actually know. Your unique perspective is your competitive advantage.

**2. Become the go-to voice in your niche**
Instead of trying to rank for 100 keywords, own one niche deeply. Be so good, so authoritative, that AI models naturally cite you for that topic.

**3. Focus on real expertise, not keyword stuffing**
Write for humans who want to learn. Write for AI models that want to cite trustworthy sources. They're the same thing.

**4. Build author credibility visibly**
Make your expertise clear. Your background matters. Your real experience matters. Your credentials matter. Make these visible on your website.

**5. Create multiple content formats**
Different AI models discover and cite different types of content. Blog posts, research papers, case studies, original data—create the full spectrum.

## The Timeline

Most businesses: Still focused entirely on Google. Missing the shift.

Early movers: Starting to think about AI search. Experimenting with different content approaches. Building authority signals for multiple platforms.

Leaders: Already established as trusted sources across AI and traditional search. Getting cited consistently. Building lasting competitive advantages.

## The Opportunity

Here's the beautiful part: Most marketers still haven't adapted. Most agencies still focus exclusively on Google. Most businesses are still playing the old game.

If you move now, while your competitors are sleeping, you can establish yourself as a trusted source before the market becomes saturated.

In 6-12 months, when everyone realizes AI search is here to stay, the first-movers will have an unfair advantage.

The question isn't whether AI search matters. It clearly does. The question is whether you're going to adapt now or scramble to catch up later.

What's your move?`,
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
