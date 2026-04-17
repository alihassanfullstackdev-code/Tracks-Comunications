import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../constants/data";
import { Section } from "../ui/Section";

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section - Synced Design Language */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Sub-heading with Lines (Matching Experience & Services) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-brand-primary">
              Feedback
            </h2>
            <span className="w-8 h-[1px] bg-brand-primary"></span>
          </motion.div>
          

          {/* Tagline */}
          <p className="text-[var(--text)]/40 text-sm md:text-base max-w-xl italic px-4">
            Transforming vision into reality, as told by those who have <span className="text-brand-primary font-bold">experienced the journey.</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm md:max-w-none"
            >
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
              
              {/* Card Container */}
              <div className="relative h-full p-6 md:p-8 rounded-[1.8rem] bg-[#0A0A0A] border border-white/5 group-hover:border-brand-primary/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
                
                {/* Background Quote Icon */}
                <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <Quote size={60} strokeWidth={3} className="text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-5">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary/60">
                      Verified Partnership
                    </span>
                  </div>

                  <p className="text-sm md:text-base font-medium text-white/70 mb-8 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center gap-3 md:gap-4 pt-6 border-t border-white/5">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 border border-white/10 flex items-center justify-center font-black text-brand-primary text-sm md:text-base shadow-inner">
                    {t.name[0]}
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-sm md:text-base text-white truncate">
                      {t.name}
                    </div>
                    <div className="text-[8px] md:text-[9px] font-black uppercase tracking-wider text-brand-primary/40 group-hover:text-brand-primary/70 transition-colors truncate">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};