import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Marcus Hansen | AI Engineer & Full Stack Developer',
  description:
    'Self taught AI engineer building production LLM systems: multi agent architectures, RAG pipelines, and AWS cloud infrastructure. AWS Certified AI Practitioner. Open to full time engineering roles.',
  robots: { index: false, follow: false },
};

export default function AiPage() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
