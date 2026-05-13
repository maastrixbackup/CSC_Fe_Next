import { BookOpen } from "lucide-react";

const features = [
  "Documentation Readiness Education",
  "Operational Continuity Awareness",
  "Contractor Documentation Workflow Training",
  "Disaster Documentation Preparedness Modules",
  "FEMA IA/PA Educational Awareness Content",
  "Internal Process Structure Guidance",
  "Governance and Auditability Awareness",
  "Educational Intake & Evidence Organization Standards",
  "Structured Training Paths & Downloadable Resources",
];

export default function LMSPlatformOverview() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
      <section
        className="relative overflow-hidden rounded-[28px] px-5 py-8 sm:px-6 md:rounded-[32px] md:px-10 md:py-14"
        style={{
          background:
            "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
        }}
      >
        {/* GRID OVERLAY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dbe7f5] backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
              <BookOpen className="h-4 w-4" />
              Platform Overview
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              ClaimScope™ LMS provides structured educational content.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:mt-7 md:text-lg">
              ClaimScope™ LMS provides structured educational content focused
              on documentation readiness, process awareness, operational
              continuity concepts, disaster documentation preparedness, and
              governance-oriented workflow alignment.
            </p>
          </div>

          {/* RIGHT BULLET LIST */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6 md:rounded-[28px]">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 text-slate-100"
                >
                  {/* BULLET */}
             <span className="mt-[10px] h-2 w-2 min-w-[8px] rounded-full bg-[#3F5F8A]" />
                  {/* TEXT */}
                  <p className="text-sm font-medium leading-6 sm:leading-7 md:text-base">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
