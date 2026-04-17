import React from "react";
import { ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left: Copyright */}
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} Tracks Communications.
          </p>

          {/* Right: Portfolio Link */}
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              Developed by
            </span>
            <a 
              href="https://alihassan96.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-colors"
            >
              <span className="text-white/50 text-[10px] font-black uppercase tracking-widest group-hover:text-brand-primary transition-colors">
                Ali Hassan
              </span>
              <ExternalLink size={10} className="text-white/20 group-hover:text-brand-primary transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};