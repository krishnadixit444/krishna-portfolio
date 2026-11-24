import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'soshals-crm',
    slug: 'soshals-crm',
    index: '01',
    title: 'Soshals Creator CRM',
    subtitle: 'Enterprise Creator CRM, Deliverables Matrix & Zero-Login Client Portal',
    category: 'CRM & Digital Products',
    badge: 'Flagship Platform',
    status: 'Production Live',
    year: '2026',
    role: 'Full-Stack & Systems Architect',
    heroImage: '/assets/soshals-crm-dashboard.png',
    galleryImages: [
      '/assets/soshals-crm-dashboard.png',
      '/assets/soshals-client-portal.png',
    ],
    highlightMetric: '10,650+ Steps · 15+ Enterprise APIs · Multi-Tenant RLS',
    shortDesc:
      'A comprehensive creator management platform, live deliverables tracker, and code-authenticated brand client portal built with Next.js 14 and Supabase.',
    problem:
      'Influencer marketing agencies and brand teams drown in fragmented spreadsheets, missed posting deadlines, opaque rate negotiations, and clunky client status updates.',
    solutionSummary:
      'Replaced scattered sheets with a relational multi-tenant CRM featuring consecutive creator onboarding, live post deliverable matrices, background metrics sync, and password-free client portals.',
    builtDetails: [
      'Architected an end-to-end Next.js 14 App Router application backed by Supabase PostgreSQL with strict Row-Level Security (RLS) organization isolation.',
      'Designed a streamlined Dual-Option Entry workflow with rapid consecutive creator creation ("Save & Add Another" with live session rosters) and campaign duplication.',
      'Engineered an interactive campaign deliverables matrix featuring collapsible delivered-post inputs, multi-currency rate calculation, and real-time deliverable status badges.',
      'Developed a zero-login, code-authenticated Client Portal (CodeClientPortalShell) allowing brand clients to securely inspect active campaigns, creator rosters, and delivered posts.',
      'Constructed a modular background metrics sync engine (syncEngine.ts, providerRegistry.ts) orchestrating social telemetry refreshes across platforms.',
      'Implemented soft-delete architecture with full Recycle Bin audit and recovery capabilities for high-value client and creator records.',
    ],
    keyFeatures: [
      'Dual-Option Entry & Session Roster Creator',
      'Zero-Login Client Portal with RLS Enforcement',
      'Modular Social Metrics Sync Engine',
      'Live Post Deliverables Matrix & Rates Manager',
      'Soft-Delete & Recovery Audit Dashboard',
      'Multi-Currency Conversion & Live FX Rates',
    ],
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'TanStack Query',
      'TanStack Table',
      'Recharts',
      'Radix UI',
    ],
    apiIntegrations: [
      'Supabase Auth & PostgreSQL',
      'LinkedIn Data API',
      'Exa Neural Search API',
      'People Data Labs (PDL)',
      'Hunter.io Verification',
      'Apify Instagram Scraper',
      'ContactOut API',
      'Prospeo API',
    ],
    architectureSnippet: {
      title: 'Supabase RLS Policy & Zero-Login Client Token Shell',
      language: 'sql',
      code: `CREATE POLICY "Organizations only view own campaign deliverables"
ON campaign_creators
FOR SELECT
USING (
  organization_id IN (
    SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
  )
);`,
    },
    challenges: [
      'Managing complex relational states between Creators, Campaigns, Deliverables, Posts, and Organization Accounts with high query efficiency.',
      'Enforcing strict client-facing authorization boundaries through scoped access codes while maintaining live campaign updates.',
      'Handling diverse social media post telemetry and erratic third-party rate limits across background syncs.',
    ],
    results: [
      'Deployed to production on Vercel handling multi-campaign agency workflows.',
      'Reduced manual creator onboarding and campaign assignment time by over 70%.',
      'Centralized 15+ distinct data providers and third-party APIs into one cohesive workspace.',
    ],
    githubUrl: 'https://github.com/krishnadixit444',
    theme: {
      bg: '#F4CED3',
      surface: '#F6F6ED',
      accent: '#E33529',
      text: '#693413',
      muted: '#854720',
    },
  },
  {
    id: 'x-creator-scraper',
    slug: 'x-creator-scraper',
    index: '02',
    title: 'X Quote-Tweet Crawler',
    subtitle: 'Reverse-Engineered GraphQL Mining & 2nd-Degree Network Traversal',
    category: 'AI & Autonomous Scrapers',
    badge: '5,380+ Engineering Iterations',
    status: 'Active Pipeline',
    year: '2026',
    role: 'Data Mining & Pipeline Architect',
    heroImage: '/assets/x-scraper-architecture.png',
    galleryImages: [
      '/assets/x-scraper-architecture.png',
      '/assets/x-scraper-terminal.png',
    ],
    highlightMetric: '100,000+ Nodes Crawled · >92% Geo Accuracy · $0 API Cost',
    shortDesc:
      'A multi-stage autonomous data mining pipeline that reverse-engineers Twitter/X GraphQL endpoints to uncover brand-partnered creators and verify US/EU geolocation.',
    problem:
      'X API pricing tiers ($100 to $5,000/month) block scalable creator discovery, while standard search lacks geographic filtering and sponsor attribution.',
    solutionSummary:
      'Built an autonomous Python crawler with GraphQL query hashing, recursive 2nd-degree quote-tweet expansion, NLP bio geo-inference, and persistent disk caching.',
    builtDetails: [
      'Reverse-engineered internal Twitter/X GraphQL endpoints (gql_endpoints.json) and query hashes for search and profile enrichment.',
      'Built a recursive 2nd-degree network expansion algorithm (expand_network.py, phase3_expand_and_verify.py) crawling mutual quote tweets and sponsor mentions.',
      'Formulated an NLP heuristic geo-inference engine parsing bio strings, location metadata, and timezone signals for strict US/EU qualification.',
      'Constructed a multi-layered persistent JSON caching layer (originals_cache.json, tweets_cache.json, users_cache.json) avoiding duplicate fetches.',
    ],
    keyFeatures: [
      'Direct GraphQL Query Hashing & Session Cycling',
      '2nd-Degree Quote-Tweet Graph Traversal',
      'NLP Geolocation & Timezone Classifier',
      'Sponsor Attribution & Brand Deal Logic',
      'Multi-Tiered Memory & Disk Cache Layer',
      'Automated Candidate Deduplication & QA Exports',
    ],
    techStack: [
      'Python 3',
      'Twitter GraphQL Engine',
      'Regex & NLP Heuristics',
      'JSON Schema Caching',
      'Async Request Pipelines',
    ],
    architectureSnippet: {
      title: '2nd-Degree Quote-Tweet Expansion Loop',
      language: 'python',
      code: `async def traverse_2nd_degree_network(seed_handle: str, max_depth: int = 2):
    network = load_cache("tweets_cache.json")
    candidates = await gql_client.fetch_quote_tweets(seed_handle)
    for cand in candidates:
        geo = evaluate_nlp_geolocation(cand.bio, cand.location)
        if geo.is_us_or_eu and cand.followers > 5000:
            append_verified_pool(cand, source=seed_handle)`,
    },
    challenges: [
      'Navigating aggressive rate limits, IP fingerprinting, and rotating GraphQL query IDs without pipeline interruptions.',
      'Resolving ambiguous bio location strings, colloquialisms, and emoji flags into reliable US/EU classifications.',
    ],
    results: [
      'Crawled and filtered tens of thousands of candidate profiles with zero recurring API subscription fees.',
      'Achieved over 92% verified US/EU creator accuracy across delivery batches.',
    ],
    githubUrl: 'https://github.com/krishnadixit444/x-creator-discovery-pipeline',
    theme: {
      bg: '#AFD8FB',
      surface: '#F6F6ED',
      accent: '#2B6786',
      text: '#124E6D',
      muted: '#2B6786',
    },
  },
  {
    id: 'ig-creator-scraper',
    slug: 'ig-creator-scraper',
    index: '03',
    title: 'Instagram Creator Engine',
    subtitle: '6-Stage Autonomous Scraping, Bio-Auditing & Email Extraction Suite',
    category: 'AI & Autonomous Scrapers',
    badge: '1,360+ Pipeline Runs',
    status: 'Active Pipeline',
    year: '2026',
    role: 'Automation & Lead-Gen Engineer',
    heroImage: '/assets/ig-scraper-pipeline.png',
    galleryImages: [
      '/assets/ig-scraper-pipeline.png',
      '/assets/ig-scraper-roster.png',
    ],
    highlightMetric: '3 Curated Enterprise Datasets · 85%+ Valid Email Discovery',
    shortDesc:
      'Autonomous 6-phase Instagram discovery engine extracting verified business emails, Linktree/Beacons media kits, and sponsored brand history for US/EU creators.',
    problem:
      'Finding niche AI, SaaS, and UGC creators on Instagram with deliverable business emails requires hours of manual scrolling and bounces off dead-end inboxes.',
    solutionSummary:
      'Engineered a 6-stage automated discovery, chaining, geo-verification, media-kit parsing, and deliverability auditing pipeline exporting styled CSV/XLSX rosters.',
    builtDetails: [
      'Designed an autonomous 6-phase pipeline (ai_auto_pipeline.py): Discovery, Chaining, Profile Enrichment, Geo-Verification, Reach Classification, and Email Audit.',
      'Built a multi-source email extraction engine parsing obfuscated bio patterns, Beacons/Linktree media kits, and public business contacts.',
      'Authored deep audit and comparison scripts (compute_stats.py, deep_profile_diff.py, audit_all_125.py) benchmarking email deliverability.',
      'Compiled three structured creator rosters: AI Creator Partnerships, Apps & Ads Roster, and Tech UGC Software Partnerships.',
    ],
    keyFeatures: [
      '6-Stage Autonomous Discovery Architecture',
      'Beacons & Linktree Media Kit Parsing',
      'Bio Obfuscation & Email Deliverability Audit',
      'US, UK & European Geo-Verification',
      'Automated CSV & Styled Excel XLSX Exports',
      'Statistical QA Markdown Reporting',
    ],
    techStack: [
      'Python 3',
      'Pandas',
      'OpenPyXL',
      'Regular Expressions',
      'Linktree / Beacons Parsers',
      'Concurrent Processing',
    ],
    architectureSnippet: {
      title: 'Multi-Source Media Kit Contact Extraction',
      language: 'python',
      code: `async def extract_contacts(creator_profile):
    emails = extract_bio_emails(creator_profile.bio)
    if not emails and creator_profile.external_url:
        media_kit = await resolve_media_kit(creator_profile.external_url)
        emails.extend(media_kit.contact_emails)
    return audit_deliverability(emails)`,
    },
    challenges: [
      'Catching obfuscated emails in Instagram bios ("[at]", spacing, dot substitutes) without false positives.',
      'Extracting structured agency/business contacts programmatically from third-party Linktree and Beacons mobile pages.',
    ],
    results: [
      'Delivered three verified US/EU creator rosters used in active brand partnership outreach.',
      'Achieved 85%+ valid email discovery rate across AI and tech creator pools.',
    ],
    githubUrl: 'https://github.com/krishnadixit444/instagram-creator-intelligence',
    theme: {
      bg: '#EAD9EC',
      surface: '#F6F6ED',
      accent: '#E33529',
      text: '#693413',
      muted: '#854720',
    },
  },
  {
    id: 'sanctuary-living',
    slug: 'sanctuary-living',
    index: '04',
    title: 'Sanctuary Living',
    subtitle: 'Student Campus Housing Platform & Interactive 3D Room Configurator',
    category: 'Web Applications',
    badge: 'Live on Vercel',
    status: 'Production Live',
    year: '2026',
    role: 'Product Creator & Web Developer',
    heroImage: '/assets/sanctuary-living-hero.png',
    galleryImages: [
      '/assets/sanctuary-living-hero.png',
      '/assets/campus-housing-scripts.png',
    ],
    highlightMetric: 'Live on Vercel · 3D Three.js Room Viewer · 4 Contractual SLAs',
    shortDesc:
      'A student campus housing transformation platform pairing guaranteed 48h hygiene SLAs, <10m safety protocols, and transparent rent modeling with an interactive 3D room viewer.',
    problem:
      'University campus accommodation often suffers from hidden rental fees, broken maintenance accountability, and unsafe infrastructure.',
    solutionSummary:
      'Built and deployed a production web platform live on Vercel combining a Three.js interactive room visualizer with 4 enforceable contractual SLA pillars.',
    builtDetails: [
      'Developed and deployed the live production web application at sanctuary-campus-living.vercel.app.',
      'Implemented an interactive 3D room visualizer using Three.js and WebGL for exploring Single, Double, and Triple room configurations.',
      'Formalized 4 Contractual Pillars: 48h maintenance SLAs with QR logs, <10m emergency safety with biometric access, transparent rent with 15% student subsidies, and mess nutrition audits.',
      'Authored a 12-month phased implementation roadmap and full Project Management governance charter.',
    ],
    keyFeatures: [
      'Interactive 3D Room Configurator (Single/Double/Triple)',
      '4 Contractual SLA Pillars & QR Incident Logs',
      'Zero-Hidden-Fee Rent & 15% Subsidy Modeling',
      'Biometric Access & <10m SOS Dispatch Blueprint',
      'Responsive Dark UI with Smooth Scroll Choreography',
    ],
    techStack: [
      'HTML5',
      'Tailwind CSS',
      'Three.js / WebGL',
      'JavaScript (ES6+)',
      'Vercel Deployment',
    ],
    challenges: [
      'Keeping real-time WebGL 3D room rendering snappy and responsive across mobile and laptop viewports.',
      'Translating formal project management governance into an intuitive consumer-grade web experience.',
    ],
    results: [
      'Live in production at sanctuary-campus-living.vercel.app.',
      'Project Management charter and website demo delivered with academic commendation.',
    ],
    liveUrl: 'https://sanctuary-campus-living.vercel.app',
    githubUrl: 'https://github.com/krishnadixit444/sanctuary-campus-living',
    theme: {
      bg: '#F3F3E9',
      surface: '#FFFFFF',
      accent: '#E33529',
      text: '#1E1B18',
      muted: '#5D554E',
    },
  },
  {
    id: 'x-insights-extension',
    slug: 'x-insights-extension',
    index: '05',
    title: 'X-Insights Extension',
    subtitle: 'Zero-API Local Analytics & Engagement Velocity Engine for Chromium',
    category: 'Browser Tools & Systems',
    badge: 'Manifest V3 Build',
    status: 'Open Source Build',
    year: '2026',
    role: 'Extension Developer',
    heroImage: '/assets/x-insights-panel.png',
    galleryImages: [
      '/assets/x-insights-panel.png',
      '/assets/x-scraper-architecture.png',
    ],
    highlightMetric: 'Privacy-First Local Interception · Manifest V3 · $0 API Fees',
    shortDesc:
      'A privacy-first Chromium extension that passively intercepts and analyzes Twitter/X profile velocity, quote-tweet amplification, and post stats locally in your browser.',
    problem:
      'Creators and marketers want granular post engagement velocity on X without paying steep SaaS analytics fees or handing over account credentials.',
    solutionSummary:
      'Built an unpacked Manifest V3 TypeScript extension intercepting loaded GraphQL responses locally with chrome.storage persistence and JSON export.',
    builtDetails: [
      'Architected an unpacked Chromium extension complying with Manifest V3 security rules using TypeScript and a custom build.mjs bundler.',
      'Engineered passive network listeners capturing x.com GraphQL payloads locally as the user browses feeds.',
      'Built an instant local analytics panel displaying post amplification ratios, bookmark velocity, and historical baselines without external servers.',
      'Stored all metrics in chrome.storage.local with one-click JSON export.',
    ],
    keyFeatures: [
      'Zero-API Passive GraphQL Payload Interception',
      'Live Post Amplification & Velocity Breakdown',
      'Quote-Tweet vs. Direct Repost Ratio Tracking',
      '100% Client-Side Storage (Zero Telemetry)',
      'One-Click JSON Metrics Export',
    ],
    techStack: [
      'TypeScript',
      'Chrome Extension MV3',
      'build.mjs',
      'Tailwind CSS',
      'Chrome Local Storage',
    ],
    challenges: [
      'Parsing evolving, nested X GraphQL payloads inside browser security sandbox boundaries.',
      'Preserving reliable background state across Manifest V3 service worker lifecycles.',
    ],
    results: [
      'Working unpacked extension running across Chrome, Brave, and Edge.',
      'Eliminated recurring SaaS analytics costs for daily X profile intelligence.',
    ],
    githubUrl: 'https://github.com/arslandevs/X-Insights',
    theme: {
      bg: '#F4CED3',
      surface: '#F6F6ED',
      accent: '#E33529',
      text: '#693413',
      muted: '#854720',
    },
  },
  {
    id: 'labourlink-platform',
    slug: 'labourlink-platform',
    index: '06',
    title: 'LabourLink System',
    subtitle: 'Classical Management Operational Architecture & Social Innovation Model',
    category: 'Browser Tools & Systems',
    badge: 'Management Systems',
    status: 'Academic System',
    year: '2026',
    role: 'Systems & Operations Architect',
    heroImage: '/assets/labourlink-preview.png',
    galleryImages: [
      '/assets/labourlink-preview.png',
      '/assets/mail_merge_workflow.png',
    ],
    highlightMetric: '5 Management Functions · ₹10 Lakh Budget Variance Model',
    shortDesc:
      'An operational platform blueprint applying Henri Fayol’s 5 Functions of Management to eliminate middlemen exploitation and structure urban daily-wage labor markets.',
    problem:
      'Daily-wage workers at urban labour chowks face wage theft, opaque matching, zero verification, and extreme income volatility.',
    solutionSummary:
      'Designed a 4-stage worker-free operational system backed by grassroots assisted onboarding, escrow-protected settlements, and a ₹10 Lakh variance budget.',
    builtDetails: [
      'Synthesized Henri Fayol’s Classical 5 Functions (Planning, Organising, Staffing, Directing, Controlling) into a concrete operational blueprint.',
      'Structured a 4-stage matching workflow: Demand Generation, Assisted Grassroots Onboarding, Direct Matching, and Escrow Settlements.',
      'Formulated a ₹10 Lakh financial controlling model with variance tracking and bilateral audit oversight.',
      'Defined a tripartite governance equilibrium balancing Worker dignity, Employer reliability, and Civic/CSR accountability.',
    ],
    keyFeatures: [
      '5-Function Classical Management Architecture',
      'Zero-Commission Worker-Free Promise',
      'Assisted Grassroots Digital Onboarding',
      'Escrow-Backed Direct Wage Settlement',
      '₹10 Lakh Budget Variance Model',
    ],
    techStack: [
      'Operations Research',
      'Workflow Engineering',
      'Classical Management Theory',
      'Financial Modeling',
      'System Architecture',
    ],
    challenges: [
      'Designing a verification and matching workflow usable by digitally underserved daily-wage workers.',
      'Structuring sustainable platform economics without charging workers registration or commission fees.',
    ],
    results: [
      'Commended for combining rigorous management theory with practical grassroots systems design.',
      'Delivered complete operational scripts, governance matrices, and pilot launch frameworks.',
    ],
    githubUrl: 'https://github.com/krishnadixit444/labourlink-operational-system',
    theme: {
      bg: '#AFD8FB',
      surface: '#F6F6ED',
      accent: '#2B6786',
      text: '#124E6D',
      muted: '#2B6786',
    },
  },
  {
    id: 'mba-automation-suite',
    slug: 'mba-automation-suite',
    index: '07',
    title: 'Automated Engineering & Doc Suite',
    subtitle: 'Python Report Compilation, Vector Schematics & Print-Ready Web Systems',
    category: 'Browser Tools & Systems',
    badge: 'Automated Engineering',
    status: 'Academic System',
    year: '2026',
    role: 'Automation & Tooling Developer',
    heroImage: '/assets/access_rdbms_architecture.png',
    galleryImages: [
      '/assets/access_rdbms_architecture.png',
      '/assets/email_protocols_architecture.png',
      '/assets/io_architecture.png',
      '/assets/search_engine_architecture.png',
      '/assets/student_entry_form_preview.png',
    ],
    highlightMetric: '100+ Automated Pages · Vector Schematics · Top IM-104C Marks',
    shortDesc:
      'A programmatic Python and CSS Paged Media pipeline generating technical architecture schematics, print-ready lab reports, and validated interactive web forms.',
    problem:
      'Manually formatting dense technical laboratory documentation and architecture schematics leads to broken pagination, inconsistent margins, and wasted hours.',
    solutionSummary:
      'Automated the entire pipeline with Python scripts generating vector diagrams, DOCX/PDF publications, and interactive calculation forms.',
    builtDetails: [
      'Engineered Python compilation scripts (generate_print_pdf.py, build_assignment_docx.py, generate_diagrams.py) for repeatable publication.',
      'Programmatically rendered vector schematics for Relational Databases, I/O Bus Architecture, Email Protocols, and Search Indexing.',
      'Applied CSS Paged Media (@page bleed rules, running headers, dynamic counters) for clean print output.',
      'Built interactive client-side validation & calculation web forms (student_entry_form.html, product_purchase_order.html).',
    ],
    keyFeatures: [
      'Programmatic DOCX & PDF Compilation',
      'Generated Hardware & RDBMS Vector Diagrams',
      'Print-Ready CSS Paged Media Layouts',
      'Interactive Purchase Order & Entry Validation',
    ],
    techStack: [
      'Python 3',
      'python-docx & ReportLab',
      'Matplotlib',
      'CSS Paged Media',
      'HTML5 / JavaScript',
    ],
    challenges: [
      'Maintaining crisp typographic parity between Word DOCX exports and CSS Paged Media PDF builds.',
      'Drawing clean relational database and network architecture diagrams purely from code.',
    ],
    results: [
      'Compiled 100+ pages of technical lab documentation with zero manual formatting errors.',
      'Achieved top practical marks in Computer Application & Web Technology (IM-104C) at IIPS DAVV.',
    ],
    githubUrl: 'https://github.com/krishnadixit444/mba-automated-doc-suite',
    theme: {
      bg: '#E6DFE7',
      surface: '#FFFFFF',
      accent: '#693413',
      text: '#693413',
      muted: '#854720',
    },
  },
];
