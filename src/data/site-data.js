// ============================================================
// NexGenByte — Centralized Site Data
// ============================================================

export const SERVICES = [
  {
    slug: 'website-design',
    title: 'Website Design',
    icon: 'Layers',
    short: 'Brand-led, conversion-focused design systems built to perform.',
    description: 'We design websites that work as hard as they look. Every layout decision is anchored in conversion data, user behavior research, and your specific business goals.',
    outcome: 'Higher conversion rates, stronger brand authority, measurable lead growth.',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Code2',
    short: 'Custom-coded, framework-based builds. No page builders.',
    description: 'Every site we build is hand-coded using modern frameworks. No drag-and-drop shortcuts, no bloated plugins — just clean, fast, maintainable code.',
    outcome: 'Sub-2s load times, zero technical debt, sites that scale with your business.',
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    icon: 'Target',
    short: 'High-conversion single-purpose pages for paid and organic campaigns.',
    description: 'A landing page is not a homepage. It has one job: convert traffic into leads. We build them with rigorous A/B-testable structure, proven copy patterns, and zero distraction.',
    outcome: 'Lower cost-per-acquisition, higher lead volume from existing ad spend.',
  },
  {
    slug: 'nextjs-development',
    title: 'Next.js Development',
    icon: 'Zap',
    short: 'Performance-first, modern React architecture at its best.',
    description: 'Next.js is our primary framework for a reason: it delivers the best combination of developer experience, performance, and SEO out of any React-based option available.',
    outcome: 'Lighthouse 95+ scores, server-side rendering, incremental static regeneration.',
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    icon: 'Globe',
    short: 'Custom themes built from scratch — not off-the-shelf templates.',
    description: 'When clients need editorial control, WordPress delivers. We build custom block themes and headless WordPress setups that give editors power without sacrificing performance.',
    outcome: 'Easy content management, custom admin workflows, no template bloat.',
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    icon: 'ShoppingBag',
    short: 'Custom storefronts engineered to convert browsers into buyers.',
    description: 'Generic Shopify themes leave money on the table. Our custom storefronts are built around your specific product catalog, customer journey, and conversion goals.',
    outcome: 'Higher average order value, lower cart abandonment, brand-differentiated UX.',
  },
  {
    slug: 'seo',
    title: 'SEO',
    icon: 'TrendingUp',
    short: 'Technical, on-page, and content SEO that drives qualified traffic.',
    description: 'We approach SEO as an engineering discipline — technical audits, Core Web Vitals, structured data, and content strategy that targets the queries your buyers actually use.',
    outcome: 'More organic qualified traffic, lower dependence on paid acquisition.',
  },
  {
    slug: 'website-optimization',
    title: 'Website Optimization',
    icon: 'Gauge',
    short: 'CRO, speed, and Core Web Vitals improvements for existing sites.',
    description: 'Your best next lead might already be visiting your site. We diagnose and fix the friction points — slow load times, confusing UX, weak CTAs — that are costing you conversions.',
    outcome: 'Measurable improvement in conversion rate and Core Web Vitals within 30 days.',
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    icon: 'Shield',
    short: 'Ongoing support, security, and update retainers for peace of mind.',
    description: 'A website is not a one-time project. Security patches, CMS updates, performance monitoring, and content changes require ongoing expert attention.',
    outcome: '99.9% uptime, zero security incidents, always-current software stack.',
  },
  {
    slug: 'ai-integrations',
    title: 'AI Integrations',
    icon: 'Bot',
    short: 'AI-powered assistants, search, and personalization on your site.',
    description: 'From trained chatbots that qualify leads 24/7 to AI-powered product recommendations, we integrate AI where it genuinely improves business outcomes — not just for novelty.',
    outcome: 'Automated lead qualification, higher engagement, reduced support overhead.',
  },
  {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    icon: 'LayoutDashboard',
    short: 'Portals, dashboards, and internal tools built to your exact workflow.',
    description: 'When off-the-shelf software does not fit your process, we build web applications that do. From client portals to operational dashboards — fully custom, fully owned.',
    outcome: 'Processes that run faster, teams that work smarter, no recurring SaaS fees.',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'PenTool',
    short: 'Research-led design for web products that users actually choose to use.',
    description: 'Good UX is not decoration — it is the difference between a product people use and one they abandon. We conduct user research, map journeys, and design interfaces that remove friction.',
    outcome: 'Higher product adoption, lower churn, measurable improvement in task completion.',
  },
];

