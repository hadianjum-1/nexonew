import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { POSTS } from '../data/blog-data';
import FinalCTA from '../components/FinalCTA';

export default function InsightDetail() {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return <Navigate to="/insights" replace />;

  const related = POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 24px)', paddingBottom: '8px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              <li><Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/insights" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Insights</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--color-text)' }}>{post.title.substring(0, 30)}...</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ paddingBottom: '48px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-secondary)', textDecoration: 'none', marginBottom: '24px', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to insights
          </Link>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
            <span className="badge badge-secondary">{post.category}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{post.date} &bull; {post.readTime}</span>
          </div>
          <h1 className="text-h1" style={{ marginBottom: '24px', lineHeight: 1.2 }}>{post.title}</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>Written by <strong>{post.author}</strong></p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: 'var(--color-text)',
              lineHeight: 1.8,
              fontSize: '1.0625rem',
            }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 className="text-h3" style={{ marginBottom: '32px', textAlign: 'center' }}>Related Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '880px', margin: '0 auto' }}>
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/insights/${r.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'var(--color-text)', transition: 'box-shadow 250ms' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge">{r.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{r.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1875rem', fontWeight: 600 }}>{r.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .blog-post-content h2 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 16px;
        }
        .blog-post-content p {
          margin-bottom: 20px;
        }
        .blog-post-content ul {
          margin-left: 24px;
          margin-bottom: 24px;
        }
        .blog-post-content li {
          margin-bottom: 8px;
        }
        @media(max-width:767px){
          section .container>div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
