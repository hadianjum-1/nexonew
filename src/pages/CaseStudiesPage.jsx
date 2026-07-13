import { CASE_STUDIES } from '../data/site-data';
import FinalCTA from '../components/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseCard from '../components/CaseCard';
import { useEffect } from 'react';

export default function CaseStudiesPage() {
  const ref = useScrollReveal();
  useEffect(()=>{
    document.title = "Case Studies - NexGenByte"
  },[])

  return (
    <main id="main-content">
      {/* Hero Header */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Case Studies</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Work that performed.</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Results-led case studies from clients across healthcare, SaaS, ecommerce, and professional services.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section" style={{ paddingTop: 0 }} ref={ref}>
        <div className="container">
          <div className="case-studies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {CASE_STUDIES.map((cs) => (
              <div key={cs.slug} data-reveal style={{ display: 'flex', flexDirection: 'column' }}>
                <CaseCard study={cs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA headline="Want results like these?" />

      <style>{`
        @media (max-width: 1023px) {
          .case-studies-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 767px) {
          .case-studies-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
