import React from "react";
import {
  Code2, Code, BarChart3, Box, Cpu, Share2, Layers, Globe, Palette,
  PenTool, TrendingUp, Users, MousePointer2, Target,
  Layout, MessageCircle, Linkedin, Instagram, Phone
} from "lucide-react";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const marketingIcons = [
  { Icon: TrendingUp, darkColor: "text-blue-400", lightColor: "text-blue-600", label: "Growth" },
  { Icon: Users, darkColor: "text-cyan-400", lightColor: "text-orange-500", label: "Audience" },
  { Icon: Share2, darkColor: "text-indigo-400", lightColor: "text-pink-600", label: "Social" },
  { Icon: MousePointer2, darkColor: "text-sky-400", lightColor: "text-purple-600", label: "Clicks" },
  { Icon: BarChart3, darkColor: "text-blue-500", lightColor: "text-green-600", label: "Analytics" },
  { Icon: Target, darkColor: "text-cyan-500", lightColor: "text-red-500", label: "Targeting" },
];
export const pillars = [
  {
    title: "Web Dev",
    desc: "Laravel & React Masters",
    icon: <Code className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />,
    color: "shadow-brand-primary/20"
  },
  {
    title: "Social Media",
    desc: "Brand Growth Experts",
    icon: <Share2 className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
    color: "shadow-pink-500/20"
  },
  {
    title: "Meta Ads",
    desc: "ROI Focused Campaigns",
    icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />,
    color: "shadow-emerald-400/20"
  },
  {
    title: "Designing",
    desc: "Visual Storytelling",
    icon: <Palette className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />,
    color: "shadow-orange-400/20"
  },
  {
    title: "Blogs",
    desc: "SEO Content Writing",
    icon: <PenTool className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />,
    color: "shadow-blue-400/20"
  },
  {
    title: "Web Creation",
    desc: "UI/UX Architecture",
    icon: <Layout className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />,
    color: "shadow-purple-400/20"
  }
];

// export const SERVICES = [
//   {
//     title: "Custom Web Apps",
//     description: "High-performance React applications with scalable architectures and seamless UX.",
//     icon: <Code2 className="w-8 h-8 text-blue-400" />,
//     tag: "Frontend"
//   },
//   {
//     title: "Backend Systems",
//     description: "Robust Node.js and Python microservices designed for high availability and security.",
//     icon: <Cpu className="w-8 h-8 text-cyan-400" />,
//     tag: "Infrastructure"
//   },
//   {
//     title: "API Ecosystems",
//     description: "Designing and integrating complex REST and GraphQL APIs for modern platforms.",
//     icon: <Layers className="w-8 h-8 text-indigo-400" />,
//     tag: "Integration"
//   },
//   {
//     title: "Cloud Architecture",
//     description: "Optimized AWS/GCP deployments with automated CI/CD and container orchestration.",
//     icon: <Globe className="w-8 h-8 text-sky-400" />,
//     tag: "DevOps"
//   }
// ];

// export const TECH_STACK = [
//   "Laravel", "React.js", "Three.js", "Meta Ads", "Google Ads", "Tailwind CSS", "MySQL", "Framer Motion", "UI/UX Design", "SEO"
// ];

export const AGENCY_STATS = [
  { label: "Years of Excellence", value: "2+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Global Clients", value: "50+" },
  { label: "Ad Spend Managed", value: "$500k+" }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Director, Bloom Retail",
    content: "Tracks built a high-conversion storefront that increased our sales by 40%. Their Web Development and Creation expertise is unmatched."
  },
  {
    name: "David Chen",
    role: "CEO, Nexa Digital",
    content: "Our Meta Ads ROI tripled in just 6 weeks thanks to Tracks. They are experts at data-driven marketing and scaling businesses."
  },
  {
    name: "Maria Torres",
    role: "Founder, TechFlow",
    content: "The Graphic Designing team at Tracks redefined our brand identity. Professional, sleek, and exactly what we envisioned for our UI."
  },
  {
    name: "James Wilson",
    role: "Owner, Prime Logistics",
    content: "Their Blogs and Content Writing kept our audience engaged and improved our SEO rankings significantly. Highly professional service!"
  },
  {
    name: "Elena Rodriguez",
    role: "Manager, Aura Social",
    content: "Our Social Media Marketing transformed under Tracks. Consistent growth, premium aesthetics, and perfect community management."
  }
];

