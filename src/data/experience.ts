export interface Role {
  title: string;
  org: string;
  dates: string;
  summary: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    title: 'Cofounder & Lead AI Engineer',
    org: 'Admin Ambassadors',
    dates: 'January 2026 to Present',
    summary:
      'Cofounded an AI consulting firm that builds AI automations with a human first perspective for paying clients. Lead all AI engineering: run discovery with clients, identify high value automation opportunities, and translate business needs into shipped AI solutions.',
    highlights: [
      'Delivered a paid enterprise engagement: a daily clone of a production database into AWS RDS with a governed, read only Bedrock + MCP AI query layer that lets nontechnical staff query live business data in plain language',
      'Assess client data, system dependencies, and constraints affecting AI adoption in enterprise and ERP environments',
      'Python, AWS (Lambda, RDS, Bedrock), Terraform, OAuth 2.1, pgvector semantic search'
    ]
  },
  {
    title: 'Full Stack Developer',
    org: 'BS&Co',
    dates: 'January 2026 to May 2026',
    summary:
      'Built AI powered automation workflows and full stack web applications in a production environment, working cross functionally with marketing, operations, and leadership.',
    highlights: [
      'Architected and shipped Auto Brief, a three agent AI system coordinating multiple LLM calls with structured prompts and classification logic',
      'Built the Campaign Calendar tool: integrates three data sources, queries Postgres, analyzes performance data, and generates monthly schedules automatically',
      'Built RAG pipelines with embeddings and vector search for accurate knowledge retrieval from proprietary data',
      'Designed REST APIs connecting AI systems to enterprise services and external platforms'
    ]
  },
  {
    title: 'Support Operations Specialist',
    org: 'Sanford Bemidji Medical Center',
    dates: '2022 to 2024',
    summary:
      'Served as the central coordination point in a fast paced, high volume operation, triaging and routing a constant stream of incoming requests to the right people and tracking each one through to resolution. Kept records and information accurate across multiple systems and communication clear between many stakeholders at once.',
    highlights: []
  }
];
