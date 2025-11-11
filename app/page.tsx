'use client';
import { useEffect } from "react";
import AboutSection from "../components/aboutSection";
import HeroSection from "../components/heroSection";


export default function HomePage() {

  useEffect(()=>{
      const target = sessionStorage.getItem("scrollTarget");
      if (target) {
        const section = document.getElementById(target);
        if (section) {
          // setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          // }, 0);
        }
        sessionStorage.removeItem("scrollTarget");
      }
  },[])

  return(
    <section className="bg-black">
        <HeroSection/>
        <div id="about-section">
          {/* Example for next section */}
          <AboutSection />
        </div>
    </section>
  )

}