import { Role } from '@/data/experience';
import { Skill } from '@/data/about';

export const hero = {
  subtitle: 'GTM Engineer · Customer Success',
  pitch:
    'I build the AI systems that make customer relationships scale, and I own those relationships too. Part systems builder, part trusted advisor. I co-lead an AI consulting firm where I ship automations for clients and stay their main point of contact through adoption. Open to GTM Engineer and Customer Success roles at startups.',
};

export const roles: Role[] = [
  {
    title: 'Cofounder & Lead AI Engineer',
    org: 'Admin Ambassadors',
    dates: '2026 to Present',
    summary:
      'Co-founded an AI consulting firm and do both halves of the GTM-engineer job: build the automations and own the customer. Run discovery, ship AI systems tailored to each client\'s workflow, then stay their primary point of contact through onboarding, adoption, and expansion.',
    highlights: [
      'Build AI automations and internal tools that let non-technical teams move faster (Claude API, multi-agent systems, AWS)',
      'Serve as the trusted advisor: needs analysis, onboarding, training, and day-to-day support',
      'Turn single projects into ongoing partnerships. Retention through results, not upsell scripts'
    ]
  },
  {
    title: 'Full Stack Developer',
    org: 'BS&Co',
    dates: '2026',
    summary:
      'Built the go-to-market automation a small team ran on. Shipped a multi-agent AI system that drafts and validates marketing copy in daily production, plus a campaign calendar that pulls three data sources, queries Postgres, and auto-generates monthly marketing schedules.',
    highlights: [
      'Integrated multiple data sources and APIs into working GTM tooling',
      'Translated messy business goals into shipped, reliable systems'
    ]
  },
  {
    title: 'Operations Specialist Associate',
    org: 'Landmark Transcription',
    dates: '2022 to 2025',
    summary:
      'Ran the workflow queue for a fully remote operation: categorizing and assigning files, driving timely resolution against tight turnaround deadlines, performing quality assurance, managing billing and invoicing, and communicating directly with clients.',
    highlights: []
  }
];

export const skills: Skill[] = [
  {
    category: 'GTM Systems & Automation',
    items: [
      'AI Automation (Claude API)',
      'Multi-Agent Systems',
      'Workflow Automation',
      'Data Pipelines',
      'API Integrations',
      'Internal Tooling'
    ]
  },
  {
    category: 'Customer Success & Retention',
    items: [
      'Client Onboarding',
      'Driving Adoption',
      'Primary Point of Contact',
      'Needs Analysis',
      'Escalation Resolution',
      'Projects into Partnerships'
    ]
  },
  {
    category: 'GTM Tooling & Data',
    items: [
      'Salesforce (In Progress)',
      'CRM & Data Integration',
      'Reporting & Analytics',
      'Turning Data into Insight',
      'Business Reviews',
      'Quick to Learn New Tools'
    ]
  },
  {
    category: 'Technical Fluency',
    items: [
      'Python & TypeScript',
      'REST APIs',
      'PostgreSQL',
      'AWS (Lambda, RDS, Bedrock)',
      'RAG & Vector Search',
      'Resident Product Expert'
    ]
  }
];

export const certifications = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2026' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: '2026' },
  { name: 'Salesforce Administrator', issuer: 'Salesforce', year: 'In progress' }
];

export const education = {
  degree: 'Bachelor of Science, Exercise Science',
  school: 'Bemidji State University',
  year: '2024',
  honors: [
    'NCAA Division II Football',
    'NSIC Defensive Player of the Year',
    'AP All American Selection'
  ]
};

export const story = {
  finalTitle: 'The Builder Who Owns the Relationship',
  finalText:
    'Most people are either the engineer who builds the system or the CSM who owns the customer. I do both. I ship the AI automation that makes a team faster, and I\'m the person the client calls when they need something. That blend, systems fluency plus genuine relationship work, is exactly what a GTM-engineering seat asks for, and it is how I turn one project into a lasting partnership.'
};
