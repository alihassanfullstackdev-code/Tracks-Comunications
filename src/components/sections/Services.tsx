import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pillars } from "../../constants/data";
import { Section } from "../ui/Section";
import { MarketingAnimation } from "../../components/sections/MarketingAnimation";

export const Services = () => {
  return (
    /* pb-24 ko hata kar pb-0 kiya hai taake niche ki space khatam ho jaye */
    <Section id="services" className="pt-10 pb-0 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-brand-primary">Services</h2>
            <span className="w-8 h-[1px] bg-brand-primary"></span>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-20 md:mb-32">
          {pillars.map((item, i) => (
            <motion.div key={i} className="group relative">
              <div className="relative h-full p-6 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 group-hover:border-brand-primary/30 transition-all flex flex-col justify-between overflow-hidden shadow-2xl">
                <div>
                  <div className="text-white group-hover:text-brand-primary mb-8 transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-lg md:text-3xl font-black text-white italic uppercase mb-2">{item.title}</h3>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-white/20 group-hover:text-white">Scope</span>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-primary group-hover:text-black transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Marketing Engine" Portion */}
        {/* py-20 ko pt-20 pb-0 mein change kiya hai */}
        <div className="mt-20 pt-20 pb-0 border-t border-[var(--border)] overflow-hidden">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-black italic uppercase text-[var(--text)]">
              The <span className="text-brand-primary text-glow">Marketing Engine</span>
            </h3>
            <p className="text-[var(--text)]/40 text-xs uppercase tracking-[0.3em] mt-2 font-bold">Data Driven Results</p>
          </div>

          <MarketingAnimation />
        </div>
      </div>
    </Section>
  );
};