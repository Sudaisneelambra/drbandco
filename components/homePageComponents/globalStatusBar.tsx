'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const GlobalStatusBar =()=> {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState({
    countries: 0,
    projects: 0,
    clients: 0,
    years: 0,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        setCounts({
          countries: Math.floor(progress * 4),
          projects: Math.floor(progress * 1200),
          clients: Math.floor(progress * 500),
          years: Math.floor(progress * 5),
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView]);

  const stats = [
    { label: 'Countries', value: counts.countries, suffix: '+' },
    { label: 'Projects Completed', value: counts.projects, suffix: '+' },
    { label: 'Happy Clients', value: counts.clients, suffix: '+' },
    { label: 'Years of Excellence', value: counts.years, suffix: '+' },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex justify-between items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-center flex-1 sm:flex-shrink-0 min-w-0 sm:min-w-[150px]"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
              {stat.value}
              {stat.suffix}
            </div>
            <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/60 text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default GlobalStatusBar;