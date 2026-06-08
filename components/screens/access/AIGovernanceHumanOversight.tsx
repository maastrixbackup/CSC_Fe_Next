"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookText,
  ClipboardCheck,
  Eye,
  FileClock,
  Fingerprint,
  ScanSearch,
  Users,
} from "lucide-react";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

const sections = [
  {
    title: "Human Review Requirements",
    icon: Eye,
    description:
      "All AI-assisted outputs require human review prior to use. Responsibility for decisions, documentation accuracy, and implementation remains with authorized personnel.",
  },
  {
    title: "Draft Only Outputs",
    icon: FileClock,
    description:
      "AI-generated outputs are provided as draft documentation support only. Outputs require review, validation, and approval before operational use.",
  },
  {
    title: "Explainability",
    icon: ScanSearch,
    description:
      "Documentation recommendations and workflow outputs are designed to remain understandable, reviewable, and traceable throughout the governance process.",
  },
  {
    title: "Audit Logging",
    icon: ClipboardCheck,
    description:
      "System activity, workflow actions, and governance-related events are logged to support accountability, audit readiness, and operational transparency.",
  },
  {
    title: "Role-Based Access Controls",
    icon: Fingerprint,
    description:
      "Access permissions are assigned according to organizational roles to support governance oversight, workflow accountability, and information security.",
  },
  {
    title: "Governance Documentation",
    icon: BookText,
    description:
      "Governance controls, workflows, and accountability structures should be documented and maintained to support continuity and operational consistency.",
  },
  {
    title: "Human Accountability",
    icon: Users,
    description:
      "Human personnel remain accountable for governance decisions, documentation approval, workflow execution, and organizational outcomes.",
  },
  {
    title: "Data Retention & Audit Preservation",
    icon: BadgeCheck,
    description:
      "Documentation records, workflow activity, and governance-related actions should be retained according to organizational policies to support continuity and audit requirements.",
  },
];

export default function AIGovernanceHumanOversight() {
  const router = useRouter();

  const handleViewFramework = () => {
    router.push("/access");
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
            AI Governance & Human Oversight
          </h1>
          <p className="mx-auto mt-6 max-w-7xl text-lg leading-9 text-gray-200 md:text-2xl">
            A responsible AI governance posture requires documented controls,
            human accountability, workflow transparency, and operational
            safeguards throughout the documentation lifecycle.
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
          <motion.div
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.title}
                  variants={scaleIn}
                  className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="pt-1 text-xl font-bold text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {section.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-14 rounded-[28px] border border-blue-200 bg-blue-50 px-6 py-8 md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Compliance Statement
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-800">
              ClaimScope™ AI supports documentation governance, operational
              readiness, and workflow standardization. Human oversight, review,
              and accountability remain required for all outputs and decisions.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleViewFramework}
              className="inline-flex items-center justify-center rounded bg-blue-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              View Governance Framework
            </button>
          </div>
        </div>
      </motion.section>

      <footer className="px-4 pb-14 md:px-6">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900">
          ClaimScope™ Consulting, LLC provides advisory-only documentation
          governance, operational readiness, continuity planning support, and
          documentation readiness consulting. ClaimScope™ does not provide
          claim negotiation, claim representation, insurance adjusting
          services, legal services, regulatory representation, application
          submission services, or third-party communications.
        </div>
      </footer>
    </div>
  );
}
