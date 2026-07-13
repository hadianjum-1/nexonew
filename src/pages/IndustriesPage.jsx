import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Heart, Cloud, Rocket, Briefcase, Award } from 'lucide-react';
import { INDUSTRIES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICON_MAP = { MapPin, Heart, Cloud, Rocket, Briefcase, Award };

export default function IndustriesPage() {
  const ref = useScrollReveal();

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '80px', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Industries</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>
            Tailored strategies for your industry.
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Different industries have different buyer behaviors, regulations, and conversion triggers. We design with the specific patterns of your target market in mind.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" ref={ref} style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {INDUSTRIES.map((ind) => {
              const Icon = ICON_MAP[ind.icon] || MapPin;
              return (
                <div
                  key={ind.slug}
                  data-reveal
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '36px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    position: 'relative',
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'rgba(91,124,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>{ind.title}</h2>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '20px' }}>{ind.pain}</p>
                    <div style={{ padding: '16px', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-secondary)', marginBottom: '24px' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>The Solution</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>{ind.outcome}</p>
                    </div>
                  </div>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    See Our Approach <ArrowUpRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        @media (max-width: 1023px) { main > section:nth-child(2) .container > div { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 767px) { main > section:nth-child(2) .container > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
