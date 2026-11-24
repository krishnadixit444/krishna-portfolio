export type ProjectCategory =
  | 'All'
  | 'CRM & Digital Products'
  | 'AI & Autonomous Scrapers'
  | 'Web Applications'
  | 'Browser Tools & Systems';

export interface ProjectTheme {
  bg: string;
  surface: string;
  accent: string;
  text: string;
  muted: string;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  badge: string;
  status: 'Production Live' | 'Active Pipeline' | 'Open Source Build' | 'Academic System';
  year: string;
  role: string;
  heroImage: string;
  galleryImages: string[];
  shortDesc: string;
  problem: string;
  solutionSummary: string;
  builtDetails: string[];
  keyFeatures: string[];
  techStack: string[];
  apiIntegrations?: string[];
  architectureSnippet?: {
    title: string;
    language: string;
    code: string;
  };
  challenges: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlightMetric: string;
  theme: ProjectTheme;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  relatedProjectSlug: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  summary: string;
  detail: string;
  panelBg: string;
}

export interface ImpactStat {
  num: string;
  label: string;
  metric: string;
  headline: string;
  detail: string;
  projectSlug: string;
}
