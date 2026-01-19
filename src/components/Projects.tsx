'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink, CheckCircle } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-24 pb-32 bg-slate-900 flex justify-center">
      <div className="max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="p-8 md:p-10 text-center">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-xl text-purple-400 mb-6">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
