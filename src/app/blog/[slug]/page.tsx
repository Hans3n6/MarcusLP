import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://hansenwebservices.com/blog/${post.slug}`;

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Back Button */}
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

      {/* Header */}
      <div className="w-full py-16 px-6 flex justify-center border-b border-slate-700">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              {post.title}
            </h1>

            {/* Meta Info */}
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

            {/* Tags */}
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

      {/* Content */}
      <div className="w-full py-16 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          {/* Blog Content */}
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

          {/* Social Share */}
          <SocialShare url={postUrl} title={post.title} description={post.excerpt} />

          {/* Read More Posts */}
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
