import React from "react";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";
import Exegap from "../../../assets/exe-gap.png";
import Continuity from "../../../assets/continuoty.png";
import Audience from '../../../newWeb/pages/weserve/Audience'
const capabilityItems = [
  "Disaster documentation readiness",
  "FEMA IA/PA education (advisory)",
  "Structured intake workflows",
  "Documentation validation",
];

const outcomeItems = [
  "Increased readiness",
  "Improved documentation clarity",
  "Structured disaster workflows",
  "Scalable response systems",
];

const audienceItems = [
  "Organizations preparing for disaster events",
  "Organizations responding to disaster events",
];

const exclusionItems = [
  "No claim handling",
  "No representation",
];

const calendlyUrl =
  "https://calendly.com/twalker-claimscopeconsulting/disaster-documentation-governance-review";

const Disaster = () => {
  const navigate = useNavigate();
  const rootElement =
    typeof document !== "undefined" ? document.getElementById("root") : null;

  return (
    <div className="bg-white text-slate-900">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/solutions")}
            className="group mb-6 flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Solutions
          </button>

          <div className="mb-4 inline-block rounded-lg bg-[#1a237e] px-4 py-2 text-sm font-semibold">
            Disaster Documentation Readiness + FEMA IA/PA Education
          </div>

          <h1 className="mb-6 text-xl font-bold leading-tight md:text-5xl">
            Disaster Response Fails When Documentation Isn&apos;t Structured.
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-slate-200">
            ClaimScope&trade; provides documentation readiness and FEMA IA/PA
            education (advisory-only).
          </p>

          <div className="mt-8">
            {rootElement ? (
              <PopupButton
                url={calendlyUrl}
                rootElement={rootElement}
                text={
                  <span className="flex items-center gap-2">
                    Schedule Consultation <ArrowRight size={18} />
                  </span>
                }
                className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#1E2E66] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#0d47a1] border-2 border-white"
              />
            ) : (
              <button className="inline-flex items-center justify-center rounded-xl bg-[#1E2E66] px-8 py-4 font-semibold text-white shadow-lg border-2 border-white">
                Schedule Consultation
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Execution Gap
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Documentation inconsistency reduces effectiveness under pressure.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                In disaster environments, documentation becomes inconsistent,
                incomplete, and misaligned, reducing effectiveness under pressure.
              </p>
            </div>

            <img
              src={Exegap}
              alt="Execution gap diagram for disaster documentation readiness"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>
{/* 
      <section className="px-6 py-8">
         <div className="mx-auto max-w-6xl rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#eef4ff_50%,#e0ecff_100%)] p-8 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7EB3FF]">
            System Positioning
          </p>
          <h2 className="mt-4 max-w-6xl text-3xl font-bold leading-tight md:text-4xl">
            Structured governance ensures documentation continuity before, during,
            and after disaster events.
          </h2>
        </div>
      </section> */}
      <section className="px-6 py-8 bg-[#f8fafc]">
  <div className="mx-auto max-w-7xl rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#eef4ff_50%,#e0ecff_100%)] p-8 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-12">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
      System Positioning
    </p>
    <h2 className="mt-4 max-w-7xl text-md font-bold leading-tight md:text-4xl">
          Structured governance ensures documentation continuity before, during,
            and after disaster events.
    </h2>
  </div>
</section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <img
              src={Continuity}
              alt="Continuity framework for disaster documentation readiness"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Continuity Framework
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Defined intake, validation, field alignment, and revalidation processes.
              </h2>
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
              onClick={() =>{
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/case-study")}}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border bg-[#1a237e] px-6 py-4 font-semibold text-white transition hover:bg-[#0d47a1] hover:text-white"
            >
              View Full Case Study <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="">
      <Audience />
      </section>

      <section className="px-6 pb-20 pt-4">
        <div className="mx-auto bg-[linear-gradient(135deg,#1C2F5C_0%,#162448_60%,#0f1a35_100%)] px-8 py-14 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:px-12">

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Prepare documentation before the next event.
          </h2>

        <div className="mt-8">
                   {rootElement ? (
                     <PopupButton
                       url={calendlyUrl}
                       rootElement={rootElement}
                       text={
                         <span className="flex items-center gap-2">
                           Schedule a Consultation <ArrowRight size={18} />
                         </span>
                       }
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#1a237e]/50"
                     />
                     
                   ) : (
                     <button  className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#1a237e]/50">
                       Schedule a Consultation
                     </button>
                   )}
                 </div>
        </div>
      </section>
    </div>
  );
};

export default Disaster;
