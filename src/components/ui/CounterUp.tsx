import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

interface CounterUpProps {
  end: number;
  decimals?: boolean;
  suffix?: string;
}

export const CounterUp: React.FC<CounterUpProps> = ({ end, decimals = false, suffix = '' }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const countObj = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(countObj, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        value: end,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          setVal(countObj.value);
        }
      });
    });

    return () => ctx.revert();
  }, [end]);

  const displayVal = decimals 
    ? (val / 100).toFixed(2) 
    : Math.floor(val).toString();

  return (
    <span ref={elementRef} className="tabular-nums font-semibold">
      {displayVal}{suffix}
    </span>
  );
};
