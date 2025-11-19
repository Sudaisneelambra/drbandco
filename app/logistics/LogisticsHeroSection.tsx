"use client";

export default function LogisticsHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-[1.15]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/heroVedio.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Gold Ambient Glow */}
  

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center select-none">

        {/* Label */}
        <p className="text-[11px] md:text-sm tracking-[0.35em] text-[#d4af37]/90 uppercase mb-5">
          DRB & CO LOGISTICS
        </p>

        {/* Premium Heading */}
        <h1
          className="text-[40px] md:text-[72px] leading-[1.05] font-serif font-bold"
          style={{
            color: "#f5efe6",
            letterSpacing: "0.5px",
            textShadow: "0 4px 35px rgba(0,0,0,0.8)",
          }}
        >
          Precision Logistics for  
          <br />
          <span>
            Luxury Automotive & Cargo
          </span>
        </h1>

        {/* Artistic gold underline */}
        <div className="w-24 h-[2px] mt-5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />

        {/* Subheading */}
        <p className="max-w-3xl mt-6 text-[15px] md:text-lg text-white/70 leading-relaxed">
          German high-value automotive parts, premium electronics, and seamless global
          import–export operations delivered with uncompromised precision.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 mt-10 flex-wrap justify-center">

          {/* Left Button */}
          <a
            href="#quote"
            className="px-8 py-3 rounded-full text-[13px] md:text-sm uppercase tracking-wide
            border border-[#d4af37]/40 text-[#f8ecc8]
            hover:border-[#d4af37]/80 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
            backdrop-blur-md transition-all duration-300"
          >
            Get a Premium Quote
          </a>

          {/* Right Button */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-[13px] md:text-sm uppercase tracking-wide
            bg-gradient-to-r from-[#d4af37]/20 to-[#f8e7c2]/30
            text-white border border-[#d4af37]/20
            hover:from-[#d4af37]/35 hover:to-[#f8e7c2]/50
            backdrop-blur-md transition-all duration-300
            shadow-[0_8px_50px_rgba(212,175,55,0.18)]"
          >
            Speak to a Specialist
          </a>

        </div>

      </div>
    </section>
  );
}
