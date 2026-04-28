"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "../../animations/motionVariants";

export default function GovernanceModel() {
  const items = [
    "Documentation Structure",
    "Record Alignment",
    "Operational Transparency",
    "Governance Continuity",
  ];

  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center"
        variants={fadeUp}
      >
        ClaimScope Documentation Governance Model
        <span className="text-sm align-top ml-1">™</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mt-12"
        variants={staggerContainer}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-72 h-24 flex items-center justify-center border-4 border-blue-600 rounded-md bg-slate-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-gray-700 font-medium text-center px-4">
              {item}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 mb-8 max-w-7xl mx-auto"
        variants={fadeUp}
      >
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 border-l-4 border-r-4 border-blue-600 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3 text-center">
            Compliance Statement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            ClaimScope Consulting, LLC operates strictly as a consulting-only
            advisory firm. All services are advisory and educational in nature.
            ClaimScope Consulting does not provide claim negotiation,
            representation, advocacy, legal advice, or third-party
            communications on behalf of clients.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}