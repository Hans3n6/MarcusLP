'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Hero Image - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <img
            src="/marcus-football.png"
            alt="Marcus Hansen in football uniform"
            className="h-full w-full object-cover object-center opacity-25"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Marcus Hansen
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Web Developer | Waseca, MN
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Helping small businesses in rural communities grow online with professional landing pages
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/50"
            >
              View Projects
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
            >
              Get in Touch
            </motion.button>
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
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
