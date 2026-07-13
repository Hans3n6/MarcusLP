'use client';

import { motion } from 'framer-motion';
import {
  skills as defaultSkills,
  certifications as defaultCertifications,
  education as defaultEducation,
  Skill
} from '@/data/about';
import {
  Zap, Code2, Database, Cloud, Award, GraduationCap,
  Stethoscope, Activity, CalendarCheck, ClipboardList, HeartHandshake, Rocket
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'AI & LLM Engineering': Zap,
  'Languages & Frameworks': Code2,
  'Backend & Data': Database,
  'Cloud & DevOps': Cloud,
  'Clinical & Patient Care': Stethoscope,
  'Healthcare Systems': Activity,
  'Intake & Coordination': CalendarCheck,
  'Administrative & Computer': ClipboardList,
  'Client Relationships': HeartHandshake,
  'Healthcare Domain Knowledge': Stethoscope,
  'Implementation & Onboarding': Rocket,
  'Product & Technical Fluency': Zap
};

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  honors: string[];
}

interface AboutProps {
  skills?: Skill[];
  certifications?: Certification[];
  education?: Education;
  subheading?: string;
}

export default function About({
  skills = defaultSkills,
  certifications = defaultCertifications,
  education = defaultEducation,
  subheading = 'The stack I ship with every day'
}: AboutProps) {
  return (
    <section id="skills" className="w-full pt-24 pb-32 bg-cream-deep flex justify-center">
      <div className="max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            Skills & Credentials
          </h2>
          <p className="text-lg text-ink-soft max-w-3xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.category] || Code2;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] hover:shadow-[0_6px_24px_rgba(45,42,38,0.09)] transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-clay-soft rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-clay" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-ink">
                    {skill.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cream text-ink-soft rounded-md text-sm border border-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Education */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-clay-soft rounded-lg mr-4">
                <Award className="w-6 h-6 text-clay" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-ink">Certifications</h4>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-ink font-medium">{cert.name}</p>
                  <p className="text-ink-faint text-sm">{cert.issuer} · {cert.year}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-clay-soft rounded-lg mr-4">
                <GraduationCap className="w-6 h-6 text-clay" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-ink">Education</h4>
            </div>
            <p className="text-ink font-medium">{education.degree}</p>
            <p className="text-ink-faint text-sm mb-4">{education.school} · {education.year}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {education.honors.map((honor) => (
                <span key={honor} className="px-4 py-2 bg-cream text-ink-soft rounded-md text-sm border border-line">
                  {honor}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