export const socialLinks = [
  { Icon: Linkedin, value: "Tracks Communication", href: "https://www.linkedin.com/in/tracks-communications-24299633b", label: "LinkedIn", color: "hover:text-blue-400" },
  { Icon: Instagram, value: "Tracks Communication", href: "https://www.instagram.com/tracks_communications/", label: "Instagram", color: "hover:text-pink-500" },
  {
    Icon: Phone,
    label: "WhatsApp / Call",
    value: "+1917 775 3013",
    href: "https://wa.me/+19177753013",
    // href: "tel:4242098374",
    color: "hover:text-green-500"
  }];


export const PROJECTS = [
  // WEB & ARCHITECTURE (DEVELOPMENT TAB)
  {
    title: "Empire Link Limo",
    category: "Development",
    thumbnail: "/images/projects/empire-link.png",
    description: "Premium chauffeur booking ecosystem. We engineered a seamless reservation flow with real-time pricing and fleet management for luxury transportation.",
    link: "https://www.empirelinklimo.com",
    tags: ["UX/UI", "Booking System", "Performance"]
  },
  {
    title: "FR Dispatching",
    category: "Development",
    thumbnail: "/images/projects/FR-Dispatcher.png",
    description: "A logistics powerhouse. Built to streamline freight operations with a high-conversion architecture focused on driver recruitment and dispatch efficiency.",
    link: "https://www.frdispatching.com",
    tags: ["Logistics", "Lead Gen", "Web Architecture"]
  },
  {
    title: "Sal's Lux Transport",
    category: "Development",
    thumbnail: "/images/projects/Sals-Lux.png",
    description: "Digital presence for high-end transport. Designed with a focus on 'Visual Luxury' to convert high-ticket clients through intuitive mobile booking.",
    link: "https://www.salsluxtransportation.com",
    tags: ["React", "Luxury Brand", "Mobile-First"]
  },
  {
    title: "Black Urban Limo",
    category: "Development",
    thumbnail: "/images/projects/Black-Urban.png",
    description: "Urban mobility solution. A robust platform designed for city-wide chauffeur services, featuring rapid load times and SEO-optimized local landing pages.",
    link: "https://www.blackurbanlimo.com",
    tags: ["SEO", "Web Creation", "Optimization"]
  },

  // MARKETING & GROWTH (MARKETING TAB)
  {
    title: "Munchees Cafe",
    category: "Marketing",
    description: "Aggressive social growth & content strategy. We drive foot traffic and online orders through data-backed Meta Ads and aesthetic food storytelling.",
    link: "https://www.instagram.com/munchees_cafe/",
    webLink: "https://www.muncheescafe.com",
    tags: ["Meta Ads", "Content Strategy", "Growth"]
  },
  {
    title: "Sal's Lux Growth",
    category: "Marketing",
    description: "Managing the digital identity of a premium transport brand. We sync their Instagram storytelling with their booking engine to ensure a frictionless client journey.",
    link: "https://www.instagram.com/salsluxtransportation",
    webLink: "https://www.salsluxtransportation.com",
    tags: ["Social Scaling", "ROI Focused", "Brand Synergy"]
  },
  {
    title: "Empire Marketing",
    category: "Marketing",
    description: "Dominating the luxury car service niche. Our marketing funnel connects high-intent social media followers directly to the reservation system.",
    link: "https://www.instagram.com/empirelinklimo",
    webLink: "https://www.empirelinklimo.com",
    tags: ["Ads Management", "Funnel Building", "Leads"]
  },
  {
    title: "Dream Aesthetics",
    category: "Marketing",
    description: "High-ROI marketing for laser & beauty. Scaling client bookings via targeted local ads and a premium visual grid that builds medical trust.",
    link: "https://www.instagram.com/dreamaesthetics_5tlaser",
    tags: ["Lead Gen", "Healthcare", "Ads"]
  },
  {
    title: "J Ross Transport",
    category: "Marketing",
    description: "Scaling logistics brands. We manage their digital footprint and ad campaigns to ensure a steady stream of B2B contracts and brand authority.",
    link: "https://www.instagram.com/jrosstransportations/",
    webLink: "https://www.jrosstransportation.com",
    tags: ["B2B Marketing", "Brand Scale", "Social"]
  }
];
