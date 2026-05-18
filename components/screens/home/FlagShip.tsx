"use client";

import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

import { caseStudiesFlagship } from "@/utils/constants";

export default function FlagshipCaseStudy() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c5cae9] bg-[#e8eaf6] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#1a237e]">
            REAL OPERATIONAL TRANSFORMATION (NOT THEORY)
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            From Startup to Scalable Operations - A Documentation
            Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            See how real companies implemented documentation governance and the
            operational clarity it created.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudiesFlagship.map((cs) => {
            const LucideIcon = cs.Icon;

            return (
              <div
                key={cs.id}
                className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${cs.borderColor}`}
              >
                <div
                  className={`${cs.headerBg} px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.125em] text-white`}
                >
                  Flagship Case Study
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-6 flex items-start gap-3">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white shadow-sm ${cs.badgeBg} ${cs.badgeText}`}
                    >
                      <LucideIcon size={28} strokeWidth={2} />
                    </div>

                    <div className="pt-0.5">
                      <div className="text-lg font-semibold leading-tight text-slate-900">
                        {cs.title}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500">
                        {cs.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 rounded-2xl border border-rose-100 bg-orange-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <XCircle
                        size={18}
                        className="text-orange-500"
                        strokeWidth={2}
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-700">
                        Before
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {cs.before.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-0.5 text-orange-300">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      <li className="flex gap-2 italic text-slate-800">
                        <span>&bull;</span>
                        <span>+ 3 more on full page...</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 rounded-2xl border border-emerald-100 bg-blue-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-blue-600"
                        strokeWidth={2}
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                        After
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {cs.after.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-0.5 text-blue-300">&bull;</span>
                          <span className="text-slate-800">{item}</span>
                        </li>
                      ))}
                      <li className="flex gap-2 italic text-slate-800">
                        <span>&bull;</span>
                        <span>+ 3 more on full page...</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={cs.route}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1a237e] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0f1a5e]"
                    >
                      Explore Full Case Study
                      <span className="text-lg">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-4 text-center">
          <div className="mx-auto inline-flex max-w-6xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-3 text-sm text-amber-800">
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
