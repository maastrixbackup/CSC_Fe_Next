"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import Engagement from "@/components/screens/pricing/Engagement";
import OngoingTrack from "@/components/screens/pricing/OngoingTrack";
import CtaBanner from "@/components/screens/home/CTA";
import {
  buttonMotion,
  cardHover,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
} from "@/components/animations/motionVariants";
import { API_URL } from "@/utils/config";

type RawTrackPlan = {
  id?: number | string;
  title?: string;
  price?: number | string | null;
  btnText?: string;
  calendlyLink?: string;
  calendly_link?: string;
  features?: string[];
  status?: number | string;
};

type RawTrack = {
  track_heading?: string;
  plans?: RawTrackPlan[];
  id?: number | string;
  title?: string;
  price?: number | string | null;
  btnText?: string;
  calendlyLink?: string;
  calendly_link?: string;
  features?: string[];
  status?: number | string;
};

type PricingTrack = {
  title: string;
  plans: Array<{
    id: number | string;
    name: string;
    price: string;
    buttonText: string;
    calendlyLink: string;
    features: string[];
  }>;
};

const safeTrim = (value: unknown) => (value == null ? "" : String(value).trim());

const normalizeTrackHeadingKey = (value: string) =>
  safeTrim(value).replace(/[—-]/g, "-");

const parseSortId = (value: unknown) => {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : Number.POSITIVE_INFINITY;
};

const formatPrice = (price: unknown) => {
  if (price == null) return "";
  if (safeTrim(price) === "") return "";

  const numeric = Number(price);
  if (Number.isNaN(numeric)) return safeTrim(price) || "Contact Us";
  if (numeric <= 0) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numeric);
};

const normalizeTrackPayload = (payload: unknown): RawTrack[] => {
  const rawTracks = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { data?: unknown })?.data)
      ? ((payload as { data: RawTrack[] }).data ?? [])
      : Array.isArray((payload as { data?: { data?: RawTrack[] } })?.data?.data)
        ? ((payload as { data: { data: RawTrack[] } }).data.data ?? [])
        : [];

  const tracksWithPlans = rawTracks.filter((item) => Array.isArray(item?.plans));
  if (tracksWithPlans.length > 0) return tracksWithPlans;

  const grouped: Record<string, RawTrack> = {};
  rawTracks.forEach((item) => {
    const heading = safeTrim(item?.track_heading) || "Service Track";
    if (!grouped[heading]) {
      grouped[heading] = { track_heading: heading, plans: [] };
    }
    grouped[heading].plans?.push(item);
  });

  return Object.values(grouped);
};

const CALENDLY_BY_TRACK_HEADING: Record<string, string> = {
  "Track 1 - Contractor Documentation Governance":
    "https://calendly.com/twalker-claimscopeconsulting/contractor-governance-audit",
  "Track 2 - Real Estate / REO Documentation Governance":
    "https://calendly.com/twalker-claimscopeconsulting/portfolio-documentation-governance-review-45-minutes",
  "Track 3 - Disaster Documentation Readiness (Education-Only)":
    "https://calendly.com/twalker-claimscopeconsulting/disaster-documentation-governance-review",
};

function ScheduleButton({
  plan,
}: {
  plan: PricingTrack["plans"][number];
}) {
  if (plan.calendlyLink) {
    return (
      <motion.a
        href={plan.calendlyLink}
        target="_blank"
        rel="noreferrer"
        variants={buttonMotion}
        whileHover="whileHover"
        whileTap="whileTap"
        className="mb-4 flex min-h-[44px] w-full items-center justify-center rounded bg-[#1a237e] px-2 py-3 text-center text-xs font-semibold text-white transition-all duration-300 hover:bg-[#0d47a1] sm:mb-6 sm:text-sm"
      >
        {plan.buttonText || "Request Consultation"}
      </motion.a>
    );
  }

  return (
    <motion.button
      variants={buttonMotion}
      whileHover="whileHover"
      whileTap="whileTap"
      className="mb-4 flex min-h-[44px] w-full cursor-not-allowed items-center justify-center rounded bg-gray-400 px-2 py-3 text-center text-xs font-semibold text-white opacity-75 transition-all duration-300 sm:mb-6 sm:text-sm"
      disabled
    >
      {plan.buttonText || "Coming Soon"}
    </motion.button>
  );
}

