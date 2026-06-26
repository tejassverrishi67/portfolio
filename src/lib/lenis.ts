import Lenis from 'lenis';

export function initLenis() {
  if (typeof window === 'undefined') return null;
  
  const lenis = new Lenis({ 
    lerp: 0.1, 
    smoothWheel: true 
  });
  
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  // Expose globally for convenience
  (window as any).lenis = lenis;
  
  return lenis;
}

export function scrollTo(target: string | number | HTMLElement, options?: any) {
  if (typeof window !== 'undefined' && (window as any).lenis) {
    (window as any).lenis.scrollTo(target, options);
  } else if (typeof window !== 'undefined') {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

