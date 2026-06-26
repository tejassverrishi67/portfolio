import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
    // 1. Text cycle effect
    const textInterval = setTimeout(() => {
      setLoadingText('LOADING PORTFOLIO...');
    }, 1000);

    const textInterval2 = setTimeout(() => {
      setLoadingText('COMPILING EXPERIENCES...');
    }, 1800);

    // 2. Timeline Animation Sequence (Section 4)
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Initial state
    gsap.set('.stroke-T', { strokeDasharray: 120, strokeDashoffset: 120 });
    gsap.set('.stroke-R', { strokeDasharray: 150, strokeDashoffset: 150 });
    gsap.set('.progress-bar-fill', { scaleX: 0, transformOrigin: 'left' });
    gsap.set('.loader-radial-glow', { scale: 0.5, opacity: 0 });

    // Sequence execution
    tl.to('.loader-radial-glow', { scale: 1.2, opacity: 0.25, duration: 0.8, ease: 'power1.out' })
      .to('.stroke-T', { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to('.stroke-R', { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .to('.monogram-svg', { 
        filter: 'drop-shadow(0 0 25px rgba(0, 212, 255, 0.8))', 
        duration: 0.3 
      })
      .to('.progress-bar-fill', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, '-=0.2')
      .to('.progress-bar-fill', { 
        boxShadow: '0 0 25px #fbbf24', 
        backgroundColor: '#fbbf24', 
        duration: 0.1 
      })
      .to('.monogram-wrapper', { 
        scale: 1.5, 
        opacity: 0, 
        duration: 0.5, 
        ease: 'power3.in' 
      }, '+=0.1')
      .to('.loader-screen', {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.8,
        ease: 'power4.inOut'
      }, '-=0.2')
      .to('.loader-screen', {
        opacity: 0,
        duration: 0.2
      });

    return () => {
      clearTimeout(textInterval);
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
        <span className="font-mono text-[10px] tracking-[0.2em] text-text-secondary animate-pulse">
          {loadingText}
        </span>
      </div>
    </div>
  );
};
