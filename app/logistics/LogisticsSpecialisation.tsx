"use client";

import { useState } from 'react';

export default function LogisticsSpecializations() {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      id: 1,
      title: "Luxury Automotive Parts",
      subtitle: "German Precision Engineering",
      description: "Specialized logistics for Mercedes-Benz, BMW, Audi, and Porsche genuine spare parts. Temperature-controlled transport with real-time monitoring.",
      features: ["Genuine OEM Parts", "Climate-Controlled Shipping", "Real-Time GPS Tracking", "White-Glove Handling"],
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "High-Value Electronics",
      subtitle: "Secure & Insured Transport",
      description: "Premium handling for sensitive electronics, medical equipment, and luxury devices with comprehensive insurance and security protocols.",
      features: ["Anti-Static Packaging", "Insurance Coverage", "Security Escorts", "24/7 Monitoring"],
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Global Import-Export",
      subtitle: "Seamless Cross-Border Solutions",
      description: "End-to-end international shipping services for businesses and individuals with customs clearance and door-to-door delivery.",
      features: ["Customs Brokerage", "Door-to-Door Delivery", "Documentation Handling", "Multi-Modal Transport"],
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] text-[#d4af37]/90 uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Premium Logistics Services
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Delivering excellence through specialized logistics solutions tailored for high-value commodities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeCard === index ? 'lg:transform lg:scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => setActiveCard(index)}
            >
              {/* Card */}
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#d4af37] text-sm font-medium tracking-wide">
                      {String(service.id).padStart(2, '0')}
                    </span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCard === index ? 'bg-[#d4af37] scale-150' : 'bg-white/30'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#d4af37] text-sm font-light mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-white/60 text-xs transition-all duration-300 group-hover:text-white/80"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-1 h-1 bg-[#d4af37] rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  activeCard === index ? 'opacity-100' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-6">
            Ready to elevate your logistics experience?
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full text-sm uppercase tracking-wide border border-[#d4af37]/40 text-[#f8ecc8] hover:border-[#d4af37]/80 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all duration-300">
              Discuss Your Needs
            </button>
            <button className="px-8 py-3 rounded-full text-sm uppercase tracking-wide bg-gradient-to-r from-[#d4af37]/20 to-[#f8e7c2]/30 text-white border border-[#d4af37]/20 hover:from-[#d4af37]/35 hover:to-[#f8e7c2]/50 backdrop-blur-md transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}