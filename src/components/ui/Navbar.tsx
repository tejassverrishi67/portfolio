import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { scrollTo } from '../../lib/lenis';
import { PERSONAL } from '../../data/portfolio';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Awards', id: 'awards' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoClicksRef = useRef(0);
  const lastLogoClickTimeRef = useRef(0);

  const handleLogoClick = () => {
    scrollTo('body');
    const now = Date.now();
    if (now - lastLogoClickTimeRef.current > 1500) {
      logoClicksRef.current = 1;
    } else {
      logoClicksRef.current += 1;
    }
    lastLogoClickTimeRef.current = now;

    if (logoClicksRef.current >= 3) {
      window.dispatchEvent(new CustomEvent('disco-trigger'));
      logoClicksRef.current = 0;
    }
  };

  useEffect(() => {
    // Scroll listener for glassmorphism background trigger (after 80px)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active section tracking (IntersectionObserver)
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollTo(`#${id}`);
    }, 100);
  };

  const handleHireMeClick = () => {
    window.location.href = `mailto:${PERSONAL.email}`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-navbar transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-deep/80 backdrop-blur-[20px] saturate-[180%] border-b border-white/5 shadow-[var(--glow-subtle)]' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Monogram brand logo (left) */}
        <div 
          onClick={handleLogoClick}
          data-cursor="link"
          className="text-2xl font-display font-bold tracking-wider text-gradient hover:scale-105 active:scale-95 transition-transform duration-300 relative group flex items-center gap-1 select-none"
        >
          TR
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Desktop links (right) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              data-cursor="link"
              className={`font-mono text-sm tracking-wide relative py-2 transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'text-neon-blue [text-shadow:0_0_8px_rgba(0,212,255,0.4)]' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
              {/* Sliding underline */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-neon-blue transition-all duration-300 shadow-[0_0_8px_#00d4ff] ${
                  activeSection === item.id ? 'w-full' : 'w-0'
                }`} 
              />
            </button>
          ))}

          {/* CTA HIRE ME button */}
          <button
            onClick={handleHireMeClick}
            data-cursor="link"
            className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-violet text-white font-mono text-sm shadow-[var(--glow-blue)] hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 relative overflow-hidden group font-semibold"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            HIRE ME →
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-cursor="link"
            className="text-text-primary p-2 focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-bg-deep/95 backdrop-blur-[30px] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-between p-12 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute w-[300px] h-[300px] rounded-full bg-neon-violet/10 blur-[100px] top-1/4 left-1/4 pointer-events-none" />

        {/* Drawer Links */}
        <div className="flex flex-col gap-6 mt-20 z-10 select-none">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              data-cursor="link"
              style={{ 
                animationDelay: `${index * 80}ms`,
                transitionDelay: `${index * 80}ms`
              }}
              className={`text-left text-3xl font-display font-semibold transition-all duration-300 transform ${
                mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } ${
                activeSection === item.id ? 'text-neon-blue' : 'text-text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={handleHireMeClick}
            data-cursor="link"
            className="mt-4 py-3 rounded-lg border-2 border-neon-blue text-center text-neon-blue font-mono text-lg transition-colors hover:bg-neon-blue/10 duration-200 select-none"
          >
            HIRE ME →
          </button>
        </div>

        {/* Drawer footer details */}
        <div className="z-10 flex flex-col gap-6">
          <div className="flex justify-center gap-6">
            <a 
              href={PERSONAL.github} 
              target="_blank" 
              rel="noreferrer"
              data-cursor="link"
              className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href={PERSONAL.linkedin} 
              target="_blank" 
              rel="noreferrer"
              data-cursor="link"
              className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${PERSONAL.email}`}
              data-cursor="link"
              className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="text-center font-mono text-[11px] text-text-muted">
            {PERSONAL.name} &bull; {PERSONAL.location}
          </div>
        </div>
      </div>
    </nav>
  );
};
