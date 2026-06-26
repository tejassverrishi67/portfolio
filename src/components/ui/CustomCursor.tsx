import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');

  // Check touch capability synchronously before render
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  });

  useEffect(() => {
    if (isTouch) {
      document.documentElement.classList.remove('custom-cursor-active');
      return;
    }
    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Movement tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    // Lerped trailing ring loop
    let animFrameId: number;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.12; // Lerp 0.12 lag
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      animFrameId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    animFrameId = requestAnimationFrame(updateRing);

    // Fade in/out window triggers
    const onMouseLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const onMouseEnter = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // 2. Class/data-cursor attributes based hover states (STEP 6)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const cursorState = interactive.getAttribute('data-cursor');
        
        if (cursorState === 'project') {
          setCursorText('VIEW');
          gsap.to(dot, { scale: 0, duration: 0.2 });
          gsap.to(ring, {
            width: 60,
            height: 60,
            backgroundColor: 'rgba(124, 58, 237, 0.15)',
            borderColor: '#7c3aed',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
            duration: 0.2,
            overwrite: 'auto'
          });
        } else if (cursorState === 'link') {
          setCursorText('');
          gsap.to(dot, { scale: 0, duration: 0.2 });
          gsap.to(ring, {
            width: 80,
            height: 80,
            backgroundColor: 'rgba(0, 212, 255, 0.15)',
            borderColor: '#00d4ff',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
            duration: 0.2,
            overwrite: 'auto'
          });
        }
      } else {
        // Default cursor
        setCursorText('');
        gsap.to(dot, { scale: 1, backgroundColor: '#00d4ff', duration: 0.2 });
        gsap.to(ring, {
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          borderColor: 'rgba(0, 212, 255, 0.4)',
          boxShadow: 'none',
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    // 3. Click down scale state
    const handleMouseDown = () => {
      gsap.to([dot, ring], { scale: 0.6, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to([dot, ring], { scale: 1, duration: 0.2 });
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameId);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <style>{`
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: var(--z-cursor);
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
        }
        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(0, 212, 255, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: var(--z-cursor);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ring-slow-rotate 6s linear infinite;
        }
        .custom-cursor-text {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.1em;
          opacity: 0;
          animation: fade-in-text 0.2s forwards;
        }
        @keyframes ring-slow-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fade-in-text {
          to { opacity: 1; }
        }
      `}</style>
      
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        {cursorText && <span className="custom-cursor-text">{cursorText}</span>}
      </div>
    </>
  );
};
