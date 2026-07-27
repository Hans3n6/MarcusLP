import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { hero, roles, skills, certifications, education, story } from '@/data/gtm';

export const metadata: Metadata = {
  title: 'Marcus Hansen | GTM Engineer & Customer Success',
  description:
    'GTM engineer and customer success builder: I ship the AI systems that make customer relationships scale, and I own those relationships too. Open to GTM Engineer and CS roles at startups.',
  robots: { index: false, follow: false },
};

export default function GtmPage() {
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
        subheading="Systems builder and trusted advisor, in one seat"
      />
      <Story finalTitle={story.finalTitle} finalText={story.finalText} />
      <Contact
        subheading="Hiring for a GTM Engineer, Customer Success, or systems-and-relationships role? I'd love to hear about it."
        showGithub={false}
      />
      <Footer
        description="GTM engineer and customer success builder. I ship the AI systems that scale customer relationships, and I own the relationships too."
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
