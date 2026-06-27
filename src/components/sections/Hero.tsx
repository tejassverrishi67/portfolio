import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import Typed from 'typed.js';
import { gsap } from '../../lib/gsap';
import { scrollTo } from '../../lib/lenis';
import { PERSONAL, TYPEWRITER_STRINGS } from '../../data/portfolio';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const typedSpanRef = useRef<HTMLSpanElement>(null);
  
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const clickCountRef = useRef(0);
  const [showEmoji, setShowEmoji] = useState(false);

  const firstName = "TEJASSVER".split("");
  const lastName = "RISHI".split("");

  useEffect(() => {
    // 1. Hide scroll indicator after 100px scroll
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Setup typed.js typewriter
    let typed: Typed | null = null;
    if (typedSpanRef.current) {
      typed = new Typed(typedSpanRef.current, {
        strings: TYPEWRITER_STRINGS,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    }

    // 3. Stagger drop-in letters animation
    const ctx = gsap.context(() => {
      const letters = document.querySelectorAll('.hero-letter');
      gsap.fromTo(letters, 
        { y: -60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.02, 
          ease: 'power3.out',
          onComplete: () => {
            // Apply float loop y +/-4px (4s loop) after settling
            gsap.to('.hero-title-container', {
              y: -4,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            });
          }
        }
      );

      // Slide up badge, typewriter, bio, buttons
      gsap.from('.hero-fade-item', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3
      });
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
      if (typed) typed.destroy();
    };
  }, []);

  // Letters hover glitch effect
  const handleLetterHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = e.currentTarget;
    gsap.timeline()
      .to(el, { 
        x: () => (Math.random() - 0.5) * 12, 
        y: () => (Math.random() - 0.5) * 12, 
        scale: 1.1,
        color: '#00d4ff', 
        textShadow: '0 0 8px #00d4ff',
        duration: 0.1 
      })
      .to(el, { 
        x: () => (Math.random() - 0.5) * 8, 
        y: () => (Math.random() - 0.5) * 8, 
        color: '#a855f7',
        textShadow: '0 0 8px #a855f7',
        duration: 0.1 
      })
      .to(el, { 
        x: 0, 
        y: 0, 
        scale: 1,
        color: 'inherit',
        textShadow: 'none',
        duration: 0.2, 
        ease: 'power2.out' 
      });
  };

  const handleNameClick = () => {
    clickCountRef.current += 1;
    if (clickCountRef.current >= 5) {
      // Scatter name letters (GSAP physics)
      const letters = document.querySelectorAll('.hero-letter');
      gsap.to(letters, {
        x: () => (Math.random() - 0.5) * 800,
        y: () => (Math.random() - 0.5) * 800,
        rotation: () => (Math.random() - 0.5) * 720,
        opacity: 0.4,
        duration: 0.8,
        ease: 'power2.out'
      });

      setShowEmoji(true);

      // Snap back letters
      gsap.to(letters, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        delay: 1.5,
        onComplete: () => {
          setShowEmoji(false);
        }
      });

      clickCountRef.current = 0;
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden py-24 select-none"
    >
      {/* Decorative Orbs (drifting CSS grads) */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-neon-violet/10 blur-[130px] top-[15%] left-[10%] animate-pulse duration-[10s] pointer-events-none -z-10" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-neon-blue/8 blur-[110px] bottom-[15%] right-[10%] pointer-events-none -z-10" />

      {/* Decorative background "01" (JetBrains Mono 400px) */}
      <div className="absolute right-[5%] top-[10%] font-mono text-[25vw] md:text-[400px] font-bold text-white/[0.015] pointer-events-none select-none -z-10">
        01
      </div>

      {/* Easter Egg 2 smile emoji */}
      <div 
        className={`absolute font-display text-8xl md:text-9xl pointer-events-none select-none z-30 transition-all duration-300 transform ${
          showEmoji ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0 pointer-events-none'
        }`}
      >
        😄
      </div>

      <div className="max-w-[1000px] flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="hero-fade-item mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-[10px] text-xs font-mono text-text-secondary select-none">
          <span className="pulse-dot" />
          <span>✦ Available for Opportunities</span>
        </div>

        {/* The Massive Title Name (Section 8) */}
        <div 
          onClick={handleNameClick}
          data-cursor="link"
          className="hero-title-container flex flex-col items-center leading-[0.9] tracking-tighter mb-6"
        >
          <div ref={title1Ref} className="text-[10vw] sm:text-[8.5vw] md:text-[85px] lg:text-[120px] font-display font-extrabold text-text-primary">
            {firstName.map((letter, i) => (
              <span 
                key={i} 
                onMouseEnter={handleLetterHover}
                className="hero-letter inline-block cursor-none hover:scale-110 active:scale-95 transition-transform select-none"
              >
                {letter}
              </span>
            ))}
          </div>
          <div ref={title2Ref} className="text-[10vw] sm:text-[8.5vw] md:text-[85px] lg:text-[120px] font-display font-extrabold text-text-primary">
            {lastName.map((letter, i) => (
              <span 
                key={i} 
                onMouseEnter={handleLetterHover}
                className="hero-letter inline-block cursor-none hover:scale-110 active:scale-95 transition-transform select-none"
                style={{ marginRight: letter === ' ' ? '0.25em' : '0' }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Typewriter */}
        <div className="hero-fade-item text-lg sm:text-xl md:text-2xl font-mono text-text-secondary mb-4 select-none">
          I build <span ref={typedSpanRef} className="text-neon-blue font-semibold" />
        </div>

        {/* Bio text */}
        <p className="hero-fade-item max-w-xl text-base sm:text-lg text-text-secondary mb-10 leading-relaxed font-body">
          {PERSONAL.college} student crafting the future, one line at a time.
        </p>

        {/* CTA Buttons (MagneticButtons) */}
        <div className="hero-fade-item flex flex-col sm:flex-row gap-5 justify-center items-center z-10 w-full sm:w-auto">
          <MagneticButton
            onClick={() => scrollTo('#projects')}
            data-cursor="link"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-display font-medium text-base shadow-[var(--glow-blue)] hover:brightness-110 cursor-none transition-all active:scale-95 select-none"
          >
            View My Work ↓
          </MagneticButton>
          
          <MagneticButton
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Tejassver_Rishi_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            data-cursor="link"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-text-primary font-display font-medium text-base flex items-center justify-center gap-2 cursor-none transition-all active:scale-95 select-none"
          >
            <FileText size={18} />
            Download Resume
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => scrollTo('#about')}
        data-cursor="link"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none transition-all duration-500 z-10 ${
          showScrollIndicator ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-neon-blue">SCROLL TO EXPLORE</span>
        <div className="animate-bounce text-neon-blue">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};
