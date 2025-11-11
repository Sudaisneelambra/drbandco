"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const submitData = (name: string, email: string, message: string) => {
    const phoneNumber = "919747491562"; // your WhatsApp number with country code
    const text = `Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
      message
    )}`;

    // Opens WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 md:py-40 overflow-hidden"
    >
      {/* Subtle golden radial glow */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80">
              Contact Us
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent mb-4">
            Let’s Connect
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Reach out to us for collaborations, partnerships, or inquiries — our
            team will respond promptly.
          </p>
        </motion.div>

        {/* Glassy Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);

            const form = e.target as HTMLFormElement;
            const name = (form[0] as HTMLInputElement).value;
            const email = (form[1] as HTMLInputElement).value;
            const message = (form[2] as HTMLTextAreaElement).value;

            submitData(name, email, message);

            setLoading(false);
            form.reset();
          }}
          className="relative w-full max-w-xl backdrop-blur-xl border border-white/10 bg-gradient-to-b from-[#0a0a0a]/80 to-[#000]/60 p-8 md:p-10 rounded-2xl"
        >
          <div className="grid gap-6">
            <div className="text-left">
              <label className="block text-sm tracking-wider text-white/70 mb-2 uppercase">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d4af37] outline-none transition"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm tracking-wider text-white/70 mb-2 uppercase">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d4af37] outline-none transition"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm tracking-wider text-white/70 mb-2 uppercase">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d4af37] outline-none transition resize-none"
              ></textarea>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="relative inline-flex items-center justify-center gap-2 px-8 py-3 text-[12px] font-medium uppercase tracking-[0.2em] border border-[#d4af37]/60 text-[#d4af37] rounded-full overflow-hidden group hover:bg-[#d4af37]/10 transition"
            >
              {loading ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#f5e7b1]"
                >
                  Sending...
                </motion.span>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition" />
                </>
              )}
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
