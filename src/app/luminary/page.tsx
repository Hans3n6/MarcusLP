'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import LuminaryDashboard from '@/components/LuminaryDashboard';
import { DEMO_DATA } from '@/data/luminaryDemo';

export default function LuminaryPage() {
  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="w-full pt-24 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            &larr; Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Luminary
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            GEO Share of Voice Tracker
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Track how your brand appears across ChatGPT, Perplexity, and Claude. See which competitors
            dominate AI recommendations and discover actionable insights to improve your visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToDashboard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              View Demo
            </motion.button>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Section */}
      <section id="dashboard" className="w-full py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-400 text-sm text-center">
              DEMO MODE &mdash; Showing sample data for {DEMO_DATA.category} category
            </div>
          </motion.div>

          <LuminaryDashboard data={DEMO_DATA} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Luminary for Your Brand?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get custom Share of Voice tracking for your industry. We monitor how AI models mention,
            recommend, and cite your brand — then give you a clear action plan to grow your visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-cyan-500/50"
              >
                Get Started
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
              >
                View GEO Plans
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
