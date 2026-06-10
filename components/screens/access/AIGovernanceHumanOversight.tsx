"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookText,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileClock,
  FilePenLine,
  Fingerprint,
  ScanSearch,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/motionVariants";
import { pushDataLayer } from "@/utils/analytics";

const governanceControls = [
  {
    title: "Human Oversight",
    icon: Eye,
    description:
      "All AI-assisted outputs require human review prior to use. Responsibility for decisions, documentation accuracy, and implementation remains with authorized personnel.",
  },
  {
    title: "Draft-Only Outputs",
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

const governanceMatters = {
  without: [
    "Inconsistent documentation",
    "Unclear accountability",
    "Workflow confusion",
    "Reduced audit visibility",
    "Increased operational risk",
    "Institutional knowledge loss",
  ],
  with: [
    "Human accountability maintained",
    "Documentation consistency improved",
    "Audit visibility increased",
    "Operational continuity supported",
    "Organizational confidence strengthened",
    "Knowledge preservation enhanced",
  ],
};

const philosophyPrinciples = [
  "Human review remains required",
  "AI outputs remain draft-only",
  "Governance controls remain documented",
  "Organizational accountability remains human-owned",
  "AI supports workflow consistency and documentation readiness",
  "Final decisions remain the responsibility of authorized personnel",
];

const humanLoopSteps = [
  { label: "AI Input", icon: Bot },
  { label: "AI Analysis", icon: BrainCircuit },
  { label: "Draft Output", icon: FilePenLine },
  { label: "Human Review", icon: Eye },
  { label: "Approval", icon: CheckCircle2 },
  { label: "Governance Record", icon: Shield },
  { label: "Audit Trail", icon: ShieldCheck },
];

const phaseThreeFrameworks = [
  "Documentation Governance Framework™ ",
  "Documentation Readiness Index™ ",
  "Documentation Risk Engine™ ",
  "Governance Health Dashboard™ ",
  "Operational Continuity Readiness™ ",
  "Organizational Memory Engine™ ",
];

type OutcomeColumnProps = {
  title: string;
  items: string[];
  accentClasses: string;
  iconBgClasses: string;
};

function OutcomeColumn({
  title,
  items,
  accentClasses,
  iconBgClasses,
}: OutcomeColumnProps) {
  return (
    <div className={`rounded-[28px] border p-6 shadow-sm md:p-8 ${accentClasses}`}>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-7 text-slate-700"
          >
            <span
              className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${iconBgClasses}`}
            >
              &bull;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIGovernanceHumanOversight() {
  const router = useRouter();

  const handleViewGovernanceFramework = () => {
    pushDataLayer({
      event: "cta_click",
      cta_label: "view_governance_framework",
      cta_location: "ai_governance_human_oversight",
      cta_destination: "/access",
    });

    router.push("/access", { scroll: true });
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
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
              ClaimScope™ AI Governance Controls
            </h2>
            <p className="mx-auto mt-4 max-w-5xl text-base leading-8 text-slate-600 md:text-lg">
              This governance framework documents the controls ClaimScope™
              emphasizes to support responsible AI implementation, preserve
              human accountability, and maintain documentation readiness across
              operational environments.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {governanceControls.map((section) => {
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

          <div className="mt-16 rounded-[32px] bg-[linear-gradient(180deg,rgba(239,246,255,0.92)_0%,rgba(255,255,255,1)_100%)] px-6 py-10 shadow-sm md:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                Why AI Governance Matters
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600">
                Governance connects technical controls to operational outcomes,
                helping organizations reduce documentation risk, preserve
                accountability, and improve audit visibility.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <OutcomeColumn
                title="Without Governance"
                items={governanceMatters.without}
                accentClasses="border-red-200 bg-white"
                iconBgClasses="bg-red-100 text-red-700"
              />
              <OutcomeColumn
                title="With Governance"
                items={governanceMatters.with}
                accentClasses="border-emerald-200 bg-white"
                iconBgClasses="bg-emerald-100 text-emerald-700"
              />
            </div>
          </div>
          <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-4 mt-16 py-6 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className=" text-center">
                <h2 className="text-3xl font-bold text-blue-900 md:text-3xl ">
                  AI Governance Outcomes™
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600 mx-auto max-w-5xl">
                  Organizations that implement structured AI governance controls
                  are better positioned to support documentation consistency,
                  workflow accountability, governance visibility, and
                  operational readiness.
                </p>
              </div>
              <div>
                {/* Outcomes Grid */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Improved Documentation Consistency",
                    "Enhanced Human Accountability",
                    "Increased Audit Visibility",
                    "Stronger Workflow Governance",
                    "Improved Documentation Traceability",
                    "Reduced Operational Risk",
                    "Greater Executive Visibility",
                    "Improved Organizational Readiness",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg shadow-xl"
                    >
                      <div className="grid grid-cols-[56px_1fr] items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>

                        <h3 className="text-[15px] font-medium leading-7 text-slate-900 md:text-base">
                          {item}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
               <div className="mt-12 text-center rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900 max-w-7xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-900">
                  Enterprise Positioning Statement
                </p>

                <p className="mt-4">
                 AI governance is not solely a technology function. Effective governance establishes accountability structures that support operational consistency, documentation integrity, organizational transparency, and long-term continuity.
                </p>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-4 mt-16 py-6 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className=" text-center">
                <h2 className="text-3xl font-bold text-blue-900 md:text-3xl ">
                  Executive Governance Visibility™
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600 mx-auto max-w-5xl">
                  Executive leadership requires visibility into how AI-assisted
                  workflows are governed, reviewed, approved, and documented
                  throughout the operational lifecycle.
                </p>
              </div>
              <div>
                {/* Outcomes Grid */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Human Review Completion Status",
                    "Approval Workflow Compliance",
                    "Documentation Accountability Assignments",
                    "Governance Exception Tracking",
                    "Audit Trail Completeness",
                    "Documentation Consistency Monitoring",
                    "Workflow Oversight Visibility",
                    "Governance Control Adherence",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg shadow-xl"
                    >
                      <div className="grid grid-cols-[56px_1fr] items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>

                        <h3 className="text-[15px] font-medium leading-7 text-slate-900 md:text-base">
                          {item}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
               <div className="mt-12 text-center rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900 max-w-7xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-900">
                  Executive Visibility Statement
                </p>

                <p className="mt-4">
                 Structured AI governance provides leadership with visibility into workflow accountability, documentation quality, governance controls, and organizational readiness indicators.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-10 rounded-[32px] px-6 py-10 md:px-10">
            <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
              ClaimScope™ AI Philosophy
            </h2>
            <p className="mt-4 max-w-6xl text-base leading-8 text-slate-600 md:text-lg">
              AI should support documentation governance, not replace human
              judgment. ClaimScope™ AI is designed to assist documentation
              readiness, workflow consistency, operational visibility, and
              governance alignment while preserving human accountability
              throughout the documentation lifecycle.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {philosophyPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="flex min-h-[72px] items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] font-medium leading-7 text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                >
                  <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-blue-800" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-16 rounded-[32px] py-10">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-blue-900">
                  Human-in-the-Loop Governance™
                </h2>
                <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600">
                  ClaimScope™ utilizes a Human-in-the-Loop Governance™ approach
                  that preserves accountability, transparency, and auditability
                  throughout the documentation lifecycle.
                </p>
              </div>

              <motion.div
                className="overflow-x-auto rounded-[20px] border border-[#BFDBFE] bg-[linear-gradient(180deg,rgba(239,246,255,0.95)_0%,rgba(255,255,255,1)_100%)] px-6 py-12 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <div className="flex max-w-full items-center justify-center">
                  {humanLoopSteps.map((step, i) => {
                    const Icon = step.icon;
                    const isLast = i === humanLoopSteps.length - 1;
                    return (
                      <Fragment key={step.label}>
                        <div className="flex flex-1 flex-col items-center gap-3">
                          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-[#93C5FD] bg-[linear-gradient(135deg,#DBEAFE_0%,#EFF6FF_100%)]">
                            <Icon size={22} color="#1A237E" />
                          </div>
                          <span className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#1E3A8A]">
                            {step.label}
                          </span>
                        </div>
                        {!isLast && (
                          <div className="shrink-0 px-[2px] pb-6 text-[1.1rem] text-[#1A237E] opacity-50">
                            <ArrowRight size={18} />
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-white px-4 mt-16 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 md:text-3xl">
                  AI Governance Indicators™
                </h2>

                <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-slate-600">
                  The following indicators may be used to evaluate the maturity
                  and effectiveness of AI governance programs.
                </p>
              </div>

              <div className="mt-14 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm">
                <div className="hidden grid-cols-2 bg-blue-900 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white md:grid">
                  <div>Indicator</div>
                  <div>Governance Objective</div>
                </div>

                <div className="divide-y divide-slate-200 bg-white">
                  {[
                    {
                      indicator: "Human Review Rate",
                      objective:
                        "Measures percentage of outputs reviewed by authorized personnel",
                    },
                    {
                      indicator: "Approval Compliance Rate",
                      objective: "Measures adherence to approval workflows",
                    },
                    {
                      indicator: "Audit Trail Completeness",
                      objective:
                        "Measures documentation and activity traceability",
                    },
                    {
                      indicator: "Governance Exception Frequency",
                      objective:
                        "Measures deviations from established governance controls",
                    },
                    {
                      indicator: "Documentation Consistency Score",
                      objective:
                        "Measures workflow and documentation standardization",
                    },
                    {
                      indicator: "Accountability Visibility Score",
                      objective:
                        "Measures ownership and governance transparency",
                    },
                    {
                      indicator: "Operational Readiness Alignment",
                      objective:
                        "Measures alignment between AI-supported processes and operational execution",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="grid gap-3 px-6 py-5 transition-colors hover:bg-blue-50/60 md:grid-cols-2 md:items-center"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 md:hidden">
                          Indicator
                        </p>
                        <h3 className="mt-1 text-base font-bold text-slate-900 md:mt-0">
                          {item.indicator}
                        </h3>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 md:hidden">
                          Governance Objective
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600 md:mt-0 md:text-base">
                          {item.objective}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900 max-w-7xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-900">
                  Governance Statement
                </p>

                <p className="mt-4">
                  Organizations that measure governance indicators are better
                  positioned to support accountability, audit readiness,
                  operational consistency, and continuous improvement.
                </p>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className=" text-center">
                <h2 className="text-3xl font-bold text-blue-900 md:text-3xl">
                  AI Governance & Operational Continuity™
                </h2>

                <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-slate-600">
                  AI governance supports operational continuity by ensuring
                  documentation processes remain accountable, traceable,
                  reviewable, and aligned with organizational controls.
                </p>
              </div>

              <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Documentation Continuity",
                  "Institutional Knowledge Preservation",
                  "Workflow Accountability",
                  "Governance Record Retention",
                  "Decision Traceability",
                  "Audit Preservation",
                  "Organizational Memory Support",
                  "Documentation Recovery Readiness",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="grid grid-cols-[56px_1fr] items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>

                      <h3 className="text-sm font-semibold leading-6 text-slate-900 md:text-base">
                        {item}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 rounded-[28px] border border-blue-100 bg-blue-900 p-8 text-center shadow-sm md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Continuity Statement
                </p>

                <p className="mx-auto mt-4 max-w-7xl text-lg font-medium leading-8 text-white">
                  Organizations with documented AI governance controls are
                  better positioned to preserve organizational knowledge,
                  support continuity planning, maintain governance
                  accountability, and reduce documentation-related operational
                  disruptions.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-16 rounded-[32px] border border-blue-100 bg-white px-6 py-10 shadow-sm md:px-10">
            <h2 className="mt-3 text-2xl font-bold text-blue-900 md:text-3xl">
              Future-Compatible Governance Architecture
            </h2>
            <p className="mt-4 max-w-6xl text-base leading-8 text-slate-600 md:text-lg">
              This page structure aligns visually and conceptually with upcoming
              ClaimScope™ frameworks so governance language remains consistent
              as the broader documentation readiness platform expands.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {phaseThreeFrameworks.map((framework) => (
                <div
                  key={framework}
                  className="rounded-2xl border border-blue-200 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(239,246,255,0.9)_100%)] px-5 py-4 text-sm font-semibold leading-7 text-blue-900"
                >
                  {framework}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[28px] border border-blue-200 bg-blue-50 px-6 py-8 md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Compliance Statement
            </p>
            <p className="mt-4 text-slate-800">
              ClaimScope™ AI supports documentation governance, operational
              readiness, workflow accountability, audit visibility, and
              organizational continuity. AI-generated outputs are provided as
              draft documentation support tools only and require human review,
              validation, and approval prior to operational use .
            </p>
            <p className="mt-4 text-slate-800">
              Human accountability, governance oversight, workflow approvals,
              and organizational decision-making remain the responsibility of
              authorized personnel. ClaimScope™ does not provide claim
              negotiation, claim representation, insurance adjusting services,
              legal services, regulatory representation, application submission
              services, coverage determinations, or third-party communications.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleViewGovernanceFramework}
              className="inline-flex items-center justify-center rounded bg-blue-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              View Governance Framework
            </button>
          </div>
        </div>
      </motion.section>

      <footer className="px-4 pb-14 md:px-6">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900 max-w-7xl mx-auto">
          ClaimScope™ Consulting, LLC provides advisory-only documentation
          governance, operational readiness, continuity planning support, and
          documentation readiness consulting. AI-assisted outputs are provided
          solely as draft documentation support tools and require human review
          and approval prior to operational use. ClaimScope™ does not provide
          claim negotiation, claim representation, insurance adjusting services,
          legal services, regulatory representation, application submission
          services, or third-party communications.
        </div>
      </footer>
    </div>
  );
}
