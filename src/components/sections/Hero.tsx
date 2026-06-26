import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { scrollTo } from '../../lib/lenis';

// Custom typewriter component
const Typewriter: React.FC = () => {
  const words = [
    "AI-powered experiences",
    "real-time web applications",
    "award-winning interfaces",
    "solutions that matter",
    "250+ LeetCode solutions"
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const fullText = words[currentWordIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <span className="font-mono text-neon-blue font-semibold min-h-[1.5em] inline-block">
      {currentText}
      <span className="animate-blink font-light">|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Setup Name letter arrays
  const firstName = "TEJASSVER".split("");
  const lastName = "RISHI S".split("");

  useEffect(() => {
    // 1. Scroll listener to hide indicator
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Letters drop-in from top on mount
    const ctx = gsap.context(() => {
      const letters = document.querySelectorAll('.hero-letter');
      gsap.fromTo(letters, 
        { y: -80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.03, 
          ease: 'power3.out',
          onComplete: () => {
            // Apply subtle floating animation once settled
            gsap.to('.hero-title-container', {
              y: -5,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            });
          }
        }
      );

      // Slide up badge, typewriter, bio, buttons
      gsap.from('.hero-fade-in', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.4
      });
    }, containerRef);

    // 3. Magnetic button animations
    const setupMagnetic = (el: HTMLElement | null) => {
      if (!el) return;
      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 80) {
          gsap.to(el, { x: dx * 0.35, y: dy * 0.35, scale: 1.02, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        }
      };
      
      const onMouseLeave = () => {
        gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      };

      window.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
      };
    };

    const cleanupMagnetic1 = setupMagnetic(btn1Ref.current);
    const cleanupMagnetic2 = setupMagnetic(btn2Ref.current);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
      if (cleanupMagnetic1) cleanupMagnetic1();
      if (cleanupMagnetic2) cleanupMagnetic2();
    };
  }, []);

  const clickCountRef = useRef(0);
  const [showEmoji, setShowEmoji] = useState(false);


  // Glitch effect on letter hover
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
      // Scatter name letters
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

      // Snap letters back and hide emoji
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

      clickCountRef.current = 0; // Reset counter
    }
  };


  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden py-24 select-none"
    >
      {/* Easter Egg 2 Smile emoji display */}
      <div 
        className={`absolute font-display text-8xl md:text-9xl pointer-events-none select-none z-30 transition-all duration-300 transform ${
          showEmoji ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0 pointer-events-none'
        }`}
      >
        😄
      </div>

      {/* Decorative Orbs (radial gradients, blurred, drifting) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-neon-violet/10 blur-[120px] top-10 left-10 animate-pulse pointer-events-none duration-[8000ms] -z-10" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-neon-blue/8 blur-[100px] bottom-10 right-10 pointer-events-none -z-10" />

      {/* Decorative background "01" */}
      <div className="absolute right-[5%] top-[10%] font-mono text-[25vw] md:text-[350px] font-bold text-white/[0.015] pointer-events-none select-none -z-10 select-none">
        01
      </div>

      <div className="max-w-[1000px] flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="hero-fade-in mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-[10px] text-xs font-mono text-text-secondary select-none">
          <span className="pulse-dot" />
          <span>✦ Available for Opportunities</span>
        </div>

        {/* The Massive Title Name (Section 8) */}
        <div 
          onClick={handleNameClick}
          className="hero-title-container flex flex-col items-center leading-[0.9] tracking-tighter mb-6 cursor-none"
        >
          <div ref={title1Ref} className="text-[12vw] sm:text-[10vw] md:text-[100px] lg:text-[128px] font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
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
          <div ref={title2Ref} className="text-[12vw] sm:text-[10vw] md:text-[100px] lg:text-[128px] font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
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
        <div className="hero-fade-in text-lg sm:text-xl md:text-2xl font-mono text-text-secondary mb-4 select-none">
          I build <Typewriter />
        </div>

        {/* Bio text */}
        <p className="hero-fade-in max-w-xl text-base sm:text-lg text-text-secondary mb-10 leading-relaxed font-body">
          CSE student at Chennai Institute of Technology crafting the future of web design, one line at a time.
        </p>

        {/* CTA Buttons */}
        <div className="hero-fade-in flex flex-col sm:flex-row gap-5 justify-center items-center z-10 w-full sm:w-auto">
          <button
            ref={btn1Ref}
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-display font-medium text-base shadow-[var(--glow-blue)] hover:brightness-110 cursor-none transition-all active:scale-95 select-none"
          >
            View My Work ↓
          </button>
          
          <a
            ref={btn2Ref}
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-text-primary font-display font-medium text-base flex items-center justify-center gap-2 cursor-none transition-all active:scale-95 select-none"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        onClick={() => scrollTo('#about')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none transition-all duration-500 z-10 ${
          showScrollIndicator ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-neon-blue">SCROLL TO EXPLORE</span>
        <div className="animate-bounce text-neon-blue">
          <ChevronDown size={20} />
        </div>
      </div>

      <style>{`
        .animate-blink {
          animation: cursor-blink 530ms step-end infinite;
        }
        @keyframes cursor-blink {
          from, to { color: transparent }
          50% { color: var(--color-neon-blue) }
        }
      `}</style>
    </section>
  );
};
