import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { POSTS, CATEGORIES } from '../data/blog-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

export default function InsightsPage() {
  const [activeCat, setActiveCat] = useState('All');
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = "Insights - NexGenByte";
  }, []);

  const filtered = activeCat === 'All'
    ? POSTS
    : POSTS.filter(p => p.category === activeCat);

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Insights</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Guides to modern growth.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Plain-spoken analysis on website performance, technical SEO, and conversion optimization — built for growth-minded operators.
          </p>
        </div>
      </section>

      {/* Category selector */}
      <section style={{ paddingBottom: '32px' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: activeCat === cat ? '1.5px solid var(--color-secondary)' : '1.5px solid var(--color-border)',
                background: activeCat === cat ? 'rgba(91,124,250,0.08)' : 'transparent',
                color: activeCat === cat ? 'var(--color-secondary)' : 'var(--color-text)',
                cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem',
                transition: 'all 200ms', fontFamily: 'var(--font-body)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="section" style={{ paddingTop: 0 }} ref={ref}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {filtered.map(post => (
              <article
                key={post.slug}
                data-reveal
                style={{
                  display: 'flex', flexDirection: 'column', gap: '20px',
                  padding: '32px', background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-secondary">{post.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{post.readTime}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', lineHeight: 1.3 }}>
                    <Link to={`/insights/${post.slug}`} style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {post.excerpt}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>By {post.author}</span>
                  <Link to={`/insights/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', textDecoration: 'none' }}>
                    Read article <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1023px) { main > section:nth-child(4) .container > div { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 767px) { main > section:nth-child(4) .container > div { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
