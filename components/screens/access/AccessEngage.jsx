"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AccessNav from "@/components/screens/access/AccessNav";
import Engagement from "@/components/screens/pricing/Engagement";

const systemAccessCards = [
  {
    eyebrow: "Foundation Access",
    title: "For baseline documentation structure",
    price: "$199",
    priceNote: "/ month",
    description:
      "Built for individuals establishing a disciplined documentation process and foundational workflow structure.",
    badge: "Best for early-stage implementation",
    ctaHref: "/intake/access-foundation",
    ctaLabel: "Start Foundation Access",
    featured: false,
    items: [
      "Core documentation structuring workflows",
      "Limited governance templates",
      "Introductory training modules",
      "Single-user access",
      "Basic checklist system",
    ],
  },
  {
    eyebrow: "Professional Access",
    title: "For active project documentation governance",
    price: "$499",
    priceNote: "/ month",
    description:
      "Full documentation governance system access for teams managing active project environments and structured workflows.",
    badge: "Built for active project environments",
    ctaHref: "/intake/access-professional",
    ctaLabel: "Start Professional Access",
    featured: true,
    items: [
      "Full documentation governance system",
      "Complete template library",
      "Readiness workflow tools",
      "LMS training system access",
      "Up to 3 users",
      "Structured documentation checklists",
      "Readiness scoring visibility",
    ],
  },
  {
    eyebrow: "Enterprise Access",
    title:
      "For portfolio-level documentation governance and operational standardization",
    price: "$2,000 - $4,000+",
    priceNote: "/ month",
    description:
      "Based on team size, deployment scope, and governance requirements",
    descriptionSecondary:
      "Built for organizations managing multiple projects, teams, or property portfolios. Deploy a structured documentation governance framework designed to improve consistency, reduce decision friction, and establish audit-ready operational standards across your organization.",
    badge: "Designed for multiple teams or projects",
    ctaHref: "/intake/enterprise-licensing",
    ctaLabel: "Request Enterprise Access",
    featured: false,
    items: [],
    sections: [
      {
        title: "What This Enables",
        items: [
          "Multi-user system access across teams and roles",
          "Portfolio-level documentation structure and oversight",
          "Standardized workflows across projects and locations",
          "Custom framework configuration aligned to your operations",
          "Internal training system deployment (LMS access)",
          "Readiness visibility across active documentation environments",
          "Priority advisory access for implementation alignment",
        ],
      },
      {
        title: "Designed For",
        items: [
          "Contractor organizations managing multiple crews or jobs",
          "Real estate portfolios (REO, investors, property managers)",
          "Disaster response environments requiring structured documentation",
          "Organizations requiring internal standardization across teams",
        ],
      },
    ],
  },
];

const advisoryCards = [
  {
    eyebrow: "Structured Review",
    title: "Structured Documentation Readiness Review",
    price: "$950",
    description:
      "A focused engagement for evaluating current documentation structure and identifying readiness gaps.",
    ctaHref: "/intake/documentation-readiness-review",
    ctaLabel: "Request Review",
    featured: false,
    items: [
      "45-minute structured review",
      "Documentation evaluation",
      "Written summary output",
    ],
  },
  {
    eyebrow: "Framework Advisory",
    title: "Governance Framework Advisory",
    price: "$3,750",
    description:
      "Structured advisory support for organizations building or refining documentation governance workflows.",
    ctaHref: "/intake/governance-framework-advisory",
    ctaLabel: "Request Advisory Intake",
    featured: false,
    items: [
      "Workflow structuring guidance",
      "Documentation sequencing",
      "Implementation roadmap",
    ],
  },
  {
    eyebrow: "Enterprise Advisory",
    title: "Enterprise Advisory Engagement",
    price: "Custom",
    description:
      "Multi-project governance support for standardization, executive alignment, and portfolio implementation.",
    ctaHref: "/intake/enterprise-advisory",
    ctaLabel: "Request Enterprise Advisory",
    featured: true,
    items: [
      "Multi-project governance review",
      "Executive advisory sessions",
      "Standardization framework",
    ],
  },
];

