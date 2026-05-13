import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import GovernanceSection from "../hero-section/GovernanceSection";

const platformFeatures = [
  "Documentation readiness education",
  "Operational continuity awareness",
  "Contractor documentation workflow training",
  "Disaster documentation preparedness modules",
  "FEMA IA/PA educational awareness content",
  "Internal process structure guidance",
  "Governance and auditability awareness",
  "Educational intake and evidence organization standards",
  "Structured training paths and downloadable resources",
];

const approvedTerms = [
  "Documentation readiness",
  "Educational guidance",
  "Operational continuity support",
  "Advisory-only training",
  "Educational preparedness",
  "Internal documentation structure",
  "Continuity-focused workflow alignment",
  "Record organization awareness",
  "Audit-aware educational content",
];

const restrictedTerms = [
  "We negotiate claims",
  "We represent policyholders",
  "We secure settlements",
  "We maximize payouts",
  "We advocate on your behalf",
  "We handle claims directly",
  "We communicate with carriers for you",
];

const disclaimers = [
  {
    title: "LMS Compliance Disclaimer",
    icon: ShieldCheck,
    content:
      "ClaimScope Consulting, LLC provides educational, advisory, and documentation-readiness content only. ClaimScope Consulting, LLC is not a law firm, public adjusting firm, engineering firm, or insurance carrier. The information provided through this LMS is for educational and operational awareness purposes only and does not constitute legal advice, claims representation, public adjusting services, engineering opinions, financial advice, or professional representation of any kind.",
  },
  {
    title: "FEMA / Disaster Education Disclaimer",
    icon: FileText,
    content:
      "Any FEMA, emergency management, disaster documentation, IA/PA, resilience, continuity, or preparedness references contained within this LMS are educational in nature only. ClaimScope Consulting, LLC does not act as an applicant representative, grant writer, claims representative, or governmental liaison. All governmental programs referenced are subject to official agency guidance and requirements.",
  },
  {
    title: "AI Governance Disclaimer",
    icon: Sparkles,
    content:
      "ClaimScopeâ„¢ utilizes internally governed administrative AI support systems for structured internal workflow assistance. AI systems are not client-facing and are not authorized to independently provide legal advice, engineering conclusions, claims determinations, or professional representation. All AI-supported outputs remain subject to internal review, logging, auditability standards, and enterprise governance controls.",
  },
  {
    title: "Trade Secret / Intellectual Property Notice",
    icon: LockKeyhole,
    content:
      "All ClaimScopeâ„¢ frameworks, LMS materials, methodologies, operational structures, workflows, training systems, templates, content, branding, process logic, and documentation readiness methodologies are proprietary and confidential. Unauthorized copying, distribution, reverse engineering, reproduction, reuse, or derivative development is prohibited without written authorization from ClaimScope Consulting, LLC.",
  },
];

const DocumentationReadiness = () => {
  return (
     <div className="min-h-screen ">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16"
        style={{
          background:
            "linear-gradient(135deg, #1C2F5C 0%, #162448 58%, #0f1a35 100%)",
        }}
      >
        {/* GRID OVERLAY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* CONTENT */}
        <div className="relative mx-auto flex max-w-7xl justify-center">
          <div className="text-center">
            {/* LABEL */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dbe7f5] backdrop-blur">
        <BookOpen className="h-4 w-4" />
        ClaimScope™ LMS
      </div> */}

            {/* HEADING */}
            <h1 className="mt-14 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Enterprise Documentation Readiness & Operational Continuity
              Training
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Structured educational resources designed to support documentation
              readiness, continuity planning, audit-aware workflows, and
              operational alignment across contractors, organizations, and
              stakeholders.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/access"
                className="inline-flex min-h-[56px] items-center justify-center bg-[#1a237e] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:scale-[1.02]"
              >
                Access Training Portal
              </Link>

              <a
                href="#learning-modules"
                className="inline-flex min-h-[56px] items-center justify-center border border-white/20 bg-[#F06600] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:scale-[1.02] hover:bg-[#d85c00]"
              >
                Explore Learning Modules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7c8b9b]">
              Platform Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#102033] md:text-4xl">
              Structured educational content for readiness, process awareness,
              and governance alignment.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#506174]">
              ClaimScope™ LMS provides structured educational content focused on
              documentation readiness, process awareness, operational continuity
              concepts, disaster documentation preparedness, and
              governance-oriented workflow alignment.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#d8e0e8] bg-white p-6 shadow-[0_18px_45px_rgba(16,32,51,0.06)] md:p-8">
            <ul className="space-y-4">
              {platformFeatures.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[10px] h-2 w-2 min-w-[8px] rounded-full bg-[#4B6B96]" />
                  <span className="text-sm font-medium leading-7 text-[#334155] md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPLIANCE LANGUAGE */}
      <section
        id="learning-modules"
        className="px-6 pb-16 md:px-12 lg:px-16 mt-10"
      >
        <div className="mx-auto max-w-7xl rounded-[36px] p-6 md:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7c8b9b]">
              Approved Compliance-Safe Service Language
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#102033] md:text-4xl">
              Consulting-only language with clear compliance boundaries.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#d8e0e8] bg-[#f8fbfd] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#102033] text-white">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#102033]">
                  Approved terminology
                </h3>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {approvedTerms.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] h-2 w-2 min-w-[8px] rounded-full bg-[#4B6B96]" />
                    <span className="text-sm leading-6 text-[#334155]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#f3c1c1] bg-[#fff7f7] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DB0032] text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#102033]">
                  Restricted terminology
                </h3>
              </div>

              <ul className="space-y-3">
                {restrictedTerms.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] h-2 w-2 min-w-[8px] rounded-full bg-[#DB0032]" />
                    <span className="text-sm leading-6 text-[#334155]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMERS */}
      <section className="px-6 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* SECTION HEADER */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4B6B96]">
              Required Disclaimers
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1C2F5C] md:text-4xl">
              Educational, advisory, and documentation-readiness content only.
            </h2>
          </div>

          {/* DISCLAIMER LIST */}
          <div className="mt-12 flex flex-col gap-12">
            {disclaimers.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  // className="border-b border-[#e4eaf0] pb-10 last:border-none"
                >
                  {/* TITLE */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#102033] text-[#f3d9a2] shadow-[0_10px_30px_rgba(16,32,51,0.12)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-[#7c8b9b]">
                          0{index + 1}
                        </span>

                        <h3 className="text-xl font-semibold tracking-tight text-[#102033] md:text-xl">
                          {item.title}
                        </h3>
                      </div>

                      {/* PARAGRAPH */}
                      <p className="mt-5 max-w-5xl text-base leading-8 text-[#506174] md:text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <GovernanceSection />
    </div>
  );
};

export default DocumentationReadiness;
