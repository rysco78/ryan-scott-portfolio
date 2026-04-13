import type { Experience, Project, Competency, Certification, HobbyProject } from '@/types';

export const competencies: Competency[] = [
  { label: 'Product Strategy & Roadmapping', descriptor: 'Multi-year portfolio planning tied to business outcomes', icon: 'Map' },
  { label: 'Regulated Industry Expertise', descriptor: 'FinTech, lending, compliance, and risk environments', icon: 'ShieldCheck' },
  { label: 'Data & Analytics Platforms', descriptor: 'Operational insights, KPIs, and decision-making at scale', icon: 'BarChart2' },
  { label: 'Executive Stakeholder Alignment', descriptor: 'Translating strategy into cross-org execution', icon: 'Users' },
  { label: 'Platform Modernization', descriptor: 'Cloud-native transformation and legacy migration', icon: 'Cloud' },
  { label: 'Team Building & PM Maturity', descriptor: 'Elevating product orgs through process and frameworks', icon: 'TrendingUp' },
];

export const experiences: Experience[] = [
  {
    id: 'att',
    badge: 'AT&T',
    badgeColor: 'orange',
    title: 'Principal Product Manager',
    company: 'AT&T',
    dates: 'Mar 2026 – Present',
    description: "Product strategy and delivery for the digital experiences that millions of everyday consumers use to discover, purchase, and manage AT&T's core products and services.",
  },
  {
    id: 'gmf-protections',
    badge: 'GMF',
    badgeColor: 'blue',
    title: 'Vice President, Product Management – GM Protections',
    company: 'GM Financial',
    dates: 'Feb 2025 – Feb 2026',
    description: 'Executive product owner for an enterprise-backed initiative to insource and scale direct-to-consumer vehicle protection products.',
  },
  {
    id: 'gmf-growth',
    badge: 'GMF',
    badgeColor: 'blue',
    title: 'Vice President, Growth',
    company: 'GM Financial',
    dates: 'Jun 2023 – Feb 2025',
    description: 'Built and led a new growth marketing organization supporting direct-to-consumer lending, dealer leads, and protection products.',
  },
  {
    id: 'gmf-lending',
    badge: 'GMF',
    badgeColor: 'blue',
    title: 'Vice President, Product Management – Direct Lending',
    company: 'GM Financial',
    dates: 'May 2019 – Jun 2023',
    description: "Led product GTM strategy and execution for GM Financial's direct-to-consumer auto refinance and lease buyout platforms.",
  },
  {
    id: 'scribbler',
    badge: 'SCR',
    badgeColor: 'purple',
    title: 'Co-Founder',
    company: 'Scribbler',
    dates: 'Nov 2017 – Jun 2025',
    description: 'Co-founded and scaled Scribbler, a profitable direct-to-consumer subscription commerce business generating $1M+ in annual revenue.',
  },
  {
    id: 'sc-vp',
    badge: 'SC',
    badgeColor: 'red',
    title: 'Vice President, Digital Products',
    company: 'Santander Consumer USA',
    dates: 'Apr 2013 – May 2019',
    description: "Owned product and customer acquisition strategy for RoadLoans, Santander Consumer's flagship direct-to-consumer automotive lending brand.",
  },
  {
    id: 'sc-director',
    badge: 'SC',
    badgeColor: 'red',
    title: 'Director, Business Development',
    company: 'Santander Consumer USA',
    dates: 'Dec 2011 – Apr 2013',
    description: 'Led development and launch of OEM captive digital platforms supporting dealer engagement and lead generation.',
  },
  {
    id: 'fis',
    badge: 'FIS',
    badgeColor: 'green',
    title: 'Product Manager',
    company: 'FIS Global',
    dates: 'Nov 2007 – Dec 2011',
    description: 'Managed a CMS-based financial services web hosting platform supporting digital experiences for banks and credit unions nationwide.',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Google AI Professional',
    issuer: 'Google',
    badge: '/badge-google-ai-professional.png',
  },
  {
    name: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    badge: '/badge-sf-agentforce.png',
  },
  {
    name: 'Agentblazer Legend 2026',
    issuer: 'Trailhead by Salesforce',
    badge: '/badge-agentblazer-legend.png',
  },
  {
    name: 'Six Sigma Green Belt',
    issuer: 'The Council for Six Sigma Certification (CSSC)',
    badge: '/badge-six-sigma-green-belt.png',
  },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'GM Protections Direct-to-Consumer (D2C) Platform',
    narrative:
      'Defined the strategy, secured investment, and led a cross-functional team through solutioning on development of e-commerce solution to convert GM owners to extended warranty (VSC) buyers outside of vehicle purchase process.',
    status: 'In Development',
    tags: ['Product Strategy', 'Roadmapping', 'Executive Stakeholder Management', 'GTM Strategy', 'Capital Raising', 'Business Case Development', 'CRM Integration', 'Cross-functional Leadership', 'Digital Commerce Platforms'],
  },
  {
    number: '02',
    title: 'Dealer (B2C) Lead Generation Programs',
    narrative:
      'Led buildout and GTM strategy for lead generation platform for Chrysler Capital, delivering best in-market lead-to-sale results for OEM. Also led GM Financial dealer leads program, delivering 2M+ leads per year to dealer network.',
    status: 'In Market',
    tags: ['Financial Services Products', 'OEM & Partner Management', 'Cross-functional Collaboration', 'Data-Driven Optimization', 'Product Vision'],
  },
  {
    number: '03',
    title: 'Mode Direct Lending (D2C) Platform',
    narrative:
      "Delivered GM Financial's first cloud-native loan origination system and first in-house native mobile application. Scaled digital lending capabilities while implementing Agile and SAFe practices to improve delivery speed, predictability, and cross-team alignment.",
    status: 'In Market',
    tags: ['Platform Strategy', 'Agile / SAFe Delivery', 'Mobile & Web Applications', 'Marketing Technology Platforms', 'CRM Integration', 'Customer Acquisition Strategy', 'GTM Strategy'],
  },
  {
    number: '04',
    title: 'Scribbler Subscription Box for Writers',
    narrative:
      'Co-founded and scaled Scribbler, a profitable direct-to-consumer subscription commerce business generating $1M+ in annual revenue. Built the company from concept to scale, owning product strategy, brand positioning, growth, and operating execution before successful exit.',
    status: 'Legacy',
    tags: ['GTM Strategy', 'Logistics Management', 'Entrepreneurship', 'Subscription Business Models', 'CX Strategy', 'Digital Platform Monetization', 'Customer Acquisition Strategy'],
  },
  {
    number: '05',
    title: 'RoadLoans Direct Lending Program',
    narrative:
      "Led scaling efforts for Santander's direct-to-consumer loan originations program, RoadLoans. Led platform evolution, customer experience improvements, and acquisition growth in a regulated financial services environment. Also managed integrated partnerships with large vendors including Cars.com, AutoTrader, Kelly Blue Book, CarMax, and LendingTree.",
    status: 'Legacy',
    tags: ['Scaling', 'Conversion Optimization', 'Media Planning', 'Partnerships', 'Loan Originations', 'Product Portfolio Management', 'P&L Ownership', 'Data-driven Decision Making', 'Digital Commerce Platforms'],
  },
];

