import React from 'react';
import clsx from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx('glass-card border border-white/5 bg-bg-surface/60 backdrop-blur-[20px] transition-all duration-300', className)} 
      {...props}
    >
      {children}
    </div>
  );
};
