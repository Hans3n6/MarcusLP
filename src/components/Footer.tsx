'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
              Hansen Web Services
            </h3>
            <p className="text-gray-400 text-sm">
              Professional landing pages for rural businesses in Waseca, MN and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:5072017442"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>507-201-7442</span>
              </a>
              <a
                href="mailto:contact@hansenwebservices.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>contact@hansenwebservices.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hansen Web Services. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
