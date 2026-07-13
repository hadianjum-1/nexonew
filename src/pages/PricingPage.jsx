import { Check, Info } from 'lucide-react';
import { PRICING } from '../data/site-data';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import FAQSection from '../components/FAQSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(() => {
    document.title = "Pricing - NexGenByte"
  }, []);
  const ref = useScrollReveal();

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Pricing</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Investment structured around outcomes.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            No hourly billing. No surprises. We price projects on value and scope, with clearly defined milestones and deliverables.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: 0 }} ref={ref}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'stretch' }}>
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                data-reveal
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                style={{ height: '100%' }}
              >
                {plan.featured && (
                  <span
                    className="badge badge-secondary"
                    style={{ position: 'absolute', top: '-14px', left: '32px', background: 'var(--color-secondary)', color: 'white', border: 'none' }}
                  >
                    Most Popular
                  </span>
                )}
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>{plan.name}</h2>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', minHeight: '40px', lineHeight: 1.5 }}>{plan.tagline}</p>
                </div>
                <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1 }}>{plan.price}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '8px' }}>Ideal for: {plan.ideal}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: '16px' }}>What&apos;s Included</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9375rem', lineHeight: 1.4 }}>
                        <Check size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/book-a-call"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '12px', background: 'rgba(201, 162, 75, 0.05)', border: '1.5px solid rgba(201, 162, 75, 0.2)', borderRadius: 'var(--radius-lg)', padding: '24px', alignItems: 'flex-start', maxWidth: '800px', marginInline: 'auto' }}>
            <Info size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
              <strong>Looking for a maintenance package?</strong> We offer custom support contracts for security updates, hosting management, content updates, and routine audits. Request a custom retainer spec during your strategy call.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 1023px) { main > section:nth-child(2) .container > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* FAQ anchor */}
      <FAQSection showTitle={false} />

      <FinalCTA />
    </main>
  );
}
