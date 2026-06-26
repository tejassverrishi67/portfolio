import React, { useEffect, useRef } from 'react';
import { Code, Globe, Database } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../../data/portfolio';

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Panel entrance animation
      gsap.fromTo('.skill-panel-card',
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.skill-panels-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // 2. Progress bars filling animation (Section 10)
      const fillBars = document.querySelectorAll('.skill-bar-fill');
      fillBars.forEach((bar) => {
        const targetPercent = bar.getAttribute('data-level');
        gsap.fromTo(bar,
          { width: '0%' },
          {
            scrollTrigger: {
              trigger: '.skill-panels-grid',
              start: 'top 75%',
            },
            width: `${targetPercent}%`,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.2
          }
        );
      });

      // 3. Soft skill chips scatter/fall entrance
      gsap.fromTo('.soft-skill-chip',
        { 
          y: () => 40 + Math.random() * 40, 
          x: () => (Math.random() - 0.5) * 40,
          opacity: 0,
          rotate: () => (Math.random() - 0.5) * 30 
        },
        {
          scrollTrigger: {
            trigger: '.soft-skills-container',
            start: 'top 85%',
          },
          y: 0,
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'back.out(1.5)'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="text-neon-blue w-6 h-6" />;
      case 'globe':
        return <Globe className="text-neon-blue w-6 h-6" />;
      case 'database':
        return <Database className="text-neon-blue w-6 h-6" />;
      default:
        return <Code className="text-neon-blue w-6 h-6" />;
    }
  };

  return (
    <section 
      ref={containerRef}
      id="skills"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <div className="font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            03 // Abilities
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold flex items-center gap-1">
            TECHNICAL EXPERTISE
          </h2>
          <div className="h-[2px] bg-neon-blue w-20 mt-3 rounded-full" />
        </div>

        {/* 3-Column Glass Panels Grid (Section 10) */}
        <div className="skill-panels-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="skill-panel-card glass-panel rounded-3xl p-8 flex flex-col hover:-translate-y-2 select-none"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gradient">
                    {category.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-neon-blue mt-1" />
                </div>
              </div>

              {/* Progress bars list */}
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col w-full">
                    {/* Label row */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[13px] text-text-primary">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-text-muted">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Bar track */}
                    <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden">
                      {/* Bar Fill */}
                      <div 
                        className="skill-bar-fill h-full bg-gradient-to-r from-neon-blue to-neon-violet rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Soft Skills Section (Beyond Code) */}
        <div className="soft-skills-container flex flex-col items-center max-w-[900px] mx-auto text-center mt-12">
          
          <h3 className="font-display font-bold text-xl text-text-primary mb-2 select-none">
            Beyond Code
          </h3>
          <p className="text-sm text-text-secondary mb-8 select-none">
            Essential soft skills that power communication, synergy, and seamless delivery.
          </p>

          {/* Chips Wrapper */}
          <div className="flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="soft-skill-chip px-5 py-3 border border-white/10 bg-white/5 rounded-xl text-xs md:text-sm font-mono text-text-secondary hover:text-text-primary hover:bg-neon-violet/10 hover:border-neon-violet/30 hover:scale-105 active:scale-95 transition-all duration-300 transform select-none cursor-none flex items-center justify-center hover:-rotate-3"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
