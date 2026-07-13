import { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Trigger when mouse moves off top of page (clientY <= 0)
      if (e.clientY <= 0) {
        const triggered = sessionStorage.getItem('exit-intent-triggered');
        if (!triggered) {
          setIsOpen(true);
          sessionStorage.setItem('exit-intent-triggered', 'true');
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(11, 13, 16, 0.7)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '40px',
          maxWidth: '540px',
          width: '90%',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-muted)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        <p className="eyebrow" style={{ color: 'var(--color-accent)' }}>Free Audit</p>
        <h2 id="exit-modal-title" className="text-h3" style={{ marginBottom: '16px' }}>
          Get a free audit of your current website.
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '32px' }}>
          We will analyze your current website&apos;s loading speed, SEO tags, and conversion flow gaps. No obligation, no sales pitch.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! We will request access credentials via email shortly.');
            setIsOpen(false);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div className="form-field">
            <label htmlFor="audit-email" className="form-label">Email Address</label>
            <input
              id="audit-email"
              type="email"
              className="form-input"
              placeholder="you@company.com"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Request Free Audit <ArrowUpRight size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
