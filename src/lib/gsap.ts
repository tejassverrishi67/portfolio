import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Default easing curves
export const EASE = {
  smooth: 'power3.out',
  spring: 'elastic.out(1, 0.5)',
  snappy: 'power4.out',
  gentle: 'power1.inOut',
  back: 'back.out(1.7)',
};

export { gsap, ScrollTrigger };
