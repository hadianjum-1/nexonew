import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapSuccess = (trigger) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger || !ref.current) {
      return;
    }

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [trigger]);

  return ref;
};
