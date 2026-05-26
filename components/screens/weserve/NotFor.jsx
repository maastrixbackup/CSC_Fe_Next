"use client";

import Link from "next/link";

import CTA from "@/components/screens/home/CTA";

const exclusionItems = [
  "Claim negotiation, representation, or advocacy services",
  "One-time fixes without process implementation",
  "Teams unwilling to follow structured documentation workflows",
  "Organizations expecting third-party communication",
  "Situations requiring legal or policy interpretation",
];

const NotFor = () => {
  return (
    <section className="bg-gray-50 py-16">
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold tracking-wide text-orange-700">
            IMPORTANT - PLEASE READ
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            This Approach Requires Operational Commitment
          </h2>
        </div>

        <div className="mx-auto mb-14 max-w-7xl text-center">
          <p className="text-xl leading-relaxed text-gray-600">
            This system is designed for organizations committed to implementing
            structured documentation governance, not those seeking quick fixes
            or external delegation.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm md:p-14">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            This Is NOT For
          </h3>

          <div className="grid gap-x-12 gap-y-6 text-gray-700 md:grid-cols-1 lg:grid-cols-2">
            {exclusionItems.map((item) => (
              <div key={item} className="flex gap-4">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl py-4 text-center">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 md:p-10">
            <p className="text-lg leading-relaxed text-gray-700">
              If your organization aligns with these standards, the next step
              is structured implementation.
            </p>
          </div>
        </div>
      </div>

      <CTA
        title="Move from Fragmented Documentation to Controlled Operations"
        body="Structured documentation governance begins with a controlled intake and validation process, not assumptions."
        ctaLabel="Start Structured Documentation Assessment"
        ctaHref="/schedule"
        compliance="Advisory-only. No claim negotiation, representation, or third-party communication."
        subheading="Start with a structured documentation assessment"
      />
    </section>
  );
};

export default NotFor;
