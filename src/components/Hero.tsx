'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, FileDown, Linkedin } from 'lucide-react';

export interface HeroLink {
  href: string;
  label: string;
  icon: 'github' | 'linkedin';
}

interface HeroProps {
  subtitle?: string;
  pitch?: string;
  resumeHref?: string;
  links?: HeroLink[];
}

const defaultLinks: HeroLink[] = [
  { href: 'https://github.com/Hans3n6', label: 'Hans3n6', icon: 'github' },
  { href: 'https://github.com/marcus740', label: 'marcus740', icon: 'github' },
  { href: 'https://www.linkedin.com/in/marcus-hansen-39756326b/', label: 'LinkedIn', icon: 'linkedin' },
];

export default function Hero({
  subtitle = 'AI Engineer & Full Stack Developer',
  pitch = 'I build production AI systems: multi agent LLM workflows, RAG pipelines, and cloud infrastructure on AWS. Self taught, AWS Certified AI Practitioner, and currently Cofounder & Lead AI Engineer at Admin Ambassadors. Open to full time engineering roles.',
  resumeHref = '/Marcus_Hansen_Resume.pdf',
  links = defaultLinks,
}: HeroProps) {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-cream overflow-hidden">
      {/* Soft warm background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero Image - Right Side (under the blobs so the glow blends across it) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <img
            src="/marcus-football-nobg.png"
            alt="Marcus Hansen in football uniform"
            className="h-full w-full object-contain object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay-soft rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#EFE3CE] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#F0DCD0] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-6 text-ink">
            Marcus Hansen
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-clay">
            {subtitle}
          </h2>

          <p className="text-lg md:text-xl text-ink-soft mb-16 max-w-3xl mx-auto">
            {pitch}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToExperience}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-clay text-white rounded-full font-semibold hover:bg-clay-deep transition-all shadow-sm"
            >
              See My Experience
            </motion.button>

            <motion.a
              href={resumeHref}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-ink rounded-full font-semibold border border-line hover:border-clay/50 transition-all inline-flex items-center justify-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-ink rounded-full font-semibold border border-line hover:border-clay/50 transition-all"
            >
              Get In Touch
            </motion.button>
          </div>

          <div className="flex gap-6 justify-center mt-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-faint hover:text-clay transition-colors"
              >
                {link.icon === 'github' ? <Github className="w-5 h-5" /> : <Linkedin className="w-5 h-5" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
            onClick={scrollToExperience}
          >
            <ChevronDown className="w-8 h-8 text-ink-faint" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
