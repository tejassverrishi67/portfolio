import React, { useEffect, useState } from 'react';
import { gsap } from '../../lib/gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
    // Labels cycle (Section 4)
    const textInterval1 = setTimeout(() => {
      setLoadingText('LOADING PORTFOLIO...');
    }, 1000);

    const textInterval2 = setTimeout(() => {
      setLoadingText('COMPILING EXPERIENCES...');
    }, 1800);

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Initial setup
    gsap.set('.stroke-T', { strokeDasharray: 120, strokeDashoffset: 120 });
    gsap.set('.stroke-R', { strokeDasharray: 150, strokeDashoffset: 150 });
    gsap.set('.progress-bar-fill', { scaleX: 0, transformOrigin: 'left' });
    gsap.set('.loader-radial-glow', { scale: 0.5, opacity: 0 });

    // Timeline sequence matching specifications exactly (STEP 6)
    tl.to('.loader-radial-glow', { scale: 1.2, opacity: 0.25, duration: 0.8, ease: 'power1.out' })
      // T draws at 300ms
      .to('.stroke-T', { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' }, 0.3)
      // R draws at 600ms
      .to('.stroke-R', { strokeDashoffset: 0, duration: 0.4, ease: 'power2.out' }, 0.6)
      // Filled with gradient at 900ms
      .to('.monogram-svg', { 
        filter: 'drop-shadow(0 0 25px rgba(0, 212, 255, 0.8))', 
        duration: 0.2 
      }, 0.9)
      // Progress bar starts at 1000ms, runs for 1.1s to hit 100% at 2100ms
      .to('.progress-bar-fill', { scaleX: 1, duration: 1.1, ease: 'power1.inOut' }, 1.0)
      // Explode monogram + clipPath fade screen at 2100ms
      .to('.monogram-wrapper', { 
        scale: 2.0, 
        opacity: 0, 
        duration: 0.4, 
        ease: 'power3.in' 
      }, 2.1)
      .to('.loader-screen', {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.8,
        ease: 'power4.inOut'
      }, 2.1)
      .to('.loader-screen', {
        opacity: 0,
        duration: 0.2
      }, '-=0.2');

    return () => {
      clearTimeout(textInterval1);
      clearTimeout(textInterval2);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="loader-screen fixed inset-0 w-full h-full bg-[#03020a] z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        className="loader-radial-glow absolute w-[500px] h-[500px] rounded-full bg-[#7c3aed] blur-[150px] pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Main monogram and loader container */}
      <div className="relative z-10 flex flex-col items-center select-none monogram-wrapper">
        {/* SVG Drawing Monogram */}
        <div className="w-24 h-24 mb-8 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="monogram-svg w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            {/* Letter T */}
            <path 
              className="stroke-T" 
              d="M 20 30 H 60 M 40 30 V 75" 
              stroke="url(#loaderGradient)" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
            />
            {/* Letter R */}
            <path 
              className="stroke-R" 
              d="M 52 75 V 42 H 72 C 82 42, 82 56, 72 56 H 52 M 66 56 L 80 75" 
              stroke="url(#loaderGradient)" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-[3px] bg-white/5 rounded-full overflow-hidden mb-3 relative">
          <div className="progress-bar-fill absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-violet origin-left" />
        </div>

        {/* Status text */}
        <span className="font-mono text-[10px] tracking-[0.2em] text-text-secondary">
          {loadingText}
        </span>
      </div>
    </div>
  );
};
