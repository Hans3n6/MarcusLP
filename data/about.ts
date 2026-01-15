export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js 14-16',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'React Hook Form',
      'Zod Validation',
      'Framer Motion'
    ]
  },
  {
    category: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'Node.js',
      'Express',
      'PostgreSQL',
      'SQLite',
      'RESTful APIs'
    ]
  },
  {
    category: 'AI/ML',
    items: [
      'AWS Bedrock',
      'Claude API',
      'Semantic Search',
      'Embeddings',
      'Natural Language Processing',
      'ML Classification'
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS (EC2, Lambda, S3, RDS, Bedrock)',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'Nginx',
      'PM2'
    ]
  },
  {
    category: 'Integrations',
    items: [
      'Authorize.net',
      'Stripe',
      'Google API',
      'Microsoft Graph',
      'OAuth 2.0',
      'Third-party APIs'
    ]
  }
];

export const about = {
  hometown: 'Waseca, Minnesota',
  background: 'Former collegiate athlete (walk-on → All-American) demonstrating work ethic and determination',
  perspective: 'LGBTQ+ advocate bringing unique viewpoint to inclusive product design',
  transition: 'Applied athletic discipline to mastering full-stack development',
  current: 'Full-stack developer specializing in AI integration and e-commerce platforms',
  availability: 'Available for consulting and development projects',
  services: [
    'Full-stack development projects',
    'AI integration consulting',
    'E-commerce platform builds',
    'AWS cloud architecture'
  ]
};