export const hobbyProjects: HobbyProject[] = [
  {
    id: 'resume-tailor',
    name: 'Resume Tailor',
    description: 'Most resumes never reach a human — ATS software filters them first. Resume Tailor rewrites your resume against a specific job posting using Claude AI, targeting the exact keywords recruiters and ATS systems are scanning for, and retrying automatically until it hits a ≥ 80% match score.',
    tags: ['AI', 'Next.js', 'AWS Bedrock', 'Claude Sonnet 4', 'Supabase', 'Clerk'],
    detail: 'Most resumes are filtered out by ATS software before a human ever reads them. Resume Tailor solves this by parsing your existing resume (DOCX, PDF, or TXT), analyzing the job description you paste in, and using Claude AI to rewrite it with the job\'s exact keywords — without changing your job titles, companies, or dates. It scores the result against the job description and retries up to three times until it hits ≥ 80% ATS match. Signed-in users can save tailored resumes and return later to re-download. Generated DOCX files are stored in S3 and delivered via pre-signed URLs — nothing is stored on the server.',
    techStack: [
      { layer: 'Framework', tech: 'Next.js 16 (App Router)' },
      { layer: 'Language', tech: 'TypeScript' },
      { layer: 'AI', tech: 'Claude Sonnet 4 via AWS Bedrock' },
      { layer: 'Auth', tech: 'Clerk (Google OAuth + email)' },
      { layer: 'Database', tech: 'Supabase (PostgreSQL)' },
      { layer: 'File Storage', tech: 'Amazon S3 (pre-signed URLs)' },
      { layer: 'DOCX Generation', tech: 'docx npm package' },
      { layer: 'Resume Parsing', tech: 'mammoth (DOCX), pdf-parse v1 (PDF)' },
      { layer: 'Styling', tech: 'Tailwind CSS v4' },
      { layer: 'Hosting', tech: 'Vercel' },
    ],
    githubUrl: 'https://github.com/rysco78/resume-prep',
    readmeUrl: 'https://github.com/rysco78/resume-prep/blob/main/README.md',
    prodUrl: 'https://resume.ryanrscott.com',
  },
  {
    id: 'agent-co-financial',
    name: 'Agent Co. Financial',
    description: 'Portfolio site for a 12-agent AI team that designs and builds regulated digital financial products for the automotive lending industry — complete with orchestration model, mandatory compliance gates, and an active project: a soft-pull prequalification and lead generation platform for Toyota and Lexus franchise dealers.',
    tags: ['AI Agents', 'Claude AI', 'Automotive Finance', 'HTML', 'GitHub Pages', 'No-framework'],
    detail: 'Agent Co. Financial is a 12-agent AI team organized into a Core Delivery Team and a Specialist SME Team (Legal, Finance, Credit & Risk, Cybersecurity, Analytics, CX, Marketing). The portfolio site documents the orchestration model, mandatory compliance gates, and the active project — the Auto Leads Platform. The platform is a consumer-facing prequalification flow where buyers complete a soft-pull prequal and approved outcomes are delivered as ADF leads to Toyota and Lexus franchise dealers via DealerTrack and RouteOne. The site itself is a single-file static app (no build step, no framework) with client-side markdown rendering via marked.js, hosted on GitHub Pages with a custom domain.',
    techStack: [
      { layer: 'Frontend', tech: 'Vanilla HTML / CSS / JavaScript' },
      { layer: 'Markdown Rendering', tech: 'marked.js (CDN)' },
      { layer: 'Hosting', tech: 'GitHub Pages' },
      { layer: 'AI Team', tech: '12-agent Claude AI orchestration' },
    ],
    githubUrl: 'https://github.com/rysco78/agent-co-portfolio',
    readmeUrl: 'https://github.com/rysco78/agent-co-portfolio/blob/master/README.md',
    prodUrl: 'https://agents.ryanrscott.com',
  },
  {
    id: 'record-collection',
    name: 'Vinyl Collection',
    description: 'A shareable catalog for my personal vinyl record collection — built intentionally without any framework or build step to prove that a polished, fully functional app can ship as a single HTML file. Search, sort, and browse the full collection with cover art pulled from MusicBrainz.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'No-framework'],
    detail: 'A single-file HTML/CSS/JS app — no build step, no dependencies, no framework. The full collection is stored as a JavaScript array inside index.html and rendered client-side. Album art is served locally from the /img/ directory via GitHub Pages. Features include a card grid view and a compact list view, real-time search across artist, title, genre, and year, grouping by artist/genre/year, and sorting in any direction. A Python script (download_art.py) pulls cover art in bulk from MusicBrainz and the Cover Art Archive.',
    techStack: [
      { layer: 'Frontend', tech: 'Vanilla HTML / CSS / JavaScript' },
      { layer: 'Hosting', tech: 'GitHub Pages' },
      { layer: 'Data', tech: 'Inline JS array (no database)' },
      { layer: 'Art Sourcing', tech: 'Python + MusicBrainz / Cover Art Archive' },
    ],
    githubUrl: 'https://github.com/rysco78/record-collection',
    readmeUrl: 'https://github.com/rysco78/record-collection/blob/master/README.md',
    prodUrl: 'https://vinyl.ryanrscott.com',
  },
  {
    id: 'portfolio',
    name: "Ryan's Personal Portfolio",
    description: "This site — built to practice modern frontend development outside of work and serve as a living resume. The goal was a fast, polished static site that deploys automatically, with no compromises on design quality despite being built entirely with Claude Code.",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'GitHub Pages'],
    detail: 'Built from scratch with Claude Code as a static Next.js site deployed to GitHub Pages via a GitHub Actions workflow on every push to master. Uses Tailwind CSS v4 with all theme config living in globals.css (no tailwind.config.ts). Dark mode is the default and is implemented entirely through CSS custom properties toggled by a .light class — no dark: utility classes anywhere. A custom ThemeProvider persists the user\'s preference to localStorage. Framer Motion handles scroll fade-in animations via a reusable SectionFade wrapper. All site content lives in lib/data.ts as typed constants, keeping components clean and content easy to update.',
    techStack: [
      { layer: 'Framework', tech: 'Next.js 16 (App Router, static export)' },
      { layer: 'Language', tech: 'TypeScript (strict)' },
      { layer: 'Styling', tech: 'Tailwind CSS v4 + CSS custom properties' },
      { layer: 'Animations', tech: 'Framer Motion' },
      { layer: 'Icons', tech: 'lucide-react' },
      { layer: 'Fonts', tech: 'DM Serif Display + Plus Jakarta Sans (next/font)' },
      { layer: 'Hosting', tech: 'GitHub Pages' },
      { layer: 'CI/CD', tech: 'GitHub Actions' },
    ],
    githubUrl: 'https://github.com/rysco78/ryan-scott-portfolio',
    readmeUrl: 'https://github.com/rysco78/ryan-scott-portfolio/blob/master/README.md',
    prodUrl: 'https://www.ryanrscott.com',
  },
];
