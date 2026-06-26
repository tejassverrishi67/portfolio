import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Hide cursor on touch devices or if not desktop
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) {
      setIsHidden(true);
      return;
    }

    setIsHidden(false);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Snaps dot instantly to mouse position
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    // Smooth outer ring lag (lerp)
    let animationFrameId: number;
    const updateRingPosition = () => {
      ringX += (mouseX - ringX) * 0.15; // lag factor
      ringY += (mouseY - ringY) * 0.15;
      
      gsap.set(ring, { x: ringX, y: ringY });
      animationFrameId = requestAnimationFrame(updateRingPosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(updateRingPosition);

    // Track mouse entering/leaving window
    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const onMouseEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    // Hover transformations using event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. PROJECT CARD hover (checks if cursor is hovering a project card or element inside it)
      const projectCard = target.closest('.project-card');
      // 2. LINK / BUTTON hover
      const isLinkOrButton = target.closest('a, button, select, input, textarea, [role="button"], .interactive-element');
      // 3. TEXT hover (checks if it's text like paragraph or heading, but not within a button/link)
      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, li, blockquote') && !isLinkOrButton;

      if (projectCard) {
        setCursorText('VIEW');
        // Morph to violet ring, 60px diameter, dot disappears
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(ring, {
          width: 60,
          height: 60,
          backgroundColor: 'rgba(124, 58, 237, 0.15)',
          borderColor: '#7c3aed',
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
          borderRadius: '50%',
          duration: 0.2,
          overwrite: 'auto'
        });
      } else if (isLinkOrButton) {
        setCursorText('');
        // Scale ring up to 80px, transparent cyan, dot disappears
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(ring, {
          width: 80,
          height: 80,
          backgroundColor: 'rgba(0, 212, 255, 0.15)',
          borderColor: '#00d4ff',
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
          borderRadius: '50%',
          duration: 0.2,
          overwrite: 'auto'
        });
      } else if (isText) {
        setCursorText('');
        // Ring becomes a 60px wide, 2px high horizontal white caret
        gsap.to(dot, { scale: 1, backgroundColor: '#ffffff', duration: 0.2 });
        gsap.to(ring, {
          width: 60,
          height: 2,
          backgroundColor: '#ffffff',
          borderColor: 'transparent',
          boxShadow: 'none',
          borderRadius: '0px',
          duration: 0.2,
          overwrite: 'auto'
        });
      } else {
        setCursorText('');
        // Reset to default
        gsap.to(dot, { scale: 1, backgroundColor: '#00d4ff', duration: 0.2 });
        gsap.to(ring, {
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          borderColor: 'rgba(0, 212, 255, 0.4)',
          boxShadow: 'none',
          borderRadius: '50%',
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    // Clicking effect
    const handleMouseDown = () => {
      gsap.to([dot, ring], { scale: 0.6, duration: 0.1 });
      
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${mouseX}px`;
      ripple.style.top = `${mouseY}px`;
      document.body.appendChild(ripple);

      gsap.fromTo(ripple, 
        { width: 0, height: 0, opacity: 0.8 },
        { 
          width: 80, 
          height: 80, 
          opacity: 0, 
          duration: 0.6, 
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    const handleMouseUp = () => {
      gsap.to([dot, ring], { scale: 1, duration: 0.2 });
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* CSS styles for custom cursor and ripple */}
      <style>{`
        .cursor-dot {
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
        .cursor-ring {
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
          animation: cursor-ring-rotate 4s linear infinite;
        }
        .cursor-text {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.1em;
          pointer-events: none;
          opacity: 0;
          animation: fade-in 0.2s forwards;
        }
        .cursor-ripple {
          position: fixed;
          border: 1.5px solid #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: calc(var(--z-cursor) - 1);
          transform: translate(-50%, -50%);
        }
        @keyframes cursor-ring-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
      `}</style>
      
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>
  );
};
