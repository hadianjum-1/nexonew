import { Calendar, Clock, Video, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

export default function BookCallPage() {

    useEffect(() => {
    document.title = "Book a Strategy Call - NexGenByte";
  }, []);

  return (
    <main id="main-content" style={{ paddingTop: 'calc(var(--nav-height) + 64px)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', paddingBlock: '48px' }}>
          {/* Calendar Widget Side */}
          <div>
            <span className="eyebrow">Strategy Session</span>
            <h1 className="text-h1" style={{ marginBottom: '24px' }}>Book your call.</h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '40px' }}>
              Select a time for a 30-minute web strategy call. We will review your current website metrics, analyze conversion gaps, and discuss roadmap possibilities.
            </p>

            {/* Calendly placeholder embed */}
            <div style={{
              height: '480px', width: '100%',
              background: 'var(--color-surface)',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '40px', gap: '20px',
            }}>
              <Calendar size={48} style={{ color: 'var(--color-secondary)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '8px' }}>Calendly Integration Placeholder</p>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', maxWidth: '320px', margin: '0 auto' }}>
                  In production, the Calendly widget loads dynamically. Use the button below to open the scheduler in a new tab.
                </p>
              </div>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Open Calendly Scheduler <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Details / What to Expect Side */}
          <div>
            <div style={{ padding: '40px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '32px' }}>What to expect.</h2>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  { icon: <Clock size={20} />, title: '30-minute structured call', desc: 'No sales pitch. We focus entirely on your business, current traffic levels, and conversion rate targets.' },
                  { icon: <Video size={20} />, title: 'Video review session', desc: 'We screen-share your website live, pointing out specific speed issues, structural gaps, and copywriting improvements.' },
                  { icon: <Calendar size={20} />, title: 'Actionable roadmap', desc: 'We follow up with a summary document outlining the suggested strategy, stack, and fixed-price roadmap estimate.' },
                ].map(item => (
                  <li key={item.title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(91,124,250,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, marginBottom: '6px', fontSize: '1rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          main > .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  );
}
