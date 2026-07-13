import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Code2, Target, Zap, Globe, ShoppingBag, TrendingUp, Gauge, Shield, Bot, LayoutDashboard, PenTool } from 'lucide-react';
import { SERVICES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const ICON_MAP = { Layers, Code2, Target, Zap, Globe, ShoppingBag, TrendingUp, Gauge, Shield, Bot, LayoutDashboard, PenTool };

export default function ServicesPage() {

  const ref = useScrollReveal();

  useEffect(() => {
    document.title = "Services - NexGenByte";
  }, []);

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '80px', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Services</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>
            Every capability your website needs to perform.
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            From a single landing page to a full custom platform — we cover every layer of the digital stack, built around one objective: qualified leads.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" ref={ref} style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] || Layers;
              return (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  data-reveal
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'var(--color-text)', transition: 'transform 250ms, box-shadow 250ms, border-color 250ms' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--color-secondary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'rgba(91,124,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1875rem', fontWeight: 600, marginBottom: '10px' }}>{svc.title}</h2>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '16px' }}>{svc.description}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)', fontStyle: 'italic' }}>{svc.outcome}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                    View service <ArrowUpRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        @media (max-width: 1023px) { main #main-content > section:nth-child(2) .container > div { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 767px) { main > section:nth-child(2) .container > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
