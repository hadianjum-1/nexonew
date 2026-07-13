import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA({ 
  headline = "Ready for a website that actually generates leads?",
  subtext = "Book a free 30-minute strategy call. We'll audit your current site and outline exactly what needs to change.",
  ctaText = "Book Your Free Strategy Call",
  ctaHref = "/book-a-call",
}) {
  const ref = useScrollReveal();

  return (
    <section
      id="final-cta"
      ref={ref}
      style={{
        background: 'var(--color-primary)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(91,124,250,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,162,75,0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--color-accent)', marginBottom: '24px' }}>
          Let&apos;s Talk
        </p>
        <h2
          data-reveal
          className="text-h2"
          style={{ color: '#F5F6F7', maxWidth: '720px', margin: '0 auto 24px' }}
        >
          {headline}
        </h2>
        <p
          data-reveal
          style={{ color: 'rgba(245,246,247,0.65)', maxWidth: '520px', margin: '0 auto 48px', fontSize: '1.0625rem', lineHeight: 1.65 }}
        >
          {subtext}
        </p>
        <Link
          to={ctaHref}
          className="btn btn-lg"
          style={{
            background: 'var(--color-secondary)',
            color: '#fff',
            border: 'none',
            fontSize: '1.0625rem',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-secondary-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-secondary)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          {ctaText} <ArrowUpRight size={18} />
        </Link>
        <p style={{ marginTop: '24px', fontSize: '0.875rem', color: 'rgba(245,246,247,0.45)' }}>
          Free. No commitment. Results-focused.
        </p>
      </div>
    </section>
  );
}
