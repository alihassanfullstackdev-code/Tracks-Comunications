import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { socialLinks } from "../../constants/data";

export const Contact = () => {
  return (
    <Section id="contact" className="pb-32 pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#0A0A0A] border border-white/5 p-8 md:p-20 text-center shadow-2xl">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--brand-primary-rgb),0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 mb-12 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-brand-primary"></span>
              <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-brand-primary">Contact Info</h2>
              <span className="w-8 h-[1px] bg-brand-primary"></span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm md:text-lg max-w-xl mx-auto font-medium italic leading-relaxed"
            >
              Ready to elevate your digital presence? Reach out via our official channels and let's discuss your next breakthrough.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center relative z-10">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/50 ${item.color} transition-all duration-300 group/link relative w-full md:w-auto`}
              >
                {item.Icon && <item.Icon className="w-5 h-5" />}
                
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{item.label}</span>
                  {item.value && <span className="text-xs text-white font-medium">{item.value}</span>}
                </div>

                <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        </div>
      </div>
    </Section>
  );
};