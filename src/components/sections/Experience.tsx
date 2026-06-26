import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { scrollTo } from '../../lib/lenis';
import { EXPERIENCES } from '../../data/portfolio';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title reveals
      gsap.fromTo('.exp-title-fade',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.exp-header-trigger',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // 2. Animate vertical drawing timeline line (Section 13)
      gsap.fromTo('.timeline-line-fill',
        { scaleY: 0 },
        {
          scrollTrigger: {
            trigger: '.timeline-line-trigger',
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none'
        }
      );

      // 3. Stagger timeline nodes pulse
      const nodes = document.querySelectorAll('.timeline-node');
      nodes.forEach((node) => {
        gsap.fromTo(node,
          { scale: 0.6, opacity: 0.2 },
          {
            scrollTrigger: {
              trigger: node,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)'
          }
        );
      });

      // 4. Stagger experience cards sliding in (Left/Right entries)
      gsap.fromTo('.timeline-card-left',
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.timeline-card-left',
            start: 'top 80%',
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );

      gsap.fromTo('.timeline-card-right',
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.timeline-card-right',
            start: 'top 80%',
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="experience"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="exp-header-trigger mb-24 flex flex-col items-start">
          <div className="exp-title-fade font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            06 // Journey
          </div>
          <h2 className="exp-title-fade text-4xl md:text-5xl font-display font-extrabold select-none">
            WORK EXPERIENCE
          </h2>
          <div className="exp-title-fade h-[2px] bg-neon-blue w-20 mt-3 rounded-full" />
        </div>

        {/* Timeline Grid System Container */}
        <div className="timeline-line-trigger relative w-full flex flex-col items-center">
          
          {/* Vertical central timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-[1px] w-[2px] bg-white/5 -z-10">
            {/* Animate drawing indicator fill */}
            <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink origin-top transform scale-y-0" />
          </div>

          {/* Experience Item 1: Thiranex (Left card on Desktop) */}
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 items-start">
              
              {/* Card placement column */}
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1 flex justify-end">
                <div className="timeline-card-left glass-panel rounded-3xl p-6 md:p-8 max-w-xl text-left border border-white/5 w-full select-none">
                  
                  {/* Date Badge */}
                  <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full font-mono text-[10px] text-neon-blue mb-4">
                    {exp.duration}
                  </div>

                  {/* Header info */}
                  <div className="flex gap-4 items-center mb-6">
                    {/* Logo placeholder */}
                    <div className="w-12 h-12 bg-bg-elevated border border-white/15 rounded-xl flex items-center justify-center font-display font-bold text-text-primary text-lg">
                      T
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl text-text-primary">
                        🏢 {exp.company}
                      </h3>
                      <span className="text-sm text-text-secondary font-mono">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-body">
                    {exp.description}
                  </p>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2 md:justify-start">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-md font-mono text-[10px] text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Central node positioning column */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[7px] top-6 z-10 flex items-center justify-center">
                {/* Outer ring */}
                <div className="timeline-node w-[16px] h-[16px] rounded-full border-[2.5px] border-neon-blue bg-bg-deep shadow-[0_0_12px_#00d4ff] flex items-center justify-center">
                  {/* Inner dot */}
                  <div className="w-[5px] h-[5px] rounded-full bg-neon-blue" />
                </div>
              </div>

              {/* Blank column placeholder on desktop */}
              <div className="hidden md:block order-2" />

            </div>
          ))}

          {/* Future Ghost Placeholder (Right card on Desktop) */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            
            {/* Blank column placeholder on desktop */}
            <div className="hidden md:block" />

            {/* Central node positioning column */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[7px] top-6 z-10 flex items-center justify-center">
              {/* Outer ring (dashed style) */}
              <div className="timeline-node w-[16px] h-[16px] rounded-full border-2 border-dashed border-text-muted bg-bg-deep flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
              </div>
            </div>

            {/* Card placement column */}
            <div className="pl-12 md:pl-12 order-2 text-left">
              <div className="timeline-card-right border-2 border-dashed border-white/10 bg-white/[0.01] rounded-3xl p-6 md:p-8 max-w-xl opacity-60 hover:opacity-90 hover:border-neon-violet/30 transition-all duration-300 select-none">
                
                <h3 className="font-display font-bold text-lg md:text-xl text-text-primary mb-2">
                  Your company here?
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-body">
                  I'm currently seeking internships and full-time engineering roles. Let's design and build something amazing for your team.
                </p>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="px-4 py-2 bg-neon-violet/10 border border-neon-violet/20 hover:border-neon-violet/40 hover:bg-neon-violet/20 text-neon-purple rounded-lg font-mono text-xs cursor-none select-none flex items-center gap-2 transition-all duration-200 active:scale-95"
                >
                  Get in Touch
                  <ArrowRight size={14} />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
