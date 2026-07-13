import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowUpRight, Sun, Moon, X } from "lucide-react";
import gsap from "gsap";
import { SERVICES } from "../data/site-data";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Refs for GSAP mobile menu animations
  const menuOverlayRef = useRef(null);
  const backdropRef = useRef(null);
  const drawerRef = useRef(null);
  const linkRefs = useRef([]);
  const mobileCtaRef = useRef(null);
  const megaMenuRef = useRef(null);

  // Active Link Helper
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Scroll Handler (Sticky, Transparent to Blur Transition)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
        setServicesOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Handle mobile menu opening/closing GSAP animations & scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();

      // Set initial states
      gsap.set(menuOverlayRef.current, { display: "flex" });
      gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(drawerRef.current, { x: "100%" });
      gsap.set(linkRefs.current, { opacity: 0, x: 30 });
      if (mobileCtaRef.current)
        gsap.set(mobileCtaRef.current, { opacity: 0, y: 15 });

      tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      })
        .to(
          drawerRef.current,
          {
            x: "0%",
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          linkRefs.current,
          {
            opacity: 1,
            x: 0,
            stagger: 0.06,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .to(
          mobileCtaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.15",
        );
    } else {
      document.body.style.overflow = "";

      if (menuOverlayRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(menuOverlayRef.current, { display: "none" });
          },
        });

        tl.to(linkRefs.current, {
          opacity: 0,
          x: 20,
          stagger: 0.03,
          duration: 0.2,
          ease: "power2.in",
        })
          .to(
            drawerRef.current,
            {
              x: "100%",
              duration: 0.35,
              ease: "power3.inOut",
            },
            "-=0.1",
          )
          .to(
            backdropRef.current,
            {
              opacity: 0,
              duration: 0.25,
              ease: "power2.inOut",
            },
            "-=0.2",
          );
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // GSAP animation for Mega Menu
  useEffect(() => {
    if (servicesOpen && megaMenuRef.current) {
      gsap.fromTo(
        megaMenuRef.current,
        { opacity: 0, y: 15, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
      );
    }
  }, [servicesOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Handle window resizing (unlock scroll if menu is open on resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const navLinks = [
    { label: "Services", href: "/services", hasMenu: true },
    { label: "Work", href: "/case-studies" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${hidden && !mobileOpen ? "hidden-nav" : ""}`}
        role="banner"
        style={{ width: '98vw' }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo */}
          <Link to="/" className="logo-wordmark" aria-label="NexGenByte — Home">
            NexGenByte
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="desktop-nav"
          >
            {navLinks.map((link) =>
              link.hasMenu ? (
                <div key={link.label} style={{ position: "relative" }}>
                  <button
                    className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                    onClick={() => setServicesOpen((o) => !o)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    style={navLinkStyle}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transition: "transform 200ms",
                        transform: servicesOpen ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      ref={megaMenuRef}
                      className="mega-menu"
                      style={megaMenuStyle}
                      role="menu"
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "8px",
                          padding: "24px",
                        }}
                      >
                        {SERVICES.map((svc) => (
                          <Link
                            key={svc.slug}
                            to={`/services/${svc.slug}`}
                            style={megaItemStyle}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                          >
                            <span
                              style={{
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                color: "var(--color-text)",
                              }}
                            >
                              {svc.title}
                            </span>
                            <span
                              style={{
                                fontSize: "0.8rem",
                                color: "var(--color-muted)",
                                lineHeight: 1.4,
                              }}
                            >
                              {svc.short}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  style={navLinkStyle}
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={iconBtnStyle}
              className="theme-toggle"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop CTA Button */}
            <Link
              to="/book-a-call"
              className="btn btn-primary desktop-cta"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              Book a Strategy Call <ArrowUpRight size={14} />
            </Link>

            {/* Custom Hamburger Button with Morphing Animation */}
            <button
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={hamburgerBtnStyle}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuOverlayRef}
        className="mobile-menu-container"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          display: "none",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Semi-transparent Backdrop with Blur */}
        <div
          ref={backdropRef}
          className="mobile-menu-backdrop"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11, 13, 16, 0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            willChange: "opacity",
          }}
        />

        {/* Sliding Drawer */}
        <div
          ref={drawerRef}
          className="mobile-menu-drawer"
           style={{
    position: "fixed",
    inset: 0,
    width: "100vw",
   height:'100dvh',
    background: "var(--color-surface)",
    padding: "80px 20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "auto",
    willChange: "transform",
    border: "none",
    zIndex: 100,
  }}
        >
          {/* Mobile Links list */}
          <nav aria-label="Mobile main">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {navLinks.map((link, idx) => (
                <li
                  key={link.label}
                  ref={(el) => (linkRefs.current[idx] = el)}
                  style={{ willChange: "opacity, transform" }}
                >
                  <Link
                    to={link.href}
                    style={mobileNavLinkStyle}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Actions Bottom */}
          <div
            ref={mobileCtaRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "100%",
              willChange: "opacity, transform",
            }}
          >
            <Link
              to="/book-a-call"
              className="btn btn-primary"
              style={{ justifyContent: "center", padding: "14px" }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Strategy Call
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{ justifyContent: "center", padding: "14px" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop & Tablet Nav Link Active Indicators */
        .nav-link {
          position: relative;
          transition: color 200ms ease;
        }
        .nav-link.active {
          color: var(--color-secondary) !important;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 12px;
          right: 12px;
          height: 2px;
          background-color: var(--color-secondary);
          border-radius: var(--radius-full);
        }

        /* Hamburger button styles */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }
        .hamburger .line {
          width: 24px;
          height: 2px;
          background-color: var(--color-text);
          border-radius: var(--radius-full);
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;
          transform-origin: left center;
        }
        .hamburger.open .line-1 {
          transform: rotate(45deg) translate(2.5px, -1.5px);
        }
        .hamburger.open .line-2 {
          opacity: 0;
        }
        .hamburger.open .line-3 {
          transform: rotate(-45deg) translate(2.5px, 1.5px);
        }

        /* Layout changes based on screens */
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
          .mobile-menu-drawer{
  width:100vw;
  height:100vh;
  max-width:100vw;
  left:0;
  right:0;
  top:0;
  bottom:0;
  border-left:none;
  border-radius:0;
  overflow-y:auto;
}

@media (max-width:768px){
  .mobile-menu-drawer{
    padding:80px 20px 30px;
  }
}

@media (max-width:480px){
  .mobile-menu-drawer{
    padding:70px 16px 24px;
  }

  .mobile-menu-drawer a{
    font-size:1.15rem;
  }
}
      `}</style>
    </>
  );
}

const navLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "8px 12px",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "var(--color-text)",
  textDecoration: "none",
  borderRadius: "var(--radius-md)",
  border: "none",
  background: "none",
  cursor: "pointer",
  fontFamily: "var(--font-body)",
};

const megaMenuStyle = {
  position: 'absolute',
  top: 'calc(100% + 12px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'min(90vw, 760px)',
  maxWidth: '760px',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-lg)',
  zIndex: 200,
  [`@media(max-width:1200px)`]: {
    [`& > div`]: {
      gridTemplateColumns: 'repeat(2,1fr)!important',
    },
  },
  [`@media(max-width:768px)`]: {
    display: 'none',
  },

};

const megaItemStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "12px",
  borderRadius: "var(--radius-md)",
  textDecoration: "none",
  transition: "background 150ms",
  cursor: "pointer",
};

const iconBtnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "var(--radius-md)",
  border: "1.5px solid var(--color-border)",
  background: "transparent",
  color: "var(--color-text)",
  cursor: "pointer",
  transition: "background 200ms, border-color 200ms",
};

const hamburgerBtnStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const mobileNavLinkStyle = {
  display: "block",
  padding: "12px 0",
  fontSize: "1.4rem",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  color: "var(--color-text)",
  textDecoration: "none",
  borderBottom: "1px solid var(--color-border)",
};
