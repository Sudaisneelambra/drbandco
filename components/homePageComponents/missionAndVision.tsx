'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Eye, Globe2 } from 'lucide-react';
import Image from 'next/image';
import { LucideIcon } from "lucide-react";

const  MissionAndVision =()=> {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 25%'],
  });




  const shimmerY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const shimmerOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.7]);
  const [hoverSide, setHoverSide] = useState<"mission" | "vision" | null>(null);

  return (
    <section ref={sectionRef} id="mission-vision" className="relative bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-10 lg:py-0">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80">Our Philosophy</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
            The Dual Essence
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Purpose in gold. Perspective in silver. One uncompromising standard.
          </p>
        </div>

        {/* Panels */}
        <div className="relative rounded-[28px] overflow-hidden border border-white/10">
          {/* divider shimmer */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px]">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/10" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full"
              style={{
                top: shimmerY,
                height: '28%',
                opacity: shimmerOpacity,
                background:
                  'linear-gradient(to bottom, rgba(245,231,177,0.0), rgba(212,175,55,0.7), rgba(224,224,224,0.75), rgba(245,231,177,0.0))',
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <Panel
              side="mission"
              title="Our Mission"
              icon={Target}
              color="#d4af37"
              hoverSide={hoverSide}
              setHoverSide={setHoverSide}
              lines={[
                'To connect global communities through seamless travel, trade, and logistics —',
                'delivering excellence at every step.',
              ]}
              body="We build systems that merge ambition with discipline — elevating service, trust, and precision for every client we serve."
            />
            <Panel
              side="vision"
              title="Our Vision"
              icon={Eye}
              color="#c0c0c0"
              hoverSide={hoverSide}
              setHoverSide={setHoverSide}
              lines={[
                'To be a global symbol of reliability and class —',
                'a standard without compromise.',
              ]}
              body="We pursue intelligent scale: expanding footprints, deepening capability, and setting benchmarks that quietly become the rule for our industries."
            />
          </div>
        </div>

        {/* Core values */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ValueCard
            title="Excellence"
            accent="#d4af37"
            text="Quality is our default setting — from itinerary and cargo to communication and aftercare."
          />
          <GlobalPresenceCard />
        </div>
      </div>
    </section>
  );
}

interface PanelProps<T extends string> {
  side: T;
  title: string;
  icon: LucideIcon;
  color: string;
  hoverSide: T | null;
  setHoverSide: React.Dispatch<React.SetStateAction<T | null>>;
  lines: string[];
  body?: string;
}

function Panel({ side, title, icon: Icon, color, hoverSide, setHoverSide, lines, body }: PanelProps<"mission" | "vision">) {
  const hoverActive = hoverSide === side;
  return (
    <div
      onMouseEnter={() => setHoverSide(side)}
      onMouseLeave={() => setHoverSide(null)}
      className="relative p-8 md:p-12"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-8 md:-inset-10 rounded-[36px]"
        animate={{
          background:
            hoverActive
              ? `radial-gradient(600px 300px at ${side === 'mission' ? '20%' : '80%'} 50%, ${hexToRgba(
                  color,
                  0.14
                )}, transparent 60%)`
              : 'radial-gradient(600px 300px at 50% 50%, rgba(255,255,255,0.00), transparent 60%)',
        }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}26, transparent)` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <h3
          className="text-xl md:text-3xl font-serif font-bold"
          style={{
            background: `linear-gradient(90deg, ${color}, #ffffff)`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </h3>
      </div>
      <div className="mt-5 md:mt-6 space-y-1">
        {lines.map((line: string, i: number) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-md md:text-lg text-white/80"
          >
            {line}
          </motion.p>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 md:mt-6 text-white/60 leading-relaxed"
      >
        {body}
      </motion.p>
    </div>
  );
}

function ValueCard({ title, text, accent }: { title: string; text: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101010] to-[#0a0a0a] p-6"
    >
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" whileHover={{ boxShadow: `0 0 0 1px ${accent}` }} />
      <h4
        className="text-2xl font-serif font-semibold mb-2"
        style={{
          background: `linear-gradient(90deg, ${accent}, #ffffff)`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {title}
      </h4>
      <p className="text-white/60">{text}</p>
    </motion.div>
  );
}

/* ✨ Global Presence Card (enhanced with flags & animation) */
function GlobalPresenceCard() {
  const countries = [
    { name: 'United Arab Emirates', code: 'ae', year: '2020' },
    { name: 'Georgia', code: 'ge', year: '2021' },
    { name: 'India', code: 'in', year: '2021' },
    { name: 'United Kingdom', code: 'gb', year: '2025' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101010] to-[#0a0a0a] p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Globe2 className="w-6 h-6 text-[#c0c0c0]" />
        <h4 className="text-2xl font-serif font-semibold bg-gradient-to-br from-[#eaeaea] to-[#c0c0c0] bg-clip-text text-transparent">
          Global Presence
        </h4>
      </div>
      <p className="text-white/60 mb-6">
        Registered in UAE, Georgia, and India — expanding into the United Kingdom.
      </p>

      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4">
        {countries.map((c) => (
          <motion.div
            key={c.code}
            whileHover={{ scale: 1.08 }}
            className="relative text-center p-4 rounded-xl border border-white/10 hover:border-[#d4af37]/30 transition-all bg-gradient-to-b from-[#0b0b0b] to-[#111]"
          >
            <Image
              src={`https://flagcdn.com/w40/${c.code}.png`}
              alt={c.name}
              width={10}
              height={10}
              className="w-8 h-6 mx-auto rounded-sm mb-2"
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle world glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.25) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(192,192,192,0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </motion.div>
  );
}

/* utility */
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean.length === 3 ? clean.replace(/(.)/g, '$1$1') : clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default MissionAndVision;
