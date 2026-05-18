"use client";

import { AlignLeft, CheckCircle, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

export default function DocumentationGovernanceOutcomes() {
  const router = useRouter();

  const outcomes = [
    {
      icon: <AlignLeft className="h-8 w-8 text-blue-600" />,
      title: "Operational clarity",
      description:
        "Establishes clear, structured documentation across all projects, reducing ambiguity and improving internal visibility into scope, status, and execution.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Consistent record alignment",
      description:
        "Maintains consistency between documentation, tracking, and field execution, reducing discrepancies and minimizing internal misalignment.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Documentation readiness",
      description:
        "Ensures documentation is structured, organized, and complete, supporting internal review, verification, and workflow efficiency.",
    },
  ];

  return (
    <motion.section
      className="mt-10 mb-8 w-full bg-white py-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-4">
        <motion.div
          className="mx-auto mb-8 max-w-7xl text-center"
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a237e] md:text-4xl">
            Operational Outcomes
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {outcomes.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-xl border-4 border-blue-600 bg-slate-50 p-6 transition-shadow duration-300 hover:shadow-lg"
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

              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-14 text-center" variants={fadeUp}>
          <motion.button
            type="button"
            onClick={() => {
              router.push("/schedule");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#1a237e] px-12 py-4 font-medium text-white transition-colors duration-300 hover:bg-[#0d47a1] md:py-6"
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
