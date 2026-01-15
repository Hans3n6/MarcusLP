'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

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
            What I Do
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
                Empowering Rural Businesses
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                I specialize in creating professional landing pages for small businesses in rural communities
                that don't have an online presence. My mission is to help local businesses increase brand
                awareness, drive traffic, and boost profits through modern web solutions.
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
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Brand Awareness
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Establish your online presence with a professional landing page that showcases your business
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
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Increase Traffic
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Drive more customers to your business with a modern, mobile-friendly website
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
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Grow Profits
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Convert online visitors into customers and grow your revenue
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