export const CASE_STUDIES = [
  {
    slug: 'parkside-dental',
    title: 'Parkside Dental',
    industry: 'Healthcare & Dental',
    projectType: 'Healthcare Website',
    tag: 'Website Design + SEO',
    result: '+142% qualified leads in 90 days',
    metric: '+142%',
    metricLabel: 'Qualified Leads',
    color: '#1a3a4a',
    description: 'Design and develop a modern dental clinic website focused on patient trust, appointment booking, accessibility, mobile responsiveness, SEO, and clean user experience.',
    problem: 'Parkside Dental was generating walk-in volume from word of mouth but had virtually no digital lead pipeline. Their website was built on a generic dental template, loaded in over 6 seconds on mobile, and had a contact form that nobody used.',
    strategy: 'A mobile-first redesign anchored around patient trust signals — before/after galleries, verified Google reviews, same-day appointment booking, and clear service pages for each treatment category.',
    results: { leads: '+142%', loadTime: '1.1s', bounceRate: '-54%', rank: 'Top 3' },
    testimonial: { quote: "They didn't redesign our website — they rebuilt how we generate patients. Within three months we stopped relying on referrals.", name: 'Dr. Sarah Okafor', title: 'Principal Dentist', company: 'Parkside Dental' },
    liveUrl: 'https://gleeful-tarsier-efbbb8.netlify.app/',
    imageName: 'parkside.jpg',
    stack: ['React', 'Vite', 'Tailwind CSS v4', 'GSAP', 'React Router'],
    highlights: ['Responsive design', 'Appointment booking flow', 'Service pages', 'Accessibility', 'SEO optimization', 'Fast loading', 'Clean UI', 'Modern healthcare branding']
  },
  {
    slug: 'meridian-analytics',
    title: 'Meridian Analytics',
    industry: 'SaaS',
    projectType: 'SaaS Website',
    tag: 'Web Development + CRO',
    result: '-38% bounce rate, +67% trial signups',
    metric: '+67%',
    metricLabel: 'Trial Signups',
    color: '#1a2a3a',
    description: 'Modern SaaS marketing website built with a premium interface focused on communicating product value through clean layouts, interactive UI, responsive components, and polished visual hierarchy.',
    problem: 'Meridian Analytics had strong product-market fit but a marketing site that buried the value proposition under feature lists. Paid acquisition was expensive and bounce rates on the pricing page were 74%.',
    strategy: 'A complete homepage and pricing page rebuild centered on outcomes for each buyer persona (VP of Data, Head of Operations, CFO), with a simplified free-trial flow reduced from 7 fields to 2.',
    results: { trials: '+67%', bounce: '-38%', cpa: '-31%', ltv: '+22%' },
    testimonial: { quote: 'Our previous agency built us a beautiful site that didn\'t convert. NexGenByte built us one that actually sells.', name: 'Marcus Chen', title: 'VP Marketing', company: 'Meridian Analytics' },
    liveUrl: 'https://6a53daf48005fc46c3f90442--joyful-madeleine-74fb0e.netlify.app/#landing',
    imageName: 'meridian.jpg',
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'React'],
    highlights: ['Modern SaaS design', 'Dashboard preview', 'Responsive layouts', 'Clean typography', 'Conversion-focused landing page', 'Performance optimization', 'Professional UI system']
  },
  {
    slug: 'volta-supply-co',
    title: 'Volta Supply Co.',
    industry: 'Ecommerce',
    projectType: 'Ecommerce Website',
    tag: 'Shopify Development + Speed Optimization',
    result: '2.1s → 0.8s LCP, +29% revenue',
    metric: '+29%',
    metricLabel: 'Revenue Uplift',
    color: '#2a1a0a',
    description: 'Modern ecommerce storefront emphasizing clean product presentation, intuitive navigation, responsive shopping experience, and performance-first frontend architecture.',
    problem: 'Volta Supply Co. was running significant ad spend to a Shopify storefront that loaded in over 4 seconds on mobile. Their conversion rate was 1.1% against an industry benchmark of 3%+.',
    strategy: 'Complete custom Shopify theme rebuild, critical-path CSS optimization, image pipeline overhaul with AVIF, and a redesigned product detail page tested across six layout variants.',
    results: { lcp: '0.8s', conversion: '+164%', revenue: '+29%', returns: '-18%' },
    testimonial: { quote: 'The speed alone would have paid for the project. The conversion rate improvement paid for it three times over.', name: 'Priya Nair', title: 'Head of Digital', company: 'Volta Supply Co.' },
    liveUrl: 'https://jazzy-sprinkles-bc170a.netlify.app/#/home',
    imageName: 'volta.jpg',
    stack: ['React', 'GSAP', 'Tailwind CSS', 'Shopify Storefront API'],
    highlights: ['Ecommerce UI', 'Product catalog', 'Mobile shopping experience', 'Optimized layouts', 'Fast loading', 'Modern design', 'Conversion-focused interface']
  }
];


