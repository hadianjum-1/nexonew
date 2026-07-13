import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Code2, Target, Zap, Globe, ShoppingBag, TrendingUp, Gauge, Shield, Bot, LayoutDashboard, PenTool } from 'lucide-react';
import { SERVICES } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICON_MAP = { Layers, Code2, Target, Zap, Globe, ShoppingBag, TrendingUp, Gauge, Shield, Bot, LayoutDashboard, PenTool };

function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || Layers;
  return (
    <Link
      to={`/services/${service.slug}`}
      data-reveal
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '28px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        textDecoration: 'none',
        color: 'var(--color-text)',
        transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--color-secondary)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
      aria-label={`${service.title} — ${service.short}`}
    >
      <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'rgba(91,124,250,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
        <Icon size={20} aria-hidden="true" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 600, marginBottom: '8px' }}>{service.title}</h3>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.short}</p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>
        Learn more <ArrowUpRight size={13} />
      </div>
    </Link>
  );
}

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="services" ref={ref} style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>What We Build</p>
          <h2 className="text-h2" style={{ marginBottom: '16px' }}>Capability across every layer of your digital presence.</h2>
          <p style={{ color: 'var(--color-muted)' }}>From strategy to launch and beyond — we handle the full stack of what it takes to build a website that performs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {SERVICES.map(svc => <ServiceCard key={svc.slug} service={svc} />)}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/services" className="btn btn-secondary">
            Explore All Services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { #services .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 767px) { #services .container > div:nth-child(2) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
