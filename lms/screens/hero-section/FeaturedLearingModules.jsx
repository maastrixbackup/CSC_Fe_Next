import React from 'react'
import { Briefcase, FileText, ShieldCheck, Workflow } from "lucide-react";

const FeaturedLearingModules = () => {
const featuredModules = [
  {
    title: "Documentation Readiness Foundations",
    description:
      "Core training on evidence structure, record organization, and defensible internal documentation habits.",
    icon: FileText,
  },
  {
    title: "Operational Continuity Planning",
    description:
      "Continuity-focused instruction for maintaining workflow stability, escalation paths, and process consistency.",
    icon: Workflow,
  },
  {
    title: "Governance & Audit-Aware Execution",
    description:
      "Education for teams that need repeatable controls, documented oversight, and review-ready operational practices.",
    icon: ShieldCheck,
  },
  {
    title: "Contractor Workflow Alignment",
    description:
      "Structured modules supporting field-to-office coordination, intake discipline, and standardized internal handoffs.",
    icon: Briefcase,
  },
];


  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-14">
        
        <section id="learning-modules">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7c8b9b]">
                Featured Learning Modules
              </div>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[#102033] sm:text-3xl md:text-4xl">
                Guided training designed for structured organizational use.
              </h2>
            </div>
       
          </div>

          <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredModules.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#d8e0e8] bg-white p-5 shadow-[0_18px_45px_rgba(16,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(16,32,51,0.1)] sm:p-6 md:rounded-[28px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-[#ffffff]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-[#102033] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5a6b7d]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>
    </div>
  )
}

export default FeaturedLearingModules
