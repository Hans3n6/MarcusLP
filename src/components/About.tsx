'use client';

import { motion } from 'framer-motion';
import { about, skills } from '@/data/about';
import { Code2, Brain, Cloud, Workflow } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'Frontend': Code2,
  'Backend': Workflow,
  'AI/ML': Brain,
  'Cloud & DevOps': Cloud,
  'Integrations': Workflow
};

export default function About() {
  return (
    <section id="about" className="w-full pt-24 pb-32 bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center">
      <div className="max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.category] || Code2;
              const isLast = index === skills.length - 1;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center ${isLast ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto' : ''}`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-purple-900/30 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {skill.items.slice(0, 6).map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-900/50 text-gray-300 rounded-md text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
