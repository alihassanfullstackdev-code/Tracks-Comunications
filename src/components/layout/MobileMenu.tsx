import React from "react";
import { motion, AnimatePresence } from "motion/react";
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
          className="fixed inset-0 z-[200] bg-[var(--bg)]/95 backdrop-blur-2xl flex flex-col p-8"
        >
          <div className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold tracking-tighter">AH.</div>
            <button onClick={onClose} className="p-3 glass-card rounded-2xl">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${link.id}`} 
                onClick={onClose}
                className="text-5xl font-extrabold tracking-tight hover:text-brand-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
