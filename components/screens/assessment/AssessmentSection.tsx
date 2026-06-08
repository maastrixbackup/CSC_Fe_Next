"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import CtaBanner from "@/components/screens/home/CTA";
import Engagement from "@/components/screens/pricing/Engagement";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  buttonMotion,
  cardHover,
} from "@/components/animations/motionVariants";

const assessmentTracks = [
  {
    id: "track_1",
    title: "Contractor Documentation Governance Assessment",
    cta: "Select Track 1",
    items: [
      "Documentation governance maturity review",
      "Workflow accountability assessment",
      "Operational readiness baseline",
      "Documentation integrity and traceability review",
      "Governance gap identification",
    ],
  },
  {
    id: "track_2",
    title: "Real Estate / REO Documentation Readiness Assessment",
    cta: "Select Track 2",
    items: [
      "Portfolio documentation readiness evaluation",
      "Governance visibility assessment",
      "Asset-level documentation consistency review",
      "Organizational accountability baseline",
      "Operational continuity alignment review",
    ],
  },
  {
    id: "track_3",
    title: "Disaster Documentation Readiness + FEMA Education Assessment",
    cta: "Select Track 3",
    items: [
      "Disaster documentation readiness baseline",
      "Readiness workflow review",
      "Governance and accountability assessment",
      "Documentation integrity review",
      "Education-focused FEMA IA/PA readiness context",
    ],
  },
];

const readinessIndicators = [
  {
    title: "Governance Visibility",
    description:
      "Can leadership clearly see documentation status, ownership, and readiness conditions across the organization?",
  },
  {
    title: "Workflow Accountability",
    description:
      "Are documentation responsibilities clearly assigned, traceable, and consistently maintained?",
  },
  {
    title: "Documentation Integrity",
    description:
      "Are documentation records complete, organized, consistent, and aligned with operational activity?",
  },
  {
    title: "Operational Continuity",
    description:
      "Can documentation standards remain consistent through changes in personnel, projects, or conditions?",
  },
];

const enterprisePrograms = [
  "Enterprise governance maturity assessments",
  "Documentation accountability architecture reviews",
  "Operational continuity and readiness alignment",
  "Executive visibility and governance reporting support",
  "Multi-team and multi-project standardization planning",
  "Long-term documentation maturity advisory engagements",
];

