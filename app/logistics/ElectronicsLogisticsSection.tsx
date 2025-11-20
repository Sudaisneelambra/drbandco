"use client";

import { motion } from "framer-motion";

export default function ElectronicsLogisticsSection() {
  return (
    <section
    id="electronics"
     className="relative py-16 md:py-28 bg-black overflow-hidden">

      {/* Subtle Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.25) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(192,192,192,0.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Label */}
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#d4af37]/80 mb-3">
          Electronics Logistics
        </p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center 
          bg-gradient-to-r from-white via-[#d9d9d9] to-[#a6a6a6] bg-clip-text text-transparent"
        >
          High-Value Electronics Transport
        </motion.h2>

        {/* Underline */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-14 opacity-70" />

        {/* GRID WRAPPER */}
        <div className="
          flex 
          flex-col-reverse 
          lg:grid 
          lg:grid-cols-2 
          gap-10 lg:gap-16 
          items-center
        ">

          {/* LEFT ON DESKTOP — Text | BOTTOM ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 mt-10 lg:mt-0"
          >
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We provide secure and climate-stable transportation for sensitive high-value
              electronics including medical devices, laboratory tech, precision equipment,
              and luxury gadgets. Every shipment is protected with anti-shock systems,
              custom packaging, and full-value insurance coverage.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Anti-Static & Shock-Proof Protection",
                "Custom Engineered Packaging Solutions",
                "Climate-Controlled Transportation",
                "Full-Value Insurance Coverage",
                "24/7 Real-Time GPS Monitoring",
                "Secure Handling for Medical & Lab Equipment",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-1" />
                  <span className="text-white/70 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#quote"
                className="px-6 py-3 rounded-lg text-xs sm:text-sm uppercase tracking-wide
                border border-[#d4af37]/50 text-[#f8ecc8]
                hover:border-[#d4af37]/80 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                backdrop-blur-md transition-all duration-300"
              >
                Get Quote
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-6 py-3 rounded-lg text-xs sm:text-sm uppercase tracking-wide
                bg-gradient-to-r from-[#d4af37] to-[#a37d24] text-black
                hover:from-[#e5c158] hover:to-[#b58d2a]
                shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT ON DESKTOP — Images | TOP ON MOBILE */}
          <div className="space-y-5 relative">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="electronic.jpeg"
                alt="High Value Electronics"
                className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-[#d4af37]/30 rounded-full px-4 py-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                  <span className="text-white text-xs font-medium">Zero Incidents</span>
                </div>
              </div>
            </motion.div>

            {/* Collage Images */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-xl border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                  className="w-full h-40 object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-xl overflow-hidden shadow-xl border border-white/10"
              >
                <img
                  src="electronicrobo.jpeg"
                  className="w-full h-40 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
