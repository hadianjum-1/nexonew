import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

export default function Process() {

  useEffect(() => {
    document.title = "Our Process - NexGenByte"
  }, []);

  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  const step = PROCESS_STEPS[active];

  return (
    <section className="section" id="process" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>How We Work</p>
          <h2 className="text-h2">A clear process you can count on.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px', alignItems: 'start' }}>
          {/* Step selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {PROCESS_STEPS.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  background: active === i ? 'var(--color-surface)' : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 250ms',
                  boxShadow: active === i ? 'var(--shadow-md)' : 'none',
                  borderLeft: active === i ? '3px solid var(--color-secondary)' : '3px solid transparent',
                }}
                aria-pressed={active === i}
              >
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: active === i ? 'var(--color-secondary)' : 'var(--color-muted)',
                  minWidth: '24px',
                }}>
                  {s.number}
                </span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text)', marginBottom: '2px' }}>{s.title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{s.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Step detail */}
          <div key={active} style={{ padding: '40px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', animation: 'fadeInUp 400ms ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', lineHeight: 1 }}>{step.number}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600 }}>{step.title}</h3>
                <span className="badge badge-secondary">{step.duration}</span>
              </div>
            </div>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '24px' }}>{step.description}</p>
            <div style={{ padding: '16px', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-accent)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Deliverable</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{step.deliverable}</p>
            </div>
            {active === PROCESS_STEPS.length - 1 && (
              <Link to="/book-a-call" className="btn btn-primary" style={{ marginTop: '24px' }}>
                Start Your Project <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @media (max-width: 1023px) { #process .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