export default function AssessmentSection() {
  const router = useRouter();
  const [calendlyRoot, setCalendlyRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setCalendlyRoot(document.body);
  }, []);

  const handleTrackSelect = (
    track: (typeof assessmentTracks)[number],
    index: number,
  ) => {
    const trackLabel = `Track ${index + 1}`;

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    router.push(
      `/intake?track=${encodeURIComponent(trackLabel)}&id=${encodeURIComponent(track.id)}&title=${encodeURIComponent(track.title)}`,
    );
  };

  const numberColors = [
    "bg-blue-900",
    "bg-indigo-600",
    "bg-teal-600",
    "bg-amber-500",
  ];

  return (
    <div>
      <section className="mt-12 min-h-screen px-3 py-8 sm:px-6 sm:py-12 md:mt-0 lg:py-20 ">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-8 text-center sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              className="mx-auto max-w-7xl mt-10"
              variants={staggerContainer}
            >
              <motion.div className="mx-auto max-w-7xl" variants={fadeUp}>
                <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  Governance Assessment
                </span>

                <h1 className="mt-4 text-2xl font-bold leading-tight text-[#1a237e] sm:text-3xl lg:text-4xl">
                  Documentation Readiness Assessment & Governance Review
                </h1>

                <p className="mt-4 px-2 text-sm leading-7 text-gray-600">
                  ClaimScope™ provides structured documentation readiness
                  assessments designed to evaluate governance maturity,
                  operational consistency, documentation accountability, and
                  organizational readiness. Assessment findings help identify
                  documentation risks, governance gaps, workflow
                  inconsistencies, and operational vulnerabilities before
                  implementation decisions are made.
                </p>
              </motion.div>

              <div className="mt-14 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  Why Organizations Complete This Assessment
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Organizations use this assessment to evaluate documentation
                  governance maturity, operational readiness, accountability
                  controls, workflow alignment, and organizational resilience.
                  The assessment establishes a structured baseline for
                  governance visibility, documentation integrity, and
                  continuous improvement planning.
                </p>
              </div>

              <motion.div
                className="mx-auto mt-6 max-w-7xl rounded-[28px] bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 text-left shadow-sm"
                variants={scaleIn}
              >
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 sm:text-2xl">
                    Assessment Coverage & Governance Framework
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                    <h4 className="mb-4 text-base font-bold text-slate-900 sm:text-lg">
                      Assessment Evaluates
                    </h4>

                    <div className="grid grid-cols-1 gap-1">
                      {[
                        "Documentation Governance Maturity",
                        "Operational Readiness Alignment",
                        "Workflow Accountability",
                        "Audit Readiness Visibility",
                        "Documentation Traceability",
                        "Information Retrieval Readiness",
                      ].map((item) => (
                        <motion.div
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                          variants={scaleIn}
                        >
                          <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-700" />
                          <span className="text-sm font-medium text-slate-700 sm:text-base">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                    <h4 className="mb-4 text-base font-bold text-slate-900 sm:text-lg">
                      Documentation Governance Framework
                    </h4>

                    <div className="grid grid-cols-1 gap-1">
                      {[
                        "Documentation Governance Architecture",
                        "Governance Control Framework",
                        "Workflow Accountability Structure",
                        "Documentation Traceability Controls",
                        "Operational Continuity Alignment",
                        "Audit Visibility Framework",
                      ].map((item) => (
                        <motion.div
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                          variants={scaleIn}
                        >
                          <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-700" />
                          <span className="text-sm font-medium text-slate-700 sm:text-base">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.p
                  className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center text-sm leading-7 text-slate-700 sm:text-base"
                  variants={fadeUp}
                >
                  Assessment results provide a structured readiness baseline
                  that supports governance improvement, accountability
                  visibility, operational consistency, and long-term
                  documentation maturity.
                </motion.p>
              </motion.div>

              <motion.div
                className="mx-auto mt-6 max-w-7xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left"
                variants={scaleIn}
              >
                <h4 className="text-sm font-bold text-amber-900 sm:text-base">
                  Advisory Notice:
                </h4>
                <p className="mt-2 text-xs leading-7 text-amber-900/80 sm:text-sm">
                  Documentation governance assessments are advisory-only and
                  intended to support organizational readiness, governance
                  visibility, and operational continuity planning. No
                  representation, negotiation, claim handling, regulatory
                  advocacy, or third-party communications are provided.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-12 sm:mb-16 lg:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div
              className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
              variants={staggerContainer}
            >
              {assessmentTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-all duration-500 hover:shadow-xl sm:rounded-3xl sm:p-6 sm:hover:shadow-2xl lg:p-8"
                  variants={scaleIn}
                  whileHover={cardHover.whileHover}
                >
                  <motion.div variants={fadeUp}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                      Track {index + 1}
                    </p>
                    <h2 className="mb-4 text-base font-bold leading-tight text-gray-900 sm:text-lg lg:text-xl">
                      {track.title}
                    </h2>
                  </motion.div>

                  <motion.ul
                    className="mb-6 flex-1 space-y-2 sm:space-y-3"
                    variants={staggerFast}
                  >
                    {track.items.map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-2 sm:gap-3"
                        variants={scaleIn}
                      >
                        <Check className="mt-1 h-3 w-3 flex-shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                        <span className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    variants={buttonMotion}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <button
                      type="button"
                      onClick={() => handleTrackSelect(track, index)}
                      className="flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded bg-[#1a237e] px-2 py-3 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#0d47a1] sm:text-sm"
                    >
                      {track.cta}
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <section
              id="engagement-path"
              className="mx-auto max-w-7xl py-[70px] max-md:py-[60px] max-sm:py-[60px]"
            >
              <Engagement />
            </section>

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <motion.div
                className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-white py-6"
                variants={staggerContainer}
              >
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

                <div className="relative">
                  <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      Readiness Signals
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-blue-900 sm:text-3xl lg:text-4xl">
                      Governance Readiness Indicators
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      Review the core indicators that show whether documentation
                      governance is structured, visible, consistent, and ready
                      to support operations.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {readinessIndicators.map((indicator, index) => (
                      <motion.div
                        key={indicator.title}
                        variants={scaleIn}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-950/10"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-md ${
                              numberColors[index % numberColors.length]
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-lg font-bold text-slate-950">
                            {indicator.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {indicator.description}
                        </p>

                        <div className="mt-5 h-1 w-12 rounded-full bg-blue-900 transition-all duration-300 group-hover:w-20" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[linear-gradient(135deg,_#1C2F5C_0%,_#162448_60%,_#0f1a35_100%)] p-6 shadow-2xl sm:p-8 lg:p-10"
                variants={scaleIn}
              >
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                      variants={staggerContainer}
                      className="text-left"
                    >
                      <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-md">
                        Enterprise Advisory
                      </span>

                      <motion.h2
                        className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                        variants={fadeUp}
                      >
                        Enterprise Governance Advisory Programs
                      </motion.h2>

                      <motion.p
                        className="mb-8 text-base leading-relaxed text-blue-100 sm:text-lg"
                        variants={fadeUp}
                      >
                        Strategic governance engagements designed for
                        organizations seeking documentation maturity,
                        operational consistency, executive visibility, and
                        long-term readiness improvement.
                      </motion.p>

                      <motion.div
                        variants={buttonMotion}
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        {calendlyRoot ? (
                          <PopupButton
                            url="https://calendly.com/twalker-claimscopeconsulting/enterprise-documentation-governance-advisory"
                            rootElement={calendlyRoot}
                            text="Request Enterprise Consultation"
                            className="rounded-xl border-2 border-white bg-[#1a237e] px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(26,35,126,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f1a5e]"
                          />
                        ) : null}
                      </motion.div>
                    </motion.div>

                    <motion.div className="grid gap-4" variants={staggerFast}>
                      {enterprisePrograms.map((item) => (
                        <motion.div
                          key={item}
                          variants={scaleIn}
                          whileHover={{
                            y: -5,
                            transition: { duration: 0.2 },
                          }}
                          className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                              <Check className="h-5 w-5 text-white" />
                            </div>

                            <span className="font-medium leading-relaxed text-white">
                              {item}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto max-w-7xl rounded-lg border border-orange-300 bg-orange-100 p-3 sm:p-4"
            variants={scaleIn}
          >
            <motion.p
              className="mb-3 px-1 text-center text-xs leading-relaxed text-amber-800 sm:text-sm"
              variants={fadeUp}
            >
              ClaimScope Consulting, LLC is an Alabama-based documentation
              governance and operational readiness consulting firm. Services
              focus exclusively on documentation readiness, governance
              assessments, operational continuity alignment, audit
              preparedness, framework development, and organizational
              documentation maturity.
            </motion.p>
            <motion.p
              className="px-1 text-center text-xs leading-relaxed text-amber-800 sm:text-sm"
              variants={fadeUp}
            >
              ClaimScope™ does not provide claim negotiation, claim
              representation, insurance adjusting services, legal services,
              regulatory advocacy, application submission services, coverage
              determinations, or third-party communications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="mx-auto mt-8 sm:mt-10 lg:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <CtaBanner
          title="Establish Your Documentation Readiness Baseline"
          ctaLabel="Begin Governance Assessment"
          ctaHref="/assessment"
          compliance="Advisory-only. No representation, negotiation, or third-party communications."
        />
      </motion.div>
    </div>
  );
}
