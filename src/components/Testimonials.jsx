import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Avatar({ initials }) {
  return (
    <div style={{
      width: '52px', height: '52px', borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-heading)',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const ref = useScrollReveal();
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || prefersReduced) return;
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(intervalRef.current);
  }, [paused, prefersReduced]);

  const go = (dir) => {
    setPaused(true);
    setCurrent(c => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="section" id="testimonials" ref={ref} style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Client Voices</p>
          <h2 className="text-h2">Outcomes, in their words.</h2>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div
            key={current}
            aria-live="polite"
            aria-atomic="true"
            style={{ animation: 'fadeIn 400ms ease' }}
          >
            <blockquote>
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.375rem)', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--color-text)', marginBottom: '32px', position: 'relative' }}>
                <span aria-hidden="true" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontSize: '4rem', color: 'var(--color-secondary)', opacity: 0.15, fontFamily: 'Georgia, serif', lineHeight: 1 }}>&ldquo;</span>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <Avatar initials={t.initials} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: 600, fontSize: '1rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{t.title}, {t.company}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
            <button onClick={() => go(-1)} aria-label="Previous testimonial" style={navBtnStyle}>
              <ChevronLeft size={18} />
            </button>

            <div className="testimonial-dots" style={{ margin: 0 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-pressed={i === current}
                />
              ))}
            </div>

            <button onClick={() => go(1)} aria-label="Next testimonial" style={navBtnStyle}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }`}</style>
    </section>
  );
}

const navBtnStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '40px', height: '40px', borderRadius: '50%',
  border: '1.5px solid var(--color-border)', background: 'var(--color-surface)',
  cursor: 'pointer', color: 'var(--color-text)', transition: 'border-color 200ms, color 200ms',
};
