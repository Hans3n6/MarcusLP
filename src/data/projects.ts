export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  github?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: 'production-data-ai-platform',
    title: 'Production Data + AI Platform',
    subtitle: 'Enterprise AI Infrastructure · Paid Client Engagement',
    description:
      'Daily one way clone of a production Postgres database into a private AWS RDS instance, topped with a governed, read only AI query layer built on AWS Bedrock and MCP. Nontechnical staff query live business data in plain English. Includes an MCP gateway with OAuth 2.1 and Dynamic Client Registration, IAM authenticated replication Lambdas, CloudWatch alarms, and cross region replication.',
    techStack: ['Python', 'Terraform', 'AWS Lambda', 'AWS RDS', 'AWS Bedrock', 'MCP', 'OAuth 2.1', 'pgvector'],
    note: 'Private client repository · code walkthrough available on request',
  },
  {
    id: 'lab-time-tracker',
    title: 'QR Lab Time Tracker',
    subtitle: 'Shop Floor Time Tracking · Paid Client Engagement',
    description:
      'Every task at the client\'s lab workstations gets its own QR sticker. Workers scan it, tap their name, and clock in or out. Task level time data lands in Postgres and feeds the same production data platform as the rest of the client\'s systems. In daily use on the floor.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Postgres', 'Vercel'],
    note: 'Private client repository · code walkthrough available on request',
  },
  {
    id: 'auto-brief',
    title: 'Auto Brief',
    subtitle: 'Three Agent AI System in Daily Production',
    description:
      'Multi agent architecture where three independent AI agents, a PM, a Writer, and a Validator, coordinate through structured prompts to produce validated marketing email copy with built in quality checks, then write results back to AWS RDS. Runs in production daily.',
    techStack: ['TypeScript', 'Claude API', 'Multi Agent Architecture', 'AWS RDS', 'Structured Prompting'],
    github: 'https://github.com/marcus740',
  },
  {
    id: 'campaign-calendar',
    title: 'Campaign Calendar',
    subtitle: 'Automated Marketing Data Pipeline',
    description:
      'Pulls from three APIs in parallel, queries Postgres, analyzes a year of campaign performance data, and generates optimized monthly marketing schedules. Built at BS&Co and running in production daily.',
    techStack: ['React', 'Python', 'PostgreSQL', 'AWS', 'REST APIs', 'Data Analysis'],
    github: 'https://github.com/marcus740',
  },
  {
    id: 'ess360',
    title: 'Essentials 360',
    subtitle: 'Headless Ecommerce Storefront',
    description:
      'Headless storefront with a full checkout flow, PCI compliant payment processing via Authorize.net, OrderLogix order management integration, and subscription support. Deployed on AWS EC2 with Nginx, PM2, and SSL.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Authorize.net', 'AWS EC2'],
  },
];
