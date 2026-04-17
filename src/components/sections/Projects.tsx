import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Instagram, Eye, X, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../constants/data";
import { Section } from "../ui/Section";
import { Testimonials } from "../../components/sections/Testimonials";
import { useTheme } from "../../hooks/useTheme";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { theme } = useTheme();

  const filteredProjects = PROJECTS.filter(p => p.category === activeTab);

  return (
    <Section id="projects" className="py-12 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center">
          {/* Sub-heading with Lines (Matching Experience & Services) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-brand-primary">Portfolio</h2>
            <span className="w-8 h-[1px] bg-brand-primary"></span>
          </motion.div>

          
         
          {/* Tabs Switcher */}
          <div className={`flex justify-center gap-2 p-1.5 rounded-full border backdrop-blur-sm ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
            {["Development", "Marketing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-10 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group ${activeTab === tab
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "bg-transparent text-[var(--text)]/40 hover:text-[var(--text)]"
                  }`}
              >
                <span className="relative z-10">{tab}</span>

                {/* Subtle hover effect for inactive tabs */}
                {activeTab !== tab && (
                  <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col bg-[#080808] rounded-[2rem] border border-white/5 hover:border-brand-primary/20 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* 1. Thumbnail: Only visible in Development Tab */}
                {activeTab === "Development" && project.thumbnail && (
                  <div className="p-3 pb-0">
                    <div className="relative aspect-[16/10] w-full rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-top pt-4 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm cursor-zoom-in" onClick={() => setSelectedImage(project.thumbnail!)}>
                        <div className="bg-brand-primary text-black p-3 rounded-full shadow-2xl">
                          <Eye size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Content Area */}
                <div className={`p-6 flex flex-col h-full ${activeTab === "Marketing" ? "justify-center min-h-[280px]" : ""}`}>
                  <div className="mb-4">
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-primary/60 mb-2 block">
                      {activeTab} Synergy
                    </span>
                    <h3 className={`font-black text-white italic uppercase tracking-tighter leading-none mb-3 ${activeTab === "Marketing" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 mb-6">
                    {activeTab === "Development" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[9px] hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all group/btn"
                      >
                        Visit Website <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-black uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/10"
                      >
                        <Instagram size={16} /> View on Instagram
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[8px] font-bold uppercase text-white/20 px-2 py-1 bg-white/[0.01] rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effects (Only for Marketing to fill the space) */}
                {activeTab === "Marketing" && (
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors">
              <X size={48} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-xl border border-white/10 shadow-2xl object-contain bg-[#0A0A0A]"
            />
          </motion.div>
        )}
        <Testimonials />
      </AnimatePresence>
    </Section>
  );
};