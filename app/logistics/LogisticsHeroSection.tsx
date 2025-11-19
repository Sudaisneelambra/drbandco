"use client";

import { motion } from "framer-motion";

export default function LogisticsHeroSection() {
  return (
    <section className="relative h-[90vh] md:h-[90vh] w-full overflow-hidden bg-black">

      {/* ------------------------------
          BACKGROUND VIDEO (COMMENTED)
      ------------------------------ */}
      {/* 
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] contrast-[1.15]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/heroVedio.mp4" type="video/mp4" />
      </video>
      */}

      {/* STATIC BG IMAGE */}
      <div 
        className="
          absolute inset-0 
          bg-cover bg-center 
          brightness-[0.75] contrast-[1.1]
        "
        style={{
          backgroundImage: "url('/goldline.jpeg')", 
        }}
      />

      {/* ✨ SILVER / WHITE WAVE ANIMATION — NO GOLD */}
      <motion.div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 35%, rgba(255,255,255,0.22) 0%, transparent 60%), radial-gradient(circle at 75% 65%, rgba(200,200,200,0.18) 0%, transparent 55%)",
          backgroundSize: "130% 130%",
        }}
      />

      {/* CINEMATIC OVERLAYS (NEUTRAL) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Soft top glow (REMOVED GOLD, now subtle white) */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center select-none">

        {/* BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            font-serif font-bold uppercase tracking-[0.06em]
            text-white
            text-[20px] sm:text-[24px] md:text-[38px] lg:text-[38px]
            leading-[1.05]
            drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)]
          "
        >
          DRB & CO
          <span
            className="
              block
              bg-gradient-to-r from-[#f5e7b1] via-[#d4af37] to-[#a37d24]
              bg-clip-text text-transparent
              text-[30px] sm:text-[42px] md:text-[60px] lg:text-[60px]
            "
          >
            LOGISTICS
          </span>
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-[2px] mt-4 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80"
        />

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="
            mt-5 text-[14px] sm:text-[17px] md:text-[20px]
            text-white/85 font-light max-w-2xl leading-relaxed
          "
        >
          Premium global logistics specializing in luxury automotive parts, high-value electronics,
          and secure international freight — delivered with unmatched precision.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="flex gap-4 mt-8"
        >
          {/* Mobile: Rectangular | Desktop: Rounded */}
          <a
            href="#quote"
            className="
              px-6 py-3 
              text-[11px] sm:text-sm uppercase tracking-[0.18em]
              border border-[#d4af37]/50 text-[#f5e7b1]
              backdrop-blur-md transition-all duration-300
              rounded-md sm:rounded-full
              hover:border-[#d4af37] hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]
            "
          >
            Request a Quote
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3
              text-[11px] sm:text-sm uppercase tracking-[0.18em]
              bg-gradient-to-r from-[#d4af37]/35 to-[#a37d24]/45
              border border-[#d4af37]/40 text-white
              transition-all duration-300
              rounded-md sm:rounded-full
              hover:from-[#d4af37]/55 hover:to-[#a37d24]/70
              shadow-[0_6px_28px_rgba(212,175,55,0.25)]
            "
          >
            Speak to a Specialist
          </a>
        </motion.div>

      </div>
    </section>
  );
}