export const TESTIMONIALS = [
  {
    quote: "They didn't just redesign our site — they rebuilt how we generate leads. Within 60 days we had a waiting list for the first time in 12 years.",
    name: 'Dr. Sarah Okafor',
    title: 'Principal Dentist',
    company: 'Parkside Dental',
    initials: 'SO',
  },
  {
    quote: "Our previous agency built us a beautiful site that didn't convert. NexGenByte built us one that actually sells. The difference is strategy.",
    name: 'Marcus Chen',
    title: 'VP Marketing',
    company: 'Meridian Analytics',
    initials: 'MC',
  },
  {
    quote: "The speed alone would have paid for the project. The conversion rate improvement paid for it three times over. Genuinely exceptional work.",
    name: 'Priya Nair',
    title: 'Head of Digital',
    company: 'Volta Supply Co.',
    initials: 'PN',
  },
  {
    quote: "I've worked with four agencies in the past decade. NexGenByte is the only one that talks about business outcomes first and design second. That's the right order.",
    name: 'James Whitfield',
    title: 'CEO',
    company: 'Whitfield & Associates',
    initials: 'JW',
  },
];

export const STATS = [
  { number: 120, suffix: '+', label: 'Websites Launched' },
  { number: 98, suffix: '%', label: 'Client Retention Rate' },
  { number: 2.3, suffix: 'x', label: 'Avg. Lead Increase' },
  { number: 1.1, suffix: 's', label: 'Avg. Load Time' },
];

export const FAQ = [
  {
    question: 'How do you price your projects?',
    answer: 'We price by project scope, not by the hour. After an initial strategy call, we scope the work in detail and provide a fixed-price proposal. No billing surprises. Packages start from a defined scope with transparent inclusions — see our Pricing page for ranges.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Landing pages: 2–3 weeks. Marketing websites: 6–10 weeks. Custom applications: 12–20+ weeks. Timelines depend on scope and how quickly you can provide feedback — we hold two dedicated review checkpoints per phase to keep things moving.',
  },
  {
    question: "What's included in a website project?",
    answer: 'Every project includes: discovery and strategy, design (wireframes + visual design), development, content integration, SEO foundations (meta, schema, sitemap), cross-browser and cross-device testing, and a 30-day post-launch support window.',
  },
  {
    question: 'Do you outsource any of the work?',
    answer: 'No. Strategy, design, and development are all done by our in-house senior team. We do not offshore or subcontract project delivery. This is how we maintain the quality standard our clients expect.',
  },
  {
    question: 'Who owns the website code after launch?',
    answer: 'You do. Full code ownership transfers to you on final payment. We can also provide a handover session and documentation so your team can make routine updates independently.',
  },
  {
    question: 'How do you measure success?',
    answer: "We agree on specific KPIs during discovery — usually a combination of conversion rate, lead volume, organic traffic, and Core Web Vitals scores. We report against these at the 30, 60, and 90-day marks post-launch. We don't consider a project finished until the numbers move.",
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes. We offer monthly maintenance retainers covering security updates, CMS updates, performance monitoring, uptime tracking, and a fixed number of content change hours per month. Ask about this during your strategy call.',
  },
  {
    question: 'What if I already have a website — can you improve it?',
    answer: 'Absolutely. Website optimization (CRO, speed, SEO) is one of our most in-demand services. We audit your existing site, identify the highest-impact improvements, and implement them — often without a full rebuild.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    duration: 'Week 1',
    description: 'We learn your business, your buyers, and your competition. In-depth discovery sessions, analytics review, competitor audit, and user research form the foundation every decision is built on.',
    deliverable: 'Discovery document, competitive audit, agreed KPIs.',
  },
  {
    number: '02',
    title: 'Strategy',
    duration: 'Week 1–2',
    description: 'Data from discovery shapes the site architecture, content hierarchy, and conversion strategy. We define the user journey, decide on the technical stack, and align on the project roadmap.',
    deliverable: 'Sitemap, user journey map, technical specification, content brief.',
  },
  {
    number: '03',
    title: 'Design',
    duration: 'Week 2–5',
    description: 'Wireframes first, high-fidelity design second. We share each phase for review before advancing. The design system built here becomes the foundation for every page.',
    deliverable: 'Wireframes, design system, full high-fidelity mockups in Figma.',
  },
  {
    number: '04',
    title: 'Build',
    duration: 'Week 5–9',
    description: 'Development starts from an approved design. We build in weekly sprint cycles with staging reviews, so you see real progress — not a big reveal at the end.',
    deliverable: 'Staging site, code repository, CMS configuration.',
  },
  {
    number: '05',
    title: 'Launch & Optimize',
    duration: 'Week 9–10 + 30 days',
    description: 'Pre-launch QA across all devices and browsers. Go-live with performance monitoring active from day one. A 30-day post-launch window addresses any issues and begins the optimization cycle.',
    deliverable: 'Live site, Lighthouse reports, 30-day optimization summary.',
  },
];

