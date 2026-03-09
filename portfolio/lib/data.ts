import type { Experience, Project, Competency } from '@/types';

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
