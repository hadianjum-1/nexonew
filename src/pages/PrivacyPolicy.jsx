import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main id="main-content" style={{ paddingTop: 'calc(var(--nav-height) + 64px)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBlock: '48px' }}>
        <span className="eyebrow">Legal</span>
        <h1 className="text-h1" style={{ marginBottom: '32px' }}>Privacy Policy</h1>

        <div style={{ color: 'var(--color-muted)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>Last updated: July 12, 2026</p>
          <p>
            NexGenByte (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the NexGenByte website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our service to you. Types of data collected include email address, first and last name, phone number, and usage data via cookies.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Use of Data</h2>
          <p>
            NexGenByte uses the collected data for various purposes: to provide and maintain our service, to notify you about changes, to allow interactive features, to provide customer support, and to gather analysis to improve our website.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:hadi@nexgnbyte.com" style={{ color: 'var(--color-secondary)' }}>hadi@nexgnbyte.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
