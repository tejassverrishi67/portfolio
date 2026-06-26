import React, { useState, useEffect, useRef } from 'react';
import { Github, Clock, Award, Plane, HelpCircle, Users } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';
import { gsap, Flip, ScrollTrigger } from '../../lib/gsap';
import { PROJECTS, type ProjectItem } from '../../data/portfolio';

interface CardProps {
  project: ProjectItem;
  isMobile: boolean;
}

const ProjectCard: React.FC<CardProps> = ({ project, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isMobile) return;

    // Initialize vanilla-tilt (STEP 6)
    if (project.id === 'neuromap') {
      VanillaTilt.init(card, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      });
    } else {
      VanillaTilt.init(card, {
        max: 12,
        speed: 300,
      });
    }

    return () => {
      if ((card as any).vanillaTilt) {
        (card as any).vanillaTilt.destroy();
      }
    };
  }, [isMobile, project.id]);

  const renderVisualMockup = (id: string) => {
    switch (id) {
      case 'neuromap': // SVG Animated node network
        return (
          <div className="w-full h-full relative flex items-center justify-center bg-bg-void/40 overflow-hidden min-h-[160px]">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px]" />
            <svg viewBox="0 0 200 100" className="w-[85%] h-[85%] overflow-visible">
              <line x1="40" y1="50" x2="70" y2="30" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" className="animate-pulse" />
              <line x1="40" y1="50" x2="80" y2="70" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" />
              <line x1="70" y1="30" x2="110" y2="35" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="1.5" />
              <line x1="80" y1="70" x2="120" y2="60" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" />
              <line x1="110" y1="35" x2="160" y2="50" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="1.5" />
              <line x1="120" y1="60" x2="160" y2="50" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" />

              <circle cx="40" cy="50" r="5" fill="#00d4ff" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="40" cy="50" r="5" fill="#00d4ff" />
              
              <circle cx="70" cy="30" r="4.5" fill="#7c3aed" />
              <circle cx="80" cy="70" r="4.5" fill="#a855f7" />
              
              <circle cx="110" cy="35" r="5.5" fill="#00d4ff" />
              <circle cx="120" cy="60" r="4" fill="#7c3aed" />
              
              <circle cx="160" cy="50" r="6" fill="#f0abfc" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="160" cy="50" r="6" fill="#f0abfc" />
            </svg>
          </div>
        );

      case 'queue-care': // Live queue counter
        return <QueueCareMockup />;

      case 'medcover': // AI Chat typing
        return <MedCoverMockup />;

      case 'aptitude': // Countdown timer
        return <AptitudeMockup />;

      case 'airline': // Split-flap departure board
        return <AirlineMockup />;

      default:
        return <div className="w-full h-full bg-white/5 flex items-center justify-center text-text-muted">No Preview</div>;
    }
  };

  const borderClass = project.featured 
    ? 'border-neon-gold/20 hover:border-neon-gold/40' 
    : 'border-white/5 hover:border-neon-blue/30';

  return (
    <div
      ref={cardRef}
      data-cursor="project"
      className={`project-card glass-card overflow-hidden flex flex-col relative ${borderClass} ${
        project.featured ? 'col-span-1 lg:col-span-2' : 'col-span-1'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Featured Award Banner (STEP 6) */}
      {project.featured && project.award && (
        <div className="w-full py-2.5 px-6 bg-gradient-to-r from-neon-gold/15 via-neon-gold/5 to-transparent border-b border-neon-gold/30 text-neon-gold font-mono text-[10px] md:text-[11px] tracking-[0.1em] flex items-center gap-2 select-none relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: 'shimmer 3s infinite' }} />
          <Award size={14} className="text-neon-gold animate-bounce" />
          <span>{project.award}</span>
        </div>
      )}

      {/* Graphic Preview */}
      <div className="w-full border-b border-white/5 bg-bg-void/25 relative overflow-hidden" style={{ transform: 'translateZ(15px)' }}>
        {renderVisualMockup(project.id)}
      </div>

      {/* Info Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between" style={{ transform: 'translateZ(30px)' }}>
        <div>
          <div className="flex flex-col mb-4">
            <h3 className="text-2xl font-display font-extrabold text-gradient">
              {project.title}
            </h3>
            {project.subtitle && (
              <span className="font-body text-xs text-text-secondary mt-1">
                {project.subtitle}
              </span>
            )}
          </div>

          <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-body">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-md font-mono text-[10px] text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 text-text-primary text-xs font-mono flex items-center gap-2 cursor-none select-none transition-all active:scale-95"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* Queue Care Mockup */
const QueueCareMockup: React.FC = () => {
  const [queueCount, setQueueCount] = useState(12);

  useEffect(() => {
    const queueCycle = [12, 7, 3, 15, 8, 12];
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % queueCycle.length;
      setQueueCount(queueCycle[step]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[160px] p-4 flex flex-col justify-between font-mono bg-bg-void/40">
      <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
        <span className="text-neon-blue flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
          LIVE QUEUE MONITOR
        </span>
        <span className="text-text-muted">WAITING TIME: ~15 MINS</span>
      </div>

      <div className="flex items-center justify-center my-2 gap-4">
        <div className="text-center">
          <div className="text-3xl font-display font-bold text-gradient-gold">
            {queueCount}
          </div>
          <div className="text-[9px] text-text-muted">IN QUEUE</div>
        </div>
        <div className="h-8 w-[1px] bg-white/5" />
        <div className="text-left text-[11px] text-text-secondary flex flex-col gap-0.5">
          <span>NOW CALLED: <strong className="text-neon-blue">#104</strong></span>
          <span>EST. DELAY: <strong className="text-[#fbbf24]">5 MINS</strong></span>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-[9px]">
        <div className="flex justify-between items-center bg-neon-green/10 border-l-2 border-neon-green p-1 text-neon-green rounded-r">
          <span>Patient #103</span>
          <span className="font-semibold">DONE</span>
        </div>
        <div className="flex justify-between items-center bg-neon-blue/10 border-l-2 border-neon-blue p-1 text-neon-blue rounded-r">
          <span>Patient #104</span>
          <span className="font-semibold">CALLED</span>
        </div>
      </div>
    </div>
  );
};

/* MedCover Chat Mockup */
const MedCoverMockup: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'user', text: 'I have stomach ache and slight nausea.' }
  ]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer1: number;
    let timer2: number;

    const runChatAnimation = () => {
      setMessages([{ sender: 'user', text: 'I have stomach ache and slight nausea.' }]);
      setTyping(true);

      timer1 = setTimeout(() => {
        setTyping(false);
        setMessages(prev => [
          ...prev,
          { sender: 'ai', text: 'Based on your symptoms, I recommend drinking plenty of water. Please consult a doctor if pain persists.' }
        ]);
      }, 3500);

      timer2 = setTimeout(() => {
        runChatAnimation();
      }, 8000);
    };

    runChatAnimation();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[160px] p-4 flex flex-col justify-between font-mono bg-bg-void/40 text-[10px]">
      <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-[10px] text-text-secondary">
        <Users size={12} className="text-neon-violet" />
        <span>SocioAI HEALTH ASSISTANT</span>
      </div>

      <div className="flex flex-col gap-2.5 my-2 flex-grow overflow-hidden max-h-[90px]">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`max-w-[85%] rounded-xl p-2 leading-relaxed ${
              msg.sender === 'user' 
                ? 'self-end bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-right' 
                : 'self-start bg-neon-violet/10 border border-neon-violet/20 text-neon-violet text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="self-start bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex gap-1 items-center w-14">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-violet animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-neon-violet animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-neon-violet animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </div>
    </div>
  );
};

/* Aptitude Exam Mockup */
const AptitudeMockup: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ min: 14, sec: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec === 0) {
          return { min: prev.min - 1, sec: 59 };
        } else {
          return { min: prev.min, sec: prev.sec - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[160px] p-4 flex flex-col justify-between font-mono bg-bg-void/40 text-[10px]">
      <div className="flex justify-between items-center border-b border-white/5 pb-2 text-text-secondary text-[9px]">
        <span className="flex items-center gap-1.5">
          <HelpCircle size={12} className="text-neon-blue" />
          APTITUDE EXAM: MATH & LOGIC
        </span>
        <span className="text-[#f59e0b] font-bold flex items-center gap-1">
          <Clock size={11} />
          {timeLeft.min}:{timeLeft.sec < 10 ? `0${timeLeft.sec}` : timeLeft.sec}
        </span>
      </div>

      <div className="flex flex-col gap-1 my-2">
        <span className="text-[9px] text-text-muted">QUESTION 3 OF 20</span>
        <p className="text-text-secondary leading-relaxed font-body text-[10px]">
          If a series is 2, 6, 12, 20, 30... what is the next number?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <div className="border border-white/5 bg-white/[0.01] p-1.5 rounded flex items-center gap-1 text-text-secondary select-none">
          <span className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center text-[7px]">A</span>
          <span>36</span>
        </div>
        <div className="border border-neon-blue/30 bg-neon-blue/5 p-1.5 rounded flex items-center gap-1 text-neon-blue select-none">
          <span className="w-3 h-3 rounded-full bg-neon-blue text-bg-void flex items-center justify-center text-[7px] font-bold">B</span>
          <span>42 ✓</span>
        </div>
      </div>
    </div>
  );
};

