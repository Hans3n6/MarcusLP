'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

const post = {
  slug: 'ai-search-small-business',
  title: 'Small Business Owners: Here\'s Why You Need to Prepare for AI Search Now',
  excerpt: 'Why AI search levels the playing field for small businesses and how to prepare before your competition catches on.',
  date: '2026-03-31',
  readingTime: 8,
  category: 'Small Business',
  tags: ['Small Business', 'AI Search', 'Marketing Strategy', 'Growth'],
  content: `# Small Business Owners: Here's Why You Need to Prepare for AI Search Now

For the last 25 years, being a small business online meant competing against bigger companies with bigger marketing budgets on Google. You'd invest in SEO, but the large enterprises always seemed to have the advantage—more resources, more staff, more money to throw at the problem.

But something fundamental is changing. And for once, the shift favors small businesses.

## The Advantage Has Changed

Google's world: Big companies win. They have the budget to hire SEO agencies. They have the resources to build links. They have entire teams dedicated to ranking.

AI search world: Authenticity wins. Real expertise wins. Genuine customer value wins.

These are things that small businesses are naturally good at.

## Why AI Search Is Better for Small Businesses

### 1. Authenticity is Your Superpower

When someone asks ChatGPT for a recommendation in your industry, the model prioritizes sources it can trust.

Big corporations trying to manipulate rankings look exactly like what they are: big corporations trying to manipulate. Small business owners sharing their real expertise? That's authentic, and AI models recognize it.

You can't fake real experience. You can't fake having built a business from scratch. You can't fake understanding your customers.

You have all of that.

### 2. Niche Expertise Beats Broad Coverage

Big companies try to capture every possible search and ranking. They cast wide nets.

Small businesses thrive in niches. You know your specific market deeply. You understand your specific customers' problems. You have specific expertise.

AI models prefer specialists over generalists.

### 3. You Actually Know Your Customers

Big companies hire customer research teams. You know your customers by name. You understand their actual problems. You have real relationships.

That authenticity matters. It's visible in your content. It's detectable by AI models.

### 4. Your Story Is Unique

Big companies have corporate stories. You have a real story. Why did you start this business? What problem were you solving? What's your personal journey?

These stories resonate with both humans and AI models.

## Practical Steps to Prepare Now

### 1. Get Your Story and Expertise Out There

Start sharing your knowledge. Write about what you know. Record videos explaining your expertise. Share your insights on your industry.

Don't wait for perfection. Share imperfectly, authentically, genuinely.

### 2. Make Your Background and Credentials Clear

Put your actual background on your website. Your experience matters. Your qualifications matter. Your certifications matter.

Don't hide these in About pages no one reads. Make them visible and prominent.

### 3. Create Content That Solves Real Problems

Write blog posts about problems your customers actually have. Create guides based on your real experience. Share solutions you've actually tested.

Write with authority because you have authority.

### 4. Build a Real Community Around Your Expertise

Engage with your customers. Answer questions. Participate in relevant communities. Help people without expecting immediate return.

Real relationships and genuine helpfulness build authority.

### 5. Focus on Your Specific Niche

Don't try to be everything to everyone. Own your specific niche. If you're the best at something specific, lean into that.

Better to be known as the expert in one thing than mediocre at many things.

## The Timeline (And Why Speed Matters)

Right now: Most small businesses haven't even heard about AI search. Most competitors are still focused entirely on Google.

3 months: Early movers will have started building authority. They'll be cited in AI responses.

6 months: The competitive advantage of first-movers will be significant.

12 months: When everyone realizes AI search is here to stay, the early-movers will have an unfair advantage.

The businesses that move now will have established authority while competition is still low. The ones that wait will be playing catch-up.

## Your Real Opportunity

You're not a small business trying to compete in a world designed for big companies anymore. You're an expert in your niche trying to get discovered by customers who are actively looking for your exact expertise.

That's a game you can win.

The resources required? Not massive budget. Just:
- Your authentic expertise
- Your real story
- Your genuine desire to help
- The time to share what you know

You already have all of these. You don't need an expensive agency. You don't need a massive marketing budget. You just need to get your real expertise in front of the right people.

And AI search makes that easier, not harder.

## Your Next Step

Start today. Don't wait. Write one blog post about something you genuinely know. Share your real expertise. Put your credentials on your website. Answer questions in your community.

The small actions you take now will compound. The authority you build now will matter when the entire market shifts toward AI search.

And the shift is happening whether you're ready or not.

The only question is: Are you going to lead, or follow?`,
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
