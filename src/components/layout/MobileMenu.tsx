import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Note: motion/react agar error de toh framer-motion use karein
import { X } from "lucide-react";
import { NAV_LINKS } from "../../constants/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-[200] bg-[var(--bg)]/98 backdrop-blur-3xl flex flex-col p-8"
        >
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              {/* Logo Container */}
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 bg-white/5">
                <img 
                  src="/images/projects/TC-Logo.png" 
                  alt="TC Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              {/* Branding Text */}
              {/* <div className="text-2xl font-black tracking-tighter italic">
                TC<span className="text-brand-primary"></span>
              </div> */}
            </div>

            <button 
              onClick={onClose} 
              className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${link.id}`} 
                onClick={onClose}
                className="text-5xl font-extrabold tracking-tight italic uppercase text-[var(--text)] hover:text-brand-primary transition-all duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Optional: Footer inside Menu */}
          <div className="mt-auto pb-10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
              Tracks Communications
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};