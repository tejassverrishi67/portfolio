import { gsap } from './gsap';

// Helper to stagger list elements slide up on viewport enter
export const animateSlideUp = (elements: string, trigger: string) => {
  gsap.from(elements, {
    scrollTrigger: {
      trigger: trigger,
      start: 'top 85%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
};

// Helper for title drawing animations
export const animateTitle = (element: string | HTMLElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
};
