"use client";

import HeroSection from "../components/homePageComponents/heroSection";
import AboutSection from "../components/homePageComponents/aboutSection";
import ServiceSection from "../components/homePageComponents/serviceSection";
import MissionAndVision from "../components/homePageComponents/missionAndVision";
import GlobalStatusBar from "../components/homePageComponents/globalStatusBar";
import ContactSection from "../components/homePageComponents/contactSection";

export default function HomePage() {
  const moveToServiceSection = () => {
    const el = document.getElementById("service-section");
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="bg-black">
      <HeroSection moveToServiceSection={moveToServiceSection} />

      <div id="about-section">
        <AboutSection />
      </div>

      <div id="service-section">
        <ServiceSection />
      </div>

      <MissionAndVision />
      <GlobalStatusBar />
      <ContactSection />
    </section>
  );
}
