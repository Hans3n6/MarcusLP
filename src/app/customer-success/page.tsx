import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { hero, roles, skills, certifications, education, story } from '@/data/customerSuccess';

export const metadata: Metadata = {
  title: 'Marcus Hansen | Customer Success & Implementation',
  description:
    'Client facing consultant blending healthcare domain experience (Sanford Health), client onboarding and implementation work, and technical fluency. Open to customer success, implementation, and onboarding roles.',
  robots: { index: false, follow: false },
};

export default function CustomerSuccessPage() {
  return (
    <main className="min-h-screen w-full">
      <Hero
        subtitle={hero.subtitle}
        pitch={hero.pitch}
        resumeHref="/Marcus_Hansen_CS_Resume.pdf"
        links={[
          { href: 'https://www.linkedin.com/in/marcus-hansen-39756326b/', label: 'LinkedIn', icon: 'linkedin' },
          { href: 'https://github.com/Hans3n6', label: 'Hans3n6', icon: 'github' },
        ]}
      />
      <Experience roles={roles} heading="Experience" />
      <About
        skills={skills}
        certifications={certifications}
        education={education}
        subheading="The trifecta: client facing work, healthcare domain knowledge, and technical fluency"
      />
      <Story finalTitle={story.finalTitle} finalText={story.finalText} />
      <Contact
        subheading="Hiring for a customer success, implementation, onboarding, or client facing role? I'd love to hear about it."
        showGithub={false}
      />
      <Footer
        description="Customer success and implementation professional with healthcare roots, client onboarding experience, and the technical fluency to become your resident product expert."
        resumeHref="/Marcus_Hansen_CS_Resume.pdf"
        showGithub={false}
        sections={[
          { href: '#experience', label: 'Experience' },
          { href: '#skills', label: 'Skills & Credentials' },
          { href: '#story', label: 'My Journey' },
          { href: '#contact', label: 'Contact' },
        ]}
      />
    </main>
  );
}
