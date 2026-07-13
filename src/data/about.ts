export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'AI & LLM Engineering',
    items: [
      'Claude API (Anthropic)',
      'AWS Bedrock',
      'Multi Agent Architectures',
      'RAG & Vector Search',
      'Prompt Engineering',
      'MCP Servers'
    ]
  },
  {
    category: 'Languages & Frameworks',
    items: [
      'Python',
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'HTML/CSS'
    ]
  },
  {
    category: 'Backend & Data',
    items: [
      'REST API Design',
      'PostgreSQL',
      'Data Pipelines',
      'OAuth 2.0 / 2.1',
      'Webhooks',
      'pgvector'
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS Lambda',
      'AWS RDS',
      'Terraform',
      'Docker',
      'CI/CD',
      'Git & GitHub'
    ]
  }
];

export const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026'
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    year: '2026'
  }
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