/* Airline Reservation Mockup */
const AirlineMockup: React.FC = () => {
  const flights = [
    { code: "AI 104", from: "MAA", to: "DEL", status: "ON TIME" },
    { code: "LH 756", from: "FRA", to: "MAA", status: "BOARDING" },
    { code: "EK 542", from: "DXB", to: "MAA", status: "DELAYED" }
  ];

  return (
    <div className="w-full h-full min-h-[160px] p-4 flex flex-col justify-between font-mono bg-[#0c0a05] text-[10px]">
      <div className="flex justify-between items-center border-b border-[#fbbf24]/20 pb-2 text-[#fbbf24] font-bold text-[9px]">
        <span className="flex items-center gap-1.5">
          <Plane size={12} className="animate-pulse" />
          DEPARTURE BOARD
        </span>
        <span>MAA TERMINAL 2</span>
      </div>

      <div className="flex flex-col gap-1.5 my-2">
        {flights.map((flight, idx) => (
          <div key={idx} className="grid grid-cols-4 items-center bg-[#1a1408] border border-[#fbbf24]/10 rounded p-1.5 text-text-primary text-[9px]">
            <span className="font-bold text-[#fbbf24]">{flight.code}</span>
            <span className="text-center">{flight.from}</span>
            <span className="text-center">{flight.to}</span>
            <span className={`text-right font-bold ${
              flight.status === 'BOARDING' 
                ? 'text-[#00ff88]' 
                : flight.status === 'DELAYED' 
                  ? '#ff4444' 
                  : '#fbbf24'
            }`}>
              {flight.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('All');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window));
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    // GSAP cascade entering (STEP 6)
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  const handleFilterChange = (newFilter: string) => {
    // 1. Capture Layout Flip state
    const cards = gsap.utils.toArray('.project-card') as Element[];
    const state = Flip.getState(cards);

    setFilter(newFilter);

    // 2. Animate layout update (GSAP Flip Plugin, STEP 6)
    setTimeout(() => {
      Flip.from(state, {
        duration: 0.6,
        ease: 'power2.inOut',
        absolute: true,
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }, 0);
  };

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(filter));

  return (
    <section 
      ref={containerRef}
      id="projects"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <div className="font-mono text-xs text-neon-blue uppercase tracking-[0.2em] mb-2">
            04 // Creations
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold flex items-center gap-1 select-none">
            SELECTED PROJECTS
          </h2>
          <div className="h-[2px] bg-neon-blue w-20 mt-3 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Filter bar toggles */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['All', 'AI/ML', 'Full Stack', 'Real-time', 'Python'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              data-cursor="link"
              className={`px-5 py-2.5 rounded-full font-mono text-xs cursor-none select-none transition-all duration-300 ${
                filter === cat
                  ? 'bg-neon-blue text-bg-void shadow-[0_0_15px_rgba(0,212,255,0.5)] font-semibold border-neon-blue border'
                  : 'bg-white/5 border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reordering Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
