import { TEAM } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

export default function AboutPage() {
  const ref = useScrollReveal();
  useEffect(()=>{
      document.title = "About Us - NexGenByte"
  },[])

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>About Us</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Craft over convenience.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            We believe that every line of code should be intentional and every layout decision should perform.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Our Mission</p>
              <h2 className="text-h3" style={{ marginBottom: '20px' }}>To engineer websites that convert visitors into customers, not just impress them.</h2>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                NexGenByte was founded by designers and developers who grew tired of standard template designs and slow, bloated agency outputs. We saw clients paying five and six figures for websites that looked great in a design portfolio but failed to load under 3 seconds or convert real visitors.
              </p>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                We believe that performance is a feature, whitespace is a design element, and motion should clarify rather than decorate. That is why we write code from scratch, use lightweight web frameworks, and base our recommendations on conversion data.
              </p>
            </div>
            <div>
              <div style={{ padding: '40px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Core Beliefs</h3>
                {[
                  { title: 'Performance is paramount', desc: 'A beautiful site that does not load quickly is not beautiful. It is decoration.' },
                  { title: 'Radical clarity', desc: 'No complex jargon. We speak plainly about conversions, speed metrics, and timelines.' },
                  { title: 'Full ownership', desc: 'Once paid for, the code, site assets, and domains are entirely yours.' },
                ].map((belief, i) => (
                  <div key={belief.title} style={{ marginBottom: i === 2 ? '0' : '24px' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '6px' }}>{belief.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>{belief.desc}</p>
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

      {/* Team Grid */}
      <section className="section" ref={ref}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>The Team</p>
            <h2 className="text-h2">Senior minds only.</h2>
            <p style={{ color: 'var(--color-muted)', marginTop: '8px' }}>
              We do not delegate work to junior account managers. You work directly with specialists.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {TEAM.map((member) => (
              <div
                key={member.name}
                data-reveal
                style={{ textAlign: 'center', padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}
              >
                
                {/* <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                  margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
                }}>
                  {member.initials}
                </div> */}
                <img src={member.picture} alt={member.name} style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px',
                }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 600, marginBottom: '6px' }}>{member.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1023px) { main > section:nth-child(3) .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 767px) { main > section:nth-child(3) .container > div:last-child { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
