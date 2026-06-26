import Lenis from 'lenis';
import { gsap } from 'gsap';

let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (typeof window === 'undefined') return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Connect Lenis to GSAP ticker for seamless integration
  const tickerUpdate = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };
  
  gsap.ticker.add(tickerUpdate);
  gsap.ticker.lagSmoothing(0);

  // Expose to window for debugging if needed
  (window as any).lenis = lenisInstance;

  return lenisInstance;
};

export const getLenis = () => lenisInstance;

export const scrollTo = (target: string | HTMLElement, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  } else {
    // Fallback if lenis is not initialized
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
