"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookCheck,
  CheckCircle2,
  Compass,
  FileSearch,
  Link2,
  RefreshCw,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

import {
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";
import ContinuityFrameworkDiagram from "../../../public/assets/continuoty.png";
import ExecutionGapDiagram from "../../../public/assets/exeO.png";

const frameworkSections = [
  {
    title: "Defined Scope",
    description:
      "Establish documentation requirements, accountability boundaries, decision authorities, and recordkeeping expectations before operational execution begins.",
    icon: Compass,
  },
  {
    title: "Assumption Validation",
    description:
      "Validate assumptions against operational conditions, available documentation, workflow dependencies, and organizational realities before implementation.",
    icon: CheckCircle2,
  },
  {
    title: "Execution Alignment",
    description:
      "Align documentation requirements with workflow execution, accountability structures, operational responsibilities, and project deliverables.",
    icon: Link2,
  },
  {
    title: "Continuous Revalidation",
    description:
      "Periodically revalidate documentation, assumptions, and workflow alignment to maintain continuity, governance visibility, and operational accuracy.",
    icon: RefreshCw,
  },
];

const outcomeSections = [
  {
    title: "Governance Visibility",
    description:
      "Maintain visibility into documentation status, workflow alignment, accountability assignments, and operational progress.",
    icon: ShieldCheck,
  },
  {
    title: "Accountability Tracking",
    description:
      "Support traceable ownership of documentation responsibilities, workflow actions, and operational decisions.",
    icon: BookCheck,
  },
  {
    title: "Audit Readiness",
    description:
      "Promote documentation consistency, record accessibility, and governance transparency during audits, inspections, and internal reviews.",
    icon: FileSearch,
  },
  {
    title: "Knowledge Retention",
    description:
      "Preserve institutional knowledge across personnel transitions, operational changes, and project lifecycles.",
    icon: ScrollText,
  },
];

export default function OperationalContinuityFramework() {
  const router = useRouter();

  const handleAssessmentRequest = () => {
    router.push("/schedule");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-r from-[#0a0f2e] to-[#1a237e] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl py-10 text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            Operational Continuity Requires Documentation Alignment Throughout
            Execution
          </h1>
          <p className="mb-4 text-xl text-gray-200 md:text-2xl">
            The ClaimScope™ Operational Continuity Framework establishes
            governance controls that help organizations maintain documentation
            integrity from initial scope definition through execution,
            operational change, and ongoing revalidation.
          </p>
          <p className="text-sm italic text-gray-300">
            Supporting documentation governance, operational accountability,
            continuity alignment, and audit-ready record management.
          </p>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {frameworkSections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group rounded-3xl border border-blue-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {section.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-7xl">
              <Image
                src={ContinuityFrameworkDiagram}
                alt="Continuity Framework Diagram"
                className="h-auto w-full rounded-2xl border border-gray-200 shadow-md"
                priority
              />
              <p className="mt-8 text-center text-base leading-8 text-slate-600">
                Operational continuity is achieved when documentation remains
                aligned with execution, validated against changing conditions,
                and revalidated throughout the operational lifecycle.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-7xl">
              <Image
                src={ExecutionGapDiagram}
                alt="Execution Gap Diagram"
                className="h-auto w-full max-w-7xl rounded-2xl border border-gray-200 shadow-md"
              />
            </div>
          </div>

          <div className="mt-16 bg-[linear-gradient(180deg,rgba(239,246,255,0.92)_0%,rgba(255,255,255,1)_100%)] px-6 py-10 shadow-sm md:px-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Operational Continuity Outcomes
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Operational Continuity Outcomes
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600">
                Organizations that maintain continuity between documentation,
                workflow execution, and governance oversight are better
                positioned to preserve accountability, maintain visibility, and
                support long-term operational consistency.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {outcomeSections.map((section) => {
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
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleAssessmentRequest}
              className="inline-flex items-center gap-3 bg-blue-900 px-10 py-5 text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-200 hover:bg-blue-800 hover:shadow-xl active:scale-[0.97] active:bg-blue-950 md:text-lg"
            >
              Request Operational Continuity Assessment
            </button>
          </div>
        </div>
      </motion.section>

      <footer className="px-4 pb-14 md:px-6">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900">
          ClaimScope™ provides advisory-only documentation governance,
          operational continuity consulting, and readiness support.
          ClaimScope™ does not provide claim negotiation, claim
          representation, insurance adjusting services, legal services,
          regulatory representation, application submission services, or
          third-party communications.
        </div>
      </footer>
    </div>
  );
}
