'use client';

import { motion } from 'framer-motion';
import { Stethoscope, HeartHandshake, Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LANES = [
  {
    href: '/healthcare',
    icon: Stethoscope,
    title: 'Healthcare Operations',
    text: 'Patient access, intake, scheduling, clinical support — two years at Sanford Health.',
  },
  {
    href: '/customer-success',
    icon: HeartHandshake,
    title: 'Client Success & Implementation',
    text: 'Onboarding, configuration, and training — with healthcare roots and technical fluency.',
  },
  {
    href: '/ai',
    icon: Code2,
    title: 'Software & AI Engineering',
    text: 'Production systems for real clients — full-stack development and applied AI on AWS.',
  },
];

export default function HiringRouter() {
  return (
    <section id="hiring" className="w-full pt-24 pb-32 bg-cream flex justify-center">
      <div className="max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            Hiring?
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            I work across a few different worlds. Pick the one that matches your team
            and see that side of me in full.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {LANES.map((lane, i) => {
            const Icon = lane.icon;
            return (
              <motion.div
                key={lane.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={lane.href}
                  className="block h-full bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] hover:shadow-[0_6px_24px_rgba(45,42,38,0.09)] hover:border-clay/40 transition-all group"
                >
                  <div className="p-3 bg-clay-soft rounded-lg w-fit mb-5">
                    <Icon className="w-6 h-6 text-clay" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">{lane.title}</h3>
                  <p className="text-ink-soft mb-5">{lane.text}</p>
                  <span className="inline-flex items-center gap-2 text-clay font-medium group-hover:gap-3 transition-all">
                    See this side of me
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
