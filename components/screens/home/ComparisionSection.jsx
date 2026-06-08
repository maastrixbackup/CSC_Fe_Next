"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  fadeIn,
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";
import { pushDataLayer } from "@/utils/analytics";

const comparisonRows = [
  {
    category: "Structure",
    points: [
      "Document Storage",
      "Standardised claim templates",
      "Workflow Structure",
    ],
  },
  {
    category: "Governance",
    points: [
      "Governance Frameworks",
      "Governance Visibility",
      "Documentation Governance Focus",
    ],
  },
  {
    category: "Continuity",
    points: [
      "Documentation Visibility",
      "Workflow Accountability",
      "Continuity Alignment",
    ],
  },
  {
    category: "Readiness",
    points: [
      "Readiness Scoring",
      "LMS Training Integration",
      "Audit Readiness Focus",
    ],
  },
];

export default function ComparisionSection() {
  const router = useRouter();

  const handleScroll = () => {
    pushDataLayer({
      event: "cta_click",
      cta_name: "View Full Comparison",
    });

    router.push("/why-claimscope");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="bg-white px-4 py-10 md:px-6 md:py-14"
    >
      <motion.div
        variants={fadeIn}
        className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_55%,#fff7ed_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Comparison Preview
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Competitive Comparison Preview
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Compare documentation structure, governance, continuity, and
              readiness between conventional approaches and ClaimScope™.
            </p>

            <button
              type="button"
              onClick={handleScroll}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-800 hover:shadow-xl active:scale-[0.98] md:text-base"
            >
              View Full Comparison
            </button>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2"
          >
            {comparisonRows.map((item) => (
              <motion.div
                key={item.category}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 22px 45px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 hover:border-blue-200"
              >
                <div className="px-5 py-3 transition-colors duration-300 group-hover:bg-blue-50/70">
                  <h3 className="font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-900">
                    {item.category}
                  </h3>
                </div>

                <ul className="space-y-2 p-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900 transition-transform duration-300 group-hover:scale-125" />
                      <span className="text-sm leading-snug text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
