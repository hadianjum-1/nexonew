import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find(c => c.slug === slug);
  if (!cs) return <Navigate to="/case-studies" replace />;

  const related = CASE_STUDIES.filter(c => c.slug !== slug);

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 24px)', paddingBottom: '8px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/case-studies" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Case Studies</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page">{cs.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '48px 0 0', background: `linear-gradient(to bottom, ${cs.color}18, transparent)` }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="badge">{cs.industry}</span>
            <span className="badge badge-secondary">{cs.tag}</span>
          </div>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>{cs.title}</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', lineHeight: 1.65, marginBottom: '48px' }}>{cs.result}</p>

          {/* Result stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px' }}>
            {Object.entries(cs.results).map(([key, val]) => (
              <div key={key} style={{ padding: '28px 20px', background: 'var(--color-surface)', textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '6px', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          {[
            { label: 'The Problem', content: cs.problem },
            { label: 'The Strategy', content: cs.strategy },
          ].map(({ label, content }) => (
            <div key={label} style={{ marginBottom: '56px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px', color: 'var(--color-secondary)' }}>{label}</h2>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, fontSize: '1.0625rem' }}>{content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '64px 0', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote>
            <p style={{ fontSize: '1.375rem', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '32px', color: 'var(--color-text)' }}>
              &ldquo;{cs.testimonial.quote}&rdquo;
            </p>
            <footer>
              <p style={{ fontWeight: 600, fontSize: '1rem' }}>{cs.testimonial.name}</p>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{cs.testimonial.title}, {cs.testimonial.company}</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <h2 className="text-h3" style={{ marginBottom: '32px' }}>Related projects.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/case-studies/${r.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'var(--color-text)', transition: 'box-shadow 250ms, transform 250ms' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
              >
                <span className="badge">{r.industry}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600 }}>{r.title}</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>{r.result}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                  View case study <ArrowUpRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA headline="Get results like these for your business." ctaText="Book Your Free Strategy Call" />
    </main>
  );
}
