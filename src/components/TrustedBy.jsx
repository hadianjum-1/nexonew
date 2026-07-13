import { useEffect, useRef, useState } from 'react';
import { CLIENTS } from '../data/site-data';

export default function TrustedBy() {
  const [paused, setPaused] = useState(false);
  const doubledClients = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="trusted-by"
      aria-label="Trusted by clients"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ marginBottom: '20px' }}>
        <p className="text-caption" style={{ textAlign: 'center', color: 'var(--color-muted)' }}>
          Trusted by growing businesses across healthcare, SaaS, and professional services
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--color-bg), transparent)', zIndex: 1 }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--color-bg), transparent)', zIndex: 1 }} />

        <button
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? 'Resume logo carousel' : 'Pause logo carousel'}
          style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '4px 12px', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--color-muted)' }}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>

        <ul
          style={{
            display: 'flex',
            gap: '64px',
            width: 'max-content',
            animation: paused ? 'none' : 'marquee-scroll 30s linear infinite',
            listStyle: 'none',
            alignItems: 'center',
            padding: '0 32px',
          }}
          aria-label="Client list"
        >
          {doubledClients.map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                filter: 'grayscale(1)',
                opacity: 0.55,
                transition: 'filter 300ms, opacity 300ms',
                cursor: 'default',
                minWidth: '120px',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0)'; e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.55'; }}
            >
              {/* Wordmark placeholder */}
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                {client.name}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {client.industry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
