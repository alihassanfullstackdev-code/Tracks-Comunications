import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden ${className}`}>
    {children}
  </section>
);
