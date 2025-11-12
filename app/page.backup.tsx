"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/homePageComponents/heroSection"));
const AboutSection = dynamic(() => import("../components/homePageComponents/aboutSection"));
const ServiceSection = dynamic(() => import("../components/homePageComponents/serviceSection"));
const MissionAndVision = dynamic(() => import("../components/homePageComponents/missionAndVision"));
const GlobalStatusBar = dynamic(() => import("../components/homePageComponents/globalStatusBar"));
const ContactSection = dynamic(() => import("../components/homePageComponents/contactSection"));


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
