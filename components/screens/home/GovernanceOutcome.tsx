"use client";

import React from "react";
import { FileText, AlignLeft, CheckCircle, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/components/animations/motionVariants"; // adjust path if needed

export default function DocumentationGovernanceOutcomes() {
  const router = useRouter();

  const outcomes = [
    {
      icon: <AlignLeft className="w-8 h-8 text-blue-600" />,
      title: "Operational Clarity",
      description:
        "Establishes clear, structured documentation across all projects, reducing ambiguity and improving internal visibility into scope, status, and execution.",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Consistent Record Alignment",
      description:
        "Maintains consistency between documentation, tracking, and field execution — reducing discrepancies and minimizing internal misalignment.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Documentation Readiness",
      description:
        "Ensures documentation is structured, organized, and complete — supporting internal review, verification, and workflow efficiency.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Governance Continuity",
      description:
        "Preserves documentation structure and alignment across the full lifecycle of a project — enabling scalability without loss of consistency.",
    },
  ];

  return (
    <motion.section
      className="w-full py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-4">

        {/* Header */}
        <motion.div
          className="text-center max-w-7xl mx-auto mb-14"
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Operational Outcomes of Structured Documentation Governance
          </h2>

          <p className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            When documentation is structured, operations stop guessing.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            When documentation is governed — not just managed — operational clarity replaces uncertainty, and consistency replaces variability.
            ClaimScope™ establishes a structured documentation environment that supports alignment across teams, workflows, and project lifecycles — enabling organizations to operate with greater confidence, control, and continuity.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 border-4 border-blue-600 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
        >
          <motion.button
            onClick={() => {
              router.push("/schedule");
              window.scrollTo(0, 0);
            }}
            className="px-12 py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
}