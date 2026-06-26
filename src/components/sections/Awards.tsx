import React, { useEffect, useRef } from 'react';
import { Trophy, Code, Beaker, GraduationCap, Award, Zap, ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../../data/portfolio';

export const Awards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title animations
      gsap.fromTo('.awards-title-fade',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.awards-header-trigger',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // 2. Cards stagger entrance
      gsap.fromTo('.award-card-item',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.awards-grid-container',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );

      // 3. LeetCode bar fills
      gsap.fromTo('.leetcode-bar-fill',
        { scaleX: 0, transformOrigin: 'left' },
        {
          scrollTrigger: {
            trigger: '.leetcode-widget-trigger',
            start: 'top 85%',
          },
          scaleX: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getAwardIcon = (iconName: string) => {
    const size = 32;
    const className = "text-neon-gold group-hover:scale-110 transition-transform duration-300";
    switch (iconName) {
      case 'trophy':
        return <Trophy size={size} className={className} />;
      case 'code':
        return <Code size={size} className={className} />;
      case 'lab':
        return <Beaker size={size} className={className} />;
      case 'cap':
        return <GraduationCap size={size} className={className} />;
      case 'python':
        return <Award size={size} className={className} />;
      case 'lightning':
        return <Zap size={size} className={className} />;
      default:
        return <Award size={size} className={className} />;
    }
  };

  return (
    <section 
      ref={containerRef}
      id="awards"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(251,191,36,0.025) 0%, transparent 70%)'
      }}
    >
      {/* Large decorative "★" rotating in background */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[30vw] md:text-[500px] text-white/[0.008] pointer-events-none select-none -z-10"
        style={{
          animation: 'rotate-star 60s linear infinite'
        }}
      >
        ★
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="awards-header-trigger mb-16 flex flex-col items-start">
          <div className="awards-title-fade font-mono text-xs text-neon-gold uppercase tracking-[0.2em] mb-2 font-semibold">
            05 // Recognition
          </div>
          <h2 className="awards-title-fade text-4xl md:text-5xl font-display font-extrabold select-none">
            AWARDS & <span className="text-neon-gold [text-shadow:0_0_15px_rgba(251,191,36,0.4)]">ACHIEVEMENTS</span>
          </h2>
          <div className="awards-title-fade h-[2px] bg-neon-gold w-20 mt-3 rounded-full shadow-[0_0_8px_#fbbf24]" />
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="awards-grid-container grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div 
              key={item.id}
              className="award-card-item glass-panel group rounded-3xl p-6 md:p-8 flex gap-6 items-start relative overflow-hidden border border-white/5 select-none"
            >
              {/* Shimmer overlay effect on card hover (Section 12) */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              {/* Icon Panel container */}
              <div className="p-4 bg-neon-gold/5 rounded-2xl border border-neon-gold/15 flex-shrink-0 flex items-center justify-center">
                {getAwardIcon(item.icon)}
              </div>

              {/* Text Area */}
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="font-display font-bold text-lg md:text-xl text-text-primary mb-1">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-text-secondary font-semibold mb-2">
                  {item.detail}
                </span>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
                  {item.extra}
                </p>

                {/* Live LeetCode Stats Widget embedded inside Card 2 */}
                {item.id === 'leetcode' && (
                  <a 
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="leetcode-widget-trigger block w-full max-w-[340px] bg-bg-void/80 border border-white/10 rounded-2xl p-4 font-mono text-[10px] text-text-secondary select-none cursor-none hover:border-neon-blue/40 transition-colors"
                  >
                    <div className="flex justify-between items-center text-[8px] text-text-muted mb-2.5 pb-1.5 border-b border-white/5">
                      <span>leetcode.com/tejassverrishi67</span>
                      <ExternalLink size={9} className="text-text-muted" />
                    </div>

                    <span className="text-[11px] font-bold text-text-primary block mb-3">250+ Problems Solved</span>

                    {/* Difficulty bars */}
                    <div className="flex flex-col gap-2">
                      {/* Easy */}
                      <div className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>Easy</span>
                          <span className="text-[#00dd30]">80+</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="leetcode-bar-fill h-full bg-[#00dd30] rounded-full" style={{ width: '35%' }} />
                        </div>
                      </div>

                      {/* Medium */}
                      <div className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>Medium</span>
                          <span className="text-[#ffb700]">150+</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="leetcode-bar-fill h-full bg-[#ffb700] rounded-full" style={{ width: '60%' }} />
                        </div>
                      </div>

                      {/* Hard */}
                      <div className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>Hard</span>
                          <span className="text-[#ff2d55]">20+</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="leetcode-bar-fill h-full bg-[#ff2d55] rounded-full" style={{ width: '10%' }} />
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes rotate-star {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
