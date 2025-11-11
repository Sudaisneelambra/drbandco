"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Plane, Ship, ChevronLeft, ChevronRight } from "lucide-react";
import {ServiceItem} from '../../types/serviceCard'
import Image from "next/image";

function ServiceCard({ data, index }: { data: ServiceItem; index: number }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const Icon = data.icon as React.ElementType;

  interface ImageData {
    src: string;
    alt: string;
    }

    interface Statsdata {
      label: string;
      value: string;
    };


  useEffect(() => {
    if (!isPaused && data.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % data.images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, data.images.length]);

  const handleImageChange = (newIndex: number) => {
    setActive(newIndex);
    // Reset the interval when user manually changes image
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % data.images.length);
    }, 3000);
  };

  return (
    <motion.article
      initial={false} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{
        scale: 1.015,
        boxShadow: "0 0 24px rgba(212,175,55,0.15)",
      }}
      className="group relative min-h-[580px] rounded-3xl overflow-hidden border border-[#d4af37]/25 bg-gradient-to-b from-[#0b0b0b] via-black to-[#0b0b0b] transition-all duration-700"
    >
      {/* Light sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#c0c0c0]/14 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-10 pt-8">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${data.accent}22, transparent)`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: data.accent }} />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
              {data.title}
            </h3>
            <p className="text-white/60 text-xs md:text-sm">{data.subtitle}</p>
          </div>
        </div>
        <div className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-[#d4af37]">
          Premium
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 xl:grid xl:grid-cols-[1.1fr_1fr] gap-6 p-6 md:p-8 ">
        {/* Media */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-64 md:h-[18rem] rounded-2xl overflow-hidden border border-[#d4af37]/25">
            <motion.img
              src={data.images[active].src}
              alt={data.images[active].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "radial-gradient(800px 400px at 20% 20%, rgba(192,192,192,.15), transparent 60%)",
              }}
            />

            {/* Controls */}
            <button
              onClick={() =>
                handleImageChange(
                  (active - 1 + data.images.length) % data.images.length
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-white/15 hover:border-[#d4af37] transition"
            >
              <ChevronLeft className="w-4 h-4 text-white/80" />
            </button>
            <button
              onClick={() =>
                handleImageChange((active + 1) % data.images.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-white/15 hover:border-[#d4af37] transition"
            >
              <ChevronRight className="w-4 h-4 text-white/80" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {data.images.map((_: unknown, i: number) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-5 bg-[#d4af37]" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar justify-center">
            {data.images.map((img: ImageData, i: number) => (
              <button
                key={img.src}
                onClick={() => handleImageChange(i)}
                className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${
                  i === active ? "border-[#d4af37]" : "border-white/10"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3 xl:mt-1 mt-6 ">
              {data.badges.map((b: string) => (
                <span
                  key={b}
                  className="px-2 py-1 text-[10px] uppercase tracking-[0.15em] rounded-full border border-[#d4af37]/30 text-[#d4af37]/90"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="text-white/70 font-light leading-relaxed mb-3 text-[12px]">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-2 ">
              {data.services.map((s: string) => (
                <span
                  key={s}
                  className="px-1.5 py-1 rounded-full bg-[#121212] border border-white/10 text-white/70 text-[14px] md:text-xs hover:border-[#d4af37]/40 hover:text-[#f5e7b1] transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="mt-6 flex items-center justify-between flex-col">
            <div className="grid grid-cols-3 gap-3">
              {data.stats.map((st: Statsdata) => (
                <div key={st.label} className="text-center">
                  <div className="text-[#d4af37] font-serif text-lg">
                    {st.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
            <Link href={data.href} >
              <span className="inline-flex mt-8 items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/60 text-[#d4af37] uppercase tracking-[0.2em] text-[11px] hover:bg-[#d4af37]/10 transition">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const ServiceSection = () => {

  const services:ServiceItem[] = [
    {
      title: "DrB Tours and Travel",
      subtitle: "Luxury. Precision. Bespoke.",
      icon: Plane,
      accent: "#f4d03f",
      badges: ["Bespoke", "Concierge", "Corporate"],
      description:
        "Private itineraries, premium hospitality, and seamless coordination — crafted for individuals and enterprises that expect more.",
      services: [
        "VIP Itineraries",
        "Corporate MICE",
        "Visa & Insurance",
        "Chauffeur & Meet-and-Greet",
      ],
      images: [
        { src: "/images/europe.webp", alt: "populor europe" },
        { src: "/images/london.webp", alt: "London" },
        { src: "/images/ponds.webp", alt: "beauty" },
      ],
      stats: [
        { label: "Destinations", value: "50+" },
        { label: "Clients", value: "1.2K" },
        { label: "Rating", value: "5★" },
      ],
      href: "/travel-and-tours",
    },
    {
      title: "DrB Exports & Logistics",
      subtitle: "Global. Trusted. On-Time.",
      icon: Ship,
      accent: "#ffd700",
      badges: ["Compliance", "Multimodal", "Trade"],
      description:
        "International trade and multimodal logistics with quality controls, compliance, and real-time coordination across borders.",
      services: [
        "FCL/LCL Ocean",
        "Air Freight",
        "Customs & DG",
        "Warehousing & Last-Mile",
      ],
      images: [
        { src: "/images/logistics.webp", alt: "Logistics" },
        { src: "/images/export.webp", alt: "export" },
        { src: "/images/transport.webp", alt: "Air cargo" },
      ],
      stats: [
        { label: "Countries", value: "4" },
        { label: "Partners", value: "120+" },
        { label: "On-Time", value: "99%" },
      ],
      href: "/logistics",
    },
  ];

  return (
    <section className="relative bg-black py-28 text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-light">
              Our Services
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
            Two Pillars. One Standard of Excellence.
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm ">
            Explore the worlds of luxury travel and global logistics — crafted
            with the same uncompromising DrB quality.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((div, index) => (
            <div key={index} className="flex-1 min-w-[380px] max-w-[720px]">
              <ServiceCard data={div} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
