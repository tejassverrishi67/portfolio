import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

// Skill pills orbiting details
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

interface StatCardProps {
  end: number;
  label: string;
  suffix?: string;
  decimals?: boolean;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ end, label, suffix = '', decimals = false, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = end / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  const displayVal = decimals 
    ? (count / 100).toFixed(2) 
    : Math.floor(count).toString();

  return (
    <div className="glass-panel flex flex-col justify-center items-center p-6 rounded-2xl text-center w-full min-w-[100px] border border-white/5 relative overflow-hidden group select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <span className="text-4xl md:text-5xl font-display font-bold text-gradient select-none">
        {displayVal}{suffix}
      </span>
      <span className="font-mono text-[11px] text-text-muted mt-2 tracking-wider select-none uppercase">
        {label}
      </span>
    </div>
  );
};

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Mobile check
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 2. GSAP scroll animation triggers (Section 9)
    const ctx = gsap.context(() => {
      // Background number "02" float in
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

      // Section title word reveal
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

      // Title line width extension
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

      // Bio text slide up stagger
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

      // Stats cards animation slide in + trigger counts
      gsap.fromTo('.about-stat-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-stats-row',
            start: 'top 85%',
            onEnter: () => setStatsVisible(true)
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Trait tags stagger reveal
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

  // Filter skills for mobile view (Section 20: render only 3 orbit pills)
  const renderedSkills = isMobile 
    ? ORBIT_SKILLS.filter((_, idx) => idx % 2 === 0) // only React, AI/ML, Python
    : ORBIT_SKILLS;

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-12 border-b border-white/5"
    >
      {/* Decorative Background number "02" */}
      <div className="about-bg-num absolute left-[5%] bottom-[10%] font-mono text-[25vw] md:text-[350px] font-bold text-white/[0.015] pointer-events-none select-none -z-10">
        02
      </div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Title Header */}
        <div className="about-title-trigger mb-16 flex flex-col items-start">
          <div className="font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            02 // Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold flex items-center gap-1">
            {"ABOUT ME".split("").map((char, i) => (
              <span key={i} className="about-title-char inline-block origin-bottom">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="about-title-line h-[2px] bg-neon-blue mt-3 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Avatar orbit rings */}
          <div className="lg:col-span-5 flex justify-center items-center h-[350px] md:h-[450px] relative select-none">
            
            {/* The Avatar Frame Monogram (Section 9) */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-blue to-neon-violet p-[2px] shadow-[var(--glow-violet)] z-10">
              <div className="w-full h-full rounded-full bg-bg-surface flex items-center justify-center font-display font-bold text-2xl text-text-primary">
                TR
              </div>
            </div>

            {/* Orbit paths & Skill pills */}
            {renderedSkills.map((skill, index) => {
              const r = isMobile ? skill.mobileRadius : skill.radius;
              const duration = skill.speed;
              
              // We distribute the starting angles evenly around the circle
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
                  {/* Orbit container that rotates */}
                  <div
                    className="absolute inset-0 pointer-events-auto"
                    style={{
                      animation: `orbit-${skill.ccw ? 'ccw' : 'cw'} ${duration}s linear infinite`,
                    }}
                  >
                    {/* The orbiting label */}
                    <div
                      className="absolute px-3 py-1 bg-bg-surface/85 backdrop-blur-md border border-white/10 rounded-full font-mono text-[10px] text-text-secondary select-none cursor-none hover:text-white transition-colors duration-200"
                      style={{
                        top: '0',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${startAngle}deg) translate(0, 0)`,
                        // We cancel out the rotation to keep the text horizontal
                        animation: `orbit-${skill.ccw ? 'cw' : 'ccw'} ${duration}s linear infinite`,
                        boxShadow: `0 0 10px ${skill.color}20`,
                        borderLeft: `2.5px solid ${skill.color}`
                      }}
                      onMouseEnter={(e) => {
                        // Highlight outline of the orbit and the pill
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

          {/* Right Column - Narrative text & stats */}
          <div className="lg:col-span-7 flex flex-col items-start about-text-col">
            
            {/* Greeting */}
            <div className="font-mono text-sm text-text-code mb-4 select-none">
              // Hello, World! I'm Tejassver.
            </div>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-body">
              A Computer Science Engineering student at Chennai Institute of Technology with a CGPA of 8.52, on a mission to build software that leaves people speechless.
            </p>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-body">
              From crafting AI-powered visual tools to winning UI/UX awards at hackathons, I live at the intersection of engineering precision and creative vision. I've solved 250+ problems on LeetCode and still find bugs beautiful.
            </p>

            <p className="about-bio-para text-text-secondary text-base md:text-lg leading-relaxed mb-10 font-body">
              Currently open to full-time roles, internships, and interesting problems that need creative solutions. Let's make something amazing.
            </p>

            {/* Stats grid row */}
            <div className="about-stats-row grid grid-cols-3 gap-4 w-full mb-10">
              <div className="about-stat-card">
                <StatCard end={250} label="LeetCode" suffix="+" isVisible={statsVisible} />
              </div>
              <div className="about-stat-card">
                <StatCard end={852} label="CGPA" suffix="" decimals={true} isVisible={statsVisible} />
              </div>
              <div className="about-stat-card">
                <StatCard end={5} label="Projects" suffix="+" isVisible={statsVisible} />
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
                  className="about-trait-tag px-4 py-2 border border-neon-blue/20 bg-neon-blue/5 rounded-full text-xs font-mono text-neon-blue transition-all duration-300 hover:bg-neon-blue/15 hover:scale-105 active:scale-95 cursor-none select-none"
                >
                  {trait}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Orbit rotating animation definition */}
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
