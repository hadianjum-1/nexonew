import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <main id="main-content" style={{ paddingTop: 'calc(var(--nav-height) + 64px)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBlock: '48px' }}>
        <span className="eyebrow">Legal</span>
        <h1 className="text-h1" style={{ marginBottom: '32px' }}>Terms of Service</h1>

        <div style={{ color: 'var(--color-muted)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>Last updated: July 12, 2026</p>
          <p>
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the NexGenByte website. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of NexGenByte and its licensors.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, marginTop: '24px' }}>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:hadi@nexgnbyte.com" style={{ color: 'var(--color-secondary)' }}>hadi@nexgnbyte.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
