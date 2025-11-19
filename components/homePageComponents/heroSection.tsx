"use client";

import { ArrowRight } from 'lucide-react';
import HeroAnimation from '../homePageComponents/heroAnimation';


const  HeroSection =({moveToServiceSection}:{moveToServiceSection: () => void;})=> {
  const isVisible = true;

  const scrollToService = ()=>{
    moveToServiceSection()
  }

  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[#050505]"
    >
      {/* --- Background + Overlay --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          role="img"
          aria-label="DrB & Co global travel and business ventures"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10 backdrop-blur-[2px]" />
      </div>

      {/* --- Left Content --- */}
      <div className="relative z-20 w-full lg:w-1/2 px-6 md:px-10 lg:px-16 flex flex-col justify-center text-center lg:text-left py-20">
        {/* Subtext */}
        <div
          className={`flex items-center justify-center lg:justify-start space-x-4 mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A25E]" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37] font-extralight">
            Established 2020
          </span>
          <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A25E]" />
        </div>

        {/* SEO Primary Heading */}
        <h1
          className={`font-serif font-bold leading-[1.1] text-4xl lg:text-5xl tracking-tight transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="bg-gradient-to-br from-[#F6E7A2] via-[#D4AF37] to-[#8C6C1A] bg-clip-text text-transparent">
            DrB & Co
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-8 mb-14 transition-all duration-1000 delay-300 text-[12px] sm:text-[13px] text-white/70 font-light leading-relaxed tracking-wide ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Founded in 2020, DrB & Co began as a vision — to build a company that
          blends ambition, excellence, and global reach. What started as a
          single travel venture has evolved into a multinational business group,
          proudly registered in the UAE, Georgia, and India, expanding its
          footprint into the United Kingdom.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 delay-400 justify-center lg:justify-start ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={scrollToService}
            aria-label="Explore DrB & Co services"
            className="group relative flex items-center justify-center space-x-3 px-12 py-4 rounded-sm border border-[#d4af37]/70 bg-gradient-to-br from-black via-black to-[#1a1a1a] hover:from-[#d4af37] hover:to-[#f4e5a3] transition-all duration-700 min-w-[220px]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] group-hover:text-white font-medium transition-colors duration-500">
              Explore Services
            </span>
            <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-500" />
          </button>
        </div>

        {/* Stats */}
        <div
          className={`flex items-center justify-center lg:justify-start space-x-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { number: '10+', label: 'Countries' },
            { number: '2', label: 'Divisions' },
            { number: '50+', label: 'Destinations' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-3xl font-serif font-bold text-[#d4af37] mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/40 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Right Animation --- */}
      <div
        className="relative z-10 w-full lg:w-1/2 h-[400px] lg:h-screen flex items-center justify-center overflow-hidden"
        role="presentation"
      >
        <HeroAnimation />
      </div>

      {/* --- Schema.org Structured Data for SEO --- */}

    </header>
  );
}


export default HeroSection;