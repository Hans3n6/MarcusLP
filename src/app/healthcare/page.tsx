import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { hero, roles, skills, certifications, education, story } from '@/data/healthcare';

export const metadata: Metadata = {
  title: 'Marcus Hansen | Healthcare Operations Professional',
  description:
    'Healthcare operations professional with two years and three roles at Sanford Health: patient registration, triage, scheduling, and Epic. Open to patient access, intake, and clinical support roles in Minnesota.',
  robots: { index: false, follow: false },
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen w-full">
      <Hero
        subtitle={hero.subtitle}
        pitch={hero.pitch}
        resumeHref="/Marcus_Hansen_Healthcare_Resume.pdf"
        links={[
          { href: 'https://www.linkedin.com/in/marcus-hansen-39756326b/', label: 'LinkedIn', icon: 'linkedin' },
        ]}
      />
      <Experience roles={roles} heading="Healthcare Experience" />
      <About
        skills={skills}
        certifications={certifications}
        education={education}
        subheading="What I bring to a clinic, hospital, or health plan team"
      />
      <Story finalTitle={story.finalTitle} finalText={story.finalText} />
      <Contact
        subheading="Hiring for a patient access, intake, scheduling, or clinical support role? I'd love to hear about it."
        showGithub={false}
      />
      <Footer
        description="Healthcare operations professional with two years across three roles at Sanford Health. Epic experienced, HIPAA disciplined, open to full time healthcare roles."
        resumeHref="/Marcus_Hansen_Healthcare_Resume.pdf"
        showGithub={false}
        sections={[
          { href: '#experience', label: 'Healthcare Experience' },
          { href: '#skills', label: 'Skills & Credentials' },
          { href: '#story', label: 'My Journey' },
          { href: '#contact', label: 'Contact' },
        ]}
      />
    </main>
  );
}
