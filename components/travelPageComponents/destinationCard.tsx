"use client";
import { useState, useEffect, useRef } from "react";
import AnimatedSection from "../travelPageComponents/animatedSection";
import CarosalComponent from "../travelPageComponents/carosalComponent";

interface DestinationCardProps {
  subtitle: string;
  description: string;
  highlights: string[];
  images: { src: string; alt?: string }[];
  amount: string;
  reverse?: boolean;
  threeCountries?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  subtitle,
  amount,
  description,
  highlights,
  images,
  threeCountries,
  reverse = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current; // capture ref snapshot

    const handleScroll = () => {
      if (currentSection) {
        const rect = currentSection.getBoundingClientRect();
        const scrollProgress =
          (window.innerHeight - rect.top) / window.innerHeight;
        setScrollY(scrollProgress);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentSection) observer.observe(currentSection);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const theme = {
    bgColor: "#ffffff",
    textColor: "#0000",
    borderColor: "#00c7ff",
    hoverColor: "#00c7ff",
    iconBg: "#cceeff",
    buttonText: "white",
  };

  const goToWhatsapp = () => {
    const phoneNumber = "919747491562"; // your WhatsApp number with country code
    const text = `Hi, may i know the more deatils about travel package.`;

    // Opens WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden "
      style={{
        backgroundColor: theme.bgColor,
      }}
    >
      {/* Enhanced decorative background glow with gold accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div
          className={`absolute top-1/4 -left-1/4 w-32 h-32 sm:w-96 sm:h-96  rounded-full blur-3xl`}
          style={{
            transform: `translateY(${scrollY * 50}px)`,
            backgroundColor: theme.hoverColor,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-32 h-32 sm:w-96 sm:h-96  rounded-full blur-3xl"
          style={{
            transform: `translateY(${-scrollY * 50}px)`,
            backgroundColor: theme.hoverColor,
          }}
        ></div> */}
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${theme.borderColor}1A 1px, transparent 1px),
            linear-gradient(90deg, ${theme.borderColor}1A 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 sm:gap-10 lg:gap-12 items-center`}
        >
          {/* Image Section */}
          <AnimatedSection
            className="lg:w-1/2 w-full flex justify-center bg-transparent"
            delay={0}
          >
            <div className="w-full h-[350px] sm:h-[400px] flex justify-center">
              <CarosalComponent images={images} theme={theme} />
            </div>
          </AnimatedSection>

          {/* Text Section */}
          <AnimatedSection
            className="lg:w-1/2 space-y-4 sm:space-y-6 flex justify-center items-center flex-col lg:justify-start lg:items-start"
            delay={200}
          >
            <div className="space-y-2 sm:space-y-3 flex flex-col  lg:justify-start justify-center lg:items-start items-center">
              <p
                className=" font-semibold tracking-wider uppercase text-xs sm:text-sm"
                style={{
                  color: theme.hoverColor,
                }}
              >
                {subtitle}
              </p>
              <div
                className={`h-1 w-20 sm:w-24 bg-gradient-to-r rounded-full transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.borderColor}, #66e0ff, ${theme.borderColor})`,
                }}
              ></div>
            </div>

            <p
              className={`text-[14px] sm:text-sm leading-relaxed transition-all duration-700 delay-200 text-center lg:text-left  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                color: theme.textColor + 20,
              }}
            >
              {description}
            </p>
            <p
              style={{
                color: theme.hoverColor,
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Destinations
            </p>
            <div className="space-y-3  w-full flex gap-2 flex-wrap">
              {highlights.map((highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
                  className={`transition-all duration-500 flex w-fit sm:px-5 sm:py-2.5 px-2.5 py-1 backdrop-blur-xl text-sm sm:text-base rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${theme.iconBg}40 0%, ${theme.iconBg}20 100%)`,
                    border: `1.5px solid ${theme.borderColor}60`,
                    color: theme.hoverColor,
                    fontSize: "14px",
                    fontWeight: "500",
                    margin: "0px",
                    transitionDelay: `${400 + index * 100}ms`,
                    boxShadow: `0 8px 32px 0 ${theme.borderColor}20, inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${theme.borderColor}80 0%, ${theme.iconBg}80 100%)`;
                    e.currentTarget.style.borderColor = theme.hoverColor;
                    e.currentTarget.style.color = theme.textColor + 20;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${theme.iconBg}40 0%, ${theme.iconBg}20 100%)`;
                    e.currentTarget.style.borderColor = `${theme.borderColor}60`;
                    e.currentTarget.style.color = theme.hoverColor;
                  }}
                >
                  {highlight}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "10px",
                borderRadius: "20px",
                marginBottom: "30px",
                backgroundColor: "transparent",
              }}
              className="flex justify-center items-center"
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "8px",
                }}
                className="flex-col sm:flex-row"
              >
                <span style={{ color: "#000000ff" }} className="text-[20px]">
                  Package Starting From
                </span>

                <div className="flex justify-center items-center gap-2 relative">
                  {/* Price Highlight */}
                  <div
                    className="price-pill sm:text-[18px] text-[12px]"
                    style={{
                      position: "relative",
                      padding: "4px 10px",
                      borderRadius: "50px",
                      fontWeight: "500",
                      boxShadow: `0 4px 20px ${theme.borderColor}50, inset 0 1px 1px rgba(255,255,255,0.3)`,
                      background: `linear-gradient(135deg, ${theme.borderColor} 0%, ${theme.hoverColor} 100%)`,
                      color: theme.textColor + 20,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = `0 6px 30px ${theme.borderColor}70`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = `0 4px 20px ${theme.borderColor}50`;
                    }}
                  >
                    <span
                      style={{
                        position: "relative",
                        zIndex: 10,
                        color: theme.bgColor,
                      }}
                    >
                      {amount}/-
                    </span>
                  </div>

                  <span
                    style={{ color: "#6B7280" }}
                    className="sm:text-[20px] text-[12px]"
                  >
                    for
                  </span>

                  {/* Person Count */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "50px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      background: `${theme.iconBg}80`,
                      border: `2px solid ${theme.borderColor}60`,
                    }}
                    className="sm:px-2 sm:py-1 px-1 py-[2px] sm:gap-2 gap-1"
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: theme.borderColor,
                      }}
                      className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]"
                    >
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                        }}
                        className="text-[12px] sm:text-[18px]"
                      >
                        2
                      </span>
                    </div>
                    <span
                      style={{ fontWeight: "500", color: "#374151" }}
                      className="sm:text-[18px] text-[12px]"
                    >
                      Persons
                    </span>
                  </div>

                  {/* Three Countries Badge */}
                  {threeCountries && (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        overflow: "hidden",
                        cursor: "pointer",
                        background: `linear-gradient(90deg, ${theme.borderColor}30, ${theme.iconBg}60)`,
                        border: `2px solid ${theme.borderColor}`,
                        color: theme.hoverColor,
                      }}
                      className="countries-badge text-[12px] sm:text-[18px] sm:px-2 sm:py-1 px-1 py-[2px] gap-1 sm:gap-2"
                    >
                      <span
                        style={{
                          animation: "bounce 1s infinite",
                        }}
                        className="text-[12px] sm:text-[18px]"
                      >
                        🌍
                      </span>
                      <span style={{ position: "relative", zIndex: 10 }}>
                        3 Countries
                      </span>
                    </div>
                  )}
                  <div className="text-[#00c7ff] sm:text-[30px] text-[20px] font-bold px-2 py-0.5  absolute -top-3 -right-5  bg-transparent">
                    *
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
              onClick={goToWhatsapp}
            >
              <span
                style={{
                  color: "#6B7280",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                More Details
              </span>

              <button
                className="multi-shimmer-btn"
                style={{
                  position: "relative",
                  padding: "6px 10px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: `2px solid ${theme.borderColor}`,
                  background: `linear-gradient(135deg, ${theme.borderColor} 0%, ${theme.hoverColor} 100%)`,
                  color: theme.buttonText,
                  cursor: "pointer",
                  fontSize: "15px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: `0 4px 20px ${theme.borderColor}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1.05) translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 35px ${theme.borderColor}70`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.borderColor}40`;
                }}
              >
                {/* Multiple shimmer layers */}
                <div
                  className="shimmer-layer-1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "50%",
                    height: "100%",
                  }}
                />
                <div
                  className="shimmer-layer-2"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "30%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    transform: "skewX(-20deg)",
                  }}
                />

                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    letterSpacing: "0.5px",
                    fontSize: "15px",
                  }}
                >
                  CONTACT US
                </span>
                <svg
                  className="arrow-icon"
                  style={{
                    width: "18px",
                    height: "18px",
                    position: "relative",
                    zIndex: 10,
                    transition: "transform 0.3s ease",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            <style>{`
                  @keyframes shimmer {
                    0% {
                      left: -100%;
                    }
                    100% {
                      left: 200%;
                    }
                  }

                  @keyframes pulse-glow {
                    0%, 100% {
                      box-shadow: 0 4px 20px ${theme.borderColor}40;
                    }
                    50% {
                      box-shadow: 0 4px 40px ${theme.borderColor}80, 0 0 30px ${theme.borderColor}60;
                    }
                  }

                  .contact-btn-v1::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: left 0.6s ease;
                  }

                  .contact-btn-v1:hover::before {
                    left: 200%;
                  }

                  .contact-btn-v1:hover .arrow-icon {
                    transform: translateX(4px);
                  }

                  .shimmer-continuous {
                    animation: shimmer 3s infinite;
                  }

                  .pulse-glow-btn {
                    animation: pulse-glow 2s ease-in-out infinite;
                  }

                  .pulse-glow-btn::after {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 12px;
                    padding: 2px;
                    background: linear-gradient(135deg, ${theme.borderColor}, ${theme.hoverColor});
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                  }

                  .pulse-glow-btn:hover::after {
                    opacity: 1;
                    animation: pulse-glow 1.5s ease-in-out infinite;
                  }

                  .multi-shimmer-btn .shimmer-layer-1 {
                    animation: shimmer 2.5s infinite;
                  }

                  .multi-shimmer-btn .shimmer-layer-2 {
                    animation: shimmer 2.5s infinite 0.3s;
                  }

                  .multi-shimmer-btn:hover .shimmer-layer-1 {
                    animation: shimmer 1.5s infinite;
                  }

                  .multi-shimmer-btn:hover .shimmer-layer-2 {
                    animation: shimmer 1.5s infinite 0.2s;
                  }

                  .multi-shimmer-btn:hover .arrow-icon {
                    transform: translateX(5px);
                  }

                  .multi-shimmer-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 14px;
                    background: radial-gradient(circle at center, ${theme.borderColor}30, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                  }

                  .multi-shimmer-btn:hover::after {
                    opacity: 1;
                  }
                `}</style>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default DestinationCard;
