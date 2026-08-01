import { Role } from '@/data/experience';
import { Skill } from '@/data/about';

export const hero = {
  subtitle: 'GTM Engineer · Customer Success',
  pitch:
    'I build the AI systems that make customer relationships scale, and I own those relationships too. Part systems builder, part trusted advisor. I co-lead an AI consulting firm where I ship automations for clients and stay their main point of contact through adoption. Open to GTM Engineer and Customer Success roles at startups.',
};

export const roles: Role[] = [
  {
    title: 'Co-Founder & Client Success Lead',
    org: 'Admin Ambassadors',
    dates: '2026 to Present',
    summary:
      'Cofounded an AI consulting firm and own the client relationship end to end. Lead discovery to understand each client\'s goals, run onboarding and implementation, and drive adoption of the solutions we deliver, serving as the primary point of contact throughout. Turn single engagements into ongoing partnerships by delivering measurable outcomes and staying close to each account, coordinating across stakeholders and acting as the trusted advisor clients rely on.',
    highlights: [
      'Run discovery, onboarding, and implementation, then drive adoption of what we deliver',
      'Serve as the primary point of contact and trusted advisor across every stakeholder',
      'Build the systems behind the work too (Claude API, multi-agent architectures, AWS)'
    ]
  },
  {
    title: 'GTM Engineer',
    org: 'BS&Co',
    dates: '2026',
    summary:
      'Built the automation systems that powered GTM at a marketing agency. Shipped AI driven tools for content generation, campaign scheduling, and data classification that drove marketing and sales operations, including a three agent system (Auto Brief) that produces validated email copy and a Campaign Calendar that integrates multiple data sources to auto generate optimized monthly marketing schedules.',
    highlights: [
      'Partnered cross functionally with marketing, operations, and leadership to turn go to market goals into shipped systems',
      'Executed SEO and AEO work to grow inbound'
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
