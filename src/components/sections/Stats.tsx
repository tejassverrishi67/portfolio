import React, { useEffect, useRef, useState } from 'react';

interface StatColProps {
  end: number;
  label: string;
  subLabel: string;
  suffix?: string;
  decimals?: boolean;
  isVisible: boolean;
}

const StatCol: React.FC<StatColProps> = ({ end, label, subLabel, suffix = '', decimals = false, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 1800;
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
    <div className="flex flex-col items-center justify-center p-6 text-center select-none">
      <span className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-gradient mb-2 select-none">
        {displayVal}{suffix}
      </span>
      <div className="flex flex-col gap-0.5 font-mono text-[10px] md:text-xs text-text-muted tracking-wider uppercase select-none">
        <span>{label}</span>
        <span className="text-[9px] opacity-60">{subLabel}</span>
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-bg-void/60 border-y border-white/5 py-12 md:py-16 select-none"
    >
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
        
        {/* LeetCode */}
        <StatCol 
          end={250} 
          label="LeetCode" 
          subLabel="Problems" 
          suffix="+" 
          isVisible={isVisible} 
        />

        {/* Projects */}
        <div className="pt-8 md:pt-0">
          <StatCol 
            end={5} 
            label="Projects" 
            subLabel="Shipped" 
            suffix="+" 
            isVisible={isVisible} 
          />
        </div>

        {/* CGPA */}
        <div className="pt-8 md:pt-0">
          <StatCol 
            end={852} 
            label="CGPA" 
            subLabel="/10 Score" 
            decimals={true} 
            isVisible={isVisible} 
          />
        </div>

        {/* Grad Year */}
        <div className="pt-8 md:pt-0">
          <StatCol 
            end={2026} 
            label="Grad" 
            subLabel="Intern Year" 
            isVisible={isVisible} 
          />
        </div>

      </div>
    </div>
  );
};
