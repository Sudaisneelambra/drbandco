"use client";
import { useState, useEffect, useRef } from "react";
import AnimatedSection from "../travelPageComponents/animatedSection";
import CarosalComponent from "../travelPageComponents/carosalComponent";


interface DestinationCardProps {
  subtitle: string;
  description: string;
  highlights: string[];
  images: { src: string; alt?: string }[];
  amount:string;
  reverse?: boolean;
  threeCountries?:boolean
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

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-black"
    >
      {/* Enhanced decorative background glow with gold accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-600/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 50}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-700/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 50}px)` }}
        ></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
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
          <AnimatedSection className="lg:w-1/2 w-full flex justify-center" delay={0}>
            <div className="w-full h-[350px] sm:h-[400px] flex justify-center">
              <CarosalComponent images={images} />
            </div>
          </AnimatedSection>

          {/* Text Section */}
          <AnimatedSection className="lg:w-1/2 space-y-4 sm:space-y-6 flex justify-center items-center flex-col lg:justify-start lg:items-start" delay={200}>
            <div className="space-y-2 sm:space-y-3 flex flex-col  lg:justify-start justify-center lg:items-start items-center">
              <p className="text-yellow-500 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                {subtitle}
              </p>
              <div
                className={`h-1 w-20 sm:w-24 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              ></div>
            </div>

            <p
              className={`text-[14px] sm:text-sm text-gray-300 leading-relaxed transition-all duration-700 delay-200 text-center lg:text-left  ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {description}
            </p>
            <p>Destinations</p>
            <div className="space-y-3  w-full flex gap-2 flex-wrap">
              {
                highlights.map((highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
                  className={`transition-all duration-500 flex w-fit px-4 py-1 bg-white/10 backdrop-blur-md text-gray-200 text-sm sm:text-base hover:bg-white/20 rounded-xl cursor-pointer border border-white/20 shadow-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                  style={{margin:'0px', transitionDelay: `${400 + index * 100}ms` }}
                >
                  {highlight}
                </div>
              ))}
            </div>
            <p>Package Starting From {amount}/- for 2 pax * {threeCountries && <span> (for Three countries)</span>}</p> 
            <div className="flex items-center gap-3 text-gray-300">
              <span>More Details</span>
              <button className="px-4 py-1 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition flex gap-2">
                CONTACT US
              </button>
            </div>

          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-pulse {
          0%, 100% {
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
