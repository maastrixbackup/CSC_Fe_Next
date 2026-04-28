"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import HomepageAudienceSections from "../home/Audience";

type SolutionTrackTemplateProps = {
  badge: string;
  title: string;
  description: string;
  calendlyUrl: string;
  consultationLabel: string;
  exploreLabel: string;
  executionTitle: string;
  executionDescription: string;
  positioningText: string;
  continuityTitle: string;
  continuitySteps?: string[];
  capabilityItems: string[];
  outcomeItems: string[];
  ctaTitle: string;
};

export default function SolutionTrackTemplate({
  badge,
  title,
  description,
  calendlyUrl,
  consultationLabel,
  exploreLabel,
  executionTitle,
  executionDescription,
  positioningText,
  continuityTitle,
  continuitySteps,
  capabilityItems,
  outcomeItems,
  ctaTitle,
}: SolutionTrackTemplateProps) {
  const router = useRouter();

  const scrollToFramework = () => {
    const section = document.getElementById("track-framework");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white pt-16 text-slate-900">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => router.push("/solutions")}
            className="group mb-4 flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Solutions
          </button>

          <div className="mb-4 inline-block rounded-lg bg-[#1a237e] px-4 py-2 text-sm font-semibold">
            {badge}
          </div>

          <h1 className="mb-6 text-2xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>

          <p className="max-w-4xl text-xl leading-relaxed text-slate-200">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#1E2E66] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#0d47a1]"
            >
              {consultationLabel} <ExternalLink size={18} />
            </a>

            {exploreLabel ? (
              <button
                type="button"
                onClick={scrollToFramework}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F06600] px-8 py-4 font-semibold text-white transition hover:bg-[#e65100]"
              >
                {exploreLabel} <ArrowRight size={18} />
              </button>
            ) : null}
          </div>

          <p className="mt-6 text-sm text-slate-300">
            Advisory-only. No claim handling, negotiation, representation, or
            third-party communication.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Execution Gap
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                {executionTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {executionDescription}
              </p>
            </div>

            <Image
              src="/assets/exe-gap.png"
              alt="Execution gap diagram"
              width={1200}
              height={900}
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#eef4ff_50%,#e0ecff_100%)] p-8 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
            System Positioning
          </p>
          <h2 className="mt-4 max-w-7xl text-lg font-bold leading-tight md:text-4xl">
            {positioningText}
          </h2>
        </div>
      </section>

      <section id="track-framework" className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Image
              src="/assets/continuoty.png"
              alt="Continuity framework"
              width={1200}
              height={900}
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Continuity Framework
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                {continuityTitle}
              </h2>

              {continuitySteps?.length ? (
                <div className="mt-8 space-y-4">
                  {continuitySteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1a237e] font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-lg font-semibold text-slate-800">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
              Capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a237e] text-white">
                  <ArrowRight size={18} />
                </div>
                <h3 className="text-lg font-semibold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
              Outcomes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomeItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <CheckCircle className="mx-auto mb-4 h-10 w-10 text-[#1a237e]" />
                <h3 className="text-lg font-semibold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="bg-blue-60 px-6 py-16 text-black">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7EB3FF]">
              Case Study Preview
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From fragmented documentation to aligned execution across multiple
              projects.
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-base leading-8 text-black">
              From fragmented documentation to aligned execution across
              multiple projects.
            </p>
            <button
              // onClick={() =>{
              //   window.scrollTo({ top: 0, behavior: "smooth" });
              //   navigate("/case-study")}}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border bg-[#1a237e] px-6 py-4 font-semibold text-white transition hover:bg-[#0d47a1] hover:text-white"
            >
              View Full Case Study <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
 <section className="
      ">
        <HomepageAudienceSections />
      </section>

      <section className="pb-20 pt-4">
        <div className="mx-auto bg-[linear-gradient(135deg,#1C2F5C_0%,#162448_60%,#0f1a35_100%)] py-14 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:px-12">
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">{ctaTitle}</h2>

          <div className="mt-8">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a237e] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-2xl transition-all duration-300 hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50 sm:px-8 sm:py-4 sm:text-base"
            >
              {consultationLabel} <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