function BulletList({ items, bulletColor = "#1f4f82" }) {
  return (
    <ul className="m-0 grid list-none gap-3 p-0 text-sm text-[#14202b]">
      {items.map((item) => (
        <li key={item} className="relative pl-[26px]">
          <span
            className="absolute left-0 top-[9px] h-[10px] w-[10px] rounded-full"
            style={{ backgroundColor: bulletColor }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function AdvisoryBulletList({ items }) {
  return (
    <ul className="m-0 grid list-none gap-3 p-0 text-sm text-[#23313f]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[7px] h-2.5 w-2.5 rounded-full bg-[#c58a2e]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingCard({
  eyebrow,
  title,
  price,
  priceNote,
  description,
  descriptionSecondary,
  badge,
  ctaHref,
  ctaLabel,
  featured,
  items,
  sections,
}) {
  return (
    <article
      className={`flex h-[700px] flex-col overflow-hidden rounded-3xl border p-[30px] shadow-[0_18px_40px_rgba(15,23,32,0.08)] max-sm:h-[640px] max-sm:p-6 ${
        featured
          ? "relative -translate-y-1 border-[#1f4f82] bg-white shadow-[0_24px_48px_rgba(31,79,130,0.14)]"
          : "border-[#d9e0e7] bg-white"
      }`}
    >
      {featured ? (
        <div className="absolute right-[18px] top-[18px] z-10 rounded-full bg-[#1f4f82] px-3 py-[7px] text-[0.75rem] font-extrabold uppercase tracking-wide text-white">
          Most Popular
        </div>
      ) : null}

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="mb-2.5 text-[0.88rem] font-extrabold uppercase tracking-[0.08em] text-[#1f4f82]">
          {eyebrow}
        </div>
        <h3 className="m-0 text-[1.65rem] leading-[1.15] tracking-[-0.03em]">
          {title}
        </h3>
        <div className="mt-[18px] flex items-baseline gap-1.5">
          <strong className="text-[2.4rem] leading-none tracking-[-0.05em]">
            {price}
          </strong>
          {priceNote ? (
            <span className="font-semibold text-[#5c6b78]">{priceNote}</span>
          ) : null}
        </div>
        <p className="mt-4 text-sm text-[#5c6b78]">{description}</p>
        {descriptionSecondary ? (
          <p className="mt-2 text-sm text-[#5c6b78]">{descriptionSecondary}</p>
        ) : null}
        {badge ? (
          <div className="mt-[18px] inline-flex self-start rounded-full bg-[#f3f6f9] px-3 py-2 text-[0.85rem] font-bold text-[#14202b]">
            {badge}
          </div>
        ) : null}
        {items?.length ? (
          <div className="mt-[22px]">
            <BulletList items={items} />
          </div>
        ) : null}
        {sections?.length
          ? sections.map((section) => (
              <div key={section.title} className="mt-5 pt-2">
                <div className="mb-2 text-[0.75rem] font-extrabold uppercase tracking-wide text-[#1f4f82]">
                  {section.title}
                </div>
                <BulletList items={section.items} />
              </div>
            ))
          : null}
      </div>

      <div className="shrink-0 pt-[22px]">
        <Link
          href={ctaHref}
          className={`flex min-h-[52px] w-full items-center justify-center rounded-full px-[22px] text-sm font-bold transition-all duration-200 ${
            featured
              ? "bg-[#1f4f82] text-white shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:-translate-y-px hover:bg-[#173b61]"
              : "border border-[#b9c5d1] bg-white text-[#14202b] hover:border-[#1f4f82] hover:text-[#1f4f82]"
          }`}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

function AdvisoryCard({
  eyebrow,
  title,
  price,
  description,
  ctaHref,
  ctaLabel,
  featured,
  items,
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-[28px] border p-7 transition-all duration-300 max-sm:p-6 ${
        featured
          ? "border-[#c58a2e]/40 bg-[#1f2933] text-white shadow-[0_24px_44px_rgba(31,41,51,0.24)]"
          : "border-[#e2d6c2] bg-[#fffaf3] shadow-[0_16px_34px_rgba(148,113,60,0.12)]"
      }`}
    >
      <div
        className={`mb-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] ${
          featured ? "text-[#f5c87a]" : "text-[#9a6a1c]"
        }`}
      >
        {eyebrow}
      </div>

      <h3
        className={`m-0 text-[1.45rem] leading-[1.2] tracking-[-0.03em] ${
          featured ? "text-white" : "text-[#1d2731]"
        }`}
      >
        {title}
      </h3>

      <div
        className={`mt-4 text-[2rem] font-extrabold tracking-[-0.04em] ${
          featured ? "text-white" : "text-[#1d2731]"
        }`}
      >
        {price}
      </div>

      <p
        className={`mt-3 min-h-[70px] text-sm leading-relaxed ${
          featured ? "text-white/80" : "text-[#5f6972]"
        }`}
      >
        {description}
      </p>

      <div className="mt-6 flex-1">
        <AdvisoryBulletList items={items} />
      </div>

      <div className="mt-6">
        <Link
          href={ctaHref}
          className={`inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-[22px] text-sm font-bold transition-all duration-200 ${
            featured
              ? "bg-[#f5c87a] text-[#1b2430] hover:-translate-y-px hover:bg-[#ffd797]"
              : "border border-[#c9b28b] bg-white text-[#2b3641] hover:border-[#9a6a1c] hover:text-[#9a6a1c]"
          }`}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default function AccessEngage() {
  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] font-['Inter',system-ui,Helvetica,Arial,sans-serif] text-[#14202b] antialiased">
      <AccessNav />

       <main id="top">
        {/* Hero Section */}
        <section className="pt-[72px] pb-12 md:pt-[72px] md:pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-[34px] items-stretch">
              {/* Hero Copy Card */}
              <div className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[52px] max-md:p-[34px] max-sm:p-6">
                <div className="inline-flex items-center gap-2 px-[16px] py-[9px] rounded-full border border-[#d5e5f7] bg-[linear-gradient(135deg,#f4f8fc_0%,#e7f0fa_100%)] text-[#173b61] text-[0.72rem] font-extrabold uppercase tracking-[0.16em] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] mb-[20px]">
                  Access & Engagement
                </div>
                <div className="mt-1">
                  <ul className="space-y-2 list-none p-0 m-0">
                    <li className="list-none">
                      <span className="text-[clamp(1.8rem,2.8vw,3rem)] font-semibold leading-[1.05] text-[#14202b]">
                        Structure Documentation.
                      </span>
                    </li>

                    <li>
                      <span className="text-[clamp(1.8rem,2.8vw,3rem)] font-semibold leading-[1.05] text-[#1a3550]">
                        Improve Accountability.
                      </span>
                    </li>

                    <li>
                      <span className="text-[clamp(1.8rem,2.8vw,3rem)] font-semibold leading-[1.05] text-[#14202b]">
                        Strengthen Operational Readiness.
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="mt-[22px] mb-0 max-w-[700px] text-[#5c6b78] text-base md:text-lg">
              ClaimScope™ provides structured documentation governance frameworks designed to improve accountability, operational continuity, documentation visibility, and audit readiness across project, portfolio, and operational environments.
                </p>
                <div className="flex flex-wrap gap-3.5 mt-[30px] max-sm:flex-col">
                  <button
                    onClick={() => (window.location.hash = "#system-access")}
                    className="inline-flex items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200"
                  >
                    Access ClaimScope™ System
                  </button>
                  <button
                    onClick={() => (window.location.hash = "#advisory-support")}
                    className="inline-flex items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200"
                  >
                    Request Advisory Intake
                  </button>
                </div>
                <div className="mt-[28px] p-[18px_20px] rounded-2xl bg-[#eaf2fb] text-[#173b61] text-sm border border-[#d5e5f7]">
                  ClaimScope™ Consulting, LLC provides consulting-only and
                  education-only documentation readiness services. No
                  representation, negotiation, advocacy, legal advice,
                  application submission, or third-party communication is
                  provided.
                </div>
              </div>

              {/* Hero Panel Card */}
              <aside className="bg-gradient-to-b from-white to-[#f2f6fb] border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[34px] max-sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">
                    Structured Governance
                  </div>
                  <h2 className="text-xl md:text-2xl leading-tight font-semibold m-0">
                    Designed for clarity, consistency, and internal control.
                  </h2>
                  <p className="mt-3 text-[#5c6b78] text-sm">
                    Access documentation workflows, governance frameworks,
                    structured templates, and training modules built for
                    organizations that need repeatable documentation discipline.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-[28px]">
                  <div className="p-[18px] rounded-2xl bg-white border border-[#d9e0e7]">
                    <strong className="block text-xl tracking-[-0.03em] mb-1">
                      System Access
                    </strong>
                    <span className="text-[#5c6b78] text-sm">
                      Structured workflows, templates, and readiness tools
                    </span>
                  </div>
                  <div className="p-[18px] rounded-2xl bg-white border border-[#d9e0e7]">
                    <strong className="block text-xl tracking-[-0.03em] mb-1">
                      Governance Advisory Services
                    </strong>
                    <span className="text-[#5c6b78] text-sm">
                      Qualification-based advisory aligned to governance
                      implementation
                    </span>
                  </div>
                  <div className="p-[18px] rounded-2xl bg-white border border-[#d9e0e7]">
                    <strong className="block text-xl tracking-[-0.03em] mb-1">
                      Enterprise Licensing
                    </strong>
                    <span className="text-[#5c6b78] text-sm">
                      Multi-user deployment for portfolio-level governance
                    </span>
                  </div>
                  <div className="p-[18px] rounded-2xl bg-white border border-[#d9e0e7]">
                    <strong className="block text-xl tracking-[-0.03em] mb-1">
                      Compliance-Safe
                    </strong>
                    <span className="text-[#5c6b78] text-sm">
                      Draft-only, internal-use positioning across all access
                      paths
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* System Access Section */}
        <section
          id="system-access"
          className="py-[88px] max-md:py-[72px] max-sm:py-[72px]"
        >
          <div className="max-w-[1240px] mx-auto px-5">
            <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">
              System Access
            </div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 mb-[14px]">
              ClaimScope™ System Access
            </h2>
            <p className="max-w-[760px] text-[#5c6b78] text-base md:text-lg m-0">
              Access structured documentation governance tools, training
              modules, and implementation-ready workflows designed to improve
              organization, standardization, and audit readiness.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-[42px]">
              {/* Foundation Access Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden">
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">
                    Foundation Access
                  </div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">
                    For baseline documentation structure
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px]">
                    <strong className="text-[2.6rem] leading-none tracking-[-0.05em]">
                      $199
                    </strong>
                    <span className="text-[#5c6b78] font-semibold">
                      / month
                    </span>
                  </div>
                  {/* <p className="text-[#5c6b78] text-sm mt-4">
                    Built for individuals establishing a disciplined
                    documentation process and foundational workflow structure.
                  </p> */}
                  <p className="text-[#5c6b78] text-sm mt-4">
                   Single-user governance foundation designed to establish documentation discipline, 
                   workflow consistency, and accountability.
                  </p>
                  
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">
                    Best for early-stage implementation
                  </div>
                  <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Core documentation structuring workflows
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Limited governance templates
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Introductory training modules
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Single-user access
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Basic checklist system
                    </li>
                  </ul>
                </div>
                <div className="pt-[22px] shrink-0">
                  <button
                    onClick={() => handleNavigate("/intake/access-foundation")}
                    className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200"
                  >
                    Start Foundation Access
                  </button>
                </div>
              </article>

              {/* Professional Access Card (Featured) */}
              <article className="relative bg-white border border-[#1f4f82] rounded-3xl shadow-[0_24px_48px_rgba(31,79,130,0.14)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden -translate-y-1">
                <div className="absolute top-[18px] right-[18px] px-3 py-[7px] rounded-full bg-[#1f4f82] text-white text-[0.75rem] font-extrabold uppercase tracking-wide z-10">
                  Most Popular
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">
                    Professional Access
                  </div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">
                    For active project documentation governance
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px]">
                    <strong className="text-[2.6rem] leading-none tracking-[-0.05em]">
                      $499
                    </strong>
                    <span className="text-[#5c6b78] font-semibold">
                      / month
                    </span>
                  </div>
                  <p className="text-[#5c6b78] text-sm mt-4">
                    {/* Full documentation governance system access for teams
                    managing active project environments and structured
                    workflows. */}
                    Team-based documentation governance designed for active operational environments 
                    requiring visibility, consistency, and audit readiness.
                  </p>
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">
                    Built for active project environments
                  </div>
                  <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Full documentation governance system
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Complete template library
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Readiness workflow tools
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      LMS training system access
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Up to 3 users
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Structured documentation checklists
                    </li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                      Governance Readiness Indicators
                    </li>
                  </ul>
                </div>
                <div className="pt-[22px] shrink-0">
                  <button
                    onClick={() =>
                      handleNavigate("/intake/access-professional")
                    }
                    className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200"
                  >
                    Start Professional Access
                  </button>
                </div>
              </article>

              {/* Enterprise Access Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden">
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">
                    Enterprise Access
                  </div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">
                    For portfolio-level documentation governance and operational
                    standardization
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px] flex-wrap">
                    <strong className="text-[2rem] leading-none tracking-[-0.05em]">
                      $2,000 - $4,000+
                    </strong>
                    <span className="text-[#5c6b78] font-semibold">
                      / month
                    </span>
                  </div>
                  <p className="text-[#5c6b78] text-sm mt-2">
                    {/* Based on team size, deployment scope, and governance
                    requirements */}
                    Portfolio-level governance oversight designed for organizations managing multiple projects, departments, locations, or operational programs.
                  </p>
                  {/* <p className="text-[#5c6b78] text-sm mt-2">
                    Built for organizations managing multiple projects, teams,
                    or property portfolios. Deploy a structured documentation
                    governance framework designed to improve consistency, reduce
                    decision friction, and establish audit-ready operational
                    standards across your organization.
                  </p> */}
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">
                    Designed for enterprise governance environments.
                  </div>

                  {/* What This Enables */}
                  <div className="mt-5 pt-2">
                    <div className="text-[#1f4f82] text-[0.75rem] font-extrabold uppercase tracking-wide mb-2">
                      What This Enables
                    </div>
                    <ul className="list-none p-0 m-0 grid gap-2 text-[#14202b] text-sm">
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Multi-user system access across teams and roles
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Portfolio-level documentation structure and oversight
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Standardized workflows across projects and locations
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Custom framework configuration aligned to your
                        operations
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Internal training system deployment (LMS access)
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Readiness visibility across active documentation
                        environments
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Priority advisory access for implementation alignment
                      </li>
                    </ul>
                  </div>

                  {/* Designed For */}
                  <div className="mt-5 pt-2">
                    <div className="text-[#1f4f82] text-[0.75rem] font-extrabold uppercase tracking-wide mb-2">
                      Designed For
                    </div>
                    <ul className="list-none p-0 m-0 grid gap-2 text-[#14202b] text-sm">
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Contractor organizations managing multiple crews or jobs
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Real estate portfolios (REO, investors, property
                        managers)
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Disaster response environments requiring structured
                        documentation
                      </li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                        Organizations requiring internal standardization across
                        teams
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-[22px] shrink-0">
                  <button
                    onClick={() =>
                      handleNavigate("/intake/enterprise-licensing")
                    }
                    className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200"
                  >
                    Request Enterprise Access
                  </button>
                </div>
              </article>
            </div>

            <div className="mt-[28px] p-5 rounded-2xl bg-[#edf7f0] text-[#224b31] text-sm border border-[#d9e0e7]">
              <strong>Important System Notice:</strong> System access provides
              documentation structuring tools and workflows only. All outputs
              are draft-only and intended for internal use. ClaimScope™
              Consulting provides advisory support only and does not engage in
              representation or third-party communications.
            </div>
          </div>
        </section>

        {/* Advisory Support Section */}
        <section
          id="advisory-support"
          className="py-[88px] max-md:py-[72px] max-sm:py-[72px] bg-white"
        >
          <div className="max-w-[1240px] mx-auto px-5">
            <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">
              Optional Add-On
            </div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 mb-[14px]">
              Governance Advisory Services
            </h2>
            <p className="max-w-[760px] text-[#5c6b78] text-base md:text-lg m-0">
              Qualification-based advisory services are available to support
              implementation, refinement, audit readiness, operational
              continuity, and standardization of documentation governance
              systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-[42px]">
              {/* Structured Review Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6 flex flex-col h-full">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">
                  Structured Review
                </div>

                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">
                  Assessment Required
                </h3>
                <div className="text-[1rem] font-extrabold uppercase tracking-[0.12em] text-[#1f4f82] mt-3.5">
                  Request Review
                </div>

                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">
                  A focused engagement for evaluating current documentation
                  structure and identifying readiness gaps.
                </p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Qualification-based intake
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Documentation evaluation
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Written summary output
                  </li>
                </ul>
                <div className="mt-auto pt-[22px]">
                  <button
                    onClick={() =>
                      handleNavigate("/intake/documentation-readiness-review")
                    }
                    className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200"
                  >
                    Request Review
                  </button>
                </div>
              </article>

              {/* Framework Advisory Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6 flex flex-col h-full">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">
                  Framework Advisory
                </div>

                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">
                  Governance Framework Design & Implementation
                </h3>
                <div className="text-[1rem] font-extrabold uppercase tracking-[0.12em] text-[#1f4f82] mt-3.5">
                  Request Advisory Intake
                </div>

                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">
                  Structured advisory support for organizations implementing, refining, and standardizing documentation governance frameworks across projects, portfolios, and operational environments.
                </p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Workflow structuring guidance
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Documentation sequencing
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Implementation roadmap
                  </li>
                </ul>
                <div className="mt-auto pt-[22px]">
                  <button
                    onClick={() =>
                      handleNavigate("/intake/governance-framework-advisory")
                    }
                    className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200"
                  >
                    Request Advisory Intake
                  </button>
                </div>
              </article>

              {/* Enterprise Advisory Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6 flex flex-col h-full">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">
                  Enterprise Advisory
                </div>
                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">
                  Custom Engagement
                </h3>
                <div className="text-[1rem] font-extrabold uppercase tracking-[0.12em] text-[#1f4f82] mt-3.5">
                  Request Enterprise Consultation
                </div>

                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">
                  Multi-project governance support for standardization,
                  executive alignment, and portfolio implementation.
                </p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Qualification-based intake and assessment
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Multi-project governance review
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Executive advisory sessions
                  </li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">
                    Scope-dependent engagement structure
                  </li>
                </ul>
                <div className="mt-auto pt-[22px]">
                  <button
                    onClick={() =>
                      handleNavigate("/intake/enterprise-advisory")
                    }
                    className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200"
                  >
                    Request Enterprise Consultation
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Enterprise Licensing Section */}
        <section
          id="enterprise-licensing"
          className="py-[88px] max-md:py-[72px] max-sm:py-[72px]"
        >
          <div className="max-w-7xl mx-auto px-5">
            <div className="bg-[#1E2E66] text-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[52px] max-md:p-[34px] grid md:grid-cols-[1fr_auto] gap-7 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">
                  Enterprise Licensing &amp; Governance
                </div>
                <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 text-white">
                 Enterprise documentation governance for organizations requiring accountability, operational continuity, audit readiness, and portfolio-level visibility.
                </h2>
                <p className="mt-3.5 text-white/80 max-w-[760px]">
                  ClaimScope™ Enterprise Licensing is designed for organizations
                  requiring multi-user system access, portfolio-level
                  governance, controlled internal training deployment, and
                  structured advisory integration.
                </p>
                <ul className="mt-6 p-0 list-none grid sm:grid-cols-2 gap-3 gap-x-[18px]">
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                    Governance Visibility & Reporting
                  </li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                    Structured Training Integration
                  </li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                   Multi-Project Standardization
                  </li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                    Readiness Analytics Visibility
                  </li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                    Portfolio-Level Governance Oversight
                  </li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">
                    Operational Continuity Alignment
                  </li>
                </ul>
              </div>
              <div className="md:text-right">
                <button
                  onClick={() => handleNavigate("/intake/enterprise-licensing")}
                  className="inline-flex items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200 border border-2 border-white"
                >
                  Request Enterprise Licensing
                </button>
              </div>
            </div>
          </div>
        </section>
           {/* Engagement Path Section */}
        <section
          id="engagement-path"
          className="px-6"
        >
          <Engagement />
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-10" >
          <div >
            <div className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[52px] max-md:p-[34px] max-sm:p-6">
              <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">
                Enterprise Governance Capabilities
              </div>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 text-[#14202b]">
                Enterprise Governance Capabilities
              </h2>
              <p className="mt-3.5 mb-0 max-w-[860px] text-[#5c6b78] text-base md:text-lg">
                ClaimScope™ Enterprise Licensing supports organizations requiring structured documentation governance, operational continuity alignment, audit readiness visibility, and portfolio-level standardization.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Documentation Governance Frameworks
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Operational Continuity Alignment
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Governance Readiness Indicators
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  LMS Training Integration
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Audit Readiness Visibility
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Governance Visibility & Reporting
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Multi-Project Standardization
                </div>
                <div className="rounded-2xl border border-[#d9e0e7] bg-[#f8fbfe] p-[18px] text-[#14202b] font-semibold">
                  Portfolio Governance Oversight
                </div>
              </div>
            </div>
          </div>
        </section>

     
      </main>

      {/* Footer */}
      <footer className="pb-[60px] pt-9">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] text-[#5c6b78] text-center text-sm">
          ClaimScope™ provides advisory-only documentation governance, readiness assessment, operational continuity, and framework implementation support. ClaimScope™ does not provide claim negotiation, claim representation, insurance adjusting services, legal services, regulatory representation, application submission services, or third-party communications.
          </div>
        </div>
      </footer>
    </div>
  );
}
