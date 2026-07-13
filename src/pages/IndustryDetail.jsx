import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES, CASE_STUDIES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';

const INDUSTRY_STRATEGIES = {
  'local-businesses': {
    focus: 'Local Search Visibility & Quick Contact Paths',
    details: 'For local businesses, friction is the enemy. We optimize for immediate touchpoints: click-to-call buttons, maps integration, clear reviews, and simple appointment reservation systems.',
    points: ['Local Schema markup integration', 'Google Maps/GBP optimization recommendations', 'Mobile-first layout optimized for users on-the-go', 'Aggregated trust signals and review widgets'],
  },
  'healthcare-dental': {
    focus: 'Patient Trust & Appointment Pipeline',
    details: 'Patients expect security, professionalism, and ease of access. We design healthcare sites that make it simple to find locations, book slots, and read about specialist capabilities.',
    points: ['HIPAA compliance advisory & secure forms', 'Clean navigation for multi-location clinics', 'Dr. bio pages designed to build personal trust', 'Integrated online booking callouts'],
  },
  'saas': {
    focus: 'Persona-led Content & Trial Funnels',
    details: 'B2B SaaS requires clear differentiation. We build sites that segment visitors by role (e.g. Developer, Manager, CFO) and route them to personalized trial or demo flows.',
    points: ['Pricing grid optimized for clarity & conversion', 'Integrations showcase page templates', 'Sub-second LCP optimization for tech-savvy users', 'Role-based landing page architectures'],
  },
  'startups': {
    focus: 'Credibility, Speed & High-impact Aesthetics',
    details: 'Startups need to look bigger than they are. We deliver premium, custom-coded web architectures that match the sophistication of established industry leaders.',
    points: ['Ultra-fast builds optimized for quick iterations', 'Modern styling & subtle interactive micro-animations', 'Lead-capture integrations (HubSpot, Salesforce)', 'Optimized careers page to attract top talent'],
  },
  'b2b': {
    focus: 'Thought Leadership & Lead Capture Retainers',
    details: 'B2B sales cycles are long. The website must build authority, educate the prospect over multiple visits, and host resources like case studies and calculators.',
    points: ['Resource library search & filter systems', 'Gated content templates for whitepapers', 'Clear service pages targeting enterprise keywords', 'Form logic that filters out non-qualified leads'],
  },
  'professional-services': {
    focus: 'High-ticket Authority & Clear Consultation CTAs',
    details: 'For consultants, lawyers, and architects, the website is an extension of their professional prestige. We design with understated luxury and clear consultation schedulers.',
    points: ['Premium typographic styling (Sora / Inter custom pairings)', 'Detailed case study layouts showing strategic results', 'Clear Calendly or scheduling integrations', 'Trust badges, publications, and awards displays'],
  },
};

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = INDUSTRIES.find(i => i.slug === slug);
  if (!ind) return <Navigate to="/industries" replace />;

  const strategy = INDUSTRY_STRATEGIES[slug] || {
    focus: 'Conversion Strategy & Brand Credibility',
    details: 'We build high-converting websites optimized for your specific target market and business goals.',
    points: ['High performance & page speeds', 'Responsive layout for all devices', 'Structured data integration', 'Radical conversion architecture'],
  };

  const relatedCase = CASE_STUDIES.find(cs => cs.industry.toLowerCase().includes(slug.split('-')[0])) || CASE_STUDIES[0];

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 32px)', paddingBottom: '16px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/industries" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Industries</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--color-text)' }}>{ind.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-accent" style={{ marginBottom: '24px' }}>{ind.title}</span>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Websites built for {ind.title.toLowerCase()}.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px' }}>{ind.pain}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/book-a-call" className="btn btn-primary btn-lg">Book a Strategy Call <ArrowUpRight size={16} /></Link>
            <Link to="/case-studies" className="btn btn-secondary btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Strategic Focus</p>
              <h2 className="text-h3" style={{ marginBottom: '20px' }}>{strategy.focus}</h2>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '32px' }}>{strategy.details}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {strategy.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1rem', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <p className="eyebrow" style={{ justifyContent: 'center' }}>Target Metric</p>
              <p style={{ fontSize: '4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', lineHeight: 1 }}>{relatedCase.metric}</p>
              <p style={{ color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>{relatedCase.metricLabel}</p>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '24px', lineHeight: 1.6 }}>
                Achieved for {relatedCase.title} in the {relatedCase.industry} space.
              </p>
              <Link to={`/case-studies/${relatedCase.slug}`} className="btn btn-secondary" style={{ marginTop: '24px' }}>
                Read Case Study <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA headline={`Ready to grow your ${ind.title.toLowerCase()} pipeline?`} />
    </main>
  );
}
