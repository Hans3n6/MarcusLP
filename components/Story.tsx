'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, Heart, TrendingUp } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="w-full pt-24 pb-32 bg-gradient-to-b from-slate-800 to-slate-900 flex justify-center">
      <div className="max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            My Journey
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
            {/* Walk-on to Star */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Walk-On to All-American
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                Started as a walk-on at Bemidji State University and worked my way to becoming
                the 2023 NSIC Defensive Player of the Year and a two-time AP All-American.
                This journey taught me that dedication and persistence can overcome any obstacle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://msumavericks.com/sports/football/roster/marcus-hansen/13638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Minnesota State Mankato Roster
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://bsubeavers.com/sports/football/roster/marcus-hansen/15915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Bemidji State Roster
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Advocacy */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Finding My Voice
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                After being dismissed from a university for my sexual orientation, I found
                an inclusive home at Minnesota State Mankato, where I could be both an athlete
                and my authentic self. This experience drives my commitment to creating
                inclusive technology.
              </p>
              <a
                href="https://www.startribune.com/how-inclusive-culture-brought-an-all-america-pass-rusher-to-mankato/601552524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Read my story in the Star Tribune
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Transition to Tech */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                From Field to Code
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Applied the same discipline from athletics to master full-stack development.
                Now I build AI-powered platforms and e-commerce solutions that solve real
                business problems, bringing the work ethic of an athlete to every line of code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
