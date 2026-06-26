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
      case 'neuromap': // Replicated Visual Canvas Mockup
        return <NeuroMapMockup />;

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

/* NeuroMap Canvas Mockup */
const NeuroMapMockup: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[340px] flex bg-[#06050c] text-text-primary rounded-t-xl overflow-hidden relative select-none font-mono text-[8px] md:text-[9px]">
      
      {/* 1. Left Sidebar */}
      <div className="hidden sm:flex flex-col w-[110px] h-full bg-[#030206] border-r border-white/5 p-2.5 flex-shrink-0 justify-between z-10">
        <div className="flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-1.5 text-[9px] font-display font-extrabold text-[#00ff88] mb-5">
            <span className="text-[12px]">🧠</span>
            <span>NeuroMap</span>
          </div>
          {/* Menu Items */}
          <div className="flex flex-col gap-1.5 text-text-secondary text-[8px]">
            <div className="hover:text-text-primary p-1 rounded transition-colors cursor-none">Dashboard</div>
            <div className="hover:text-text-primary p-1 rounded transition-colors cursor-none">Brain Dump</div>
            <div className="hover:text-text-primary p-1 rounded transition-colors cursor-none">Eisenhower</div>
            <div className="bg-[#00ff88]/10 text-[#00ff88] border-l-2 border-[#00ff88] pl-1.5 py-1 rounded-r font-semibold">Visual Canvas</div>
            <div className="hover:text-text-primary p-1 rounded transition-colors cursor-none">Settings</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7px] text-text-muted">
          <span>☀️ / 🌙</span>
          <span>◀</span>
        </div>
      </div>

      {/* 2. Main Screen Area */}
      <div className="flex flex-col flex-grow h-full overflow-hidden z-10">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center h-8 px-3 border-b border-white/5 bg-[#030206] text-[8px] flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-text-secondary hover:text-text-primary cursor-none">←</span>
            <span className="font-bold text-text-primary">My Career Roadmap</span>
            <span className="text-text-muted hidden md:inline">| Template Workspace</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 border border-white/10 rounded hover:bg-white/5 transition-colors cursor-none">Export</span>
            <span className="px-1.5 py-0.5 bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] rounded shadow-[0_0_8px_rgba(0,255,136,0.2)] cursor-none">Save</span>
          </div>
        </div>

        {/* Canvas Workspace */}
        <div className="relative flex-grow h-full w-full bg-[#06050c] bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:10px_10px] overflow-hidden">
          
          {/* SVG Connections (Section 11) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 45,25 C 30,25 25,35 22,42" fill="none" stroke="rgba(0, 255, 136, 0.35)" strokeWidth="0.6" className="animate-pulse" />
            <path d="M 45,25 C 48,32 50,38 55,48" fill="none" stroke="rgba(0, 255, 136, 0.35)" strokeWidth="0.6" />
            <path d="M 45,25 C 60,25 65,22 72,25" fill="none" stroke="rgba(0, 255, 136, 0.35)" strokeWidth="0.6" />
            <path d="M 22,58 C 25,68 28,70 33,74" fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="0.6" />
            <path d="M 55,62 C 50,70 40,73 33,74" fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="0.6" />
          </svg>

          {/* Node 1: GOAL (top-middle) */}
          <div className="absolute top-[8%] left-[35%] w-[85px] md:w-[110px] border border-[#00ff88]/30 shadow-[0_0_12px_rgba(0,255,136,0.15)] bg-[#0e0b1e]/90 rounded-lg p-1.5 flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1 text-[6px] md:text-[7px] text-[#00ff88] font-bold">
              <span>🎯</span> GOAL
            </div>
            <div className="font-bold text-[7px] md:text-[8px] text-text-primary leading-tight">SDE 2 at Tier 1 Tech</div>
            <div className="flex justify-between items-center text-[5px] md:text-[6px] text-text-muted mt-0.5">
              <span>Progress</span>
              <span className="text-[#00ff88]">20%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-0.5">
              <div className="h-full bg-[#00ff88]" style={{ width: '20%' }} />
            </div>
          </div>

          {/* Node 2: TASK (left) */}
          <div className="absolute top-[38%] left-[5%] w-[85px] md:w-[105px] border border-[#00d4ff]/30 shadow-[0_0_12px_rgba(0,212,255,0.15)] bg-[#0e0b1e]/90 rounded-lg p-1.5 flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1 text-[6px] md:text-[7px] text-[#00d4ff] font-bold">
              <span>📋</span> TASK
            </div>
            <div className="font-bold text-[7px] md:text-[8px] text-text-primary leading-tight">System Design Mastery</div>
            <p className="text-[5px] md:text-[6px] text-text-secondary leading-tight line-clamp-2">Read Alex Xu's System Design Interview...</p>
            <div className="flex items-center gap-1 text-[5px] md:text-[6px] text-[#00ff88] mt-0.5 font-semibold">
              <span>☑</span> In Progress
            </div>
          </div>

          {/* Node 3: TASK (middle-right) */}
          <div className="absolute top-[44%] left-[52%] w-[85px] md:w-[105px] border border-[#00d4ff]/30 shadow-[0_0_12px_rgba(0,212,255,0.15)] bg-[#0e0b1e]/90 rounded-lg p-1.5 flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1 text-[6px] md:text-[7px] text-[#00d4ff] font-bold">
              <span>📋</span> TASK
            </div>
            <div className="font-bold text-[7px] md:text-[8px] text-text-primary leading-tight">Open Source Contribs</div>
            <p className="text-[5px] md:text-[6px] text-text-secondary leading-tight line-clamp-2">Find 2 active repos in Next.js...</p>
            <span className="self-start px-1 py-0.5 rounded bg-[#00d4ff]/10 text-[5px] md:text-[6px] text-[#00d4ff] mt-0.5 font-bold">Medium</span>
          </div>

          {/* Node 4: DEADLINE (bottom-middle) */}
          <div className="absolute top-[70%] left-[27%] w-[85px] md:w-[110px] border border-[#fbbf24]/30 shadow-[0_0_12px_rgba(251,191,36,0.15)] bg-[#0e0b1e]/90 rounded-lg p-1.5 flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1 text-[6px] md:text-[7px] text-[#fbbf24] font-bold">
              <span>⏰</span> DEADLINE
            </div>
            <div className="font-bold text-[7px] md:text-[8px] text-text-primary leading-tight">Portfolio & Resume</div>
            <p className="text-[5px] md:text-[6px] text-text-muted leading-tight">Refactor site for metrics</p>
            <span className="self-start px-1 py-0.5 rounded bg-[#fbbf24]/10 text-[5px] md:text-[6px] text-[#fbbf24] mt-0.5 font-bold animate-pulse">90 days left</span>
          </div>

          {/* Node 5: NOTE (right-middle) */}
          <div className="absolute top-[20%] left-[70%] w-[85px] md:w-[110px] border border-[#a855f7]/30 shadow-[0_0_12px_rgba(168,85,247,0.15)] bg-[#0e0b1e]/90 rounded-lg p-1.5 flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1 text-[6px] md:text-[7px] text-[#a855f7] font-bold">
              <span>📝</span> NOTE
            </div>
            <div className="font-bold text-[7px] md:text-[8px] text-text-primary leading-tight">Career Resources Hub</div>
            <div className="flex gap-1 flex-wrap mt-0.5">
              <span className="bg-white/5 border border-white/10 px-1 py-0.2 rounded text-[4px] md:text-[5px] text-text-secondary">career</span>
              <span className="bg-white/5 border border-white/10 px-1 py-0.2 rounded text-[4px] md:text-[5px] text-text-secondary">links</span>
              <span className="bg-white/5 border border-white/10 px-1 py-0.2 rounded text-[4px] md:text-[5px] text-text-secondary">study</span>
            </div>
          </div>

          {/* Canvas Floating Toolbar */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0e0b1e]/90 border border-white/10 rounded-full px-2 py-1 z-10 scale-75 sm:scale-90 opacity-90 shadow-md">
            <div className="flex items-center gap-0.5 text-[#00ff88] border-r border-white/5 pr-1.5 text-[6px] md:text-[7px]"><span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full" /> Goal</div>
            <div className="flex items-center gap-0.5 text-[#00d4ff] border-r border-white/5 pr-1.5 text-[6px] md:text-[7px]"><span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" /> Task</div>
            <div className="flex items-center gap-0.5 text-[#fbbf24] border-r border-white/5 pr-1.5 text-[6px] md:text-[7px]"><span className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full" /> Date</div>
            <div className="flex items-center gap-0.5 text-[#a855f7] text-[6px] md:text-[7px]"><span className="w-1.5 h-1.5 bg-[#a855f7] rounded-full" /> Note</div>
          </div>

          {/* Zoom controls (bottom-left) */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-[#0e0b1e]/90 border border-white/10 rounded px-1.5 py-0.5 z-10 scale-75 md:scale-90 text-[7px] text-text-secondary">
            <span className="hover:text-text-primary cursor-none">+</span>
            <span className="text-white/10">|</span>
            <span className="hover:text-text-primary cursor-none">-</span>
            <span className="text-white/10">|</span>
            <span className="hover:text-text-primary cursor-none">🔍</span>
          </div>

          {/* Minimap (bottom-right) */}
          <div className="absolute bottom-2 right-2 w-14 h-10 bg-[#0e0b1e]/95 border border-white/10 rounded p-1 z-10 scale-75 md:scale-90 flex items-center justify-center">
            <div className="relative w-full h-full bg-[#06050c]/80 rounded border border-white/5">
              {/* goal dot */}
              <div className="absolute top-[8%] left-[35%] w-1 h-1 bg-[#00ff88] rounded-full" />
              {/* task 1 dot */}
              <div className="absolute top-[38%] left-[5%] w-1 h-1 bg-[#00d4ff] rounded-full" />
              {/* task 2 dot */}
              <div className="absolute top-[44%] left-[52%] w-1 h-1 bg-[#00d4ff] rounded-full" />
              {/* deadline dot */}
              <div className="absolute top-[70%] left-[27%] w-1 h-1 bg-[#fbbf24] rounded-full" />
              {/* note dot */}
              <div className="absolute top-[20%] left-[70%] w-1 h-1 bg-[#a855f7] rounded-full" />
            </div>
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
