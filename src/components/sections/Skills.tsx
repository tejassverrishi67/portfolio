import React, { useEffect, useRef } from 'react';
import { Code, Globe, Database } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { SKILLS, SOFT_SKILLS } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Panels reveal
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

      // 2. Bar animations 0 -> level%
      const fillBars = document.querySelectorAll('.skill-bar-fill');
      fillBars.forEach((bar) => {
        const levelVal = bar.getAttribute('data-level');
        gsap.fromTo(bar,
          { width: '0%' },
          {
            scrollTrigger: {
              trigger: '.skill-panels-grid',
              start: 'top 75%',
            },
            width: `${levelVal}%`,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.1
          }
        );
      });

      // 3. Soft skill chips slide in/scatter
      gsap.fromTo('.soft-skill-chip',
        { 
          y: () => 50 + Math.random() * 30, 
          x: () => (Math.random() - 0.5) * 30,
          opacity: 0,
          rotate: () => (Math.random() - 0.5) * 20 
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
          <h2 className="text-4xl md:text-5xl font-display font-extrabold flex items-center gap-1 select-none">
            TECHNICAL EXPERTISE
          </h2>
          <div className="h-[2px] bg-neon-blue w-20 mt-3 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* 3-Column Panels (Languages, Web Tech, Data Tools) */}
        <div className="skill-panels-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Languages */}
          <GlassCard className="skill-panel-card p-8 flex flex-col hover:-translate-y-2 select-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                <Code className="text-neon-blue w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gradient">Languages</h3>
                <div className="w-10 h-[2px] bg-neon-blue mt-1" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {SKILLS.languages.map((skill) => (
                <div key={skill.name} className="flex flex-col w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[13px] text-text-primary">{skill.name}</span>
                    <span className="font-mono text-[11px] text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full bg-gradient-to-r from-neon-blue to-neon-violet rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Web Tech */}
          <GlassCard className="skill-panel-card p-8 flex flex-col hover:-translate-y-2 select-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                <Globe className="text-neon-blue w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gradient">Web Tech</h3>
                <div className="w-10 h-[2px] bg-neon-blue mt-1" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {SKILLS.webTech.map((skill) => (
                <div key={skill.name} className="flex flex-col w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[13px] text-text-primary">{skill.name}</span>
                    <span className="font-mono text-[11px] text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full bg-gradient-to-r from-neon-blue to-neon-violet rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Data Tools */}
          <GlassCard className="skill-panel-card p-8 flex flex-col hover:-translate-y-2 select-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                <Database className="text-neon-blue w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gradient">Data & Tools</h3>
                <div className="w-10 h-[2px] bg-neon-blue mt-1" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {SKILLS.dataTools.map((skill) => (
                <div key={skill.name} className="flex flex-col w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[13px] text-text-primary">{skill.name}</span>
                    <span className="font-mono text-[11px] text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full bg-gradient-to-r from-neon-blue to-neon-violet rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-container flex flex-col items-center max-w-[900px] mx-auto text-center mt-12">
          <h3 className="font-display font-bold text-xl text-text-primary mb-2 select-none">
            Beyond Code
          </h3>
          <p className="text-sm text-text-secondary mb-8 select-none">
            Essential traits that power synergy, communication, and project delivery.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                data-cursor="link"
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