export const INDUSTRIES = [
  {
    slug: 'local-businesses',
    title: 'Local Businesses',
    icon: 'MapPin',
    pain: 'Competitors with worse service are winning online because they invested in a better website.',
    outcome: 'A site that turns local search traffic into booked appointments and phone calls.',
  },
  {
    slug: 'healthcare-dental',
    title: 'Healthcare & Dental',
    icon: 'Heart',
    pain: 'Patients research online before they call. A slow or generic site loses them before you ever speak.',
    outcome: 'A trust-first digital presence that fills your schedule with higher-value patients.',
  },
  {
    slug: 'saas',
    title: 'SaaS',
    icon: 'Cloud',
    pain: 'High traffic, low trial conversion. Visitors understand the product but do not see themselves in it.',
    outcome: 'A marketing site that speaks to each buyer persona with the precision a product deserves.',
  },
  {
    slug: 'startups',
    title: 'Startups',
    icon: 'Rocket',
    pain: 'Investor and customer confidence depends on first impressions, and your current site undersells the vision.',
    outcome: 'A credibility-first site that attracts customers, investors, and top-tier hires.',
  },
  {
    slug: 'b2b',
    title: 'B2B',
    icon: 'Briefcase',
    pain: 'Long sales cycles mean buyers research deeply. Your site needs to do the work your sales team cannot do at 2 AM.',
    outcome: 'A content-rich, authority-building site that shortens the sales cycle.',
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    icon: 'Award',
    pain: 'Referral business is good but has a ceiling. Your website should be generating qualified inquiries on its own.',
    outcome: 'A premium online presence that attracts clients worth working with.',
  },
];

export const TECHNOLOGIES = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'PostgreSQL', 'Shopify', 'WordPress', 'Framer Motion', 'GSAP',
  'Vercel', 'Supabase', 'Stripe', 'Figma', 'Webflow',
];

export const TEAM = [
  { name: 'Hadi anjum', role: 'Founder & Full Stack Developer', initials: 'HA', picture: '/src/assets/hadipicture.png' },
  { name: 'Leila Reza', role: 'Head of Development', initials: 'LR' ,
    picture: 'https://images.unsplash.com/photo-1699899657680-421c2c2d5064?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
  { name: 'Tom Nakamura', role: 'Senior UX Designer', initials: 'TN' ,
    picture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
  { name: 'Nia Osei', role: 'SEO & Conversion Strategist', initials: 'NO' ,
    picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
];

export const CLIENTS = [
  { name: 'Parkside Dental', industry: 'Healthcare' },
  { name: 'Meridian Analytics', industry: 'SaaS' },
  { name: 'Volta Supply Co.', industry: 'Ecommerce' },
  { name: 'Whitfield & Associates', industry: 'Professional Services' },
  { name: 'Clearbrook Health', industry: 'Healthcare' },
  { name: 'Strata Ventures', industry: 'Startups' },
  { name: 'Fenwick Legal', industry: 'Professional Services' },
  { name: 'Orbis Consulting', industry: 'B2B' },
];

export const PRICING = [
  {
    name: 'Landing Page',
    tagline: 'Single-purpose, high-conversion page for campaigns.',
    price: 'Starting at $298',
    ideal: 'For paid campaigns, product launches, lead magnets.',
    features: [
      'Discovery & strategy session',
      'Custom design (1 page)',
      'Mobile-first development',
      'Copy review & CTA optimization',
      'SEO foundations (meta, schema)',
      'A/B testing setup',
      '30-day support window',
    ],
    cta: 'Book a Strategy Call',
  },
  {
    name: 'Growth Site',
    tagline: 'Full marketing website built to generate qualified leads.',
    price: 'Starting at $588',
    ideal: 'For growing businesses replacing a template or outdated site.',
    features: [
      'Full discovery & competitive audit',
      'Design system + all page designs',
      'Up to 12 pages developed',
      'Blog / Insights section with CMS',
      'Technical + on-page SEO',
      'Lead capture & CRM integration',
      'Lighthouse 95+ guarantee',
      '30-day post-launch optimization',
    ],
    cta: 'Book a Strategy Call',
    featured: true,
  },
  {
    name: 'Custom Platform',
    tagline: 'Complex web applications, portals, and ecommerce platforms.',
    price: 'Scoped individually',
    ideal: 'For SaaS products, custom ecommerce, internal tools.',
    features: [
      'Everything in Growth Site',
      'Custom application architecture',
      'Database design & API development',
      'Authentication & user management',
      'Advanced analytics & reporting',
      'Dedicated technical specification',
      'Ongoing retainer available',
    ],
    cta: 'Book a Discovery Call',
  },
];
