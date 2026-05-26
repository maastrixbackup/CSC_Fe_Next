import Link from "next/link";

import CTA from "@/components/screens/home/CTA";
import { caseStudies } from "@/utils/constants";

const ShieldIcon = () => (
  <svg width="10" height="11" viewBox="0 0 12 14" fill="none">
    <path
      d="M6 1L1 3.5v4C1 10.5 3.5 13 6 13c2.5 0 5-2.5 5-5.5v-4L6 1z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

const FlowArrow = ({ mobile = false }) => (
  <div className={mobile ? "py-3" : "px-3"}>
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c5cae9] bg-[#e8eaf6] shadow-md">
      <svg
        className={`h-6 w-6 text-[#1a237e] ${mobile ? "rotate-90" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const EngagementContextCard = ({ context }) => (
  <div className="px-6 pb-2 pt-6 md:px-8">
    <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 md:p-6">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-800">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
            stroke="#1a237e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4 15 3 14 3H10C9 3 8 4 8 5V21"
            stroke="#1a237e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11H12.01"
            stroke="#1a237e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 15H12.01"
            stroke="#1a237e"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Engagement Context
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
            Industry
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {context.industry}
          </p>
        </div>
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
            Environment
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {context.environment}
          </p>
        </div>
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
            Initial State
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {context.initialState}
          </p>
        </div>
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
            Duration
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {context.duration}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function AllCases({ slug }) {
  const displayedCaseStudies = slug
    ? caseStudies.filter((cs) => cs.slug === slug)
    : caseStudies;

  if (slug && displayedCaseStudies.length === 0) {
    return (
      <div className="flex items-center justify-center bg-slate-50 px-4 py-24">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-slate-900">
            Case study not found
          </h2>
          <p className="mb-5 text-sm text-slate-500">
            The case study you are looking for does not exist.
          </p>
          <Link
            href="/case-study"
            className="text-sm font-medium text-[#1a237e] hover:text-[#0f1a5e]"
          >
            Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  const activeCaseStudy = displayedCaseStudies[0];

  return (
    <div className="mt-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans md:mt-12">
      <div className="border-b border-slate-100 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6">
            <Link
              href="/case-study"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e9efff]"
            >
              &larr; Back to Case Studies
            </Link>
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e8eaf6] px-4 py-1.5 text-xs font-medium tracking-wide text-[#1a237e]">
            ClaimScope Case Studies
          </span>

          <h1 className="mb-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            {activeCaseStudy ? activeCaseStudy.title : "All case studies"}
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-500 md:text-lg">
            {activeCaseStudy
              ? `Full documentation governance transformation for ${activeCaseStudy.title}: before, after, and scenario summary.`
              : "Full documentation governance transformations across industries with before, after, and scenario summaries."}
          </p>

          {!slug && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "3 case studies",
                "Advisory-only",
                "Documentation governance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-4 sm:px-6 md:gap-12 md:py-6">
        {displayedCaseStudies.map((cs) => (
          <div
            key={cs.id}
            className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg ${
              cs.isFlagship ? "ring-1 ring-slate-200 shadow-md" : ""
            }`}
          >
            <div
              className="px-6 py-4 text-center text-base font-bold uppercase tracking-wide md:px-8 md:py-5 md:text-lg"
              style={{ background: cs.accentColor, color: cs.accentBg }}
            >
              {cs.title}
            </div>

            <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${cs.iconBg}`}
                >
                  {cs.icon}
                </div>
                <div>
                  <div className="text-xl font-semibold text-slate-900">
                    {cs.title}
                  </div>
                  <div className="mt-0.5 text-md text-slate-500">
                    {cs.subtitle}
                  </div>
                </div>
              </div>
            </div>

            <EngagementContextCard context={cs.engagementContext} />

            <div className="lg:hidden">
              <div className="border-b border-slate-100 px-6 py-7 md:px-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
                    Before
                  </span>
                  <span className="text-xs text-slate-400">fragmented</span>
                </div>
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5 md:p-6">
                  <ul className="space-y-2.5">
                    {cs.before.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-red-900"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-red-100 pt-3 text-sm font-medium text-red-700">
                    This created operational inconsistency that compounded
                    across projects and reduced visibility into actual
                    performance.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <FlowArrow mobile />
              </div>

              <div className="border-t border-slate-100 px-6 py-7 md:px-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    After
                  </span>
                  <span className="text-xs text-slate-400">governed</span>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                  <ul className="space-y-2.5">
                    {cs.after.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-emerald-900"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr]">
              <div className="border-r border-slate-100 px-6 py-8 md:px-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                  <span className="text-xl font-semibold uppercase tracking-wider text-red-700">
                    Before
                  </span>
                  <span className="text-xs text-slate-400">fragmented</span>
                </div>
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5 md:p-6">
                  <ul className="space-y-2.5">
                    {cs.before.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-md leading-relaxed text-red-900"
                      >
                        <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 border-t border-red-100 pt-3 text-md font-medium text-red-700">
                  This created operational inconsistency that compounded across
                  projects and reduced visibility into actual performance.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <FlowArrow />
              </div>

              <div className="border-l border-slate-100 px-6 py-8 md:px-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-xl font-semibold uppercase tracking-wider text-emerald-700">
                    After
                  </span>
                  <span className="text-xs text-slate-400">governed</span>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                  <ul className="space-y-2.5">
                    {cs.after.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-md leading-relaxed text-emerald-900"
                      >
                        <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl border-2 border-slate-100 bg-white px-6 py-12 md:px-8">
              <p className="mb-2.5 text-xl font-semibold uppercase tracking-wider text-blue-600">
                Scenario Summary
              </p>
              <p className="mb-5 text-md leading-relaxed text-slate-600">
                {cs.summary}
              </p>

              <p className="mb-5 rounded-xl border-l-4 border-r-4 border-blue-600 bg-indigo-50/30 p-4 text-md leading-relaxed text-slate-700">
                This transformation was achieved through structured
                implementation of the ClaimScope Continuity Framework, ensuring
                documentation is not only created, but validated, aligned, and
                maintained through execution.
              </p>

              <p className="mb-5 text-md leading-relaxed text-slate-600">
                Results were achieved through structured documentation alignment
                across active operations, not theoretical redesign.
              </p>

              <div className="mb-6">
                <h4 className="mb-3 flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-slate-800">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#1a237e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Operational Impact
                </h4>
                <ul className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <li className="flex items-start gap-2 text-md text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    Eliminated documentation variability across active projects
                  </li>
                  <li className="flex items-start gap-2 text-md text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    Established repeatable execution across teams and workflows
                  </li>
                  <li className="flex items-start gap-2 text-md text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    Improved decision-making through consistent, validated
                    records
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
                  <ShieldIcon />
                  Advisory-only. No claim handling, negotiation, or
                  representation.
                </span>

                {!slug && (
                  <Link
                    href={`/case-study/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: cs.accentColor }}
                  >
                    View full case study
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-6 text-center">
        <span className="inline-flex max-w-4xl items-center gap-2 rounded-xl border border-slate-200 bg-orange-50 px-5 py-3 text-xs text-slate-500 md:text-md">
          <ShieldIcon />
          All services provided were advisory and documentation-focused only. No
          claim handling, negotiation, representation, or third-party
          communication was performed.
        </span>
      </div>

      <CTA
        title="Ready to eliminate documentation inconsistency?"
        body="If your organization is experiencing similar documentation inconsistency, the next step is structured implementation."
        ctaLabel="Schedule a consultation"
        ctaHref="/schedule"
        compliance="Advisory-only. No claim handling, negotiation, representation, or third-party communication."
        subheading="Start your structured documentation assessment"
      />
    </div>
  );
}
