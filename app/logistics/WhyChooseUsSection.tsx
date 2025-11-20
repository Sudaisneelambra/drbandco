"use client";

import { motion } from "framer-motion";
import { Shield, Globe2, BadgeCheck, Boxes, Satellite, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Unmatched Precision",
      desc: "99.8% delivery accuracy with real-time monitoring.",
      icon: <BadgeCheck className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
    {
      title: "German Auto Expertise",
      desc: "OEM handling for Mercedes, BMW, Audi, Porsche.",
      icon: <Boxes className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
    {
      title: "Global Import–Export",
      desc: "150+ countries with optimized customs routes.",
      icon: <Globe2 className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
    {
      title: "Ultra-Secure Protection",
      desc: "Climate control & tamper-proof sealing.",
      icon: <Shield className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
    {
      title: "24/7 Live Tracking",
      desc: "Encrypted GPS telemetry & instant updates.",
      icon: <Satellite className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
    {
      title: "Premium Support",
      desc: "Elite specialists guiding every movement.",
      icon: <Users className="w-5 h-5 md:w-7 md:h-7 text-[#d4af37]" />,
    },
  ];

  return (
    <section className="relative py-14 md:py-28 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">

        {/* Label */}
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#d4af37]/90 mb-3">
          Why Choose Us
        </p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center text-2xl sm:text-3xl md:text-5xl font-serif font-bold 
          bg-gradient-to-r from-white via-[#d8d8d8] to-[#a8a8a8] bg-clip-text text-transparent"
        >
          The DRB & CO Standard
        </motion.h2>

        <div className="w-20 h-[2px] mx-auto mt-4 mb-10 md:mb-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-90" />

        {/* 2 CARDS PER ROW ON MOBILE */}
        <div className="
          grid 
          grid-cols-2          /* mobile = 2 cards per row */
          sm:grid-cols-2       /* tablet = 2 */
          lg:grid-cols-3       /* desktop = 3 */
          gap-3 sm:gap-5 md:gap-10
        ">

          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              whileHover={{ scale: 1.015 }}
              className="
                group 
                relative 
                p-3 md:p-6 
                rounded-lg md:rounded-2xl
                bg-gradient-to-b from-[#111]/60 to-[#0c0c0c]/30
                border border-white/10
                hover:border-[#d4af37]/40
                backdrop-blur-xl
                shadow-[0_0_6px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.20)]
                transition-all duration-400
                overflow-hidden
              "
            >
              {/* Light Sweep */}
              <motion.div
                initial={{ x: "-130%", opacity: 0 }}
                whileHover={{ x: "130%", opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent"
              />

              {/* Icon */}
              <div className="mb-2 md:mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[13px] md:text-lg font-serif text-white mb-1 md:mb-2 leading-tight">
                {item.title}
              </h3>

              {/* Description — 3 line clamp */}
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
