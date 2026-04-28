"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/components/animations/motionVariants"; // ✅ adjust path

export default function WhoWeServe() {
  const services = [
    {
      title: "Contractors",
      description:
        "Documentation governance advisory for contractor workflow clarity and operational documentation alignment.",
    },
    {
      title: "Real Estate & REO Professionals",
      description:
        "Documentation readiness advisory for property documentation organization and transaction documentation structure.",
    },
    {
      title: "Municipal & Infrastructure Organizations",
      description:
        "Disaster documentation readiness advisory and FEMA documentation preparedness education.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-8 md:py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-16"
          variants={fadeUp}
        >
          WHO WE SERVE
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 border-4 border-blue-600 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}