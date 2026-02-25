'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="w-full pt-24 pb-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              GEO Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, strategies, and best practices for Generative Engine Optimization. Get found by AI models.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="w-full py-16 px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-all">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6 pb-6 border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        {post.readingTime} min read
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-xs"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="mt-6 pt-4">
                      <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-400">No posts yet. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
