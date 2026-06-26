import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';
import { PERSONAL } from '../../data/portfolio';
import { CounterUp } from '../ui/CounterUp';
import { GlassCard } from '../ui/GlassCard';

interface OrbitSkill {
  name: string;
  radius: number;
  mobileRadius: number;
  speed: number;
  ccw: boolean;
  color: string;
}

const ORBIT_SKILLS: OrbitSkill[] = [
  { name: 'React', radius: 110, mobileRadius: 75, speed: 10, ccw: false, color: '#00d4ff' },
  { name: 'Java', radius: 130, mobileRadius: 90, speed: 12, ccw: false, color: '#fbbf24' },
  { name: 'AI/ML', radius: 150, mobileRadius: 105, speed: 13, ccw: true, color: '#f0abfc' },
  { name: 'Node.js', radius: 170, mobileRadius: 75, speed: 14, ccw: false, color: '#00ff88' },
  { name: 'Python', radius: 190, mobileRadius: 90, speed: 16, ccw: true, color: '#7c3aed' },
  { name: 'Three.js', radius: 210, mobileRadius: 105, speed: 18, ccw: false, color: '#00d4ff' },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const ctx = gsap.context(() => {
      // 1. Floating background "02" parallax-like
      gsap.fromTo('.about-bg-num',
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            scrub: 1,
          },
          y: -50,
          opacity: 0.015,
          ease: 'none'
        }
      );

      // 2. Section title character reveal (staggered split reveal)
      const titleChars = document.querySelectorAll('.about-title-char');
      gsap.fromTo(titleChars,
        { y: 50, opacity: 0, rotateX: -45 },
        {
          scrollTrigger: {
            trigger: '.about-title-trigger',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out'
        }
      );

      // Section title underline length
      gsap.fromTo('.about-title-line',
        { width: 0 },
        {
          scrollTrigger: {
            trigger: '.about-title-trigger',
            start: 'top 85%',
          },
          width: 80,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3
        }
      );

      // 3. Stagger bio paragraphs
      gsap.fromTo('.about-bio-para',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-text-col',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );

      // 4. Stagger stats cards
      gsap.fromTo('.about-stat-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-stats-row',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // 5. Stagger chips
      gsap.fromTo('.about-trait-tag',
        { scale: 0.8, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-traits-container',
            start: 'top 90%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.7)'
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const renderedSkills = isMobile 
    ? ORBIT_SKILLS.filter((_, idx) => idx % 2 === 0)
    : ORBIT_SKILLS;

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-12 border-b border-white/5"
    >
      {/* Background "02" */}
      <div className="about-bg-num absolute left-[5%] bottom-[10%] font-mono text-[25vw] md:text-[350px] font-bold text-white/[0.015] pointer-events-none select-none -z-10">
        02
      </div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Title */}
        <div className="about-title-trigger mb-16 flex flex-col items-start">
          <div className="font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            02 // Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold flex items-center gap-1 select-none">
            {"ABOUT ME".split("").map((char, i) => (
              <span key={i} className="about-title-char inline-block origin-bottom">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="about-title-line h-[2px] bg-neon-blue mt-3 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Avatar orbit rings */}
          <div className="lg:col-span-5 flex justify-center items-center h-[350px] md:h-[450px] relative select-none">
            
            {/* The Monogram Avatar */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-blue to-neon-violet p-[2px] shadow-[var(--glow-violet)] z-10">
              <div className="w-full h-full rounded-full bg-bg-surface flex items-center justify-center font-display font-bold text-2xl text-text-primary">
                TR
              </div>
            </div>

            {/* Orbit paths & Skill pills (Section 9) */}
            {renderedSkills.map((skill, index) => {
              const r = isMobile ? skill.mobileRadius : skill.radius;
              const duration = skill.speed;
              const startAngle = (360 / renderedSkills.length) * index;

              return (
                <div
                  key={skill.name}
                  className="absolute rounded-full border border-white/5 pointer-events-none"
                  style={{
                    width: `${r * 2}px`,
                    height: `${r * 2}px`,
                    zIndex: 5,
                  }}
                >
                  {/* Orbit container */}
                  <div
                    className="absolute inset-0 pointer-events-auto"
                    style={{
                      animation: `orbit-${skill.ccw ? 'ccw' : 'cw'} ${duration}s linear infinite`,
                    }}
                  >
                    {/* Orbiting pill */}
                    <div
                      data-cursor="link"
                      className="absolute px-3 py-1 bg-bg-surface/85 backdrop-blur-md border border-white/10 rounded-full font-mono text-[10px] text-text-secondary select-none hover:text-white transition-colors duration-200"
                      style={{
                        top: '0',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${startAngle}deg)`,
                        animation: `orbit-${skill.ccw ? 'cw' : 'ccw'} ${duration}s linear infinite`,
                        boxShadow: `0 0 10px ${skill.color}20`,
                        borderLeft: `2.5px solid ${skill.color}`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px ${skill.color}`;
                        e.currentTarget.style.borderColor = skill.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}20`;
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Narrative text & stats */}
          <div className="lg:col-span-7 flex flex-col items-start about-text-col">
            
            <div className="font-mono text-sm text-text-code mb-4 select-none">
              // Hello, World! I'm {PERSONAL.name.split(" ")[0]}.
            </div>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-body">
              A {PERSONAL.titleLine1} at {PERSONAL.college} on a mission to build software that leaves people speechless.
            </p>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-body">
              From crafting AI-powered visual tools to winning UI/UX awards at hackathons, I live at the intersection of engineering precision and creative vision. I've solved {PERSONAL.leetcodeCount}+ problems on LeetCode.
            </p>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-10 font-body">
              Currently open to roles, internships, and interesting problems that need creative engineering. Let's make something amazing.
            </p>

            {/* Stats row with CounterUp */}
            <div className="about-stats-row grid grid-cols-3 gap-4 w-full mb-10">
              <div className="about-stat-card">
                <GlassCard className="flex flex-col items-center p-6 text-center select-none">
                  <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                    <CounterUp end={PERSONAL.leetcodeCount} suffix="+" />
                  </span>
                  <span className="font-mono text-[10px] text-text-muted mt-2 uppercase tracking-wider">LeetCode</span>
                </GlassCard>
              </div>

              <div className="about-stat-card">
                <GlassCard className="flex flex-col items-center p-6 text-center select-none">
                  <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                    <CounterUp end={852} decimals={true} />
                  </span>
                  <span className="font-mono text-[10px] text-text-muted mt-2 uppercase tracking-wider">CGPA Score</span>
                </GlassCard>
              </div>

              <div className="about-stat-card">
                <GlassCard className="flex flex-col items-center p-6 text-center select-none">
                  <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                    <CounterUp end={3} suffix="+" />
                  </span>
                  <span className="font-mono text-[10px] text-text-muted mt-2 uppercase tracking-wider">Projects</span>
                </GlassCard>
              </div>
            </div>

            {/* Trait chips */}
            <div className="about-traits-container flex flex-wrap gap-3">
              {[
                "⚡ Problem Solver",
                "🎨 UI/UX Thinker",
                "🤖 AI Builder",
                "☕ Java Enthusiast",
                "🏆 Hackathon Warrior"
              ].map((trait) => (
                <span
                  key={trait}
                  data-cursor="link"
                  className="about-trait-tag px-4 py-2 border border-neon-blue/20 bg-neon-blue/5 rounded-full text-xs font-mono text-neon-blue transition-all duration-300 hover:bg-neon-blue/15 hover:scale-105 active:scale-95 cursor-none select-none"
                >
                  {trait}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};
