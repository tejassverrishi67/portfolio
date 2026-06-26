import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const keysPressed = useRef<string[]>([]);
  
  // Konami code key sequence: Up Up Down Down Left Right Left Right B A
  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    // 1. Detect Konami code keys sequence typed (Section 19)
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const expectedKey = KONAMI_CODE[keysPressed.current.length].toLowerCase();

      if (key === expectedKey) {
        keysPressed.current.push(e.key);
        
        // If code is complete
        if (keysPressed.current.length === KONAMI_CODE.length) {
          triggerCheatCode();
          keysPressed.current = [];
        }
      } else {
        // Reset if wrong key is pressed
        keysPressed.current = [];
        
        // Check if the current key could be the first key of the sequence
        const firstExpected = KONAMI_CODE[0].toLowerCase();
        if (key === firstExpected) {
          keysPressed.current.push(e.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerCheatCode = () => {
    setIsActive(true);

    // Dispatch event to Particle Universe to turn particles red and explode
    window.dispatchEvent(new CustomEvent('konami-trigger'));

    // Animate "CHEAT CODE ACTIVATED" overlay splash
    const splash = document.querySelector('.cheat-splash');
    if (splash) {
      gsap.timeline()
        .fromTo(splash, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' })
        .to(splash, { opacity: 0, scale: 1.2, delay: 1.5, duration: 0.4, ease: 'power2.in' });
    }

    // Auto terminate matrix rain after 3.5 seconds
    setTimeout(() => {
      setIsActive(false);
      window.dispatchEvent(new CustomEvent('konami-reset'));
    }, 3800);
  };

  // 2. Matrix rain canvas logic
  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = new Array(columns).fill(1);
    
    const characters = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let animFrameId: number;

    const drawMatrix = () => {
      // Draw semi-transparent black rectangle to fade out previous frame's trails
      ctx.fillStyle = 'rgba(3, 2, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88'; // Matrix Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick a random katakana or alphanumeric character
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop position once it hits the bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animFrameId = requestAnimationFrame(drawMatrix);
    };

    animFrameId = requestAnimationFrame(drawMatrix);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <>
      {/* 2D Canvas */}
      <canvas 
        ref={canvasRef} 
        className={`fixed inset-0 w-full h-full pointer-events-none select-none z-[80] transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Screen Splash Overlay */}
      <div 
        className="cheat-splash fixed inset-0 flex items-center justify-center pointer-events-none select-none z-[81] opacity-0"
      >
        <div className="px-8 py-4 bg-bg-surface/90 border border-neon-green/30 text-neon-green font-mono text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.2em] rounded-2xl shadow-[0_0_50px_rgba(0,255,136,0.3)] backdrop-blur-md">
          Matrix Cheat Activated 👽
        </div>
      </div>
    </>
  );
};
