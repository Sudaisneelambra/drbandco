"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [storedIndex, setStoredIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!pathName) return;

    if (pathName === "/") setStoredIndex(0);
    else if (pathName === "/travel-and-tours") setStoredIndex(1);
    else if (pathName === "/logistics") setStoredIndex(2);
  }, [pathName]);

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
      if (pathName === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
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

  const isTravelPage = pathName === "/travel-and-tours";

  // Theme variables
  const theme = isTravelPage
    ? {
        bgColor: "#ffffff",
        textColor: "#0000",
        borderColor: "#00c7ff",
        hoverColor: "#00c7ff",
        iconBg: "#cceeff",
        buttonText: "white",
      }
    : {
        bgColor: "#0a0a0a",
        textColor: "#d1d5db",
        borderColor: "#facc15",
        hoverColor: "#eab308",
        iconBg: "#facc1533",
        buttonText: "black",
      };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
        <div
          className="transition-all duration-700"
          style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
            borderBottom: `1px solid ${theme.borderColor}33`,
            backdropFilter: isTravelPage ? "blur(30px)" : "blur(12px)",
          }}
        >
          {/* Decorative Top Border */}
          <div
            className="h-[1px] w-full"
            style={{
              background: `linear-gradient(to right, transparent, ${theme.borderColor}0D, transparent)`,
            }}
          />

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
                        <div
                          className="absolute top-0 left-0 w-full h-[1px]"
                          style={{
                            background: `linear-gradient(to right, ${theme.borderColor}, transparent)`,
                          }}
                        />
                        <div
                          className="absolute top-0 left-0 w-[1px] h-full"
                          style={{
                            background: `linear-gradient(to bottom, ${theme.borderColor}, transparent)`,
                          }}
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-5 h-5">
                        {/* Horizontal top gradient */}
                        <div
                          className="absolute top-0 right-0 w-full h-[1px]"
                          style={{
                            background: `linear-gradient(to left, ${theme.borderColor}, transparent)`,
                          }}
                        />

                        {/* Vertical right gradient */}
                        <div
                          className="absolute top-0 right-0 w-[1px] h-full"
                          style={{
                            background: `linear-gradient(to bottom, ${theme.borderColor}, transparent)`,
                          }}
                        />
                      </div>
                      {/* Bottom Left Corner */}
                      <div className="absolute bottom-0 left-0 w-5 h-5">
                        {/* Horizontal bottom gradient */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-[1px]"
                          style={{
                            background: `linear-gradient(to right, ${theme.borderColor}, transparent)`,
                          }}
                        />
                        {/* Vertical left gradient */}
                        <div
                          className="absolute bottom-0 left-0 w-[1px] h-full"
                          style={{
                            background: `linear-gradient(to top, ${theme.borderColor}, transparent)`,
                          }}
                        />
                      </div>

                      {/* Bottom Right Corner */}
                      <div className="absolute bottom-0 right-0 w-5 h-5">
                        {/* Horizontal bottom gradient */}
                        <div
                          className="absolute bottom-0 right-0 w-full h-[1px]"
                          style={{
                            background: `linear-gradient(to left, ${theme.borderColor}, transparent)`,
                          }}
                        />
                        {/* Vertical right gradient */}
                        <div
                          className="absolute bottom-0 right-0 w-[1px] h-full"
                          style={{
                            background: `linear-gradient(to top, ${theme.borderColor}, transparent)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Main Logo Circle */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ">
                      {/* Rotating Outer Rings */}
                      <div
                        className="absolute inset-0 rounded-full border-[1.5px] group-hover:rotate-180 transition-transform duration-[3000ms] ease-in-out"
                        style={{ borderColor: theme.borderColor + "33" }} // ~20% opacity
                      />
                      <div
                        className="absolute inset-2 rounded-full border-[1px] group-hover:-rotate-180 transition-transform duration-[3000ms] ease-in-out"
                        style={{ borderColor: theme.borderColor + "1A" }} // ~10% opacity
                      />

                      {/* Inner Emblem */}
                      <div
                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-700"
                        style={{
                          borderColor: theme.borderColor,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = theme.hoverColor;
                          e.currentTarget.style.boxShadow = `0 0 50px ${theme.hoverColor}99`; // ~60% opacity
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = theme.borderColor;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {/* Radial Pulse */}
                        <div
                          className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"
                          style={{
                            background: `radial-gradient(circle, ${theme.hoverColor}33, ${theme.hoverColor}0D, transparent)`,
                          }}
                        ></div>

                        {/* Shimmer Sweep - Auto Animation */}
                        <div
                          className="absolute inset-0 animate-[shimmer_3s_ease-in-out_infinite]"
                          style={{
                            background: `linear-gradient(to right, transparent, ${theme.hoverColor}4D, transparent)`,
                          }}
                        ></div>

                        {/* Monogram */}
                        <div className="relative z-10 text-center">
                          <div
                            className="text-[22px] md:text-[26px] font-serif font-bold leading-none text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-700"
                            style={{
                              backgroundColor: theme.hoverColor, // solid color
                            }}
                          >
                            D
                          </div>
                        </div>
                      </div>

                      {/* Ambient Glow */}
                      <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"
                        style={{ backgroundColor: theme.borderColor + "4D" }} // 30% opacity
                      ></div>
                    </div>
                  </div>

                  {/* Brand Name - Horizontal Layout */}
                  <div className="flex flex-col">
                    <span
                      className="text-[12px] md:text-[14px] tracking-[0.3em] font-light uppercase group-hover:tracking-[0.35em] transition-all duration-700 text-transparent bg-clip-text"
                      style={{
                        backgroundColor: theme.hoverColor,
                        WebkitBackgroundClip: "text", // for Safari
                      }}
                    >
                      DrB GROUP & Co
                    </span>

                    <span
                      className="text-[7px] md:text-[8px] tracking-[0.35em] uppercase mt-0.5 group-hover:transition-colors duration-500"
                      style={{
                        color: theme.borderColor, // default 50% opacity
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.borderColor + "CC")
                      } // ~80% on hover
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.borderColor + "80")
                      }
                    >
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
                    onClick={() => {
                      goToNavigation(link.target);
                      setStoredIndex(index);
                    }}
                    className="group relative py-2 cursor-pointer"
                  >
                    <span
                      className="text-[11px] font-light tracking-[0.25em] uppercase group-hover:transition-colors duration-500"
                      style={{
                        color: theme.textColor + "66", // 40% opacity
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.hoverColor)
                      } // hover color
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.textColor + "66")
                      } // reset
                    >
                      {link.name}
                    </span>

                    {/* Premium Double Underline */}
                    <div
                      className={`absolute -bottom-0 left-0 w-0 h-[2px] ${index === storedIndex ? "w-full" : "w-0 group-hover:w-full"} transition-all duration-700`}
                      style={{ backgroundColor: theme.borderColor }}
                    >
                      <div
                        className="absolute top-1 left-0 w-full h-[1px]"
                        style={{ backgroundColor: theme.borderColor + "30" }} // 30 = ~20% opacity
                      ></div>
                    </div>
                  </button>
                ))}

                {/* Premium CTA */}
                <div className="relative group ml-4">
                  {/* Animated Border */}
                  <div
                    className="absolute inset-0 rounded-sm opacity-100 blur-sm group-hover:blur-md transition-all duration-700"
                    style={{
                      background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor}, ${theme.borderColor})`,
                    }}
                  ></div>

                  <button
                    type="button"
                    aria-label="Connect With Us"
                    className={`relative cursor-pointer flex items-center space-x-2 px-8 xl:px-10 py-3 rounded-sm overflow-hidden border transition-all duration-700`}
                    style={{
                      backgroundColor: theme.bgColor,
                      borderColor: theme.borderColor,
                      color: theme.textColor + 80,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`;
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = theme.bgColor;
                      e.currentTarget.style.color = theme.textColor + 80;
                    }}
                    onClick={connectToWhatsapp}
                  >
                    <span className="relative z-10 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-500">
                      Connect With Us
                    </span>
                    <ArrowUpRight
                      className={`relative z-10 w-3.5 h-3.5 transition-all duration-500 
                        text-[${theme.borderColor}] group-hover:text-black 
                        group-hover:rotate-45`}
                    />

                    {/* Shimmer - Auto Animation */}
                    <div
                      className="absolute inset-0 animate-[shimmer_3s_ease-in-out_infinite]"
                      style={{
                        background: `linear-gradient(
                          to right,
                          transparent,
                          ${theme.borderColor}33, 
                          transparent
                        )`,
                      }}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ color: theme.borderColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = theme.hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = theme.borderColor)
                }
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
          <div
            className="h-[1px] bg-gradient-to-r"
            style={{
              background: `linear-gradient(to right, transparent, ${theme.borderColor}33, transparent)`,
            }}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-700 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className=" backdrop-blur-3xl border-b"
            style={{
              backgroundColor: theme.bgColor + "4A",
              borderColor: theme.borderColor + "1A", // ~10% opacity
            }}
          >
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
                    className={`group flex items-center justify-between py-3 border-b border-white/5 hover:border-[${theme.borderColor}4D] transition-all duration-300`}
                  >
                    <span
                      className={`text-[13px] font-light tracking-[0.25em] uppercase text-${
                        theme.textColor + 80
                      } group-hover:text-white transition-colors duration-300`}
                    >
                      {link.name}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 text-${theme.hoverColor} !group-hover:text-${theme.hoverColor} group-hover:rotate-45 transition-all duration-300`}
                    />
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <button
                type="button"
                aria-label="Connect With Us"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  connectToWhatsapp();
                }}
                className="flex items-center justify-center space-x-2 w-full px-8 py-4 rounded-sm text-[11px] font-medium tracking-[0.2em] uppercase text-black transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`,
                  boxShadow: `0 0 50px rgba(${parseInt(theme.borderColor.slice(1, 3), 16)},${parseInt(
                    theme.borderColor.slice(3, 5),
                    16
                  )},${parseInt(theme.borderColor.slice(5, 7), 16)}, 0.6)`,
                }}
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
