import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';



export default function NotFound() {

   useEffect(() => {
    document.title = "404 Page Not Found - NexGenByte";
  }, []);

  return (
    <main id="main-content" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingBlock: '80px' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--color-error)' }}>404 Error</p>
        <h1 className="text-h1" style={{ marginBottom: '24px' }}>Page not found.</h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '40px' }}>
          The page you are looking for does not exist, has been removed, or has moved to a different address. Use the links below to return to the core agency paths.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px', margin: '0 auto' }}>
          <Link to="/" className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Go to Home Page
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ justifyContent: 'center' }}>
            Explore Services
          </Link>
          <Link to="/case-studies" className="btn btn-secondary" style={{ justifyContent: 'center' }}>
            View Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
