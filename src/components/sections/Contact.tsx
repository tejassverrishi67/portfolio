import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code, Send } from 'lucide-react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../data/portfolio';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title slide ups
      gsap.fromTo('.contact-title-fade',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.contact-header-trigger',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Contact Chips slide left to right stagger (Section 16)
      gsap.fromTo('.contact-chip-item',
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.contact-grid-trigger',
            start: 'top 80%',
          },
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );

      // Form container slide up
      gsap.fromTo('.contact-form-container',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.contact-grid-trigger',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('sending');

    // EmailJS Environment keys
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key';

    // If template variables are placeholder keys, simulate sending successfully for offline demo
    if (serviceId === 'service_default' || publicKey === 'public_key') {
      setTimeout(() => {
        setFormStatus('success');
        triggerToast('Message sent successfully! (Demo mode)');
        formRef.current?.reset();
        
        // Reset button state after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }, 2000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus('success');
        triggerToast('Thank you! Your message has been sent.');
        formRef.current?.reset();
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus('error');
        triggerToast('Failed to send email. Please try again.');
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      });
  };

  // Helper for contact card colors on hover
  const getHoverShadow = (type: string) => {
    switch (type) {
      case 'email': return 'hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]';
      case 'phone': return 'hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]';
      case 'github': return 'hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]';
      case 'linkedin': return 'hover:border-[#0072b1] hover:shadow-[0_0_15px_rgba(0,114,177,0.3)]';
      case 'leetcode': return 'hover:border-[#ffa116] hover:shadow-[0_0_15px_rgba(255,161,22,0.3)]';
      default: return 'hover:border-neon-blue';
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="contact-header-trigger mb-20 flex flex-col items-start">
          <div className="contact-title-fade font-mono text-xs text-neon-gold uppercase tracking-[0.2em] mb-2 font-semibold">
            08 // Connection
          </div>
          <h2 className="contact-title-fade text-4xl md:text-5xl font-display font-extrabold select-none mb-4 leading-none">
            LET'S BUILD SOMETHING <br className="hidden sm:block" />
            <span className="text-gradient">EXTRAORDINARY.</span>
          </h2>
          <p className="contact-title-fade max-w-xl text-sm md:text-base text-text-secondary leading-relaxed font-body">
            Whether you have a project in mind, an opportunity to share, or just want to say hello — my inbox is always open.
          </p>
          <div className="contact-title-fade h-[2px] bg-neon-blue w-20 mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid layout */}
        <div className="contact-grid-trigger grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info Chips */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            
            {/* Email */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`contact-chip-item glass-panel p-5 rounded-2xl border border-white/5 flex gap-4 items-center cursor-none select-none transition-all duration-300 ${getHoverShadow('email')}`}
            >
              <div className="p-3 bg-neon-blue/10 border border-neon-blue/15 text-neon-blue rounded-xl">
                <Mail size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">EMAIL ME</span>
                <span className="font-mono text-xs md:text-sm text-text-primary break-all font-semibold mt-0.5">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            {/* Phone */}
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className={`contact-chip-item glass-panel p-5 rounded-2xl border border-white/5 flex gap-4 items-center cursor-none select-none transition-all duration-300 ${getHoverShadow('phone')}`}
            >
              <div className="p-3 bg-neon-green/10 border border-neon-green/15 text-neon-green rounded-xl">
                <Phone size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">CALL ME</span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-semibold mt-0.5">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`contact-chip-item glass-panel p-5 rounded-2xl border border-white/5 flex gap-4 items-center cursor-none select-none transition-all duration-300 ${getHoverShadow('linkedin')}`}
            >
              <div className="p-3 bg-[#0072b1]/10 border border-[#0072b1]/20 text-[#0072b1] rounded-xl">
                <Linkedin size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">LINKEDIN PROFILE</span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-semibold mt-0.5">tejassver-rishi</span>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`contact-chip-item glass-panel p-5 rounded-2xl border border-white/5 flex gap-4 items-center cursor-none select-none transition-all duration-300 ${getHoverShadow('github')}`}
            >
              <div className="p-3 bg-white/5 border border-white/10 text-white rounded-xl">
                <Github size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">GITHUB</span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-semibold mt-0.5">tejassverrishi67</span>
              </div>
            </a>

            {/* LeetCode */}
            <a 
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className={`contact-chip-item glass-panel p-5 rounded-2xl border border-white/5 flex gap-4 items-center cursor-none select-none transition-all duration-300 ${getHoverShadow('leetcode')}`}
            >
              <div className="p-3 bg-[#ffa116]/10 border border-[#ffa116]/20 text-[#ffa116] rounded-xl">
                <Code size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">LEETCODE</span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-semibold mt-0.5">tejassverrishi67</span>
              </div>
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <form 
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="contact-form-container glass-panel rounded-3xl p-6 md:p-8 flex flex-col gap-6 border border-white/5"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Name */}
                <div className="flex flex-col flex-1 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase mb-2 ml-1 tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-text-primary font-body text-sm outline-none focus:border-neon-blue focus:bg-neon-blue/[0.03] focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] transition-all duration-300 cursor-none"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col flex-1 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase mb-2 ml-1 tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-text-primary font-body text-sm outline-none focus:border-neon-blue focus:bg-neon-blue/[0.03] focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] transition-all duration-300 cursor-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col text-left">
                <label className="font-mono text-[10px] text-text-muted uppercase mb-2 ml-1 tracking-wider">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Hey Tejassver, I would love to collaborate on..."
                  className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-text-primary font-body text-sm outline-none focus:border-neon-blue focus:bg-neon-blue/[0.03] focus:shadow-[0_0_15px_rgba(0,212,255,0.25)] transition-all duration-300 cursor-none resize-none"
                />
              </div>

              {/* Submit Button (Section 16) */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-display font-bold text-base hover:scale-[1.01] active:scale-95 active:brightness-95 hover:brightness-110 cursor-none select-none transition-all shadow-[0_4px_20px_rgba(124,58,237,0.3)] relative overflow-hidden flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {formStatus === 'sending' && (
                  <>
                    <span>Sending...</span>
                    {/* Running loader sweep line */}
                    <div className="absolute bottom-0 left-0 h-[3px] bg-white w-full animate-sweep" />
                  </>
                )}

                {formStatus === 'success' && (
                  <span className="text-[#00ff88] flex items-center gap-2 font-bold animate-pulse">
                    Sent! ✓
                  </span>
                )}

                {formStatus === 'error' && (
                  <span className="text-[#ff4444] font-bold animate-pulse">
                    Error! Try Again.
                  </span>
                )}

                {formStatus === 'idle' && (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Floating Animated success Toast alert overlay (Section 16) */}
      <div 
        className={`fixed bottom-8 right-8 px-6 py-4 bg-bg-surface/90 border border-[#00ff88]/30 text-text-primary rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_15px_rgba(0,255,136,0.15)] backdrop-blur-md z-[99] flex items-center gap-3 transition-all duration-500 transform ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-5 h-5 rounded-full bg-[#00ff88]/15 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] font-bold text-xs select-none">
          ✓
        </div>
        <span className="font-mono text-xs text-text-secondary">{toastMessage}</span>
      </div>

      <style>{`
        @keyframes sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-sweep {
          animation: sweep 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};
