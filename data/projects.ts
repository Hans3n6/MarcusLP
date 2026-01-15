export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  impact: string[];
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'saigbox',
    title: 'SAIGBOX',
    subtitle: 'AI Sales Intelligence Platform',
    description: 'AI-powered email management platform that transforms communication into actionable sales intelligence. Built for sales professionals to identify opportunities and automate workflows.',
    features: [
      'Real-time Gmail & Outlook sync',
      'AWS Bedrock Claude AI integration',
      'Sales pipeline tracking & opportunity scoring',
      'Team collaboration features'
    ],
    techStack: [
      'FastAPI',
      'React',
      'AWS Bedrock',
      'Claude AI',
      'PostgreSQL',
      'SQLAlchemy',
      'OAuth 2.0',
      'Tailwind CSS'
    ],
    impact: [
      'Scales to millions of users on AWS infrastructure',
      'Reduces missed opportunities through AI-powered insights',
      'Automates repetitive sales workflows'
    ]
  },
  {
    id: 'ess360',
    title: 'Essentials 360',
    subtitle: 'E-commerce Platform',
    description: 'Modern Next.js e-commerce platform with subscription commerce and secure payment processing for Freedom Plus Protective Underwear.',
    features: [
      'Interactive product configurator',
      'Subscription & one-time purchase options',
      'Secure payment processing (PCI compliant)',
      'Mobile-optimized checkout flow'
    ],
    techStack: [
      'Next.js 14+',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'Authorize.net',
      'Zustand',
      'AWS'
    ],
    impact: [
      'Seamless subscription commerce with flexible delivery options',
      'Secure payment processing with PCI compliance',
      'Optimized conversion funnel with multi-step checkout'
    ]
  }
];
