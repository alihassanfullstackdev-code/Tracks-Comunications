import React from "react";
import { motion } from "framer-motion";
import { AGENCY_STATS } from "../../constants/data";
import { Section } from "../ui/Section";

export const Experience = () => {
  return (
    <Section id="experience" className="pt-4 pb-16 bg-transparent relative overflow-hidden">

      {/* Background Subtle Glows - Adjusted for both themes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 dark:bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 dark:bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-brand-primary">Experience</h2>
            <span className="w-8 h-[1px] bg-brand-primary"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            /* - text-[8vw]: Mobile par thora chota (pehle 10vw tha)
               - md:text-7xl: Medium screens par balanced
               - lg:text-[85px]: Desktop par readable size (pehle 110px tha)
            */
            className="text-[8vw] sm:text-5xl md:text-7xl lg:text-[85px] font-black tracking-tight text-[var(--text)] italic leading-[1.1] md:leading-[1] uppercase"
          >
            2+ Years of<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-primary/40 inline-block">
              Digital Dominance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-white/40 max-w-2xl mt-8 font-medium text-sm md:text-lg leading-relaxed italic transition-colors duration-300"
          >
            Engineering high-performance digital ecosystems since 2024. We don't just build; we dominate the landscape.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {AGENCY_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // FIXED: Always Dark Background + Neon Hover for both modes
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 
              hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.4)] hover:-translate-y-2"
            >
              {/* Neon Glow Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />

              <span className="relative z-10 text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-brand-primary group-hover:scale-110 transition-all duration-500 ease-out">
                {stat.value}
              </span>

              <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/30 font-black text-center group-hover:text-white/70 transition-colors">
                {stat.label}
              </span>

              {/* Animated Bottom Line */}
              <div className="absolute bottom-6 w-0 h-[2px] bg-brand-primary group-hover:w-16 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(var(--brand-primary-rgb),0.8)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};