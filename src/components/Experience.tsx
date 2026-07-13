'use client';

import { motion } from 'framer-motion';
import { roles as defaultRoles, Role } from '@/data/experience';
import { Briefcase, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  roles?: Role[];
  heading?: string;
}

export default function Experience({ roles = defaultRoles, heading = 'Experience' }: ExperienceProps) {
  return (
    <section id="experience" className="w-full pt-24 pb-32 bg-cream-deep flex justify-center">
      <div className="max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            {heading}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {roles.map((role, index) => (
            <motion.div
              key={`${role.title}-${role.org}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] hover:shadow-[0_6px_24px_rgba(45,42,38,0.09)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-clay-soft rounded-lg">
                    <Briefcase className="w-6 h-6 text-clay" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-2xl font-semibold text-ink">{role.title}</h3>
                    <p className="text-clay font-medium">{role.org}</p>
                  </div>
                </div>
                <span className="text-ink-faint text-sm md:text-base md:text-right">{role.dates}</span>
              </div>

              <p className="text-ink-soft text-lg leading-relaxed mb-6 text-left">
                {role.summary}
              </p>

              {role.highlights.length > 0 && (
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-clay mt-1 flex-shrink-0" />
                      <span className="text-ink-soft">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
