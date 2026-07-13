import GeneralHero from '@/components/GeneralHero';
import Story from '@/components/Story';
import HiringRouter from '@/components/HiringRouter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <GeneralHero />
      <Story
        finalTitle="Figuring Things Out"
        finalText="Since football, I've worked the floor of a busy ER, helped people reach their goals, and taught myself to build software — today I co-lead a small consulting firm helping businesses solve real problems with technology. The thread through all of it: hand me something hard and unfamiliar, and I'll figure it out. The discipline came from athletics. It shows up in everything I do."
      />
      <HiringRouter />
      <Contact
        subheading="Want to work together — or just want to say hi? Either way, I'd love to hear from you."
        showGithub={false}
      />
      <Footer
        description="Former All-American, ER-tested, self-taught builder. Waseca, Minnesota."
        resumeHref=""
        showGithub={false}
        sections={[
          { href: '#story', label: 'My Story' },
          { href: '#hiring', label: 'Hiring?' },
          { href: '#contact', label: 'Contact' },
        ]}
        recruiterLinks={[
          { href: '/healthcare', label: 'Healthcare Operations' },
          { href: '/customer-success', label: 'Client Success & Implementation' },
          { href: '/ai', label: 'Software & AI Engineering' },
        ]}
      />
    </main>
  );
}
