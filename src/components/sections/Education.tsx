import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { EDUCATION_LIST, type Education as EducationType } from '../../data/portfolio';

interface EducationCardProps {
  edu: EducationType;
  isMobile: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || isMobile) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Respectful section: subtle tilt max 4 degrees
    const rotateX = -((y - yc) / yc) * 4;
    const rotateY = ((x - xc) / xc) * 4;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.01,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden transition-colors w-full select-none"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Icon frame */}
      <div className="p-4 bg-neon-blue/5 border border-neon-blue/15 rounded-2xl flex-shrink-0 flex items-center justify-center">
        {edu.id === 'be' ? (
          <GraduationCap size={32} className="text-neon-blue" />
        ) : (
          <BookOpen size={32} className="text-neon-purple" />
        )}
      </div>

      {/* Info content block */}
      <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <div className="flex flex-col gap-1.5 md:max-w-[70%]">
          <h3 className="font-display font-bold text-lg md:text-xl text-text-primary flex items-center gap-2">
            {edu.degree}
            {edu.field && (
              <span className="text-xs font-mono font-normal text-text-secondary px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {edu.field}
              </span>
            )}
          </h3>
          <span className="font-mono text-xs text-text-secondary font-semibold">
            {edu.institution}
          </span>
          <div className="flex flex-wrap gap-4 text-xs text-text-muted mt-1.5">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {edu.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {edu.duration}
            </span>
          </div>
        </div>

        {/* CGPA / Score progress bars */}
        <div className="flex flex-col w-full md:w-56 mt-4 md:mt-0 flex-shrink-0">
          <div className="flex justify-between items-center text-xs font-mono text-text-secondary mb-2">
            <span>{edu.score}</span>
            <span>{edu.scorePercent}%</span>
          </div>
          {/* Progress bar track */}
          <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
            {/* Animate fill on scroll */}
            <div 
              className="edu-bar-fill h-full rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
              data-score={edu.scorePercent}
              style={{ 
                width: '0%',
                background: edu.accentColor 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Touch detection
    const checkTouch = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window));
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    // 2. GSAP animations trigger
    const ctx = gsap.context(() => {
      // Title fades
      gsap.fromTo('.edu-title-fade',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.edu-header-trigger',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Card entries slide up
      gsap.fromTo('.edu-card-container',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.edu-list-wrapper',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Fills progress lines (Section 14)
      const fillLines = document.querySelectorAll('.edu-bar-fill');
      fillLines.forEach((fill) => {
        const targetPercent = fill.getAttribute('data-score');
        gsap.fromTo(fill,
          { width: '0%' },
          {
            scrollTrigger: {
              trigger: '.edu-list-wrapper',
              start: 'top 75%',
            },
            width: `${targetPercent}%`,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.2
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="education"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="edu-header-trigger mb-20 flex flex-col items-start">
          <div className="edu-title-fade font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            07 // Academics
          </div>
          <h2 className="edu-title-fade text-4xl md:text-5xl font-display font-extrabold select-none">
            EDUCATION RECORD
          </h2>
          <div className="edu-title-fade h-[2px] bg-neon-blue w-20 mt-3 rounded-full" />
        </div>

        {/* Stacked Cards list */}
        <div className="edu-list-wrapper flex flex-col gap-6 md:gap-8 max-w-[1000px] mx-auto">
          {EDUCATION_LIST.map((edu) => (
            <div key={edu.id} className="edu-card-container">
              <EducationCard edu={edu} isMobile={isMobile} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
