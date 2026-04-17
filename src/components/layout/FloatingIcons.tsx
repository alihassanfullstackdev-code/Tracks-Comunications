import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

interface FloatingIconsProps {
  activeSection: string;
  theme: string;
}

export const FloatingIcons = ({ activeSection, theme }: FloatingIconsProps) => {
  const isContact = activeSection === "contact";

  const contactData = [
    { id: "mail", icon: <Mail size={22} />, label: "hello@tracks.com" },
    { id: "phone", icon: <Phone size={22} />, label: "+92 300 1234567" },
    { id: "insta", icon: <Instagram size={22} />, label: "@tracks_comm" },
  ];

  return (
    // Z-index 100 ensures it stays above everything
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {contactData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                // Desktop: Icons center slots mein land karenge
                // Mobile: Icons center stack mein land karenge
                x: isContact 
                  ? (window.innerWidth < 768 ? -window.innerWidth / 2 + 60 : (index - 1) * -320 - 450) 
                  : 0,
                y: isContact 
                  ? (window.innerWidth < 768 ? 200 + (index * 80) : 320) 
                  : 0,
                scale: isContact ? 1.15 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 18, 
                delay: index * 0.05 
              }}
              className={`
                pointer-events-auto p-4 rounded-2xl border backdrop-blur-xl flex items-center gap-4 shadow-2xl
                ${theme === 'dark' 
                  ? 'bg-black/60 border-white/10 text-white shadow-black/50' 
                  : 'bg-white/60 border-black/10 text-black shadow-black/10'}
                ${isContact ? 'border-brand-primary' : ''}
              `}
            >
              <div className="text-brand-primary">{item.icon}</div>
              
              {isContact && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  className="text-xs font-black uppercase tracking-widest overflow-hidden whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};