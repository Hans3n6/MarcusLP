'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Github, Lock } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-24 pb-32 bg-cream flex justify-center">
      <div className="max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            Featured Projects
          </h2>
          <p className="text-lg text-ink-soft max-w-3xl mx-auto">
            Production systems built for real clients and real users, not tutorials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] hover:shadow-[0_6px_24px_rgba(45,42,38,0.09)] transition-all duration-300 p-8 flex flex-col"
            >
              <h3 className="font-serif text-2xl font-semibold mb-2 text-ink">
                {project.title}
              </h3>
              <p className="text-lg text-clay mb-4">
                {project.subtitle}
              </p>

              <p className="text-ink-soft mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-clay-soft text-clay-deep rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-clay hover:text-clay-deep transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.note && (
                <p className="inline-flex items-center gap-2 text-ink-faint text-sm">
                  <Lock className="w-4 h-4" />
                  {project.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
