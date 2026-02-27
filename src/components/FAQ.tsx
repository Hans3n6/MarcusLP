'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is GEO and how is it different from SEO?',
    answer: 'GEO (Generative Engine Optimization) optimizes your content to be found and cited by AI models like ChatGPT, Claude, and Perplexity. Traditional SEO optimizes for Google\'s search rankings. Both matter—SEO gets you found by search engines, GEO gets you found by AI models. AI search is growing faster than ever, making GEO essential for visibility in the AI era.'
  },
  {
    id: 2,
    question: 'Which AI models do you optimize for?',
    answer: 'We optimize for all major AI models and platforms: ChatGPT, Claude, Perplexity, Google AI Overviews, Gemini, and emerging AI search platforms. Each model has different ranking signals and content preferences, so our strategy ensures you\'re visible across all of them, not just one.'
  },
  {
    id: 3,
    question: 'How long does it take to see GEO results?',
    answer: 'Initial improvements can appear within 4–8 weeks. Full authority building and established AI visibility typically takes 3–6 months—similar to traditional SEO timelines. Results depend on your starting point, competition, and the strategies we implement. We provide monthly reporting so you can track progress every step of the way.'
  },
  {
    id: 4,
    question: 'Do you have case studies or examples?',
    answer: 'We\'re a new agency focused on delivering real results for our first clients. Rather than relying on portfolio work, we offer a free GEO audit to show you exactly where you stand and what\'s possible for your business. This gives you concrete insights into your current AI visibility and a roadmap for improvement.'
  },
  {
    id: 5,
    question: 'What\'s included in the free GEO audit?',
    answer: 'The free GEO audit includes: a review of your current AI visibility, assessment of your E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), analysis of your content structure and optimization, evaluation of your schema markup, and a prioritized list of improvements to get your content cited by AI models.'
  },
  {
    id: 6,
    question: 'Do I need to already have a website?',
    answer: 'A website is helpful for GEO, but it\'s not required. GEO also includes off-site authority building—things like industry citations, LinkedIn presence, thought leadership content, and media mentions. We assess your full digital presence and build a strategy that works with what you have.'
  },
  {
    id: 7,
    question: 'How do you measure success?',
    answer: 'We track concrete metrics: how often your brand appears in AI model responses, which models cite you, improvements to your E-E-A-T signals, and changes to your content visibility. You get monthly reports showing your progress and the impact of our optimizations.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full pt-24 pb-32 bg-gradient-to-b from-slate-800 to-slate-900 flex justify-center">
      <div className="max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions about GEO and how it works? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openId === faq.id ? 1 : 0,
                    height: openId === faq.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 leading-relaxed pt-4 text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? Reach out and let's talk about your GEO strategy.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105"
          >
            Schedule Your Free Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
