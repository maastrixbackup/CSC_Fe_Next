"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

const steps = [
  {
    number: 1,
    title: "Documentation Assessment",
    description:
      "Initial evaluation of current documentation structure and readiness.",
  },
  {
    number: 2,
    title: "Governance Framework Design",
    description: "Creating structured documentation governance systems.",
  },
  {
    number: 3,
    title: "Governance Advisory",
    description: "Implementation guidance and oversight support.",
  },
  {
    number: 4,
    title: "Ongoing Governance Advisory",
    description: "Continuous refinement and long-term advisory support.",
  },
];

export default function Engagement() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl sm:mb-6">
            ClaimScope<span className="align-super text-sm">TM</span> Engagement
            Path
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            Our structured advisory model helps organizations move from initial
            documentation assessment to long-term documentation governance
            support.
          </p>
        </motion.div>

        <div className="block lg:hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            {steps.map((step, index) => (
              <div key={step.number} className="contents">
                <motion.div
                  variants={scaleIn}
                  className="flex h-32 w-80 max-w-full flex-col items-center justify-center rounded-lg bg-[#1a237e] p-4 text-center text-white shadow-lg"
                >
                  <div className="mb-2 text-lg font-bold">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-sm leading-tight text-blue-100 opacity-90">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 ? (
                  <div className="my-2 text-gray-500">
                    <ArrowDown className="h-8 w-8" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 xl:gap-4"
          >
            {steps.map((step, index) => (
              <div key={step.number} className="contents">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex h-28 w-64 flex-col items-center justify-center rounded-lg bg-[#1a237e] p-4 text-center text-white shadow-lg transition-all duration-300 hover:bg-[#0d47a1] xl:h-32 xl:w-72"
                >
                  <div className="mb-2 text-sm font-bold xl:text-base">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-xs leading-tight text-blue-100 opacity-90 xl:text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 ? (
                  <motion.div
                    variants={fadeUp}
                    className="flex-shrink-0 px-2 text-gray-500"
                  >
                    <ArrowRight
                      className="h-8 w-8 xl:h-10 xl:w-10"
                      aria-hidden="true"
                    />
                  </motion.div>
                ) : null}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
