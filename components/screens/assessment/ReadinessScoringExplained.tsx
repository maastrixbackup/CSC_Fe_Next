"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle } from "lucide-react";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

const methodologySections = [
  {
    title: "Documentation Integrity",
    description:
      "Measures documentation structure, completeness, traceability, and organizational reliability.",
  },
  {
    title: "Governance Maturity",
    description:
      "Measures governance controls, accountability structures, ownership assignment, and oversight visibility.",
  },
  {
    title: "Workflow Accountability",
    description:
      "Measures workflow discipline, procedural consistency, documentation execution, and operational alignment.",
  },
  {
    title: "Knowledge Transfer Readiness",
    description:
      "Measures documentation accessibility, training support, organizational knowledge retention, and onboarding capability.",
  },
  {
    title: "Operational Continuity Alignment",
    description:
      "Measures alignment between documentation systems and real-world operational execution.",
  },
  {
    title: "Audit & Continuity Preparedness",
    description:
      "Measures documentation resilience, traceability, audit readiness, and long-term continuity capability.",
  },
];

const readinessCategories = [
  {
    label: "Governance Deficient",
    range: "0-39",
    description:
      "Significant documentation risks, accountability gaps, workflow inconsistency, and readiness vulnerabilities identified.",
    tone: "bg-red-50 border-red-200 text-red-700",
  },
  {
    label: "Governance Emerging",
    range: "40-59",
    description:
      "Foundational controls exist but require additional governance structure, visibility, and standardization.",
    tone: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    label: "Governance Established",
    range: "60-79",
    description:
      "Documented processes, accountability controls, and readiness structures are functioning with moderate maturity.",
    tone: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    label: "Governance Optimized",
    range: "80-100",
    description:
      "Strong governance visibility, operational continuity alignment, documentation maturity, and audit preparedness.",
    tone: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
];

const healthIndicators = [
  "Documentation Integrity",
  "Governance Visibility",
  "Workflow Accountability",
  "Documentation Traceability",
  "Operational Continuity",
  "Audit Preparedness",
];

export default function GovernanceReadinessIndicatorsExplained() {
  const router = useRouter();

  const handleBaseline = () => {
    router.push("/assessment");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-gradient-to-r from-[#0a0f2e] to-[#1a237e] px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl py-10 text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Documentation Readiness Index™ Methodology
          </h1>
          <p className="mx-auto mt-6 max-w-7xl text-lg leading-9 text-gray-200 md:text-2xl">
            The Documentation Readiness Index™ evaluates organizational
            readiness through governance maturity, documentation accountability,
            workflow consistency, operational continuity alignment, and audit
            preparedness indicators.
            <br />
            <br />
            The framework provides executive visibility into documentation
            capability, governance strength, and organizational readiness.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="px-4 py-14 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-2xl">
              Documentation Readiness Index™ Categories
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {methodologySections.map((section) => (
              <motion.div
                key={section.title}
                variants={scaleIn}
                className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-6 py-10 md:px-10">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Governance Health Indicators™
              </span>
              <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-700">
                The Documentation Readiness Index™ evaluates organizational
                documentation capability through measurable governance
                indicators. Higher scores indicate stronger governance
                maturity, operational consistency, audit visibility, and
                continuity readiness.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {healthIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-slate-700">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-[#1E2E66] px-6 py-10 text-white md:px-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                Executive Readiness Visibility
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                The Documentation Readiness Index™ is designed to provide
                leadership visibility into documentation maturity, governance
                capability, operational consistency, and organizational
                readiness.
                <br />
                The framework supports continuous improvement planning rather
                than one-time evaluation.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Documentation Readiness",
                "Governance Maturity",
                "Operational Continuity",
                "Audit Preparedness",
              ].map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-lg font-semibold">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 py-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Documentation Readiness Index™ Score Categories
              </p>
            </div>
            <div className="mt-8 grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-4">
              {readinessCategories.map((category) => (
                <div
                  key={category.label}
                  className={`rounded-3xl border px-5 py-6 ${category.tone}`}
                >
                  <p className="text-2xl font-bold">{category.label}</p>
                  <p className="mt-1 text-md font-bold text-slate-500">
                    {category.range}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 px-4 py-4 text-center bg-amber-50">
              <p className="text-xs font-semibold uppercase text-amber-800">
                IMPORTANT NOTICE
              </p>
              <p className="mt-1 text-xs text-amber-700">
                The Documentation Readiness Index™ is an organizational
                governance assessment framework. Scores do not represent legal
                compliance determinations, regulatory certifications, insurance
                eligibility, risk ratings, or audit approvals. Results are
                intended solely to support documentation governance
                improvement, operational readiness planning, and organizational
                continuity initiatives.
              </p>
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={handleBaseline}
                className="inline-flex items-center justify-center rounded bg-blue-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Establish Readiness Baseline
              </button>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
            <div className="mx-auto max-w-7xl text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Why the Documentation Readiness Index™ Matters
              </h3>
              <div className="mt-6 space-y-4 text-slate-700">
                <p>
                  Most organizations measure outcomes. Few organizations
                  measure documentation capability.
                </p>
                <p>
                  The Documentation Readiness Index™ evaluates the
                  governance structures, accountability systems, documentation
                  controls, workflow discipline, and continuity mechanisms that
                  influence operational performance.
                </p>
                <p className="font-medium text-blue-800">
                  The objective is not simply to identify documentation
                  deficiencies. The objective is to establish measurable
                  governance visibility and readiness maturity across the
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="border-t border-zinc-100 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[10px] uppercase tracking-wider text-zinc-400">
            ClaimScope Consulting, LLC is an Alabama-based documentation
            governance and operational readiness consulting firm.
            <br />
            The Documentation Readiness Index™, Governance Health
            Indicators™, Operational Continuity Framework(TM), and
            associated assessment methodologies are designed to evaluate
            organizational documentation maturity, governance visibility,
            accountability structures, and readiness capability.
            <br />
            ClaimScope(TM) does not provide claim negotiation, insurance
            adjusting services, legal advice, regulatory representation,
            application submission services, coverage determinations, or
            third-party communications.
          </p>
        </div>
      </section>
    </div>
  );
}
