'use client';

import { motion } from 'framer-motion';
import { XCircle, ArrowLeft, MessageCircle, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-slate-700/50 rounded-full mb-8"
          >
            <XCircle className="w-14 h-14 text-gray-400" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Payment Cancelled
          </h1>

          <p className="text-xl text-gray-400 mb-12">
            No worries - your payment was not processed and you weren't charged.
          </p>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 text-left mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What Would You Like To Do?</h2>

            <div className="space-y-4">
              <Link
                href="/pricing"
                className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                    Return to Pricing
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Review packages and try again when you're ready
                  </p>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors rotate-180" />
              </Link>

              <Link
                href="/#contact"
                className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                    Contact Me First
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Have questions? Let's chat before you commit
                  </p>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors rotate-180" />
              </Link>
            </div>
          </motion.div>

          {/* Alternative Payment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-slate-700 mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-3">
              Prefer a Different Payment Method?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              While Stripe is our primary payment processor, I'm happy to work with you on alternative arrangements.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Reach out directly:</strong>
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-cyan-400">
                <a href="tel:5072017442" className="hover:underline">507-201-7442</a>
              </p>
              <p className="text-cyan-400">
                <a href="mailto:contact@hansenwebservices.com" className="hover:underline">
                  contact@hansenwebservices.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Return Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
