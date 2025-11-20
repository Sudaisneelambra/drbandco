"use client";
import { useEffect, useState, useRef } from "react";

const TravelHero = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = heroRef.current; // capture the ref value
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey((prev) => prev + 1); // Force re-animation
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // safely use the captured element
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

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')",
            backgroundColor: theme.bgColor,
            transform: "scale(1.1)",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(0px) brightness(0.6)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 z-10" />
        <div
          className="absolute inset-0 bg-gradient-to-tr z-10"
          style={{
            background: `linear-gradient(
              to top right,
              ${theme.borderColor}4D,  /* ~30% opacity */
              transparent,
              ${theme.iconBg}33          /* ~20% opacity */
            )`,
          }}
        />
      </div>

      {/* Flight Path */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 20 }}>
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.bgColor} />
            <stop offset="50%" stopColor={theme.borderColor} />
            <stop offset="100%" stopColor={theme.bgColor} />
          </linearGradient>
        </defs>
        <path
          d="M 0,100 Q 30,80 50,60 T 100,0"
          stroke="url(#pathGradient)"
          strokeWidth={3}
          fill="none"
          strokeDasharray="15,15"
          vectorEffect="non-scaling-stroke"
          className={isVisible ? "animate-drawPath" : ""}
          key={`path-${animationKey}`}
        />
      </svg>

      {/* Airplane */}
      <div
        key={`plane-${animationKey}`}
        className={`absolute transition-all duration-[4000ms] ease-in-out ${
          isVisible ? "airplane-fly" : "opacity-0"
        }`}
        style={{ left: "5%", bottom: "10%", zIndex: 30 }}
      >
        <div className="relative">
          <svg
            width={60}
            height={60}
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-2xl animate-float"
            style={{ transform: "rotate(-45deg)" }}
          >
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill={theme.hoverColor}
              className="airplane-body"
            />
          </svg>
          <div
            className="absolute inset-0 blur-xl rounded-full animate-pulse"
            style={{
              backgroundColor: theme.hoverColor,
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-40 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              textShadow: `0 4px 20px ${theme.iconBg}`,
              letterSpacing: "-0.02em",
            }}
          >
            Your Journey
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor}, ${theme.iconBg})`,
                backgroundClip: "text",
              }}
            >
              Begins Here
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-${
              theme.bgColor
            } mb-10 font-light transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Explore the world&apos;s most breathtaking destinations
            <br />
            Create memories that last forever
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="group relative px-8 py-4 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor} 50%, ${theme.iconBg})`,
                color: theme.textColor +80,
                boxShadow: `0 0 30px ${theme.borderColor}80`, // hover shadow color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${theme.borderColor}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="relative z-10">Explore Destinations</span>
              <div
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                style={{
                  background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`,
                }}
              />
            </button>

            {/* <button className="px-8 py-4 bg-transparent text-yellow-500 font-bold rounded-full border-2 border-yellow-500/70 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500/10 hover:border-yellow-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Watch Video
            </button> */}
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { label: "Destinations", value: "50+" },
              { label: "Happy Travelers", value: "50K+" },
              { label: "Rating", value: "4.9★" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center group cursor-pointer"
              >
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${theme.borderColor}, ${theme.hoverColor})`,
                    backgroundClip: "text",
                  }}
                >
                  {item.value}
                </div>
                <div
                  className={`text-sm text-${theme.textColor + 80} font-light`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-drawPath {
          stroke-dashoffset: 1000;
          animation: drawPath 2s ease-out forwards;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-45deg);
          }
          50% {
            transform: translateY(-10px) rotate(-45deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .airplane-fly {
          animation: flyPath 4s ease-in-out forwards;
        }

        @keyframes flyPath {
          0% {
            left: 5%;
            bottom: 10%;
            opacity: 0;
            transform: scale(0.8);
          }
          20% {
            opacity: 1;
          }
          100% {
            left: 85%;
            bottom: 85%;
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

        .airplane-body {
          filter: drop-shadow(0 4px 6px rgba(255, 215, 0, 0.4));
        }
      `}</style>
    </div>
  );
};

export default TravelHero;
