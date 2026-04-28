"use client";

import { motion } from "framer-motion";

import { fadeUp } from "../../animations/motionVariants";

const documentTypes = [
  "Contractor Documentation Systems",
  "Real Estate Documentation Organization",
  "Disaster Documentation Readiness",
  "Documentation Governance Framework Design",
];

const StructureDocuments = () => {
  return (
    <section className="mt-12 bg-gradient-to-r from-[#0a0f2e] to-[#1a237e] px-6 py-12 text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl text-center"
      >
        <div className="mx-auto max-w-5xl text-slate-200">
          <h2 className="mb-8 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Structured Documentation Governance for Operational Environments
          </h2>

          <ul className="mx-auto mb-6 grid max-w-4xl grid-cols-1 gap-4 text-left text-slate-200 md:grid-cols-2">
            {documentTypes.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-center">
                <span className="mr-3 text-green-400">&#10003;</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default StructureDocuments;
