import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/layout/Navbar";
import { MobileMenu } from "./components/layout/MobileMenu";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { useTheme } from "./hooks/useTheme";
import InteractiveBubbles from "./components/ui/InteractiveBubbles";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Ref to track if we are manually scrolling after a click
  const isManualScroll = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Agar click ke zariye scroll ho raha hai, to logic bypass karein
      if (isManualScroll.current) return;

      const sections = ["home", "experience", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break; 
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Is function ko Navbar ko pass karenge
  const handleManualNav = (id: string) => {
    isManualScroll.current = true;
    setActiveSection(id); // Foran capsule move karega

    // Jab scroll khatam ho jaye (approx 800ms - 1s), detection wapas on karein
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <InteractiveBubbles />
      
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onMenuOpen={() => setIsMenuOpen(true)}
        onNavClick={handleManualNav} // New prop pass kiya
      />
      
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      <main>
        <section id="home"><Hero /></section>
        <section id="experience"><Experience /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        {/* <Testimonials /> */}
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}