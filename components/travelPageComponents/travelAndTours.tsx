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

  const theme = {
    bgColor: "#ffffff",
    textColor: "#0000",
    borderColor: "#00c7ff",
    hoverColor: "#00c7ff",
    iconBg: "#cceeff",
    buttonText: "white",
  };

  return (
    <section
      className={`relative pt-10 md:pt-16 px-4 overflow-hidden backdrop-blur-lg`}
      style={{ backgroundColor: theme.bgColor }}
    >
      {/* Premium grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Floating gold lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: `${theme.borderColor}1A` }}
        />
        <div
          className="absolute bottom-40 right-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.borderColor}14`, // ~8% opacity
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.borderColor}0D`, // 5% opacity
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div
              className="w-16 h-[1px] bg-gradient-to-r from-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, transparent, ${theme.borderColor})`,
              }}
            />
            <span
              className="text-[12px] uppercase tracking-[0.3em] font-bold"
              style={{ color: `${theme.borderColor}CC` }} // CC = 80% opacity
            >
              Premium Travel & Tours
            </span>
            <div
              className="w-16 h-[1px] bg-gradient-to-l from-transparent"
              style={{
                backgroundImage: `linear-gradient(to left, transparent, ${theme.borderColor})`,
              }}
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-black">
            Your Journey,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to bottom right,
                ${theme.borderColor}33,
                ${theme.borderColor},
                ${theme.hoverColor}
                )`,
                backgroundClip: "text",
              }}
            >
              Our Expertise
            </span>
          </h2>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300"
            style={{
              color: theme.textColor + "60", // 60% opacity like white/60
            }}
          >
            Discover the world with confidence through our comprehensive travel
            solutions and carefully curated tourist experiences.
          </p>
        </div>

        {/* Tourist Services */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, ${theme.borderColor}33, transparent)`,
                border: `1px solid ${theme.borderColor}4D`, // ~30% opacity
              }}
            >
              <MapPin
                className="w-7 h-7"
                style={{ color: theme.borderColor }}
              />
            </div>
            <div>
              <h3
                className="text-2xl md:text-3xl font-serif font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom right,
                    ${theme.borderColor}33,
                    ${theme.borderColor},
                    ${theme.borderColor}aa
                  )`,
                }}
              >
                Tourist Services
              </h3>
              <p
                className="font-light text-sm tracking-wide"
                style={{ color: `${theme.textColor}50` }} // 60% opacity
              >
                Complete packages for unforgettable experiences
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {touristServices.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-8 transition-all duration-500"
                style={{
                  background: `linear-gradient(to bottom, ${theme.hoverColor} , ${theme.hoverColor} ,${theme.hoverColor} )`,
                  border: `1px solid ${theme.borderColor}40`, // 25% opacity
                  boxShadow: `0 0 30px ${theme.borderColor}26`, // ~15% opacity
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${theme.borderColor}80`; // 50% opacity
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.borderColor}33`; // ~20% opacity
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = `1px solid ${theme.borderColor}40`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.borderColor}26`;
                }}
              >
                {/* Light sweep effect */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    animation: "sweep 2s linear infinite",
                    background: `linear-gradient(to right, 
                    transparent, 
                    ${theme.borderColor}0D, 
                    transparent
                  )`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl border border-${theme.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-${theme.bgColor} transition-all duration-300`}
                    style={{
                      backgroundImage: `linear-gradient(
                          to bottom right,
                          ${theme.bgColor}33,
                          ${theme.borderColor},
                          ${theme.bgColor}aa
                        )`,
                    }}
                  >
                    <service.icon className={`w-8 h-8 text-${theme.bgColor}`} />
                  </div>

                  <h4
                    className={`text-xl font-serif font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-[#f5e7b1] transition-colors duration-300`}
                  >
                    {service.title}
                    <Star
                      className={`w-4 h-4 text-${theme.bgColor} opacity-70`}
                    />
                  </h4>

                  <p
                    className={` mb-5 font-light leading-relaxed text-sm`}
                    style={{
                      color: theme.textColor + 20,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Services */}
        <div className="!mb-20 mt-8">
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, ${theme.borderColor}33, transparent)`,
                border: `1px solid ${theme.borderColor}4D`, // ~30% opacity
              }}
            >
              <Shield
                className="w-7 h-7"
                style={{ color: theme.borderColor }}
              />
            </div>
            <div>
              <h3
                className="text-2xl md:text-3xl font-serif font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom right,
                    ${theme.borderColor}33,
                    ${theme.borderColor},
                    ${theme.borderColor}aa
                  )`,
                }}
              >
                Travel Services
              </h3>
              <p
                className="font-light text-sm tracking-wide"
                style={{ color: `${theme.textColor}50` }} // 60% opacity
              >
                Seamless booking & documentation support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-8 transition-all duration-500"
                style={{
                  background: `linear-gradient(to bottom, ${theme.hoverColor} , ${theme.hoverColor} ,${theme.hoverColor} )`,
                  border: `1px solid ${theme.borderColor}40`, // 25% opacity
                  boxShadow: `0 0 30px ${theme.borderColor}26`, // ~15% opacity
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${theme.borderColor}80`; // 50% opacity
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.borderColor}33`; // ~20% opacity
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = `1px solid ${theme.borderColor}40`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.borderColor}26`;
                }}
              >
                {/* Light sweep effect */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    animation: "sweep 2s linear infinite",
                    background: `linear-gradient(to right, 
                    transparent, 
                    ${theme.borderColor}0D, 
                    transparent
                  )`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl border border-${theme.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-${theme.bgColor} transition-all duration-300`}
                    style={{
                      backgroundImage: `linear-gradient(
                          to bottom right,
                          ${theme.bgColor}33,
                          ${theme.borderColor},
                          ${theme.bgColor}aa
                        )`,
                    }}
                  >
                    <service.icon className={`w-8 h-8 text-${theme.bgColor}`} />
                  </div>

                  <h4 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#f5e7b1] transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p
                    className={` mb-5 font-light leading-relaxed text-sm`}
                    style={{
                      color: theme.textColor + 20,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TravelToursSection;
