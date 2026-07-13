import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

export default function FAQPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '32px' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</p>
          <h1 className="text-h1" style={{ marginBottom: '20px' }}>Frequently Asked Questions</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Find answers to common questions about pricing models, project timelines, custom codebase ownership, and post-launch support.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <FAQSection showTitle={false} />

      <FinalCTA />
    </main>
  );
}