export default function PricingSection() {
  const [tracksData, setTracksData] = useState<RawTrack[]>([]);
  const [isLoadingTracks, setIsLoadingTracks] = useState(false);
  const [tracksError, setTracksError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadTracks = async () => {
      try {
        setTracksError("");
        setIsLoadingTracks(true);

        const response = await fetch(`${API_URL}pricing/all-tracks`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch tracks (${response.status})`);
        }

        const result = await response.json();
        setTracksData(normalizeTrackPayload(result));
      } catch (error) {
        if ((error as { name?: string })?.name === "AbortError") return;
        console.error("Error loading pricing tracks:", error);
        setTracksError(
          "Unable to load pricing right now. Please refresh and try again.",
        );
      } finally {
        setIsLoadingTracks(false);
      }
    };

    void loadTracks();

    return () => controller.abort();
  }, []);

  const tracks = useMemo<PricingTrack[]>(() => {
    return tracksData.map((track, trackIndex) => {
      const heading =
        safeTrim(track?.track_heading) || `Track ${trackIndex + 1}`;
      const headingKey = normalizeTrackHeadingKey(heading);
      const fallbackCalendlyLink = CALENDLY_BY_TRACK_HEADING[headingKey];

      const orderedPlans = (Array.isArray(track?.plans) ? track.plans : [])
        .filter((plan) => Number(plan?.status ?? 1) === 1)
        .sort((a, b) => {
          const idDiff = parseSortId(a?.id) - parseSortId(b?.id);
          if (idDiff !== 0) return idDiff;
          return safeTrim(a?.title).localeCompare(safeTrim(b?.title));
        });

      const plans = orderedPlans.map((plan, planIndex) => ({
        id: plan?.id ?? `${heading}-${planIndex}`,
        name: safeTrim(plan?.title) || `Plan ${planIndex + 1}`,
        price: formatPrice(plan?.price),
        buttonText: safeTrim(plan?.btnText) || "Request Consultation",
        calendlyLink:
          safeTrim(plan?.calendlyLink) ||
          safeTrim(plan?.calendly_link) ||
          (planIndex === 0 ? fallbackCalendlyLink : ""),
        features: Array.isArray(plan?.features)
          ? plan.features.map((feature) => safeTrim(feature)).filter(Boolean)
          : [],
      }));

      return {
        title: heading,
        plans,
      };
    });
  }, [tracksData]);

  return (
    <section className="mt-12 min-h-screen bg-white px-3 py-8 sm:px-6 sm:py-12 lg:py-20 md:mt-0">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-8 text-center sm:mb-12 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.h1
            className="mb-4 text-2xl font-bold leading-tight text-[#1a237e] sm:text-3xl lg:text-4xl sm:mb-6"
            variants={fadeUp}
          >
            Consultation Services
          </motion.h1>

          <motion.div
            className="mx-auto max-w-7xl px-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:mb-6"
              variants={fadeUp}
            >
              ClaimScope Consulting, LLC provides structured documentation
              readiness consulting for contractors, property stakeholders, and
              organizations seeking to improve documentation governance, file
              organization, and disaster readiness practices.
            </motion.p>

            <motion.div
              className="mb-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:mb-8 sm:p-6"
              variants={scaleIn}
            >
              <motion.h3
                className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg"
                variants={fadeUp}
              >
                All consultations focus on:
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 gap-2 text-left sm:grid-cols-3 sm:gap-3"
                variants={staggerFast}
              >
                {[
                  "Documentation structure review",
                  "File organization best practices",
                  "Documentation readiness assessment",
                  "Process improvement guidance",
                  "Disaster documentation education",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className={`flex items-start gap-2 ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                    variants={scaleIn}
                  >
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                    <span className="text-sm text-gray-700 sm:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-lg border border-amber-200 bg-orange-100 p-4 sm:p-5"
              variants={scaleIn}
            >
              <motion.h4
                className="mb-2 text-sm font-semibold text-gray-600 sm:mb-3 sm:text-base"
                variants={fadeUp}
              >
                Compliance Notice:
              </motion.h4>
              <motion.p
                className="text-xs leading-relaxed text-gray-600 sm:text-sm"
                variants={fadeUp}
              >
                ClaimScope Consulting, LLC operates strictly in a
                consulting-only capacity. CSC does not provide claim
                negotiation, representation, advocacy, legal advice, or
                third-party communication services.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {isLoadingTracks ? (
          <div className="py-10 text-center text-slate-500">
            Loading pricing tracks...
          </div>
        ) : null}

        {!isLoadingTracks && tracksError ? (
          <div className="py-10 text-center text-red-600">{tracksError}</div>
        ) : null}

        {!isLoadingTracks && !tracksError
          ? tracks.map((track, index) => (
              <motion.div
                key={`${track.title}-${index}`}
                className="mb-12 sm:mb-16 lg:mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
              >
                <motion.h2
                  className="mb-6 px-2 text-center text-lg font-bold leading-tight text-[#1a237e] sm:mb-8 sm:text-xl lg:mb-10 lg:text-2xl"
                  variants={fadeUp}
                >
                  {track.title}
                </motion.h2>

                <motion.div
                  className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
                  variants={staggerContainer}
                >
                  {track.plans.map((plan, i) => (
                    <motion.div
                      key={plan.id || i}
                      className={`rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-all duration-500 hover:shadow-xl sm:rounded-3xl sm:p-6 sm:hover:shadow-2xl lg:p-8 ${
                        index === 0 ? "flex flex-col" : ""
                      }`}
                      variants={scaleIn}
                      whileHover={cardHover.whileHover}
                    >
                      <motion.h3
                        className="mb-3 px-1 text-center text-base font-bold leading-tight text-gray-900 sm:mb-4 sm:text-lg lg:text-xl"
                        variants={fadeUp}
                      >
                        {plan.name}
                      </motion.h3>

                      <motion.div
                        className="mb-4 text-center sm:mb-6"
                        variants={fadeUp}
                      >
                        <span className="text-2xl font-bold text-gray-900 sm:text-3xl">
                          {plan.price}
                        </span>
                      </motion.div>

                      {index === 0 ? <div className="flex-1" /> : null}

                      <ScheduleButton plan={plan} />

                      <motion.ul
                        className="space-y-2 sm:space-y-3"
                        variants={staggerFast}
                      >
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={`${feature}-${featureIndex}`}
                            className="flex items-start gap-2 sm:gap-3"
                            variants={scaleIn}
                          >
                            <Check className="mt-1 h-3 w-3 flex-shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                            <span className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-6 rounded-lg border border-orange-300 bg-orange-100 p-3 sm:mt-8 sm:p-4"
                  variants={scaleIn}
                >
                  <motion.p
                    className="mb-2 px-1 text-center text-xs leading-relaxed text-gray-600 sm:text-sm"
                    variants={fadeUp}
                  >
                    ClaimScope Consulting, LLC provides consulting-only and
                    education-only documentation readiness services. CSC does
                    not negotiate claims, provide representation, submit
                    applications, prepare claims, or communicate with insurers,
                    carriers, FEMA, or any third parties on behalf of clients.
                  </motion.p>
                  <motion.p
                    className="px-1 text-center text-xs leading-relaxed text-gray-600 sm:text-sm"
                    variants={fadeUp}
                  >
                    CSC does not provide public adjusting services, legal
                    services, or construction contracting services.
                  </motion.p>
                </motion.div>
              </motion.div>
            ))
          : null}

        <motion.div
          className="px-2 sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Engagement />
        </motion.div>

        <motion.div
          className="px-2 sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <OngoingTrack />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <CtaBanner
            title="Move from documentation drift to structured advisory control"
            body="If your organization is ready to implement structured documentation governance and improve consistency across operations, the next step is a consultation."
            ctaLabel="Schedule Consultation"
            ctaHref="/contact"
            subheading="Start with a structured documentation assessment"
            compliance="Advisory-only. No third-party communication, representation, or claim handling."
          />
        </motion.div>
      </div>
    </section>
  );
}
