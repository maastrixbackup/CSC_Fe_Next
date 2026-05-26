"use client";

import { useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const serviceTracks = [
  {
    id: "track1",
    title: "Contractor Documentation Governance Audit",
    price: "$950",
    duration: "(45 minutes)",
    description:
      "Structured review of contractor documentation workflows, file organization, and internal documentation controls.",
    buttonLabel: "Schedule Contractor Audit",
    url: "https://calendly.com/twalker-claimscopeconsulting/contractor-governance-audit",
  },
  {
    id: "track2",
    title: "Portfolio Governance Review",
    price: "$1,750",
    duration: "(45 minutes)",
    description:
      "Portfolio-level documentation system review and record governance analysis for comprehensive oversight.",
    buttonLabel: "Schedule Portfolio Review",
    url: "https://calendly.com/twalker-claimscopeconsulting/portfolio-documentation-governance-review-45-minutes",
  },
  {
    id: "track3",
    title: "Disaster Documentation Readiness Audit",
    price: "$950",
    duration: "(45 minutes)",
    description:
      "Disaster documentation structuring review and FEMA IA/PA education clarification (education-only).",
    buttonLabel: "Schedule Disaster Audit",
    url: "https://calendly.com/twalker-claimscopeconsulting/disaster-documentation-governance-review",
  },
] as const;

export default function Schedule() {
  const track1Ref = useRef<HTMLDivElement | null>(null);
  const track2Ref = useRef<HTMLDivElement | null>(null);
  const track3Ref = useRef<HTMLDivElement | null>(null);

  const embedRefs = {
    track1: track1Ref,
    track2: track2Ref,
    track3: track3Ref,
  };

  const scrollToEmbed = (trackId: keyof typeof embedRefs) => {
    embedRefs[trackId].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const openCalendlyPopup = (url: string) => {
    window.Calendly?.initPopupWidget({ url });
  };

  return (
    <>
      <Script
        id="calendly-widget"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="bg-gray-50 text-gray-800">
        <section className="bg-gradient-to-r from-[#0a0f2e] to-[#1a237e] px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center py-10">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Schedule Your Documentation Readiness Consultation
            </h1>
            <p className="mb-4 text-xl text-gray-200 md:text-2xl">
              Select the service track that aligns with your documentation
              needs. All sessions are 45 minutes and consulting-only.
            </p>
            <p className="text-sm italic text-gray-300">
              No claim negotiation, representation, or third-party
              communications are provided.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Service Track Selection
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviceTracks.map((track) => (
              <div
                key={track.id}
                className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg"
              >
                <h3 className="mb-4 min-h-[4rem] text-2xl font-bold">
                  {track.title}
                </h3>
                <p className="mb-2 text-3xl font-bold text-[#1a237e]">
                  {track.price}
                </p>
                <p className="mb-4 text-sm text-gray-500">{track.duration}</p>
                <p className="mb-6 flex-grow text-gray-600">
                  {track.description}
                </p>
                <button
                  type="button"
                  onClick={() => scrollToEmbed(track.id)}
                  className="mb-6 w-full rounded-lg bg-[#1a237e] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  {track.buttonLabel}
                </button>
                <div ref={embedRefs[track.id]} className="mt-auto w-full">
                  <div
                    className="calendly-inline-widget"
                    data-url={track.url}
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Not Sure Which Service Track Fits?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              If you are unsure which service applies to your documentation
              needs, schedule the Contractor Documentation Governance Audit as
              an initial assessment.
            </p>
            <button
              type="button"
              onClick={() => openCalendlyPopup(serviceTracks[0].url)}
              className="rounded-lg bg-[#1a237e] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule Initial Assessment
            </button>
          </div>
        </section>

     
      <section className="bg-navy  text- py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm leading-relaxed">
            ClaimScope™ Consulting provides documentation readiness consulting only.
            No claim negotiation, representation, legal advice, application preparation,
            submission services, or third-party communications are provided.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}
