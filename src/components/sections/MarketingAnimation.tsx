import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Share2, MousePointer2, BarChart3, Target } from "lucide-react";

export const MarketingAnimation = () => {
  const [radius, setRadius] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      // Mobile par gap waziyaah karne ke liye radius 125 set kiya hai
      if (window.innerWidth < 640) setRadius(125);      
      else if (window.innerWidth < 1024) setRadius(180); 
      else setRadius(240);                               
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const icons = [
    { Icon: TrendingUp, darkColor: "text-blue-400", lightColor: "text-blue-500", label: "Growth" },
    { Icon: Users, darkColor: "text-orange-400", lightColor: "text-orange-500", label: "Audience" },
    { Icon: Share2, darkColor: "text-pink-400", lightColor: "text-pink-500", label: "Social" },
    { Icon: MousePointer2, darkColor: "text-purple-400", lightColor: "text-purple-500", label: "Clicks" },
    { Icon: BarChart3, darkColor: "text-green-400", lightColor: "text-green-500", label: "Analytics" },
    { Icon: Target, darkColor: "text-red-400", lightColor: "text-red-500", label: "Targeting" },
  ];

  const ROTATION_SPEED = 30;

  return (
    <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center overflow-visible py-0 my-[-10px] sm:my-0">
      
      {/* Central Hub - Mobile par size chota kiya hai gap dikhane ke liye */}
      <div className="relative z-20">
        <motion.div
          animate={{ 
            scale: [0.98, 1.02, 0.98],
            boxShadow: ["0 0 20px rgba(var(--brand-primary-rgb), 0.1)", "0 0 40px rgba(var(--brand-primary-rgb), 0.2)", "0 0 20px rgba(var(--brand-primary-rgb), 0.1)"] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border border-brand-primary/20 flex items-center justify-center bg-[#050505] shadow-2xl"
        >
          <div className="w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full bg-brand-primary/5 flex items-center justify-center backdrop-blur-xl border border-white/5">
            <span className="text-brand-primary font-black text-[6px] sm:text-[9px] lg:text-xs tracking-[0.2em] uppercase italic">System</span>
          </div>
        </motion.div>
      </div>

      {/* Orbiting Icons */}
      {icons.map((item, i) => {
        const startRotation = (360 / icons.length) * i;

        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            initial={{ rotate: startRotation }}
            animate={{ rotate: startRotation + 360 }}
            transition={{ duration: ROTATION_SPEED, repeat: Infinity, ease: "linear" }}
            style={{ width: "100%", height: "100%", transformOrigin: "center" }}
          >
            <motion.div
              animate={{ rotate: -(startRotation + 360) }}
              initial={{ rotate: -startRotation }}
              transition={{ duration: ROTATION_SPEED, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
              className="group relative cursor-pointer"
              style={{ 
                marginTop: `-${radius}px`, 
                transition: "margin 0.5s cubic-bezier(0.16, 1, 0.3, 1)" 
              }}
            >
              <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full bg-current ${item.darkColor.replace('text-', 'bg-')}`} />

              {/* Mobile padding and min-width adjusted */}
              <div className="relative bg-[#0A0A0A] p-1.5 sm:p-3 lg:p-5 rounded-lg sm:rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-1 min-w-[50px] sm:min-w-[90px] lg:min-w-[120px]">
                <item.Icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-8 lg:h-8 ${item.darkColor}`} />
                <span className="text-[4px] sm:text-[8px] lg:text-[10px] font-bold uppercase tracking-tighter sm:tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Background Subtle Ring */}
      <div 
        className="absolute border border-white/[0.03] rounded-full pointer-events-none"
        style={{ width: radius * 2, height: radius * 2 }}
      />
    </div>
  );
};