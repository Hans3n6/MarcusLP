import { Role } from '@/data/experience';
import { Skill } from '@/data/about';

export const hero = {
  subtitle: 'Customer Success · Implementation · Health-Tech',
  pitch:
    'Client-facing consultant with healthcare roots and real technical fluency. I onboard clients, configure solutions to their workflows, and train them to succeed — and I understand healthcare customers because I was one. Open to customer success, implementation, onboarding, and client-facing roles.',
};

export const roles: Role[] = [
  {
    title: 'Co-Founder',
    org: 'Admin Ambassadors',
    dates: '2026 – Present',
    summary:
      'Co-founded an AI consulting firm serving business clients with a human-first approach. Onboard clients, learn their workflows, and configure tailored solutions — including an AI-powered system that lets a client query their business data in plain language — then support them day to day through adoption.',
    highlights: [
      'Serve as the primary point of contact and coordinate across stakeholders',
      'Turn single projects into ongoing partnerships',
      'Pick up new tools and platforms quickly and become the resident expert'
    ]
  },
  {
    title: 'Patient Access & Clinical Support',
    org: 'Sanford Bemidji Medical Center',
    dates: '2022 – 2024',
    summary:
      'Worked three roles across a busy medical center, including as an ER ward secretary handling patient registration, scheduling, insurance verification, and records in Epic. Coordinated communication between patients, providers, and departments, and supported patients directly as a triage technician — taking vitals, rooming patients, and performing EKGs.',
    highlights: [
      'Firsthand understanding of both the operational and clinical sides of a medical practice'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Client Relationships',
    items: [
      'Client Onboarding',
      'Driving Adoption',
      'Issue & Escalation Resolution',
      'Needs Analysis',
      'Ongoing Partnerships',
      'Stakeholder Communication'
    ]
  },
  {
    category: 'Healthcare Domain Knowledge',
    items: [
      'Two Years in Medical Practice Ops',
      'Patient Scheduling & Registration',
      'Epic (EHR)',
      'Medical Terminology',
      'Clinical Workflows',
      'HIPAA Awareness'
    ]
  },
  {
    category: 'Implementation & Onboarding',
    items: [
      'Platform Configuration',
      'Workflow Consulting',
      'User Training',
      'Go-Live Coordination',
      'Cross-Functional Teams',
      'Documentation'
    ]
  },
  {
    category: 'Product & Technical Fluency',
    items: [
      'Mastering New Software Fast',
      'Building Automations',
      'Translating Goals into Setup',
      'Resident Product Expert',
      'Data & Reporting',
      'Salesforce (In Progress)'
    ]
  }
];

export const certifications = [
  { name: 'Salesforce Administrator', issuer: 'Salesforce', year: 'In progress' },
  { name: 'BLS/AED Certified', issuer: 'American Heart Association', year: '2022' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2026' }
];

export const education = {
  degree: 'Bachelor of Science, Exercise Science',
  school: 'Bemidji State University',
  year: '2024',
  honors: [
    'NCAA Division II Football',
    'NSIC Defensive Player of the Year',
    'AP All-American Selection'
  ]
};

export const story = {
  finalTitle: 'From Field to Client Work',
  finalText:
    'The same discipline that turned a walk-on into an All-American is what I bring to clients: learn fast, prepare relentlessly, and show up for the people counting on you. I’ve sat on the customer’s side of healthcare software, and now I spend my days onboarding clients, configuring tools to fit their world, and sticking with them until it works.'
};
