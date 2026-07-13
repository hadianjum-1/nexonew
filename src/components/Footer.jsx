import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../data/site-data';

const footerServices = SERVICES.slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Newsletter / Mini CTA Strip */}
      <div style={{ borderBottom: '1px solid var(--color-border)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '480px' }}>
              <p className="eyebrow">Free Resource</p>
              <h3 className="text-h3" style={{ marginBottom: '12px' }}>Get our Website Conversion Checklist</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>
                A practical, 47-point audit of the factors that determine whether your website converts visitors into leads. Free, no fluff.
              </p>
            </div>
            <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Thank you — check your inbox.");
  }}
  className="footer-newsletter"
  aria-label="Newsletter signup"
>
  <div className="form-field">
    <label htmlFor="footer-email" className="sr-only">
      Your email address
    </label>

    <input
      id="footer-email"
      type="email"
      className="form-input"
      placeholder="your@email.com"
      required
    />
  </div>

  <button type="submit" className="btn btn-primary footer-btn">
    Get the Checklist
    <ArrowUpRight size={14} />
  </button>
</form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: '80px 0 48px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px 32px' }}>
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 1' }}>
              <Link to="/" className="logo-wordmark" style={{ display: 'block', marginBottom: '16px' }}>
                NexGenByte
              </Link>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '280px' }}>
                We help ambitious businesses generate more qualified leads through modern, high-converting websites.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  {
                    icon: (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                    href: 'https://www.linkedin.com/company/nexgenbyte/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BClEAM4%2BlQ1yig39joAb3cg%3D%3D',
                    label: 'NexGenByte on LinkedIn',
                  },
                  {
                   icon: (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.926-1.956 1.875v2.266h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
  </svg>
),
                    href: 'https://www.facebook.com/people/Nexgenbyte/61586008494111/',
                    label: 'NexGenByte on facebook',
                  },
                  {
                    icon: (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    href: 'https://www.instagram.com/nexgenbyte1/',
                    label: 'NexGenByte on Instagram',
                  },
                  {
                    icon: (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    ),
                    href: 'https://hadianjum-1.github',
                    label: 'NexGenByte on GitHub',
                  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 200ms, border-color 200ms, background 200ms' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-secondary)'; e.currentTarget.style.borderColor = 'var(--color-secondary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '20px' }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {footerServices.map(svc => (
                  <li key={svc.slug}>
                    <Link
                      to={`/services/${svc.slug}`}
                      style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 200ms' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Column */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '20px' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Case Studies', to: '/case-studies' },
                  { label: 'Our Process', to: '/process' },
                  { label: 'Pricing', to: '/pricing' },
                  { label: 'About', to: '/about' },
                  { label: 'Insights', to: '/insights' },
                  { label: 'Careers', to: '/careers' },
                  { label: 'FAQ', to: '/faq' },
                  { label: 'Contact', to: '/contact' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 200ms' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '20px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                  <Mail size={16} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--color-secondary)' }} />
                  <a href="mailto:hadi@nexgnbyte.com" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>hadi@nexgnbyte.com</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                  <Phone size={16} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--color-secondary)' }} />
                  <a href="tel:+923159711237" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>+92 (315) 971-1237</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                  <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--color-secondary)' }} />
                  <span>Worldwide(Remote), <br />Pakistan, Peshawar</span>
                </li>
              </ul>
              <Link to="/book-a-call" className="btn btn-primary footer-contact-btn">
                Book a Strategy Call <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>
            &copy; {year} NexGenByte. All rights reserved.
          </p>
        <div className="footer-bottom-links">
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms of Service', to: '/terms' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{ color: 'var(--color-muted)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 200ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .footer .container > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .footer .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
          .footer-newsletter{
    display:flex;
    gap:12px;
    align-items:center;
    width:100%;
    max-width:560px;
}

.footer-newsletter .form-field{
    flex:1;
}

.footer-newsletter .form-input{
    width:100%;
    min-width:0;
}

.footer-btn{
    white-space:nowrap;
}

@media (max-width:768px){

    .footer-newsletter{
        flex-direction:column;
        align-items:stretch;
    }

    .footer-newsletter .form-field{
        width:100%;
    }

    .footer-btn{
        width:100%;
        justify-content:center;
    }

}
    .footer-bottom-links{
    display:flex;
    gap:24px;
}

@media(max-width:600px){

.footer-bottom-links{
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
    gap:12px;
}

}.footer-contact-btn{
    width:100%;
    justify-content:center;
    box-sizing:border-box;
}
    .footer *{
    box-sizing:border-box;
}

.footer{
    overflow-x:hidden;
}
      `}</style>
    </footer>
  );
}
