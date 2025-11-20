"use client";

import { useRef, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

  function ImageComponent({ isTravelPage }: { isTravelPage: boolean }) {
    return isTravelPage ? (
      <Image
        src={"/images/logotours.webp"}
        style={{
          maxWidth: "140%",
        }}
        alt="logo.webp"
        width={100}
        height={100}
      />
    ) : (
      <Image
        src={"/images/mainlogo.webp"}
        style={{
          maxWidth: "200%",
        }}
        alt="logo.webp"
        width={100}
        height={100}
      />
    );
  }

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [currentYear] = useState(new Date().getFullYear());

  type NavLink =
    | { name: string; type: "route"; href: string }
    | { name: string; type: "scroll"; target: string };

  const navLinks: NavLink[] = [
    { name: "Tours & Travel", type: "route", href: "/travel-and-tours" },
    { name: "Logistics", type: "route", href: "/logistics" },
    { name: "About Us", type: "scroll", target: "about-section" },
    { name: "Services", type: "scroll", target: "service-section" },
  ];

  const handleScroll = (target: string) => {
    if (pathname === "/") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", target);
      router.push("/");
    }
  };

  const supportLinks = ["Help Center", "Privacy Policy", "Terms of Service"];

  const connectToWhatsapp = () => {
    const phoneNumber = "919747491562"; // your WhatsApp number with country code
    const text = `Hi`;

    // Opens WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  

  const isTravelPage = pathname === "/travel-and-tours";

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
    <footer
      className="relative border-t text-gray-300 overflow-hidden"
      style={{
        backgroundColor: theme.bgColor,
        borderColor: theme.borderColor,
        color: theme.textColor,
      }}
    >
      {/* Decorative Top Border */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.borderColor}33, transparent)`,
        }}
      />

      {/* Main Footer */}
      <div className="mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1px solid ${theme.borderColor}33` }} // 20% opacity
                />
                {/* <div
                  className="absolute inset-2 rounded-full"
                  style={{ border: `1px solid ${theme.borderColor}1A` }} // 10% opacity
                /> */}
                {/* <div
                  className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: theme.borderColor, // dynamic border
                    background: `radial-gradient(circle, ${theme.borderColor}20, transparent)`, // gradient using theme
                  }}
                > */}
                  {/* <span
                    className="text-2xl font-serif font-bold text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${theme.borderColor}, ${theme.hoverColor})`,
                      WebkitBackgroundClip: "text", // for Safari
                    }}
                  >
                    D
                  </span> */}
                  <ImageComponent isTravelPage={isTravelPage}/>
                {/* </div> */}
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className="w-6 h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${theme.borderColor})`,
                  }}
                />
                <span
                  className="text-[11px] tracking-[0.3em] font-light uppercase text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`,
                    WebkitBackgroundClip: "text", // for Safari
                  }}
                >
                  DrB Group & Co
                </span>
              </div>
              <span
                className="text-[7px] tracking-[0.3em] uppercase mt-1"
                style={{ color: theme.textColor + "80" }} // 80 hex = ~50% opacity
              >
                Established 2020
              </span>
            </div>

            <p
              className="text-[11px] leading-relaxed tracking-wide"
              style={{ color: theme.textColor + "80" }} // 80 hex = ~50% opacity
            >
              To give the best from us, without any compromise on quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href=""
                  className={`group relative w-9 h-9 flex items-center justify-center border transition-all duration-500`}
                  style={{ borderColor: theme.borderColor + "33" }}
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-500"
                    style={{
                      color: theme.textColor + "80",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = theme.hoverColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = theme.textColor + "80")
                    }
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h3
                className="text-[11px] font-medium tracking-[0.25em] uppercase"
                style={{ color: theme.hoverColor }}
              >
                Quick Links
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, ${theme.borderColor}4D, transparent)`,
                }}
              />
            </div>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={`link-${link.name}` || index}>
                  {link.type === "route" ? (
                    <Link
                      href={link.href}
                      className="inline-flex cursor-pointer items-center gap-2 group text-[11px] transition-colors duration-500"
                      style={{ color: theme.textColor + 80 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.hoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.textColor + 80)
                      }
                    >
                      <span className="tracking-wider">{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      area-label={`Go to ${link.name}`}
                      onClick={() => handleScroll(link.target)}
                      className="inline-flex cursor-pointer items-center gap-2 group text-[11px] transition-colors duration-500"
                      style={{ color: theme.textColor + 80 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.hoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.textColor + 80)
                      }
                    >
                      <span className="tracking-wider">{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h3
                className="text-[11px] font-medium tracking-[0.25em] uppercase"
                style={{ color: theme.hoverColor }}
              >
                Support
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, ${theme.borderColor}4D, transparent)`,
                }}
              />
            </div>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href=""
                    className="inline-flex cursor-pointer items-center gap-2 group text-[11px] transition-colors duration-500"
                    style={{ color: theme.textColor + 80 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = theme.hoverColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = theme.textColor + 80)
                    }
                  >
                    <span className="tracking-wider">{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h3
                className="text-[11px] font-medium tracking-[0.25em] uppercase"
                style={{ color: theme.hoverColor }}
              >
                Get in Touch
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, ${theme.borderColor}4D, transparent)`,
                }}
              />
            </div>
            <p
              className="text-[11px] tracking-wide leading-relaxed"
              style={{ color: theme.textColor + "80" }}
            >
              Have a question or project in mind? Let ’ s connect and discuss
              your needs.
            </p>

            <button
              className="group relative w-full h-11 overflow-hidden transition-all duration-500"
              style={{
                background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`,
                boxShadow: `0 0 30px ${theme.hoverColor}66`, // 66 = 40% opacity in hex
                color: theme.buttonText,
              }}
              onClick={connectToWhatsapp}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 text-[10px] font-medium tracking-[0.2em] uppercase text-black">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent shimmer"
                style={{ transform: "translateX(-100%)" }}
              />
              <style jsx>{`
                @keyframes shimmer {
                  100% {
                    transform: translateX(100%);
                  }
                }
                .shimmer {
                  animation: shimmer 2s infinite linear;
                }
              `}</style>
            </button>

            <div
              className="pt-4 space-y-2 border-t"
              style={{ borderColor: theme.borderColor + "1A" }}
            >
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-[10px] transition-colors duration-300"
                style={{
                  color: theme.textColor + "80",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = theme.hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = theme.textColor + "80")
                }
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tracking-wider">+123 456 7890</span>
              </a>
              <a
                href="mailto:info@drbco.com"
                className="flex items-center space-x-2 text-[10px] transition-colors duration-300"
                style={{
                  color: theme.textColor + "80",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = theme.hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = theme.textColor + "80")
                }
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="tracking-wider">info@drbco.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.borderColor}33, transparent)`,
        }}
      />
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${theme.borderColor}66)`, // 66 is ~40% opacity
              }}
            />
            <p
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: theme.textColor + 80 }}
            >
              © {currentYear} DrB Group & Co. All rights reserved.
            </p>
            <div
              className="w-8 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${theme.borderColor}66)`, // 66 is ~40% opacity
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </footer>
  );
};

export default Footer;
