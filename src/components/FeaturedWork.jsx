import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/site-data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseCard from './CaseCard';

export default function FeaturedWork() {
  const ref = useScrollReveal();
  const [main, ...rest] = CASE_STUDIES;

  return (
    <section className="section" id="featured-work" ref={ref}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="text-h2">Results, not just redesigns.</h2>
          </div>
          <Link to="/case-studies" className="btn btn-secondary">
            View All Case Studies <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
          {/* Large feature */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CaseCard study={main} large />
          </div>
          {/* Two stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {rest.map(s => (
              <CaseCard key={s.slug} study={s} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
