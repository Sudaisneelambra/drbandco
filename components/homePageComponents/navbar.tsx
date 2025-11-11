"use client";

import { useState, useEffect, use } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Tours & Travel", target: "travel-and-tours" },
    { name: "Logistics", target: "logistics" },
  ];

  const goToHome = () => {
    router.push(`/`);
  };

  const goToNavigation = (target: string) => {
    if (target === "home") {
      if(pathName ==='/') {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return
      }
      router.push(`/`);
      return;
    }
    router.push(`/${target}`);
  };

  const connectToWhatsapp = () => {
    const phoneNumber = "919747491562"; // your WhatsApp number with country code
    const text = `Hi`;

    // Opens WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
        <div
          className={`transition-all duration-700 ${
            isScrolled
              ? "bg-black/90 backdrop-blur-3xl border-b border-[#d4af37]/15"
              : "bg-black/40 backdrop-blur-xl"
          }`}
        >
          {/* Decorative Top Border */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>

          <div className="max-w-[1600px] mx-auto sm:px-8 px-4 lg:px-16">
            <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
              {/* LEFT - Premium Logo */}
              <div className="group relative cursor-pointer ">
                <div className="flex items-center space-x-4" onClick={goToHome}>
                  {/* Luxury Emblem */}
                  <div className="relative ">
                    {/* Outer Decorative Frame */}
                    <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                      {/* Corner Ornaments */}
                      <div className="absolute top-0 left-0 w-5 h-5">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-5 h-5">
                        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-5 h-5">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-[#d4af37] to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-5 h-5">
                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-[#d4af37] to-transparent"></div>
                      </div>
                    </div>

                    {/* Main Logo Circle */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ">
                      {/* Rotating Outer Rings */}
                      <div className="absolute inset-0 rounded-full border-[1.5px] border-[#d4af37]/20 group-hover:rotate-180 transition-transform duration-[3000ms] ease-in-out"></div>
                      <div className="absolute inset-2 rounded-full border-[1px] border-[#d4af37]/10 group-hover:-rotate-180 transition-transform duration-[3000ms] ease-in-out"></div>

                      {/* Inner Emblem */}
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] border-[#d4af37] flex items-center justify-center overflow-hidden group-hover:border-[#ffd700] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-700">
                        {/* Radial Pulse */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/20 via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>

                        {/* Shimmer Sweep - Auto Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>

                        {/* Monogram */}
                        <div className="relative z-10 text-center">
                          <div className="text-[22px] md:text-[26px] font-serif font-bold leading-none bg-gradient-to-br from-[#f4e5a3] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-700">
                            D
                          </div>
                        </div>
                      </div>

                      {/* Ambient Glow */}
                      <div className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                    </div>
                  </div>

                  {/* Brand Name - Horizontal Layout */}
                  <div className="flex flex-col">
                    <span className="text-[12px] md:text-[14px] tracking-[0.3em] font-light uppercase bg-gradient-to-r from-[#f4e5a3] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent group-hover:tracking-[0.35em] transition-all duration-700">
                      DrB & Co
                    </span>
                    <span className="text-[7px] md:text-[8px] tracking-[0.35em] text-[#d4af37]/50 uppercase mt-0.5 group-hover:text-[#d4af37]/80 transition-colors duration-500">
                      Established 2020
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT - Navigation Links + CTA */}
              <div className="hidden lg:flex items-center space-x-10 xl:space-x-12 cursor-pointer">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to ${link.name}`}
                    onClick={() => goToNavigation(link.target)}
                    className="group relative py-2 cursor-pointer"
                  >
                    <span className="text-[11px] font-light tracking-[0.25em] uppercase text-white/40 group-hover:text-white transition-all duration-500">
                      {link.name}
                    </span>

                    {/* Premium Double Underline */}
                    <div className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] group-hover:w-full transition-all duration-700">
                      <div className="absolute top-1 left-0 w-full h-[1px] bg-[#d4af37]/30"></div>
                    </div>
                  </button>
                ))}

                {/* Premium CTA */}
                <div className="relative group ml-4">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#d4af37] rounded-sm opacity-100 blur-sm group-hover:blur-md transition-all duration-700"></div>

                  <button
                    type="button"
                    area-label="Connect With Us"
                    className="relative cursor-pointer flex items-center space-x-2 px-8 xl:px-10 py-3 bg-black border border-[#d4af37] rounded-sm overflow-hidden group-hover:bg-gradient-to-r group-hover:from-[#d4af37] group-hover:to-[#ffd700] transition-all duration-700"
                    onClick={connectToWhatsapp}
                  >
                    <span className="relative z-10 text-[10px] font-medium tracking-[0.2em] uppercase text-[#d4af37] group-hover:text-black transition-colors duration-500">
                      Connect With Us
                    </span>
                    <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-[#d4af37] group-hover:text-black group-hover:rotate-45 transition-all duration-500" />

                    {/* Shimmer - Auto Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#d4af37] hover:text-[#ffd700] transition-colors duration-300"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Decorative Bottom Border */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-700 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-3xl border-b border-[#d4af37]/10">
            <div className="px-8 py-12">
              {/* Mobile Links */}
              <div className="space-y-6 mb-10 cursor-pointer">
                {navLinks.map((link, index) => (
                  <button
                    type="button"
                    aria-label={`Go to ${link.name}`}
                    key={index}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      goToNavigation(link.target);
                    }}
                    className="group flex  items-center justify-between py-3 border-b border-white/5 hover:border-[#d4af37]/30 transition-all duration-300"
                  >
                    <span className="text-[13px] font-light tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:rotate-45 transition-all duration-300" />
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <button
                type="button"
                aria-label="Connect With Us"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  connectToWhatsapp()
                }}
                className="flex items-center justify-center space-x-2 w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black rounded-sm text-[11px] font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-500"
              >
                <span>Connect With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Spacer */}
      <div className="h-[70px] md:h-[76px] lg:h-[80px]"></div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
