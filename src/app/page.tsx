import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Story from '@/components/Story';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Services />
      <Story />
      <About />
      <Contact />
    </main>
  );
}
