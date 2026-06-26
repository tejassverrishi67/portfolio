import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Code } from 'lucide-react';
import { scrollTo } from '../../lib/lenis';
import { PERSONAL_INFO } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 1. Scroll listener for Back to Top visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. DevTools Console welcoming message (Easter Egg 4)
    console.log(
      `%c ████████╗
%c ╚══██╔══╝███████╗       ██╗ █████╗ ███████╗███████╗██╗   ██╗███████╗██████╗ 
%c    ██║   ██╔════╝      ██╔╝██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔══██╗
%c    ██║   █████╗       ██╔╝ ███████║███████╗███████╗██║   ██║█████╗  ██████╔╝
%c    ██║   ██╔══╝      ██╔╝  ██╔══██║╚════██║╚════██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
%c    ██║   ███████╗   ██╔╝   ██║  ██║███████║███████║ ╚████╔╝ ███████╗██║  ██║
%c    ╚═╝   ╚══════╝   ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

👋 Hey there, fellow developer!
Impressive that you're looking under the hood.
I like you already.

📧 tejassverrishis.cse2025@citchennai.net
🔗 github.com/tejassverrishi67

Built with: Next.js/Vite, Three.js, GSAP, Lenis & love.`,
      'color: #00d4ff; font-weight: bold;',
      'color: #7c3aed; font-weight: bold;',
      'color: #a855f7; font-weight: bold;',
      'color: #7c3aed; font-weight: bold;',
      'color: #a855f7; font-weight: bold;',
      'color: #00d4ff; font-weight: bold;',
      'color: #f0abfc; font-weight: bold;'
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPlatformGlow = (type: string) => {
    switch (type) {
      case 'github': return 'hover:border-white hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:bg-white/5';
      case 'linkedin': return 'hover:border-[#0072b1] hover:text-[#0072b1] hover:shadow-[0_0_12px_rgba(0,114,177,0.3)] hover:bg-[#0072b1]/5';
      case 'leetcode': return 'hover:border-[#ffa116] hover:text-[#ffa116] hover:shadow-[0_0_12px_rgba(255,161,22,0.3)] hover:bg-[#ffa116]/5';
      default: return '';
    }
  };

  return (
    <footer className="relative w-full bg-[#03020a] border-t border-white/5 py-12 px-6 md:px-12 select-none">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Upper layout: Monogram + social links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo & credits */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <span 
              onClick={() => scrollTo('body')}
              className="text-xl font-display font-extrabold text-gradient cursor-none select-none tracking-wider mb-2 inline-block hover:scale-105 active:scale-95 transition-transform"
            >
              TR
            </span>
            <span className="text-xs text-text-secondary">
              Built with ♥ by Tejassver Rishi S
            </span>
            <span className="text-[10px] text-text-muted">
              Chennai, Tamil Nadu &bull; 2029
            </span>
          </div>

          {/* Social icons (Section 17) */}
          <div className="flex gap-4">
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted transition-all duration-300 cursor-none select-none ${getPlatformGlow('github')}`}
            >
              <Github size={18} />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted transition-all duration-300 cursor-none select-none ${getPlatformGlow('linkedin')}`}
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted transition-all duration-300 cursor-none select-none ${getPlatformGlow('leetcode')}`}
            >
              <Code size={18} />
            </a>
          </div>
        </div>

        {/* Separator hairline */}
        <div className="w-full h-[1px] bg-white/5" />

        {/* Lower layout: copyright */}
        <div className="text-center">
          <span className="font-mono text-[10px] md:text-[11px] text-text-muted">
            DESIGNED & DEVELOPED BY TEJASSVER RISHI S
          </span>
        </div>

      </div>

      {/* Floating Back to Top Button (Section 17) */}
      <button
        onClick={() => scrollTo('body')}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full glass-panel border border-white/10 text-neon-blue flex items-center justify-center shadow-lg cursor-none select-none z-[97] transition-all duration-500 hover:scale-110 active:scale-95 hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};
