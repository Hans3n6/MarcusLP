import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Story from '@/components/Story';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Services />
      <Projects />
      <Story />
      <About />
      <Contact />
    </main>
  );
}
