"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { House, Droplet, Building2, XCircle, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: "roofing",
    route: "/case-study/roofing",
    Icon: House,
    title: "Roofing contractor",
    subtitle: "Startup to scalable operations",
    borderColor: "border-[#c7d2fe]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e8eaf6]",
    badgeText: "text-[#1a237e]",
    before: [
      "Documentation varied across projects and crews",
      "Scope not consistently carried into execution",
    ],
    after: [
      "Standardized documentation across all projects",
      "Scope, tracking, and execution aligned",
    ],
  },
  {
    id: "water",
    route: "/case-study/water-mitigation",
    Icon: Droplet,
    title: "Water mitigation company",
    subtitle: "Multi-project emergency response",
    borderColor: "border-[#bfdbfe]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e0f2fe]",
    badgeText: "text-[#1e3a8a]",
    before: [
      "Inconsistent documentation across emergency jobs",
      "Limited visibility across active projects",
    ],
    after: [
      "Standardized docs and moisture tracking",
      "Clear visibility into all active projects",
    ],
  },
  {
    id: "realty",
    route: "/case-study/real-estate",
    Icon: Building2,
    title: "Real estate professional",
    subtitle: "Multi-property portfolio management",
    borderColor: "border-[#cbd5e1]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e8eaf6]",
    badgeText: "text-[#1a237e]",
    before: [
      "Each property documented differently",
      "Reporting varied across properties",
    ],
    after: [
      "Standardized documentation across all properties",
      "Repeatable system for portfolio management",
    ],
  },
];

export default function FlagshipCaseStudy() {
  const router = useRouter();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  const handleCaseNavigate = (route: string) => {
    router.push(route);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Badge */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#e8eaf6] text-[#1a237e] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-[#c5cae9]">
            REAL OPERATIONAL TRANSFORMATION (NOT THEORY)
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
            From Startup to Scalable Operations — A Documentation Transformation
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            See how real companies implemented documentation governance and the
            operational clarity it created.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {caseStudies.map((cs) => {
            const LucideIcon = cs.Icon;

            return (
              <div
                key={cs.id}
                className={`bg-white border ${cs.borderColor} rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full`}
              >
                <div
                  className={`${cs.headerBg} text-white text-center text-[11px] font-semibold tracking-[0.125em] py-3 px-6 uppercase`}
                >
                  Flagship Case Study
                </div>

                <div className="p-6 flex flex-col flex-1">

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${cs.badgeBg} ${cs.badgeText} flex items-center justify-center flex-shrink-0 border border-white shadow-sm`}
                    >
                      <LucideIcon size={28} strokeWidth={2} />
                    </div>

                    <div className="pt-0.5">
                      <div className="font-semibold text-slate-900 text-lg leading-tight">
                        {cs.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {cs.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Before */}
                  <div className="bg-orange-50 border border-rose-100 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle size={18} className="text-orange-500" strokeWidth={2} />
                      <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">
                        Before
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {cs.before.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-orange-300 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      <li className="flex gap-2 text-slate-800 italic">
                        <span>•</span> + 3 more on full page...
                      </li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 border border-emerald-100 rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 size={18} className="text-blue-600" strokeWidth={2} />
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                        After
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {cs.after.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-300 mt-0.5">•</span>
                          <span className="text-slate-800">{item}</span>
                        </li>
                      ))}
                      <li className="flex gap-2 text-slate-800 italic">
                        <span>•</span> + 3 more on full page...
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleCaseNavigate(cs.route)}
                      className="w-full py-3 rounded-2xl text-sm font-semibold text-white bg-[#1a237e] hover:bg-[#0f1a5e] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      Explore Full Case Study
                      <span className="text-lg">→</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance */}
        <div className="text-center mb-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-amber-50 text-amber-800 text-sm px-6 py-3 rounded-2xl border border-amber-200 max-w-6xl mx-auto">
            <span className="font-semibold">Compliance note:</span>
            <span>
              All services were advisory and documentation-focused only. No
              claim handling, negotiation, or representation was performed.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}