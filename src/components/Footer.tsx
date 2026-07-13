'use client';

import { Phone, Mail, Github, Linkedin, FileDown } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  description?: string;
  resumeHref?: string;
  showGithub?: boolean;
  sections?: { href: string; label: string }[];
  recruiterLinks?: { href: string; label: string }[];
}

const defaultSections = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills & Credentials' },
  { href: '#story', label: 'My Journey' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer({
  description = 'AI engineer and full-stack developer building production LLM systems on AWS. Open to full-time engineering roles.',
  resumeHref = '/Marcus_Hansen_Resume.pdf',
  showGithub = true,
  sections = defaultSections,
  recruiterLinks
}: FooterProps) {
  return (
    <footer className="w-full bg-night border-t border-line/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#F5EFE6] mb-4">
              Marcus Hansen
            </h3>
            <p className="text-[#B8AE9F] text-sm">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5EFE6] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.href}>
                  <Link href={section.href} className="text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm">
                    {section.label}
                  </Link>
                </li>
              ))}
              {resumeHref && (
                <li>
                  <a href={resumeHref} download className="inline-flex items-center gap-1 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm">
                    <FileDown className="w-3.5 h-3.5" />
                    Download Resume
                  </a>
                </li>
              )}
            </ul>

            {recruiterLinks && recruiterLinks.length > 0 && (
              <>
                <h4 className="text-[#F5EFE6] font-semibold mb-4 mt-8">For Recruiters</h4>
                <ul className="space-y-2">
                  {recruiterLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F5EFE6] font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:5072017442"
                className="flex items-center gap-2 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-[#E8A87C] group-hover:scale-110 transition-transform" />
                <span>507-201-7442</span>
              </a>
              <a
                href="mailto:Marcush1802hansen@gmail.com"
                className="flex items-center gap-2 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-[#E8A87C] group-hover:scale-110 transition-transform" />
                <span>Marcush1802hansen@gmail.com</span>
              </a>
              {showGithub && (
                <>
                  <a
                    href="https://github.com/Hans3n6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm group"
                  >
                    <Github className="w-4 h-4 text-[#E8A87C] group-hover:scale-110 transition-transform" />
                    <span>github.com/Hans3n6</span>
                  </a>
                  <a
                    href="https://github.com/marcus740"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm group"
                  >
                    <Github className="w-4 h-4 text-[#E8A87C] group-hover:scale-110 transition-transform" />
                    <span>github.com/marcus740</span>
                  </a>
                </>
              )}
              <a
                href="https://www.linkedin.com/in/marcus-hansen-39756326b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#B8AE9F] hover:text-[#E8A87C] transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4 text-[#E8A87C] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8A8175] text-sm">
              © {new Date().getFullYear()} Marcus Hansen. All rights reserved.
            </p>
            <p className="text-[#8A8175] text-sm">
              Built with Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
