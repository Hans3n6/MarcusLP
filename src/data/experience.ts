export interface Role {
  title: string;
  org: string;
  dates: string;
  summary: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    title: 'Co-Founder & Lead AI Engineer',
    org: 'Admin Ambassadors',
    dates: 'January 2026 – Present',
    summary:
      'Co-founded an AI consulting firm that builds AI automations with a human-first perspective for paying clients. Lead all AI engineering: run discovery with clients, identify high-value automation opportunities, and translate business needs into shipped AI solutions.',
    highlights: [
      'Delivered a paid enterprise engagement: a daily clone of a production database into AWS RDS with a governed, read-only Bedrock + MCP AI query layer that lets nontechnical staff query live business data in plain language',
      'Assess client data, system dependencies, and constraints affecting AI adoption in enterprise and ERP environments',
      'Python, AWS (Lambda, RDS, Bedrock), Terraform, OAuth 2.1, pgvector semantic search'
    ]
  },
  {
    title: 'Full Stack Developer',
    org: 'BS&Co',
    dates: 'January 2026 – May 2026',
    summary:
      'Built AI-powered automation workflows and full-stack web applications in a production environment, working cross-functionally with marketing, operations, and leadership.',
    highlights: [
      'Architected and shipped Auto Brief, a three-agent AI system coordinating multiple LLM calls with structured prompts and classification logic',
      'Built the Campaign Calendar tool: integrates three data sources, queries Postgres, analyzes performance data, and auto-generates monthly schedules',
      'Built RAG pipelines with embeddings and vector search for accurate knowledge retrieval from proprietary data',
      'Designed REST APIs connecting AI systems to enterprise services and external platforms'
    ]
  },
  {
    title: 'PT Aide & ER Secretary',
    org: 'Sanford Health, Bemidji',
    dates: '2022 – 2024',
    summary:
      'Managed data and communication systems in a high-volume clinical setting, building operational discipline, process awareness, and healthcare workflow understanding.',
    highlights: []
  }
];
