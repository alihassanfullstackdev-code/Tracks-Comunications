import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu as MenuIcon } from "lucide-react";
import { NAV_LINKS } from "../../constants/data";

interface NavbarProps {
  activeSection: string;
  theme: string;
  toggleTheme: () => void;
  onMenuOpen: () => void;
  onNavClick: (id: string) => void;
}

export const Navbar = ({ activeSection, theme, toggleTheme, onMenuOpen, onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavClick(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 pointer-events-none flex justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          w-full max-w-7xl px-4 md:px-6 py-3 md:py-4 flex justify-between items-center transition-all duration-500 pointer-events-auto
          rounded-2xl border
          ${scrolled
            ? theme === "dark"
              ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-white/80 backdrop-blur-xl border-black/5 shadow-lg"
            : "bg-transparent border-transparent"}
        `}
      >
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo Container: bg-transparent ensures no box background */}
          <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:rotate-3">
            <img 
              src="/images/projects/TC-Logo.png" 
              alt="TC" 
              className="w-full h-full object-cover bg-transparent" 
            />
          </div>
          <span className={`text-xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="text-brand-primary"></span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md ${
          theme === 'dark' ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
        }`}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection.toLowerCase() === link.id.toLowerCase();
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all outline-none group"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 block transition-colors duration-300 ${
                  isActive ? "text-white" : theme === 'dark' ? "text-white/40 group-hover:text-white" : "text-black/40 group-hover:text-black"
                }`}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* <button
            onClick={toggleTheme}
            className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 ${
              theme === 'dark' ? 'border-white/10 text-white bg-white/5 hover:bg-white/10' : 'border-black/10 text-black bg-black/5 hover:bg-black/10'
            }`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button> */}

          <button
            onClick={onMenuOpen}
            className={`md:hidden p-3 transition-colors ${theme === 'dark' ? 'text-white hover:text-brand-primary' : 'text-black hover:text-brand-primary'}`}
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </nav>
  );
};