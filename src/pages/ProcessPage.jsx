import { CheckCircle2, AlertCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

export default function ProcessPage() {

  useEffect(() => {
    document.title = "Our Process - NexGenByte";
  }, []);

  const ref = useScrollReveal();

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Our Process</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>How we build.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            A transparent, milestone-driven framework focused on business outcomes and project momentum.
          </p>
        </div>
      </section>

      {/* Expanded Steps */}
      <section className="section" ref={ref} style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                data-reveal
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  paddingBottom: idx === PROCESS_STEPS.length - 1 ? '0' : '64px',
                  borderBottom: idx === PROCESS_STEPS.length - 1 ? 'none' : '1px solid var(--color-border)',
                }}
              >
                <div style={{
                  width: '80px', height: '80px', borderRadius: 'var(--radius-xl)',
                  background: 'var(--color-surface)', border: '1.5px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
                  color: 'var(--color-secondary)',
                }}>
                  {step.number}
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600 }}>{step.title}</h2>
                    <span className="badge badge-secondary">{step.duration}</span>
                  </div>
                  <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, fontSize: '1.0625rem', marginBottom: '24px' }}>
                    {step.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    {/* Deliverable */}
                    <div style={{ padding: '20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                        <CheckCircle2 size={14} /> Deliverable
                      </p>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-text)', lineHeight: 1.5 }}>{step.deliverable}</p>
                    </div>

                    {/* What we need from client */}
                    <div style={{ padding: '20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                        <AlertCircle size={14} /> What we need from you
                      </p>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {idx === 0 && 'Brand assets, analytics access, core positioning files.'}
                        {idx === 1 && 'Feedback round approval, content draft sign-offs.'}
                        {idx === 2 && 'Design approval, confirmation of tech stack paths.'}
                        {idx === 3 && 'Copy review & integrations credentials.'}
                        {idx === 4 && 'DNS configuration access & analytics confirmation.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            main > section:nth-child(2) .container > div > div { grid-template-columns: 1fr !important; gap: 20px !important; }
            main > section:nth-child(2) .container > div > div > div:last-child > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
