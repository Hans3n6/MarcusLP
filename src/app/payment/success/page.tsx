'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Mail, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-8"
          >
            <CheckCircle className="w-14 h-14 text-white" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Payment Successful!
          </h1>

          <p className="text-xl text-gray-300 mb-12">
            Thank you for choosing Hansen Web Services
          </p>

          {/* What's Next Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 text-left mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-cyan-400" />
              What Happens Next
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Confirmation Email</h3>
                  <p className="text-gray-400 text-sm">
                    You'll receive a payment receipt from Stripe at the email address you provided.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Personal Outreach</h3>
                  <p className="text-gray-400 text-sm">
                    I'll reach out within 24 hours via email or phone to confirm details and schedule our first call.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Getting Started</h3>
                  <p className="text-gray-400 text-sm">
                    We'll discuss your vision, gather any content or materials, and kick off your project!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-6 border border-cyan-500/30 mb-8"
          >
            <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm mb-2">
              Questions or need to reach me right away?
            </p>
            <div className="space-y-1">
              <p className="text-white font-semibold">Marcus Hansen</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105"
          >
            Return to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
