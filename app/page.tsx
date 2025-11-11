"use client";
import { useEffect } from "react";
import AboutSection from "../components/aboutSection";
import HeroSection from "../components/heroSection";
import ServiceSection from "../components/serviceSection";
import MissionAndVision from "../components/missionAndVision";
import GlobalStatusBar from "../components/globalStatusBar";
import ContactSection from "../components/contactSection";

export default function HomePage() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      const section = document.getElementById(target);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  const moveToServiceSection =()=>{
    document.getElementById('service-section')?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <section className="bg-black">
      <HeroSection moveToServiceSection={moveToServiceSection}/>
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="service-section">
        <ServiceSection />
      </div>
      <div className="">
        <MissionAndVision/>
      </div>
      <div className="">
        <GlobalStatusBar/>
      </div>
      <div className="">
        <ContactSection/>
      </div>
    </section>
  );
}
