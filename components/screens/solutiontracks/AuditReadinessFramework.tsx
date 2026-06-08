"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileCheck2,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";

const sections = [
  {
    title: "Documentation Integrity",
    description:
      "Support accurate, complete, and consistently maintained documentation records throughout the operational lifecycle.",
    icon: FileCheck2,
  },
  {
    title: "Traceability",
    description:
      "Maintain clear visibility into documentation ownership, workflow actions, approvals, revisions, and operational decisions.",
    icon: Waypoints,
  },
  {
    title: "Audit Logging",
    description:
      "Create verifiable records of documentation activity, governance reviews, workflow changes, and accountability actions.",
    icon: ClipboardList,
  },
  {
    title: "Governance Controls",
    description:
      "Establish structured oversight mechanisms that promote documentation consistency, accountability, and operational transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow Visibility",
    description:
      "Provide leadership and stakeholders with visibility into documentation status, workflow progression, and readiness conditions.",
    icon: Eye,
  },
  {
    title: "Operational Accountability",
    description:
      "Support defined ownership, documented responsibilities, and traceable execution across documentation processes.",
    icon: CheckCircle2,
  },
];

const outcomes = [
  {
    title: "Improved Documentation Integrity",
    description:
      "Maintain complete, organized, and accessible documentation records.",
    icon: FileCheck2,
  },
  {
    title: "Governance Visibility",
    description:
      "Support leadership awareness of documentation status and readiness conditions.",
    icon: Eye,
  },
  {
    title: "Reduced Audit Risk",
    description:
      "Improve consistency and preparedness during reviews, inspections, and audits.",
    icon: ShieldCheck,
  },
  {
    title: "Operational Confidence",
    description:
      "Support reliable decision-making through structured documentation governance.",
    icon: Activity,
  },
];

export default function AuditReadinessFramework() {
  const router = useRouter();

  const handleReadinessReview = () => {
    router.push("/intake/documentation-readiness-review");
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
            Audit Readiness Framework
          </h1>
          <p className="mx-auto mt-6 max-w-7xl text-lg leading-9 text-gray-200 md:text-2xl">
            A structured documentation readiness framework focused on
            governance visibility, record integrity, accountability controls,
            and audit-ready documentation environments that support
            operational oversight and organizational confidence.
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
              Audit Preparedness Focus Areas
            </h2>
            <p className="mx-auto mt-4 max-w-5xl text-base leading-8 text-slate-600 md:text-lg">
              These governance controls help organizations maintain
              documentation integrity, accountability visibility, record
              traceability, and operational readiness across audits,
              inspections, reviews, and oversight activities.
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
                    <h3 className="pt-1 text-xl font-bold text-blue-900">
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

          <div className="mt-16 rounded-[32px] bg-[linear-gradient(180deg,rgba(239,246,255,0.92)_0%,rgba(255,255,255,1)_100%)] px-6 py-10 shadow-sm md:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                Audit Readiness Outcomes
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600">
                Organizations that maintain documentation readiness are better
                positioned to support governance visibility, reduce operational
                uncertainty, and improve audit preparedness.
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
              Request Readiness Review
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Assess Documentation Readiness, Governance Visibility, and Audit
              Preparedness
            </h3>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
              Evaluate documentation accountability, governance controls,
              workflow visibility, and readiness conditions across your
              operational environment.
            </p>
            <button
              type="button"
              onClick={handleReadinessReview}
              className="mt-6 inline-flex items-center justify-center rounded bg-blue-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Request Readiness Review
            </button>
          </div>
        </div>
      </motion.section>

      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:px-10 md:py-10">
          <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Compliance Statement
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Readiness Through Governance
          </h2>
          <p className="mt-4 max-w-7xl text-base leading-8 text-slate-600 md:text-lg">
            Audit readiness is not established at the point of review. It is
            created through consistent documentation governance,
            accountability controls, operational visibility, and ongoing
            readiness management.
          </p>
        </div>
      </section>

      <footer className="px-4 pb-14 md:px-6">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900">
          <p className="text-center">
            ClaimScope™ operates through ClaimScope Consulting, LLC, an
            Alabama-based documentation governance and operational readiness
            consulting firm. Services are advisory-only and focused on
            documentation governance, audit readiness, operational continuity,
            organizational preparedness, and framework development.
          </p>
          <p className="mt-4 text-center">
            ClaimScope™ does not provide claim negotiation, claim
            representation, insurance adjusting services, legal services,
            regulatory representation, application submission services,
            coverage determinations, or third-party communications.
          </p>
          <p className="mt-6 text-center font-medium">
            Documentation readiness supports audit confidence. Audit confidence
            strengthens organizational resilience.
          </p>
        </div>
      </footer>
    </div>
  );
}
