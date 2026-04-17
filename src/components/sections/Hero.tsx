import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { Section } from "../ui/Section";

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      // Navbar ki height ke mutabiq offset set kiya hai
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <Section 
      id="home" 
      /* pt-32 (Mobile) aur md:pt-40 (Desktop) ensures Navbar overlap nahi karega */
      className="min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center relative bg-transparent pt-32 md:pt-40 overflow-hidden px-4"
    >

      {/* Background Glow - Subtle brand identity highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,rgba(var(--brand-primary-rgb),0.08)_0%,transparent_60%)] pointer-events-none opacity-50 md:opacity-100" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[var(--text)]/[0.03] border border-[var(--text)]/10 backdrop-blur-xl text-brand-primary text-[9px] md:text-xs font-black mb-6 md:mb-10 tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-sm"
        >
          <ShieldCheck className="w-3 md:w-3.5 h-3 md:h-3.5" />
          Driving Digital Velocity
        </motion.div>

        {/* Main Heading - Optimized for all screen sizes */}
        <div className="relative w-full mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center font-black tracking-tighter text-[var(--text)] italic uppercase"
          >
            {/* Tracks */}
            <span className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[110px] leading-[1]">
              Tracks
            </span>

            {/* Communications - Gradient text with tight tracking for premium look */}
            <span className="text-[10vw] sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-[-0.05em] sm:tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-primary/40">
              Communications
            </span>
          </motion.h1>
        </div>

        {/* Descriptive Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl opacity-70 leading-relaxed font-medium text-[var(--text)] mb-10 md:mb-16 px-2">
            We are a full-spectrum agency specialized in <br className="hidden sm:block" />
            <span className="inline-block text-[var(--text)] font-extrabold border-b-2 border-brand-primary/30">Web Development</span>,
            <span className="inline-block text-[var(--text)] font-extrabold border-b-2 border-brand-primary/30 mx-1 md:mx-2">Meta Ads</span>,
            <span className="text-xs md:text-sm mx-1 opacity-50">&</span>
            <span className="inline-block text-[var(--text)] font-extrabold border-b-2 border-brand-primary/30">Social Media</span>.
          </p>

          {/* Clickable Scroll Indicator */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
            className="flex flex-col items-center gap-2 md:gap-3 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group mx-auto outline-none"
          >
            <span className="text-[8px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-[var(--text)] group-hover:text-brand-primary transition-colors">
              Explore Services
            </span>
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowDown className="w-3.5 h-3.5 md:w-5 md:h-5 text-brand-primary" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
};