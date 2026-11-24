import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    num: '01.',
    title: 'Discover',
    summary: 'Map the business bottleneck, real constraints, and goals.',
    detail:
      'Understand how the business actually makes money, where spreadsheets or manual workflows break down, and what outcome moves the needle.',
    panelBg: '#E6DFE7',
  },
  {
    num: '02.',
    title: 'Plan',
    summary: 'Design the data model, architecture, and visual direction.',
    detail:
      'Sketch clean database schemas, decoupled API flows, and playful, memorable UI compositions before writing production code.',
    panelBg: '#EAD9EC',
  },
  {
    num: '03.',
    title: 'Build',
    summary: 'Ship fast in modular iterations with real data.',
    detail:
      'Develop the website, CRM, or automation pipeline using modern TypeScript, Python, Supabase, and thoughtful motion—no fragile mockups.',
    panelBg: '#EACDEF',
  },
  {
    num: '04.',
    title: 'Launch & Improve',
    summary: 'Deploy live, verify metrics, and refine every edge case.',
    detail:
      'Push to production on Vercel, monitor real-world usage, eliminate friction, and continuously sharpen performance and UX.',
    panelBg: '#D8B3DF',
  },
];
