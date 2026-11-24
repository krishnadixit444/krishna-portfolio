import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'websites',
    num: '01',
    title: 'Website Development',
    shortTitle: 'Websites',
    tagline: 'Custom web experiences built to stand out and convert.',
    description:
      'High-converting websites, expressive landing pages, interactive WebGL/motion interfaces, and fast full-stack web applications tailored around your product story.',
    deliverables: [
      'Custom React & Next.js sites',
      'Interactive animations & micro-UX',
      'Responsive editorial layouts',
      'Vercel production deployment',
    ],
    relatedProjectSlug: 'sanctuary-living',
  },
  {
    id: 'automation',
    num: '02',
    title: 'AI & Business Automation',
    shortTitle: 'Automation',
    tagline: 'Eliminate repetitive manual work with dependable pipelines.',
    description:
      'Automated workflows, AI-assisted systems, API bridges, background sync engines, and programmatic reporting pipelines that save hours every week.',
    deliverables: [
      'End-to-end workflow automation',
      '15+ third-party API integrations',
      'Background sync & cron pipelines',
      'Automated PDF/XLSX/report generation',
    ],
    relatedProjectSlug: 'mba-automation-suite',
  },
  {
    id: 'crm-products',
    num: '03',
    title: 'CRM & Digital Products',
    shortTitle: 'CRM & Apps',
    tagline: 'Practical internal tools and software products teams actually love using.',
    description:
      'Custom CRM platforms, multi-tenant PostgreSQL backends with Row-Level Security, zero-login client portals, and clean operational dashboards.',
    deliverables: [
      'Custom Next.js + Supabase CRMs',
      'Multi-tenant RLS & client portals',
      'Deliverables & rate matrices',
      'Audit logs & role-based workflows',
    ],
    relatedProjectSlug: 'soshals-crm',
  },
  {
    id: 'data-leadgen',
    num: '04',
    title: 'Data & Lead Gen Systems',
    shortTitle: 'Data & Leads',
    tagline: 'Turn messy public web signals into clean, verified prospect rosters.',
    description:
      'Autonomous web scrapers, reverse-engineered GraphQL crawlers, NLP geo-verification, and multi-source contact enrichment built without expensive API lock-in.',
    deliverables: [
      'GraphQL & web scraping pipelines',
      'Bio/Media-kit email extraction',
      'Geo & niche qualification filters',
      'Clean CSV & Excel client rosters',
    ],
    relatedProjectSlug: 'x-creator-scraper',
  },
  {
    id: 'creator-tech',
    num: '05',
    title: 'Creator & Marketing Tech',
    shortTitle: 'Creator Tech',
    tagline: 'Infrastructure for creator discovery, outreach, and live campaigns.',
    description:
      'Creator intelligence engines, partnership workflow tooling, live post telemetry tracking, and browser extensions for real-time campaign visibility.',
    deliverables: [
      'US/EU creator discovery rosters',
      'Campaign deliverable tracking',
      'Browser extensions (Manifest V3)',
      'Brand-ready client reporting views',
    ],
    relatedProjectSlug: 'ig-creator-scraper',
  },
];
