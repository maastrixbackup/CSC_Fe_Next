import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/components/animations/motionVariants";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    label: "Contractors",
    title: "Contractors",
    description: "Multi-project operations requiring documentation governance and workflow continuity.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Real Estate / REO",
    title: "Real Estate / REO",
    description: "Portfolio and property environments needing structured documentation readiness and transaction alignment.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Municipal / Infrastructure",
    title: "Municipal / Infrastructure",
    description: "Organizations requiring disaster documentation readiness and FEMA preparedness continuity.",
  },
];

export default function WhoWeServe() {
  return (
    <motion.section
      style={{
        background: "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
      }}
      className="py-8 md:py-12 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-xs font-semibold tracking-widest uppercase">
            Built For
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-14 leading-tight"
          variants={fadeUp}
        >
          Who This Is{" "}
          <span className="text-blue-500">Designed For</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white/5 border-4 border-blue-400/30 rounded-2xl px-6 py-10 hover:bg-white/10 hover:border-blue-400/60 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <div className="mb-5 w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-400/25 text-blue-300 flex items-center justify-center group-hover:bg-blue-500/25 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Short description */}
              <p className="text-sm text-blue-100/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
