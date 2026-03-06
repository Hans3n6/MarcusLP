import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free GEO Audit | Hansen Web Services',
  description: 'Get a free GEO score for your website. Analyze schema markup, meta tags, content structure, and AI accessibility. See how visible you are to AI models.',
  openGraph: {
    title: 'Free GEO Audit | Hansen Web Services',
    description: 'Get a free GEO score for your website. See how visible you are to AI models like ChatGPT, Claude, and Perplexity.',
    type: 'website',
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
