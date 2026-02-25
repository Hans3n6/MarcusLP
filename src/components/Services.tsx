'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="w-full pt-24 pb-32 bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center">
      <div className="max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Our GEO Services
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700"
        >
          <div className="space-y-12 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Found by AI Models
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                AI search is the future. ChatGPT, Claude, Perplexity, and other generative AI models are becoming primary search engines.
                We help businesses optimize for AI visibility, get cited in AI responses, and build the authority signals that AI models trust.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-purple-900/30 rounded-xl mb-6">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  AI Content Strategy
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Optimize your content to rank in AI model outputs. We structure data and create content that AI systems prefer to cite.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-cyan-900/30 rounded-xl mb-6">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  E-E-A-T Building
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Build Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI models use to evaluate sources.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-blue-900/30 rounded-xl mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Multi-Model Optimization
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Ensure visibility across ChatGPT, Claude, Perplexity, Google AI Overviews, and emerging AI search platforms.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link href="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                  View GEO Plans
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
