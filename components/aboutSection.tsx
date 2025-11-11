'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  // Section intro reveal
  const introInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Scroll progress for the timeline rail only
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 80%', 'end 20%'],
  });

  // Timeline fill (height) and moving glow position
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const chapters = [
    {
      year: '2020',
      heading: 'The Beginning of Vision',
      text: `Founded in 2020, DrB & Co began as a vision — to build a company that blends ambition, excellence, and global reach. What started as a single travel venture has evolved into a multinational business group.`,
    },
    {
      year: '2022',
      heading: 'Expansion & Excellence',
      text: `By 2022, our growth accelerated as we obtained our Import–Export Trading Licence, expanding into global logistics and international trade. DrB Travels and DrB Logistics together formed our global foundation.`,
    },
    {
      year: 'Today',
      heading: 'A Global Legacy',
      text: `Today, DrB & Co stands as a symbol of reliability, innovation, and class — connecting markets, people, and opportunities across continents.`,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden py-28 md:py-40"
    >
      {/* Fine grain to make black feel premium */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/%3E%3C/svg%3E")',
          backgroundSize: 'auto',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-16">
        {/* Section heading */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-light">
              Our Journey
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent"
          >
            The DrB Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/60 text-base md:text-lg font-light"
          >
            A cinematic story of ambition, innovation, and global excellence.
          </motion.p>
        </div>

        {/* TIMELINE RAIL (drives scroll progress) */}
        <div ref={railRef} className="relative min-h-[420px]">
          {/* Static rail - Left side on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />

          {/* Fill rail (scroll-synced) */}
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#d4af37] via-[#ffd700] to-[#f4e5a3] rounded-full"
            style={{ height: fillHeight }}
          />

          {/* Moving gold glow (light trail) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full blur-xl"
            style={{
              top: glowY,
              background:
                'radial-gradient(circle at center, rgba(212,175,55,0.55), rgba(212,175,55,0.00) 60%)',
            }}
          />

          {/* Chapters */}
          <div className="space-y-12 md:space-y-20 pl-12 md:pl-0">
            {chapters.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="relative"
              >
                {/* Mobile: Left-aligned layout */}
                <div className="flex flex-col md:hidden gap-6">
                  {/* Node - aligned with timeline at left-4 */}
                  {/* Timeline center: 16px from rail | Node: 28px total, center at 14px from left */}
                  {/* Node left edge at 2px from rail = -46px from chapter content start */}
                  <div 
                    className="absolute top-0 z-20 -left-[46px]"
                  >
                    <motion.span
                      className="relative w-6 h-6 rounded-full border-2 border-[#d4af37] bg-black block"
                      whileInView={{ boxShadow: '0 0 18px rgba(212,175,55,0.6)' }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e5a3]" />
                    </motion.span>
                  </div>

                  {/* Year and heading */}
                  <div className="space-y-3">
                    <div className="text-[#d4af37]/70 text-sm tracking-[0.4em] uppercase">
                      {c.year}
                    </div>
                    <h3 className="text-2xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
                      {c.heading}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-light text-sm">{c.text}</p>
                  </div>

                  {/* Visual panel - full width on mobile */}
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 to-transparent">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/18 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_60%)]" />
                  </div>
                </div>

                {/* Desktop: Center timeline with alternating layout */}
                <div className={`hidden md:flex flex-row items-center gap-12 ${
                  i % 2 ? 'flex-row-reverse' : ''
                }`}>
                  {/* Visual / luxury panel */}
                  <div className="relative w-1/2 h-80 rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 to-transparent">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/18 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_60%)]" />
                  </div>

                  {/* Center node + connector */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.span
                      className="relative w-6 h-6 rounded-full border-2 border-[#d4af37] bg-black"
                      whileInView={{ boxShadow: '0 0 18px rgba(212,175,55,0.6)' }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e5a3]" />
                    </motion.span>

                    {/* connector to the card */}
                    <motion.span
                      className={`absolute top-1/2 h-[2px] ${
                        i % 2 ? 'right-full' : 'left-full'
                      } w-12 bg-gradient-to-r ${
                        i % 2
                          ? 'from-transparent to-[#d4af37]'
                          : 'from-[#d4af37] to-transparent'
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{ transformOrigin: i % 2 ? 'right' : 'left' }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="w-1/2 text-left space-y-4">
                    <div className="text-[#d4af37]/70 text-sm tracking-[0.4em] uppercase">
                      {c.year}
                    </div>
                    <h3 className="text-4xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
                      {c.heading}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-light">{c.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center pt-8 md:pt-12"
        >
          <p className="italic text-white/50 text-lg">
            “Connecting markets, people, and opportunities across continents.”
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
