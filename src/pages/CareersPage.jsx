import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const ROLES = [
  { title: 'Senior React / Next.js Developer', type: 'Full-time', location: 'Remote (US/Canada)', desc: 'Architect and implement performant, production-ready marketing sites and web systems using Next.js and custom tailwind setups.' },
  { title: 'Senior UX / UI Designer', type: 'Full-time', location: 'Remote (US/Canada)', desc: 'Create brand-led, high-converting layouts, design systems, and Figma files backed by conversion research.' },
  { title: 'SEO & Content Strategist', type: 'Full-time', location: 'Remote (US/Canada)', desc: 'Design keyword clusters, outline programmatic content strategies, and perform advanced technical audits.' },
];

export default function CareersPage() {
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = "Careers - NexGenByte";
  }, []);

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Careers</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Join the team.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            We work with senior practitioners who value craft over convenience. No layers of management, no unnecessary meetings.
          </p>
        </div>
      </section>

      {/* Values / Culture */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Work Culture</p>
              <h2 className="text-h3" style={{ marginBottom: '20px' }}>High autonomy. High alignment.</h2>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                We believe that great developers and designers do not need to be micromanaged. We hire senior specialists, align on the project deliverables and KPIs, and get out of the way.
              </p>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                Our team is fully remote, spread across North America. We use Slack for asynchronous updates and avoid meetings unless there is a block that cannot be resolved asynchronously.
              </p>
            </div>
            <div>
              <div style={{ padding: '40px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>What We Offer</h3>
                {[
                  'Competitive salary + profit sharing',
                  'Flexible remote working options',
                  'High-end hardware stipend ($3,000/yr)',
                  'Health, dental, and vision insurance coverage',
                  '4 weeks paid annual leave',
                ].map(perk => (
                  <div key={perk} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1023px) { main > section:nth-child(2) .container > div { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* Roles List */}
      <section className="section" ref={ref}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-h3" style={{ marginBottom: '32px', textAlign: 'center' }}>Open Positions</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {ROLES.map(role => (
              <div
                key={role.title}
                data-reveal
                style={{ padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1875rem', fontWeight: 600 }}>{role.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '4px' }}>{role.location} &bull; {role.type}</p>
                  </div>
                  <button
                    onClick={() => alert(`Please submit your resume and portfolio to careers@nexgenbyte.com referencing the job title: ${role.title}`)}
                    className="btn btn-primary"
                  >
                    Apply Now <ArrowUpRight size={14} />
                  </button>
                </div>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA headline="Don&apos;t see your role?" subtext="We are always looking for senior remote designers and developers. Send an open pitch to careers@nexgenbyte.com." ctaText="Open Pitch" ctaHref="mailto:careers@nexgenbyte.com" />
    </main>
  );
}
