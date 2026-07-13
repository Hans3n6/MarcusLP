'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface StoryProps {
  finalTitle?: string;
  finalText?: string;
}

export default function Story({
  finalTitle = 'From Field to Code',
  finalText = "Applied the same discipline from athletics to teach myself software development — from nothing to shipping production AI systems in months. Today I co-lead an AI consulting firm and build multi-agent LLM systems, data pipelines, and cloud infrastructure for paying clients. I don't wait for things to be perfectly defined: I build, learn from the results, and iterate."
}: StoryProps) {
  return (
    <section id="story" className="w-full pt-24 pb-32 bg-cream flex justify-center">
      <div className="max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            My Journey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)]"
        >
          <div className="rounded-2xl overflow-hidden mb-12 max-w-3xl mx-auto">
            <img
              src="/marcus-journey.jpg"
              alt="Marcus Hansen hiking along the California coast"
              className="w-full max-h-[420px] object-cover object-[65%_35%]"
            />
          </div>

          <div className="space-y-12 text-center">
            {/* Walk-on to Star */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-6">
                Walk-On to All-American
              </h3>
              <p className="text-lg text-ink-soft leading-relaxed max-w-3xl mx-auto mb-6">
                Started as a walk-on at Bemidji State University and worked my way to becoming
                the 2023 NSIC Defensive Player of the Year and a two-time AP All-American.
                This journey taught me that dedication and persistence can overcome any obstacle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://msumavericks.com/sports/football/roster/marcus-hansen/13638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-clay hover:text-clay-deep transition-colors font-medium"
                >
                  Minnesota State Mankato Roster
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://bsubeavers.com/sports/football/roster/marcus-hansen/15915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-clay hover:text-clay-deep transition-colors font-medium"
                >
                  Bemidji State Roster
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Advocacy */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-6">
                Finding My Voice
              </h3>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-3xl mx-auto">
                After being dismissed from a university for my sexual orientation, I found
                an inclusive home at Minnesota State Mankato, where I could be both an athlete
                and my authentic self. Overcoming this adversity taught me resilience and
                perseverance—qualities I bring to every project.
              </p>
              <a
                href="https://www.startribune.com/how-inclusive-culture-brought-an-all-america-pass-rusher-to-mankato/601552524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-clay hover:text-clay-deep transition-colors font-medium"
              >
                Read my story in the Star Tribune
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* What the journey leads to (varies by page) */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-6">
                {finalTitle}
              </h3>
              <p className="text-lg text-ink-soft leading-relaxed max-w-3xl mx-auto">
                {finalText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
