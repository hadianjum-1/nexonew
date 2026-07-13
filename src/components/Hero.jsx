import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const els = [headlineRef.current, subRef.current, ctaRef.current].filter(Boolean);
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity 700ms ease, transform 700ms ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Radial bg glow */}
      <div className="hero-bg-glow" aria-hidden="true" />

      {/* Geometric grid decoration */}
      <div aria-hidden="true" style={gridDecorStyle} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div ref={headlineRef}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '24px' }}>
           Web Development Agency
          </span>
          <h1
            className="text-hero"
            style={{ maxWidth: '900px', margin: '0 auto 28px', color: 'var(--color-text)' }}
          >
            Websites Engineered to Turn Visitors Into Customers.
          </h1>
        </div>

        <p
          ref={subRef}
          className="text-body"
          style={{
            maxWidth: '600px',
            margin: '0 auto 48px',
            color: 'var(--color-muted)',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: 1.65,
          }}
        >
          NexGenByte designs and builds premium websites for businesses that need more qualified leads — not just a prettier homepage.
        </p>

        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/book-a-call" className="btn btn-primary btn-lg">
            Book a Strategy Call <ArrowUpRight size={16} />
          </Link>
          <Link to="/case-studies" className="btn btn-secondary btn-lg">
            See Our Work
          </Link>
        </div>

        {/* Trust signal */}
        <p style={{ marginTop: '48px', color: 'var(--color-muted)', fontSize: '0.875rem' }}>
          Trusted by 120+ growing businesses across healthcare, SaaS, and professional services.
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#trusted-by"
        aria-label="Scroll to next section"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-muted)',
          textDecoration: 'none',
          animation: 'scrollBounce 2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}

const gridDecorStyle = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(to right, rgba(91,124,250,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(91,124,250,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '80px 80px',
  maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)',
  WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)',
};
