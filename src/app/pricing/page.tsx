'use client';

import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp, Crown, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { stripeLinks, geoPlanDetails, geoServiceDetails } from '@/config/stripe';
import Footer from '@/components/Footer';

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
            GEO Pricing & Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get your business found by AI models. Simple, transparent pricing for serious businesses ready to dominate generative engine search.
          </p>
          <Link
            href="/"
            className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>

      {/* GEO Audit Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Start Your GEO Journey
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl p-8 border border-cyan-400/30 mb-16"
          >
            <div className="inline-flex p-3 bg-cyan-900/30 rounded-xl mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">GEO Audit & Strategy</h3>
            <p className="text-cyan-300 text-2xl font-bold mb-4">$500 – $1,500</p>
            <p className="text-gray-300 mb-6">
              Start with a comprehensive analysis of your online presence across AI models. Get a custom roadmap for maximizing AI visibility.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Analyze current presence across ChatGPT, Claude, Perplexity, Google AI Overviews</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Identify gaps in E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Competitive analysis in generative engine space</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Create actionable GEO roadmap for next 90 days</span>
              </li>
            </ul>

            <button
              onClick={() => window.open(stripeLinks.services.geoAudit, '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Your Audit Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Monthly GEO Plans */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-white"
          >
            Monthly GEO Plans
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Ongoing optimization to keep your business visible to AI models. Recurring revenue model with flexible scaling.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex p-3 bg-purple-900/30 rounded-xl mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter GEO Plan</h3>
              <p className="text-purple-400 text-3xl font-bold mb-2">$300<span className="text-lg text-gray-400">/month</span></p>
              <p className="text-gray-400 italic mb-8">Perfect for small businesses new to GEO</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Monthly content audit & optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Structured data/schema setup & management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">E-E-A-T signals monitoring (3-5 AI models)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Basic AI model feature optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Monthly performance report</span>
                </div>
              </div>

              <button
                onClick={() => window.open(stripeLinks.geoPlans.starter, '_blank')}
                className="w-full px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
              >
                Subscribe Now
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/50 hover:border-cyan-400 transition-all md:scale-105 relative"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="inline-flex p-3 bg-cyan-900/30 rounded-xl mb-4">
                <Crown className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional GEO Plan</h3>
              <p className="text-cyan-400 text-3xl font-bold mb-2">$1,000<span className="text-lg text-gray-400">/month</span></p>
              <p className="text-gray-400 italic mb-8">For serious businesses scaling AI visibility</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">All Starter features +</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Advanced content strategy for AI models</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">E-E-A-T building & authority strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Optimization across 8+ AI platforms</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Content calendar management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Quarterly strategy consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Priority support</span>
                </div>
              </div>

              <button
                onClick={() => window.open(stripeLinks.geoPlans.professional, '_blank')}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg"
              >
                Get Started
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex p-3 bg-purple-900/30 rounded-xl mb-4">
                <Crown className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium GEO Plan</h3>
              <p className="text-purple-400 text-3xl font-bold mb-2">$2,500<span className="text-lg text-gray-400">/month</span></p>
              <p className="text-gray-400 italic mb-8">For enterprises dominating generative engines</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">All Professional features +</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Custom AI positioning strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Multi-format content optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Featured snippet & AI overview targeting</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Competitor GEO tracking & analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Monthly AI trend analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Direct access to Marcus (no delegated support)</span>
                </div>
              </div>

              <button
                onClick={() => window.open(stripeLinks.geoPlans.premium, '_blank')}
                className="w-full px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
              >
                Contact for Custom Quote
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Annual Commitment */}
      <section className="w-full py-16 px-6">
        <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Annual Commitment Discount</h3>
            </div>
            <p className="text-gray-300 text-lg">
              Commit to a full year and save <span className="text-cyan-400 font-bold">10% off</span> your monthly retainer.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Starter Plan</span>
                <span className="text-white font-semibold">$3,240/year (save $360)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Professional Plan</span>
                <span className="text-white font-semibold">$10,800/year (save $1,200)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Premium Plan</span>
                <span className="text-white font-semibold">$27,000/year (save $3,000)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Add-on */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Need a Website?</h2>
            <p className="text-gray-400 text-lg">
              GEO works best with a strong web presence. We offer website services as an add-on to your GEO plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-3">GEO-Optimized Website</h3>
              <p className="text-gray-400 mb-4">
                We'll build or rebuild your website with GEO best practices baked in from day one.
              </p>
              <p className="text-cyan-400 font-bold text-lg mb-4">$500 – $2,000 one-time</p>
              <p className="text-sm text-gray-400">Plus your monthly GEO plan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-3">Website + Hosting</h3>
              <p className="text-gray-400 mb-4">
                Get a website with ongoing hosting, maintenance, and updates included each month.
              </p>
              <p className="text-cyan-400 font-bold text-lg mb-4">Custom pricing</p>
              <p className="text-sm text-gray-400">Based on your GEO plan level</p>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg"
            >
              Contact About Website Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">How long before I see results?</h3>
              <p className="text-gray-400">
                AI models update their knowledge bases on different schedules. You may see improvements within 30-60 days, but full optimization typically takes 3-6 months. We track everything and report monthly progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">Can I switch plans anytime?</h3>
              <p className="text-gray-400">
                Yes! You can upgrade, downgrade, or cancel with 30 days notice. We want to make sure the plan matches your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">What AI models do you optimize for?</h3>
              <p className="text-gray-400">
                We focus on the major players: ChatGPT, Claude, Perplexity, and Google AI Overviews. Different plans optimize for different numbers of platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">Do I need an audit before starting a plan?</h3>
              <p className="text-gray-400">
                Not required, but highly recommended. The audit identifies your biggest opportunities and creates a roadmap. You can start a plan without it, but you'll optimize faster with the audit first.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">What if I'm not satisfied?</h3>
              <p className="text-gray-400">
                We stand behind our work. If you're not seeing progress after 90 days, we'll work with you to adjust the strategy or discuss next steps. Your success is our success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate AI Search?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start with a GEO audit or jump into a plan. Either way, we'll get your business visible to AI models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open(stripeLinks.services.geoAudit, '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg"
              >
                Get a GEO Audit ($500-$1,500)
              </button>
              <Link
                href="/"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all text-center"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
