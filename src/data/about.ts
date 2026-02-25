export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'AI Platforms',
    items: [
      'ChatGPT Optimization',
      'Claude Integration',
      'Perplexity Search',
      'Google AI Overviews',
      'Emerging AI Models',
      'Cross-platform Strategy'
    ]
  },
  {
    category: 'Content Strategy',
    items: [
      'AI-Preferred Content Structure',
      'Query Targeting for AI',
      'Citation-Worthy Content',
      'Topic Clustering',
      'Content Audit & Optimization',
      'Multi-format Optimization'
    ]
  },
  {
    category: 'E-E-A-T Building',
    items: [
      'Experience Signals',
      'Expertise Development',
      'Authoritativeness Metrics',
      'Trustworthiness Signals',
      'Credibility Building',
      'Author Authority'
    ]
  },
  {
    category: 'Technical Implementation',
    items: [
      'Schema Markup (JSON-LD)',
      'Structured Data',
      'Meta Tags Optimization',
      'Website Architecture',
      'Performance Optimization',
      'Mobile Optimization'
    ]
  },
  {
    category: 'Analytics & Monitoring',
    items: [
      'AI Model Tracking',
      'Search Performance',
      'Citation Monitoring',
      'Visibility Metrics',
      'Competitive Analysis',
      'GEO Reporting'
    ]
  }
];

export const about = {
  hometown: 'Waseca, Minnesota',
  background: 'Former collegiate athlete (walk-on → All-American) demonstrating work ethic and determination',
  perspective: 'Unique ability to solve complex technical challenges with strategic thinking',
  transition: 'Applied athletic discipline to mastering AI optimization and digital strategy',
  current: 'GEO specialist helping businesses rank in AI search results and get cited by generative models',
  availability: 'Available for GEO consulting and optimization projects',
  services: [
    'Generative Engine Optimization (GEO)',
    'AI Content Strategy',
    'E-E-A-T Authority Building',
    'Multi-Model Optimization'
  ]
};
