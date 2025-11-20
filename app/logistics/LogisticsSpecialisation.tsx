"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PremiumServices() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 25%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const services = [
    {
      id: 1,
      title: "Luxury Automotive Parts",
      subtitle: "German Engineering Excellence",
      description: "Specialized logistics for premium automotive parts from Mercedes-Benz, BMW, Audi, and Porsche.",
      features: [
        "Genuine OEM Parts Certification",
        "Climate-Controlled Transport", 
        "Real-Time GPS Monitoring",
        "White-Glove Handling"
      ],
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      stat: "99.8% Delivery Accuracy"
    },
    {
      id: 2, 
      title: "High-Value Electronics",
      subtitle: "Secure Global Transport",
      description: "Premium logistics solutions for sensitive electronics, medical equipment, and luxury devices.",
      features: [
        "Anti-Static & Shock Protection",
        "Full Value Insurance Coverage",
        "24/7 Real-Time Monitoring",
        "Custom Packaging Solutions"
      ],
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      stat: "Zero Security Incidents"
    },
    {
      id: 3,
      title: "Global Import-Export",
      subtitle: "Seamless International Solutions", 
      description: "Comprehensive import-export services with expert customs clearance and door-to-door delivery.",
      features: [
        "Expert Customs Brokerage",
        "Door-to-Door Global Delivery",
        "Complete Documentation Handling",
        "Real-Time Shipment Tracking"
      ],
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      stat: "150+ Countries Served"
    }
  ];

  // Auto change tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % services.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Pause auto-change when user hovers over tabs or content
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative py-8 sm:py-12 lg:py-20 bg-black overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Matching Mission & Vision Style but keeping your compact layout */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80">Our Services</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent"> */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold 
    bg-gradient-to-r from-white via-[#d9d9d9] to-[#a6a6a6]
    bg-clip-text text-transparent">

            Premium Logistics Solutions
          </h2>
          <p className="mt-3 text-[#d4af37]/80 text-sm max-w-2xl mx-auto">
            Precision delivery meets uncompromising standards across every service we offer.
          </p>
        </motion.div>

        {/* Premium Glass-Morphism Tab Bar - Keeping your original mobile layout */}
        <motion.div 
          className="flex justify-center mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div 
            className="inline-flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-3 sm:px-6 lg:px-10 py-2 sm:py-2.5 lg:py-4 rounded-xl text-[10px] sm:text-xs lg:text-sm font-medium uppercase tracking-wider transition-all duration-500 ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeTab === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compact Service Content - Keeping your original mobile-first layout */}
        <div 
          className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-6 md:gap-8 lg:gap-12 lg:items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image Side */}
          <div className="relative lg:col-span-3">
            <motion.div 
              className="relative rounded-xl overflow-hidden border border-white/5 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-[500px] object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Auto-play indicator */}
              <div className="absolute top-3 right-3 lg:top-6 lg:right-6">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-2 py-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-red-400' : 'bg-green-400'} animate-pulse`} />
                  <span className="text-[10px] text-white/70">
                    {isPaused ? 'Paused' : 'Auto'}
                  </span>
                </div>
              </div>
              
              {/* Stat Badge - Gold Accent */}
              <div className="absolute top-3 left-3 lg:top-6 lg:left-6 bg-black/50 backdrop-blur-md border border-[#d4af37]/30 rounded-full px-3 py-1 lg:px-6 lg:py-3">
                <div className="flex items-center gap-1.5 lg:gap-3 text-[10px] sm:text-xs lg:text-sm">
                  <div className="w-1 h-1 lg:w-2 lg:h-2 bg-[#d4af37] rounded-full animate-pulse" />
                  <span className="text-white font-medium lg:font-semibold">{services[activeTab].stat}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-serif font-semibold mb-1 lg:mb-2 text-white">
                    {services[activeTab].title}
                  </h3>
                  
                  <p className="text-[#d4af37] text-xs sm:text-sm lg:text-base mb-2 lg:mb-3 font-medium">
                    {services[activeTab].subtitle}
                  </p>
                  
                  <p className="text-white/70 text-xs sm:text-sm lg:text-lg leading-relaxed">
                    {services[activeTab].description}
                  </p>
                </div>

                {/* Features Grid - Enhanced Styling but keeping your mobile layout */}
                <div className="grid grid-cols-1 gap-2 lg:gap-4">
                  {services[activeTab].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 lg:gap-3 group"
                    >
                      <div className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-[#d4af37] flex-shrink-0 mt-1.5 lg:mt-2 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-white/60 text-xs lg:text-base leading-relaxed group-hover:text-white/90 transition-all duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons - Gold Accent but keeping your mobile layout */}
                <div className="flex gap-2 lg:gap-4 pt-2 lg:pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl text-[10px] sm:text-xs lg:text-sm font-medium uppercase tracking-wide bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-md transition-all duration-300"
                  >
                    Get Quote
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl text-[10px] sm:text-xs lg:text-sm font-medium uppercase tracking-wide bg-gradient-to-r from-[#d4af37] to-[#a37d24] text-black hover:from-[#e5c158] hover:to-[#b58d2a] transition-all duration-300 shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Indicator Dots - Gold Theme but keeping your mobile layout */}
        <motion.div 
          className="flex justify-center mt-6 sm:mt-8 lg:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex gap-1.5 lg:gap-2">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.2 }}
                className={`relative w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-[#d4af37] w-6 lg:w-10' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              >
                {/* Progress bar for active tab */}
                {activeTab === index && !isPaused && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={activeTab} // Reset animation when tab changes
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle background animation matching Mission & Vision */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.25) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(192,192,192,0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </motion.section>
  );
}