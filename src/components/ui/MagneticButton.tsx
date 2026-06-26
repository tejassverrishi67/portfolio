import React, { useRef, useEffect } from 'react';
import { gsap } from '../../lib/gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, ...props }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Detect mobile touch devices to disable magnetic logic for performance
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const dx = e.clientX - x;
      const dy = e.clientY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 80) {
        gsap.to(btn, { 
          x: dx * 0.3, 
          y: dy * 0.3, 
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(btn, { 
          x: 0, 
          y: 0, 
          duration: 0.5, 
          ease: 'elastic.out(1, 0.3)',
          overwrite: 'auto'
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(btn, { 
        x: 0, 
        y: 0, 
        duration: 0.5, 
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
