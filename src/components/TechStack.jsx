import { TECHNOLOGIES } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const doubled = [...TECHNOLOGIES, ...TECHNOLOGIES];

export default function TechStack() {
  const ref = useScrollReveal();

  return (
    <section id="tech-stack" ref={ref} style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
          Built on modern, scalable technology — not page builders.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, var(--color-bg), transparent)', zIndex: 1 }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, var(--color-bg), transparent)', zIndex: 1 }} />

        <ul
          style={{ display: 'flex', gap: '32px', width: 'max-content', animation: 'marquee-scroll 25s linear infinite', listStyle: 'none', alignItems: 'center' }}
          aria-label="Technologies we use"
        >
          {doubled.map((tech, i) => (
            <li key={`${tech}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap', transition: 'border-color 200ms, transform 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-secondary)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <span style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
