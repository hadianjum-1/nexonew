import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Heart, Cloud, Rocket, Briefcase, Award } from 'lucide-react';
import { INDUSTRIES } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICON_MAP = { MapPin, Heart, Cloud, Rocket, Briefcase, Award };

export default function Industries() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  const ind = INDUSTRIES[active];

  return (
    <section className="section" id="industries" ref={ref} style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="text-h2">Built for businesses like yours.</h2>
          </div>
          <Link to="/industries" className="btn btn-secondary">Find Your Industry <ArrowUpRight size={14} /></Link>
        </div>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }} role="tablist" aria-label="Industries">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICON_MAP[ind.icon] || MapPin;
            return (
              <button
                key={ind.slug}
                role="tab"
                aria-selected={active === i}
                aria-controls={`industry-panel-${i}`}
                id={`industry-tab-${i}`}
                onClick={() => setActive(i)}
                onKeyDown={e => {
                  if (e.key === 'ArrowRight') setActive(j => (j + 1) % INDUSTRIES.length);
                  if (e.key === 'ArrowLeft') setActive(j => (j - 1 + INDUSTRIES.length) % INDUSTRIES.length);
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: active === i ? '1.5px solid var(--color-secondary)' : '1.5px solid var(--color-border)',
                  background: active === i ? 'rgba(91,124,250,0.08)' : 'transparent',
                  color: active === i ? 'var(--color-secondary)' : 'var(--color-text)',
                  cursor: 'pointer', fontWeight: 500, fontSize: '0.9rem',
                  transition: 'all 200ms', fontFamily: 'var(--font-body)',
                }}
              >
                <Icon size={15} aria-hidden="true" />
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          key={active}
          role="tabpanel"
          id={`industry-panel-${active}`}
          aria-labelledby={`industry-tab-${active}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '40px', background: 'var(--color-bg)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', animation: 'fadeIn 300ms ease' }}
        >
          <div>
            <p className="eyebrow">{ind.title}</p>
            <h3 className="text-h3" style={{ marginBottom: '20px' }}>The challenge.</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, fontSize: '1.0625rem' }}>{ind.pain}</p>
          </div>
          <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '32px' }}>
            <p className="eyebrow">What changes.</p>
            <h3 className="text-h3" style={{ marginBottom: '20px' }}>The outcome.</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, fontSize: '1.0625rem', marginBottom: '24px' }}>{ind.outcome}</p>
            <Link to={`/industries/${ind.slug}`} className="btn btn-primary">
              See how we help {ind.title} <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 767px) {
          #industries [role="tabpanel"] { grid-template-columns: 1fr !important; }
          #industries [role="tabpanel"] > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--color-border); padding-top: 24px; }
        }
      `}</style>
    </section>
  );
}
