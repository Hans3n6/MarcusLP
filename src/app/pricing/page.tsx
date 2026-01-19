'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, TrendingUp, Zap, Shield, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { stripeLinks } from '@/config/stripe';

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="w-full pt-20 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Pricing & Packages
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Simple, transparent pricing for rural businesses ready to grow online
          </p>
          <Link
            href="/"
            className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Website Packages */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Website Packages
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex p-3 bg-purple-900/30 rounded-xl mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter Package</h3>
              <p className="text-cyan-400 text-3xl font-bold mb-2">$150–$300</p>
              <p className="text-gray-400 italic mb-6">Perfect for businesses that just need to be found online</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Simple 1-3 page website with business info, hours, and contact</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Mobile and desktop friendly</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Map showing your location</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Contact form for customer inquiries</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Social media links</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">One round of changes before finalization</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300"><strong>Turnaround:</strong> ~5 business days</span>
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Pricing:</strong>
                  <div className="ml-4 mt-2 space-y-1">
                    <div>• $150–$200 with your content</div>
                    <div>• $225–$300 with content writing</div>
                  </div>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-300"><strong className="text-purple-400">To Start:</strong> $50 down payment</p>
                </div>
              </div>

              <Link
                href={stripeLinks.packages.starter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Professional Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex p-3 bg-cyan-900/30 rounded-xl mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional Package</h3>
              <p className="text-cyan-400 text-3xl font-bold mb-2">$400–$700</p>
              <p className="text-gray-400 italic mb-6">Perfect for businesses that want to stand out and attract customers</p>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-white mb-3">Everything in Starter, PLUS:</p>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Larger website (5-7 pages)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Dedicated services/menu page with prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Photo gallery to showcase your work</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Better Google search visibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Connection to one outside tool (Facebook, Yelp, booking)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Two rounds of changes before finalization</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300"><strong>Turnaround:</strong> ~10 business days</span>
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Pricing:</strong>
                  <div className="ml-4 mt-2 space-y-1">
                    <div>• $400–$500 with your content</div>
                    <div>• $550–$700 with content writing</div>
                  </div>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-300"><strong className="text-cyan-400">To Start:</strong> $100 down payment</p>
                </div>
              </div>

              <Link
                href={stripeLinks.packages.professional}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex p-3 bg-purple-900/30 rounded-xl mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Package</h3>
              <p className="text-cyan-400 text-3xl font-bold mb-2">$800–$1,200</p>
              <p className="text-gray-400 italic mb-6">Perfect for established businesses ready to grow with their website</p>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-white mb-3">Everything in Professional, PLUS:</p>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Full website (8+ pages) with custom look</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Advanced Google search optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">News or updates section</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Custom forms (quotes, appointments, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Multiple tool connections (booking, email, reviews)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Website speed improvements</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Visitor tracking setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Three rounds of changes before finalization</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300"><strong>Turnaround:</strong> ~3 weeks</span>
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Pricing:</strong>
                  <div className="ml-4 mt-2 space-y-1">
                    <div>• $800–$950 with your content</div>
                    <div>• $1,000–$1,200 with content writing</div>
                  </div>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-300"><strong className="text-purple-400">To Start:</strong> $200 down payment</p>
                </div>
              </div>

              <Link
                href={stripeLinks.packages.premium}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ongoing Care Plans */}
      <section className="w-full py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Ongoing Care Plans</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Every website needs a home on the internet and occasional upkeep. These plans keep your site running smoothly and give you someone to call when you need changes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Essential Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="mb-6">
                <p className="text-cyan-400 text-3xl font-bold">$25<span className="text-lg text-gray-400">/month</span></p>
                <p className="text-gray-400 text-sm">or $255/year (save 15%)</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Domain renewal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Hosting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Security updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 15 min of changes/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Email and phone support</span>
                </li>
              </ul>

              <Link
                href={stripeLinks.carePlans.essential}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe Now
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Standard</h3>
              <div className="mb-6">
                <p className="text-cyan-400 text-3xl font-bold">$45<span className="text-lg text-gray-400">/month</span></p>
                <p className="text-gray-400 text-sm">or $460/year (save 15%)</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in Essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 30 min of changes/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Monthly backups</span>
                </li>
              </ul>

              <Link
                href={stripeLinks.carePlans.standard}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe Now
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <div className="mb-6">
                <p className="text-cyan-400 text-3xl font-bold">$75<span className="text-lg text-gray-400">/month</span></p>
                <p className="text-gray-400 text-sm">or $765/year (save 15%)</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in Standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 1 hour of changes/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Monthly performance check-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>

              <Link
                href={stripeLinks.carePlans.growth}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe Now
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* What do these cover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              What do these cover?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <strong className="text-white">Domain renewal:</strong> Your website address stays active
              </div>
              <div>
                <strong className="text-white">Hosting:</strong> Your website stays online and loads quickly
              </div>
              <div>
                <strong className="text-white">Security updates:</strong> Protection from hackers and spam
              </div>
              <div>
                <strong className="text-white">Small changes:</strong> Text updates, new photos, holiday hours, menu changes
              </div>
              <div>
                <strong className="text-white">Backups:</strong> A saved copy of your site in case anything goes wrong
              </div>
              <div>
                <strong className="text-white">Email and phone support:</strong> Someone to call when you have questions
              </div>
              <div>
                <strong className="text-white">Priority support:</strong> Faster response times, typically within a few hours (Growth plan)
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Quick Reference
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <thead>
                <tr className="bg-slate-700/50">
                  <th className="p-4 text-left text-white font-semibold">Feature</th>
                  <th className="p-4 text-center text-white font-semibold">Starter</th>
                  <th className="p-4 text-center text-white font-semibold">Professional</th>
                  <th className="p-4 text-center text-white font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Price Range</td>
                  <td className="p-4 text-center text-cyan-400">$150–$300</td>
                  <td className="p-4 text-center text-cyan-400">$400–$700</td>
                  <td className="p-4 text-center text-cyan-400">$800–$1,200</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Down Payment</td>
                  <td className="p-4 text-center">$50</td>
                  <td className="p-4 text-center">$100</td>
                  <td className="p-4 text-center">$200</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Turnaround</td>
                  <td className="p-4 text-center">~5 days</td>
                  <td className="p-4 text-center">~10 days</td>
                  <td className="p-4 text-center">~3 weeks</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Pages</td>
                  <td className="p-4 text-center">1-3</td>
                  <td className="p-4 text-center">5-7</td>
                  <td className="p-4 text-center">8+</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Content Writing</td>
                  <td className="p-4 text-center">+$75–100</td>
                  <td className="p-4 text-center">+$150–200</td>
                  <td className="p-4 text-center">+$200–250</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Mobile Friendly</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Contact Form</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center text-purple-400">Custom</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Map to Location</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Services/Menu Page</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Photo Gallery</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Google Search Optimization</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center text-purple-400">Advanced</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">Tool Connections</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center">1 tool</td>
                  <td className="p-4 text-center text-purple-400">Multiple</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Visitor Tracking</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-700/20">
                  <td className="p-4 font-semibold">News/Updates Section</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center text-gray-600">–</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-semibold">Rounds of Changes</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's talk about which package is right for you
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Marcus Hansen | Waseca, MN
          </p>
        </div>
      </footer>
    </main>
  );
}
