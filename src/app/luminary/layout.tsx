import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luminary Demo | GEO Share of Voice Tracker | Hansen Web Services',
  description: 'See how Luminary tracks brand visibility across ChatGPT, Perplexity, and Claude. Interactive demo of our GEO Share of Voice tracking tool.',
  openGraph: {
    title: 'Luminary — GEO Share of Voice Tracker Demo',
    description: 'Track how AI models mention, recommend, and cite your brand. Interactive demo with real metrics.',
  },
};

export default function LuminaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
