import { useCountUp } from '../hooks/useScrollReveal';
import { STATS } from '../data/site-data';

function StatItem({ stat }) {
  const numRef = useCountUp(stat.number);

  return (
    <div style={{ textAlign: 'center', padding: '40px 24px' }}>
      <p style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px', marginBottom: '12px' }}>
        <span className="stat-number" ref={numRef}>{stat.number}</span>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{stat.suffix}</span>
      </p>
      <p style={{ color: 'var(--color-muted)', fontSize: '1rem', fontWeight: 500 }}>{stat.label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" style={{ background: 'var(--color-primary)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ borderRight: '1px solid rgba(255,255,255,0.08)', borderBottom: i < 2 ? undefined : undefined }}>
              <div style={{ textAlign: 'center', padding: '56px 24px' }}>
                <p style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px', marginBottom: '12px' }}>
                  <StatNum value={stat.number} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent)' }}>{stat.suffix}</span>
                </p>
                <p style={{ color: 'rgba(245,246,247,0.65)', fontSize: '1rem', fontWeight: 500 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #statistics .container > div { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function StatNum({ value }) {
  const ref = useCountUp(value);
  return (
    <span
      ref={ref}
      style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#F5F6F7', lineHeight: 1 }}
    >
      {value}
    </span>
  );
}
