import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, CASE_STUDIES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';

const SERVICE_FAQS = {
  'website-design': [
    { question: 'What is included in a website design project?', answer: 'Discovery, wireframes, a full design system, high-fidelity mockups for every page in Figma, and a responsive design spec ready for development.' },
    { question: 'Do you design for mobile first?', answer: 'Yes. Every design is built mobile-first, then scaled up to larger viewports. We test on real devices at every breakpoint.' },
    { question: 'Can I see the design before development starts?', answer: 'Absolutely. We share designs in Figma and hold two formal review rounds before a single line of production code is written.' },
  ],
  'web-development': [
    { question: 'What frameworks do you build with?', answer: 'Primarily Next.js and React for marketing sites and web apps. WordPress for CMS-driven sites. Shopify for ecommerce. We choose based on your specific needs, not personal preference.' },
    { question: 'Do you use page builders?', answer: 'No. All production code is hand-written. Page builders create technical debt, limit performance, and make long-term maintenance costly.' },
    { question: 'How do you handle ongoing maintenance after launch?', answer: 'We offer monthly maintenance retainers. Ask about options during your strategy call.' },
  ],
};

const DELIVERABLES = {
  'website-design': ['Full discovery & stakeholder interviews', 'Competitor & visual audit', 'Information architecture', 'Low-fidelity wireframes', 'Design system (colors, type, components)', 'Full high-fidelity mockups (all breakpoints)', 'Interactive prototype in Figma', 'Developer handoff file'],
  'web-development': ['Technical architecture specification', 'Clean, documented codebase (Git)', 'Staging environment with review access', 'Cross-browser & cross-device QA', 'Performance optimization (Lighthouse 95+)', 'CMS integration and training', '30-day post-launch support', 'Code handover to client'],
  'landing-pages': ['Conversion-focused layout strategy', 'Headline & CTA copy review', 'Mobile-first custom design', 'Development & deployment', 'Analytics & heatmap setup', 'A/B test variant', '30-day optimization window'],
  'nextjs-development': ['SSG/SSR/ISR architecture design', 'App Router implementation', 'Performance-first component library', 'API routes and data fetching', 'Vercel or self-hosted deployment', 'Lighthouse 95+ guarantee'],
  'seo': ['Technical SEO audit', 'Core Web Vitals optimization', 'On-page SEO for all pages', 'Schema markup (JSON-LD)', 'XML sitemap & robots.txt', 'Content brief for top 10 target pages', 'Monthly performance reporting'],
  'website-optimization': ['Full CRO audit (heatmaps, session recordings)', 'Core Web Vitals remediation', 'Conversion funnel analysis', 'A/B test design & implementation', 'Before/after Lighthouse comparison', '90-day optimization roadmap'],
};

function getDeliverables(slug) {
  return DELIVERABLES[slug] || ['Full project scoping', 'Senior-level execution', 'Quality assurance', 'Post-launch support', 'Documentation handover'];
}

function getFAQs(slug) {
  return SERVICE_FAQS[slug] || [
    { question: 'How long does this typically take?', answer: 'Timeline depends on scope and complexity. We outline exact timelines during the strategy call after understanding your requirements.' },
    { question: 'Who on your team will handle this?', answer: 'Senior specialists with direct experience in this area — never outsourced or handled by junior team members.' },
    { question: 'How do you measure success?', answer: 'We agree on KPIs before work begins and report against them at 30, 60, and 90 days post-launch.' },
  ];
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const deliverables = getDeliverables(slug);
  const faqs = getFAQs(slug);
  const relatedCase = CASE_STUDIES[0];

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 32px)', paddingBottom: '16px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/services" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--color-text)' }}>{service.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-secondary" style={{ marginBottom: '24px' }}>{service.title}</span>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>{service.description.split('.')[0]}.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '16px' }}>{service.description}</p>
          <p style={{ color: 'var(--color-secondary)', fontWeight: 500, marginBottom: '40px' }}>{service.outcome}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/book-a-call" className="btn btn-primary btn-lg">Book a Strategy Call <ArrowUpRight size={16} /></Link>
            <Link to="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Deliverables + Who it's for */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            <div>
              <h2 className="text-h3" style={{ marginBottom: '32px' }}>What&apos;s included.</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {deliverables.map(d => (
                  <li key={d} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span style={{ fontSize: '1rem', lineHeight: 1.5 }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-h3" style={{ marginBottom: '24px' }}>Who it&apos;s for.</h2>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                This service is designed for businesses that are serious about their digital presence as a growth channel. If you want the cheapest possible solution, this is not the right fit. If you want a solution that pays for itself in leads, let&apos;s talk.
              </p>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
                Our clients range from local professional services firms to fast-growing SaaS companies — the common thread is an expectation that their website should generate measurable business results.
              </p>
              <Link to="/process" style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9375rem' }}>
                See our full process <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:767px){section .container>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Proof */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 className="text-h3" style={{ marginBottom: '32px' }}>Proof of what this looks like.</h2>
          <Link
            to={`/case-studies/${relatedCase.slug}`}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '40px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'var(--color-text)', transition: 'box-shadow 250ms', alignItems: 'center' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
          >
            <div>
              <span className="badge" style={{ marginBottom: '16px' }}>{relatedCase.industry}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>{relatedCase.title}</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{relatedCase.problem.substring(0, 120)}...</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', lineHeight: 1 }}>{relatedCase.metric}</p>
              <p style={{ color: 'var(--color-muted)', marginTop: '8px' }}>{relatedCase.metricLabel}</p>
              <div style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Case Study <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="text-h3" style={{ marginBottom: '40px' }}>Common questions about {service.title.toLowerCase()}.</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>{faq.question}</h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, fontSize: '0.9375rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        headline={`Ready to invest in ${service.title.toLowerCase()} that generates results?`}
        ctaText="Book Your Strategy Call"
      />
    </main>
  );
}
