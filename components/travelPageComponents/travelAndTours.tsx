"use client";

import { 
  Plane, 
  FileText, 
  Hotel, 
  Users, 
  Car, 
  Star, 
  MapPin,
  Calendar,
  Shield,
  ArrowRight,
} from "lucide-react";

const TravelToursSection = () => {
  const touristServices = [
    {
      icon: Users,
      title: "Expert Guided Service",
      description:
        "Professional multilingual guides with deep local knowledge to enrich your journey with authentic stories and hidden gems.",
    },
    {
      icon: Car,
      title: "Premium Transportation",
      description:
        "Comfortable, air-conditioned vehicles with experienced drivers ensuring safe and smooth travel throughout your adventure.",
    },
    {
      icon: Hotel,
      title: "Luxury Accommodation",
      description:
        "Carefully selected 3 to 5-star hotels offering exceptional comfort, amenities, and locations for the perfect stay.",
    },
    {
      icon: Calendar,
      title: "Detailed Itinerary",
      description:
        "Comprehensive day-by-day plans crafted by travel experts, covering attractions, meals, and activities with your personal guide.",
    },
  ];

  const travelServices = [
    {
      icon: Plane,
      title: "Air Ticket Booking",
      description:
        "Access to competitive flight rates with flexible options and 24/7 support for hassle-free international and domestic travel.",
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description:
        "Complete visa processing support with document guidance, application tracking, and expert consultation for stress-free approval.",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description:
        "Exclusive deals on global accommodations from budget-friendly to luxury stays, with instant confirmation and best price guarantee.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 bg-black text-white overflow-hidden">
      {/* Premium grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/%3E%3C/svg%3E")',
        }}
      />

      {/* Floating gold lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#ffd700]/8 rounded-full blur-3xl" 
          style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-light">
              Premium Travel & Tours
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Your Journey,{" "}
            <span className="bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the world with confidence through our comprehensive travel solutions
            and carefully curated tourist experiences.
          </p>
        </div>

        {/* Tourist Services */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
                Tourist Services
              </h3>
              <p className="text-[#d4af37]/60 font-light text-sm tracking-wide">
                Complete packages for unforgettable experiences
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {touristServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#0b0b0b] via-black to-[#0b0b0b] rounded-2xl p-8 border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Light sweep effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{ animation: 'sweep 2s linear infinite' }} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#d4af37]/50 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>

                  <h4 className="text-xl font-serif font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-[#f5e7b1] transition-colors duration-300">
                    {service.title}
                    <Star className="w-4 h-4 text-[#d4af37] opacity-70" />
                  </h4>

                  <p className="text-white/60 mb-5 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#d4af37] text-sm font-light tracking-wider group-hover:gap-3 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>

        {/* Travel Services */}
        <div className="!mb-20 mt-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent">
                Travel Services
              </h3>
              <p className="text-[#d4af37]/60 font-light text-sm tracking-wide">
                Seamless booking & documentation support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#0b0b0b] via-black to-[#0b0b0b] rounded-2xl p-8 border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] "
              >
                {/* Light sweep effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#d4af37]/50 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>

                  <h4 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#f5e7b1] transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-white/60 mb-5 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#d4af37] text-sm font-light tracking-wider group-hover:gap-3 transition-all duration-300">
                    <span>Book now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default TravelToursSection;