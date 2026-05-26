"use client";

import Link from "next/link";

import CTA from "@/components/screens/home/CTA";

const idealClientItems = [
  "Contractors managing multiple projects seeking consistency between field and office operations",
  "Organizations looking to standardize documentation across teams and workflows",
  "Teams operating in high-volume or complex environments where documentation clarity is critical",
  "Organizations preparing for or operating within disaster-related environments requiring structured documentation readiness",
  "Businesses focused on long-term operational scalability rather than short-term fixes",
  "Teams willing to implement structured processes to improve documentation consistency and alignment",
  "Organizations seeking clarity, transparency, and repeatability across project documentation",
];

const ThisFor = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-6">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-blue-50 sm:text-sm"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Solutions
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-black">
            PERFECT FIT
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            This System Is Designed for Organizations That Require Operational
            Control, Not Just Documentation Visibility
          </h2>
        </div>

        <div className="mx-auto mb-16 max-w-7xl text-center">
          <p className="text-xl leading-relaxed text-gray-600">
            ClaimScope(TM) Consulting is designed for organizations that
            recognize the importance of structured documentation, operational
            alignment, and scalable systems. This approach is best suited for
            teams committed to improving how documentation is created,
            maintained, and carried through execution.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-10 shadow-xl md:p-14">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Ideal Client Profile
          </h3>

          <div className="grid gap-x-12 gap-y-6 text-gray-700 md:grid-cols-2">
            {idealClientItems.map((item) => (
              <div key={item} className="flex gap-4">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl py-4 text-center">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm md:p-10">
            <p className="text-lg leading-relaxed text-gray-700">
              If your organization is focused on building structured,
              consistent, and scalable documentation systems, ClaimScope(TM)
              provides a governance-based approach designed to support those
              objectives.
            </p>
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default ThisFor;
