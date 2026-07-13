import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !ref.current) return;

    const el = ref.current;
    const children = el.querySelectorAll('[data-reveal]');
    const targets = children.length > 0 ? Array.from(children) : [el];

    targets.forEach((t, i) => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            targets.forEach((t, i) => {
              setTimeout(() => {
                t.style.transition = 'opacity 600ms ease, transform 600ms ease';
                t.style.opacity = '1';
                t.style.transform = 'translateY(0)';
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCountUp(end, duration = 1400) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ref.current) return;

    const el = ref.current;
    const isFloat = !Number.isInteger(end);
    const decimals = isFloat ? 1 : 0;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasRun.current) {
        hasRun.current = true;
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (eased * end).toFixed(decimals);
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = end.toFixed(decimals);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return ref;
}
