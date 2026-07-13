import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

// Import images from assets
import parksideImg from '../assets/parkside.jpg';
import meridianImg from '../assets/meridian.jpg';
import voltaImg from '../assets/volta.jpg';

const IMAGES = {
  'parkside.jpg': parksideImg,
  'meridian.jpg': meridianImg,
  'volta.jpg': voltaImg,
};

export default function CaseCard({ study, large = false }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const wrapper = imageWrapperRef.current;
    if (!card || !image || !wrapper) return;

    // Prefers reduced motion check
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Subtle 3D tilt on hover (GSAP)
      gsap.to(card, {
        rotateX: -y * 0.015,
        rotateY: x * 0.015,
        transformPerspective: 1200,
        ease: 'power2.out',
        duration: 0.4,
      });

      // Opposite subtle translation on image (parallax) + zoom
      gsap.to(image, {
        x: -x * 0.02,
        y: -y * 0.02,
        scale: 1.06,
        ease: 'power2.out',
        duration: 0.4,
      });
    };

    const onMouseLeave = () => {
      // Reset card tilt
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out',
        duration: 0.5,
      });
      // Reset image parallax and zoom
      gsap.to(image, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const imageSrc = IMAGES[study.imageName];

  return (
    <div
      ref={cardRef}
      className={`case-card-upgraded ${large ? 'large-card' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        transition: 'border-color 300ms ease, box-shadow 300ms ease',
        height: '100%',
        willChange: 'transform',
      }}
    >
      {/* Image Preview Container */}
      <div
        ref={imageWrapperRef}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: large ? '16/9.5' : '16/10',
          overflow: 'hidden',
          background: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {imageSrc ? (
          <img
            ref={imageRef}
            src={imageSrc}
            alt={`${study.title} preview`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              willChange: 'transform',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${study.color || 'var(--color-secondary)'} 0%, var(--color-bg) 100%)`,
            }}
          />
        )}

        {/* Industry and Category Badges */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', zIndex: 2 }}>
          <span className="badge badge-accent" style={{ backdropFilter: 'blur(4px)', background: 'rgba(201, 162, 75, 0.15)' }}>
            {study.industry}
          </span>
          <span className="badge badge-secondary" style={{ backdropFilter: 'blur(4px)', background: 'rgba(91, 124, 250, 0.15)' }}>
            {study.projectType}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '16px',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: large ? '1.625rem' : '1.25rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            {study.title}
          </h3>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
            }}
          >
            {study.description}
          </p>
        </div>

        {/* Tech Stack List */}
        {study.stack && study.stack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {study.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  padding: '4px 10px',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: 'auto',
            paddingTop: '8px',
            flexWrap: 'wrap',
          }}
        >
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '10px 18px',
                fontSize: '0.875rem',
                gap: '6px',
              }}
              aria-label={`View live website for ${study.title}`}
            >
              View Live Website <ArrowUpRight size={14} />
            </a>
          )}
          <Link
            to={`/case-studies/${study.slug}`}
            className="btn btn-secondary"
            style={{
              padding: '10px 18px',
              fontSize: '0.875rem',
              gap: '6px',
            }}
            aria-label={`View case study details for ${study.title}`}
          >
            View Case Study
          </Link>
        </div>
      </div>

      <style>{`
        .case-card-upgraded:hover {
          border-color: var(--color-secondary) !important;
          box-shadow: var(--shadow-lg) !important;
        }
      `}</style>
    </div>
  );
}
