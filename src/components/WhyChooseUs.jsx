import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DIFFERENTIATORS = [
  { title: 'Strategy before pixels', desc: 'Every engagement starts with understanding your business model, buyers, and competitors — before anyone opens a design tool.' },
  { title: 'Built for speed and SEO from day one', desc: 'Performance and search visibility are baked into our architecture decisions, not retrofitted after launch.' },
  { title: 'Senior team only — no outsourcing', desc: 'Your project is handled entirely by our in-house senior team. We do not offshore, subcontract, or hand work to juniors.' },
  { title: 'Measured by leads, not just looks', desc: 'We agree on KPIs before we start and report against them at 30, 60, and 90 days post-launch.' },
];

export default function WhyChooseUs() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="why-us" ref={ref} style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left */}
          <div data-reveal>
            <p className="eyebrow">Why NexGenByte</p>
            <h2 className="text-h2" style={{ marginBottom: '20px' }}>
              The difference between a website and a lead-generation engine.
            </h2>
            <p style={{ color: 'var(--color-muted)', marginBottom: '40px', lineHeight: 1.7 }}>
              Most agencies optimize for what the client notices on delivery day — how it looks. We optimize for what matters 90 days later: how many leads it generates.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {DIFFERENTIATORS.map(d => (
                <li key={d.title} style={{ display: 'flex', gap: '16px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>{d.title}</p>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/process" className="btn btn-primary">
              See Our Process <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Right — abstract metric mockup */}
          <div data-reveal style={{ position: 'relative' }}>
            <div style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-lg)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>12-Month Performance Summary</p>

              {[
                { label: 'Qualified Leads', before: '41/mo', after: '98/mo', pct: '+139%', color: '#1E8E5A' },
                { label: 'Conversion Rate', before: '1.4%', after: '3.8%', pct: '+171%', color: '#5B7CFA' },
                { label: 'Page Load Time', before: '4.2s', after: '0.9s', pct: '-79%', color: '#C9A24B' },
                { label: 'Organic Traffic', before: '1.2k', after: '4.8k', pct: '+300%', color: '#1E8E5A' },
              ].map(row => (
                <div key={row.label} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: row.color }}>{row.pct}</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--color-border)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: row.pct.startsWith('+') ? row.pct.replace('+','').replace('%','') + '%' : '30%', maxWidth: '100%', background: row.color, borderRadius: '999px', transition: 'width 1s ease' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Before: {row.before}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>After: {row.after}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--color-secondary)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: '16px 20px', boxShadow: 'var(--shadow-lg)' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>98%</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: '4px' }}>Client Retention</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #why-us .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
