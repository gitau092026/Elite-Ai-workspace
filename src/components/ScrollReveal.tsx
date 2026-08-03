import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale';
  threshold?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  threshold = 0.12,
  duration = 700,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  const hidden: React.CSSProperties = (() => {
    switch (direction) {
      case 'up':    return { opacity: 0, transform: 'translateY(36px)' };
      case 'down':  return { opacity: 0, transform: 'translateY(-36px)' };
      case 'left':  return { opacity: 0, transform: 'translateX(36px)' };
      case 'right': return { opacity: 0, transform: 'translateX(-36px)' };
      case 'scale': return { opacity: 0, transform: 'scale(0.88)' };
      case 'none':  return { opacity: 0, transform: 'none' };
      default:      return { opacity: 0, transform: 'translateY(36px)' };
    }
  })();

  const visible: React.CSSProperties = { opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };

  return (
    <div
      ref={elementRef}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delayMs}ms`,
        ...(isVisible ? visible : hidden),
      }}
      className={className}
    >
      {children}
    </div>
  );
};
