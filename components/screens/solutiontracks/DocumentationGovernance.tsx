"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Activity,
  Eye,
  FileStack,
  FolderKanban,
  Network,
  ShieldCheck,
  Users,
  Waypoints,
} from "lucide-react";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

const sections = [
  {
    title: "Documentation Classification",
    description:
      "Establish standardized documentation categories, retention expectations, ownership assignments, and recordkeeping structures across operational environments.",
    icon: FolderKanban,
  },
  {
    title: "Ownership",
    description:
      "Define accountability for documentation creation, maintenance, approval authority, and ongoing governance oversight.",
    icon: Users,
  },
  {
    title: "Workflow Accountability",
    description:
      "Connect documentation requirements to operational responsibilities, workflow actions, and execution expectations.",
    icon: Network,
  },
  {
    title: "Governance Visibility",
    description:
      "Provide leadership and stakeholders with visibility into documentation status, compliance alignment, and governance performance.",
    icon: Eye,
  },
  {
    title: "Audit Logging",
    description:
      "Maintain traceable records of documentation activity, workflow decisions, governance reviews, and operational changes.",
    icon: ShieldCheck,
  },
  {
    title: "Operational Standardization",
    description:
      "Support consistency across teams, locations, projects, and portfolios through standardized documentation practices.",
    icon: Waypoints,
  },
];

const outcomes = [
  {
    title: "Improved Accountability",
    description:
      "Clearly defined ownership and documentation responsibilities reduce ambiguity and improve governance discipline.",
    icon: Users,
  },
  {
    title: "Governance Visibility",
    description:
      "Leadership gains improved visibility into documentation status, workflow alignment, and organizational readiness.",
    icon: Eye,
  },
  {
    title: "Audit Readiness",
    description:
      "Structured documentation improves record accessibility and supports internal reviews, audits, and inspections.",
    icon: Activity,
  },
  {
    title: "Knowledge Retention",
    description:
      "Documentation frameworks preserve institutional knowledge during staffing changes and operational transitions.",
    icon: FileStack,
  },
];

export default function DocumentationGovernance() {
  const router = useRouter();

  const handleGovernanceReview = () => {
    router.push("/intake/governance-framework-advisory");
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
            Documentation Governance Framework
          </h1>
          <p className="mx-auto mt-6 max-w-7xl text-lg leading-9 text-gray-200 md:text-2xl">
            A structured documentation governance framework helps organizations
            establish accountability, improve operational visibility,
            strengthen documentation controls, and support continuity across
            projects, portfolios, and operational environments.
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
            <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
              Governance Methodology
            </h2>
            <p className="mx-auto mt-4 max-w-7xl text-base leading-8 text-slate-600 md:text-lg">
              These governance controls help organizations establish
              documentation accountability, governance visibility, operational
              consistency, and audit-ready record management throughout the
              documentation lifecycle.
            </p>
          </div>

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

          <div className="mt-16 bg-[linear-gradient(180deg,rgba(239,246,255,0.92)_0%,rgba(255,255,255,1)_100%)] px-6 py-10 shadow-sm md:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                Documentation Governance Outcomes
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600">
                Organizations with structured documentation governance
                frameworks are better positioned to support operational
                continuity, maintain accountability, and preserve institutional
                knowledge.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {outcomes.map((section) => {
                const Icon = section.icon;

                return (
                  <motion.div
                    key={section.title}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group rounded-3xl border border-blue-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(239,246,255,0.7)_100%)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.14)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(30,64,175,0.24)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="pt-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-900">
                        {section.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {section.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-14 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Request Governance Review
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Evaluate Documentation Governance Maturity and Operational
              Readiness
            </h3>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
              Assess documentation accountability, governance visibility,
              operational consistency, and continuity alignment across your
              organization.
            </p>
            <button
              type="button"
              onClick={handleGovernanceReview}
              className="mt-6 inline-flex items-center justify-center rounded bg-blue-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Request Governance Review
            </button>
          </div>
        </div>
      </motion.section>

      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:px-10 md:py-10">
          <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Compliance Statement
          </p>
          <h2 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
            Governance-Focused Advisory Services
          </h2>
          <p className="mt-4 max-w-7xl text-base leading-8 text-slate-600 md:text-lg">
            ClaimScope™ provides advisory-only documentation governance,
            operational continuity consulting, readiness assessments, and
            documentation framework development. Services are focused on
            improving organizational structure, accountability, and
            documentation readiness.
          </p>
        </div>
      </section>

      <footer className="px-4 pb-14 md:px-6">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900">
          <p className="text-center">
            ClaimScope™ operates through ClaimScope Consulting, LLC, an
            Alabama-based documentation governance and operational readiness
            consulting firm. Services are advisory-only and focused on
            documentation governance, operational continuity, organizational
            readiness, and framework development.
          </p>
          <p className="mt-4 text-center">
            ClaimScope™ does not provide claim negotiation, claim
            representation, insurance adjusting services, legal services,
            regulatory representation, application submission services,
            coverage determinations, or third-party communications.
          </p>
          <p className="mt-6 text-center font-medium">
            Governance creates visibility. Visibility supports accountability.
            Accountability supports continuity.
          </p>
        </div>
      </footer>
    </div>
  );
}
