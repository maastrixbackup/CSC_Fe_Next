"use client";

import Image from "next/image";

const midTierInclusions = [
  "Monthly 60-minute documentation governance advisory session",
  "Documentation structure and file hierarchy guidance",
  "Documentation workflow and record alignment review",
  "Governance improvement recommendations",
  "Access to ClaimScope documentation governance templates",
  "Up to two advisory email inquiries per month",
  "Consulting-only advisory service",
];

const enterpriseInclusions = [
  "Ongoing documentation system oversight",
  "Governance process advisory",
  "Documentation structure refinement",
  "Operational documentation alignment",
  "Executive advisory session",
  "Consulting-only service",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.5" stroke="#C9A96E" strokeWidth="1" />
      <path
        d="M4 7L6.2 9.5L10 4.5"
        stroke="#C9A96E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type RetainerCardProps = {
  badge: string;
  title: string;
  accentTitle: string;
  description: string;
  inclusions: string[];
  price: string;
  priceNote?: string;
  buttonText: string;
  calendlyUrl: string;
};

function RetainerCard({
  badge,
  title,
  accentTitle,
  description,
  inclusions,
  price,
  priceNote,
  buttonText,
  calendlyUrl,
}: RetainerCardProps) {
  return (
    <div className="relative w-full flex-1 rounded-lg px-2 sm:px-4">
      <div className="pointer-events-none absolute inset-[-20px] bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,169,110,0.12)_0%,transparent_70%)] sm:inset-[-40px] lg:inset-[-60px]" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[4px] border border-[rgba(201,169,110,0.25)] bg-gradient-to-b from-[#1A1710] via-[#141210] to-[#111010] shadow-lg">
        <div className="relative">
          <div className="absolute left-3 top-[-8px] z-10 sm:top-[-10px]">
            <Image src="/assets/star.png" alt="star" width={20} height={20} className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="absolute right-3 top-[-8px] z-10 sm:top-[-10px]">
            <Image src="/assets/star.png" alt="star" width={20} height={20} className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div
            className="h-[2px] opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, #C9A96E 30%, #E8D5A3 55%, #C9A96E 70%, transparent 100%)",
            }}
          />
        </div>

        <div className="flex flex-1 flex-col p-4 lg:p-5">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-[2px] border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.15)] px-3 py-1">
              <div className="h-[4px] w-[4px] rounded-full bg-[#C9A96E] sm:h-[5px] sm:w-[5px]" />
              <span className="text-[9px] font-medium uppercase italic tracking-[0.18em] text-[#C9A96E] sm:text-[10px]">
                {badge}
              </span>
            </div>
          </div>

          <h2 className="mb-2 text-[18px] font-normal leading-[1.2] tracking-[0.01em] text-[#F8F6F0] sm:text-[20px] lg:text-[22px]">
            <Image src="/assets/star.png" alt="star" width={16} height={16} className="mr-2 inline h-4 w-4" />
            {title}
            <br />
            <span className="font-medium text-[#D4B772]">{accentTitle}</span>
          </h2>

          <p className="mb-4 text-[11px] italic leading-[1.4] text-[rgba(248,246,240,0.9)] sm:text-[12px] lg:text-[13px]">
            {description}
          </p>

          <div className="mb-4 flex-grow">
            <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.18em] text-[rgba(201,169,110,0.7)] sm:text-[9px]">
              <Image src="/assets/star.png" alt="star" width={12} height={12} className="mr-1 inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Includes
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-[10px] leading-[1.3] text-[rgba(248,246,240,0.85)] sm:text-[11px] lg:text-[12px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3 h-px bg-gradient-to-r from-[rgba(201,169,110,0.4)] to-transparent" />

          <div className="mt-auto flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex-shrink-0">
              {priceNote ? (
                <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.16em] text-[rgba(201,169,110,0.7)] sm:text-[9px]">
                  <Image src="/assets/star.png" alt="star" width={8} height={8} className="mr-1 inline h-2 w-2" />
                  {priceNote}
                </p>
              ) : null}
              <p className="text-[20px] font-bold leading-none tracking-[-0.01em] text-[#D4B772] sm:text-[22px] lg:text-[24px]">
                {price}
                <span className="ml-1 text-[9px] font-normal tracking-[0.05em] text-[rgba(201,169,110,0.8)] sm:text-[10px] lg:text-[11px]">
                  / month
                </span>
              </p>
            </div>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-[3px] bg-gradient-to-r from-[#C9A96E] to-[#B8935A] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-[#D4B772] hover:to-[#C9A96E] hover:shadow-[0_8px_25px_rgba(201,169,110,0.4)] active:translate-y-0 active:scale-95 sm:w-auto sm:py-2.5"
            >
              <Image src="/assets/star.png" alt="star" width={12} height={12} className="h-2.5 w-2.5 flex-shrink-0 sm:h-3 sm:w-3" />
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0E0E0E] sm:text-[10px]">
                {buttonText}
              </span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.3)] to-transparent" />
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 transform sm:bottom-[-8px]">
            <Image src="/assets/star.png" alt="star" width={16} height={16} className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OngoingTrack() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="mb-8 max-w-6xl text-center">
        <h2 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-gray-900 sm:text-3xl lg:text-4xl">
          ONGOING DOCUMENTATION GOVERNANCE ADVISORY
        </h2>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-600 sm:text-base lg:text-lg">
          (ENTERPRISE RETAINER SECTION)
        </p>
      </div>

      <div className="flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:gap-8">
        <RetainerCard
          badge="Mid-Tier Advisory"
          title="Operational Documentation"
          accentTitle="Governance Retainer"
          description="Ongoing advisory support designed to help organizations maintain structured documentation governance practices, improve documentation clarity, and support long-term documentation organization across operational environments."
          inclusions={midTierInclusions}
          price="$2,500"
          buttonText="Schedule Advisory Consultation"
          calendlyUrl="https://calendly.com/twalker-claimscopeconsulting/operational-documentation-governance-retainer"
        />

        <RetainerCard
          badge="Enterprise Advisory"
          title="Enterprise Documentation"
          accentTitle="Governance Advisory"
          description="Ongoing documentation governance advisory for organizations seeking long-term operational documentation consistency and governance continuity."
          inclusions={enterpriseInclusions}
          price="$5,000"
          priceNote="Starting at"
          buttonText="Schedule Consultation"
          calendlyUrl="https://calendly.com/twalker-claimscopeconsulting/enterprise-documentation-governance-advisory"
        />
      </div>

      <div className="mt-12 max-w-4xl text-center">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <p className="text-xs leading-relaxed text-gray-600">
            ClaimScope Consulting, LLC operates strictly in a consulting-only
            capacity focused on documentation governance advisory and
            documentation readiness guidance. Services are advisory and
            educational in nature. ClaimScope Consulting, LLC does not provide
            claim negotiation, representation, advocacy services, legal advice,
            coverage determinations, claim preparation, or third-party
            communications.
          </p>
        </div>
      </div>
    </div>
  );
}
