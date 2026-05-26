"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Cta from "@/components/screens/home/CTA";
import { scaleIn } from "@/components/animations/motionVariants";

type Service = {
  id?: number | string;
  status?: number | string;
  slug?: string;
  title?: string;
  track_heading?: string;
  card_desc?: string;
  card_features?: string[] | string;
};

type NormalizedServiceCard = {
  id: number | string;
  slug: string;
  routePath: string;
  name: string;
  description: string;
  problemStatement: string;
  features: string[];
};

const safeTrim = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const stripTrackPrefix = (value: unknown) =>
  typeof value === "string"
    ? value.replace(/^Track\s*\d+\s*[-:]\s*/i, "")
    : "";

const compactList = (value: Service["card_features"]) =>
  Array.isArray(value)
    ? value.filter((item): item is string => Boolean(item))
    : typeof value === "string"
      ? value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

const normalizeServiceList = (response: unknown): Service[] => {
  if (Array.isArray(response)) {
    return response;
  }

  if (
    response &&
    typeof response === "object" &&
    "data" in response &&
    Array.isArray(response.data)
  ) {
    return response.data as Service[];
  }

  if (
    response &&
    typeof response === "object" &&
    "data" in response &&
    response.data &&
    typeof response.data === "object" &&
    "data" in response.data &&
    Array.isArray(response.data.data)
  ) {
    return response.data.data as Service[];
  }

  if (
    response &&
    typeof response === "object" &&
    "services" in response &&
    Array.isArray(response.services)
  ) {
    return response.services as Service[];
  }

  return [];
};

const getTrackContent = (service: Service, serviceName: string) => {
  const normalizedName = serviceName.toLowerCase();

  if (normalizedName.includes("contractor")) {
    return {
      routePath: "/solutions/contractor-tracks",
      forText: "Contractors managing multiple jobs and crews",
      problemText:
        "Aligns field and office documentation to ensure scope, tracking, and execution remain consistent across projects.",
    };
  }

  if (
    normalizedName.includes("real estate") ||
    normalizedName.includes("reo")
  ) {
    return {
      routePath: "/solutions/reo-tracks",
      forText: "Investors, asset managers, and multi-property operators",
      problemText:
        "Standardizes documentation across property portfolios to eliminate reporting inconsistency and decision drift.",
    };
  }

  if (normalizedName.includes("disaster")) {
    return {
      routePath: "/solutions/disaster",
      forText: "Municipalities, nonprofits, and emergency response teams",
      problemText:
        "Prepares organizations to implement structured documentation before, during, and after disaster events.",
    };
  }

  return {
    routePath: "/solutions",
    forText: safeTrim(service.card_desc) || safeTrim(service.title),
    problemText:
      "Eliminates disconnect between scope, tracking, and execution documentation.",
  };
};

export default function SolutionsClient() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoadingServices, setIsLoadingServices] = useState(false);
  const [servicesError, setServicesError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setIsLoadingServices(true);
        setServicesError("");

        const response = await fetch("/api/services", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed (${response.status})`);
        }

        const json = (await response.json()) as unknown;
        setServices(normalizeServiceList(json));
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error(error);
        setServicesError("Failed to load services.");
      } finally {
        setIsLoadingServices(false);
      }
    };

    void fetchServices();

    return () => controller.abort();
  }, []);

  const serviceCards = useMemo<NormalizedServiceCard[]>(() => {
    return services
      .filter((service) => Number(service.status ?? 1) === 1)
      .map((service, index) => {
        const serviceName =
          safeTrim(service.title) ||
          stripTrackPrefix(service.track_heading) ||
          "Service";

        const trackContent = getTrackContent(service, serviceName);

        return {
          id: service.id ?? index,
          slug: safeTrim(service.slug),
          routePath: trackContent.routePath,
          name: serviceName,
          description: trackContent.forText,
          problemStatement: trackContent.problemText,
          features: compactList(service.card_features),
        };
      });
  }, [services]);

  return (
    <main className="w-full bg-white text-gray-800">
      <section className="bg-[#1C2F5C] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl mt-10">
            Select the Operational Environment You Need to Standardize
          </h1>

          <p className="mx-auto max-w-7xl text-xl text-gray-300">
            Each track applies the same ClaimScope™ governance system, adapted
            to your operational environment.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-8 text-center md:py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            One System. Three Operational Tracks.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            ClaimScope™ does not change per industry. The governance system
            remains consistent, only the application changes. Each track applies
            the same structured framework to different operational environments.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Professional Service Tracks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Structured consulting services focused on documentation governance
              and operational readiness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoadingServices && (
              <div className="col-span-full py-12 text-center text-slate-500">
                Loading service tracks...
              </div>
            )}

            {!isLoadingServices && servicesError && (
              <div className="col-span-full py-12 text-center text-red-600">
                {servicesError}
              </div>
            )}

            {!isLoadingServices &&
              !servicesError &&
              serviceCards.map((service) => (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
                >
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {service.name}
                  </h3>

                  <div className="mb-6">
                    <p className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-600">
                      WHO IT&apos;S FOR
                    </p>
                    <p className="text-slate-700">{service.description}</p>
                  </div>

                  <div className="mb-8">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-600">
                      PROBLEM IT SOLVES
                    </p>
                    <p className="text-[15px] text-slate-700">
                      {service.problemStatement}
                    </p>
                  </div>

                  {service.features.length > 0 && (
                    <div className="mb-10 flex-grow">
                      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-600">
                        CAPABILITIES
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={`${service.id}-${index}`} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1E2E66]" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={service.routePath}
                    className="mt-auto block w-full rounded-2xl bg-[#1a237e] py-4 text-center font-semibold text-white transition-all hover:bg-[#0f1a5e]"
                  >
                    View Track Details
                  </Link>
                </motion.div>
              ))}

            {!isLoadingServices &&
              !servicesError &&
              serviceCards.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500">
                  No active service tracks are available right now.
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
            Regardless of track, the underlying system remains the same:
            structured documentation governance from intake through execution.
          </p>
        </div>
      </section>

      <section className="bg-[#1C2F5C] px-6 text-center text-white">
        <Cta
          title="Move from Fragmented Documentation to Controlled Operations"
       
          ctaLabel="Start Structured Documentation Assessment"
          ctaHref="/schedule"
          subheading="Start with a structured documentation assessment"
        />
      </section>

      <section className="border-t border-slate-100 bg-white px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8">
            <h3 className="mb-4 text-lg font-semibold text-slate-800">
              Important Compliance Note
            </h3>
            <p className="leading-relaxed text-slate-600">
              ClaimScope™ provides advisory-only documentation governance
              consulting. No claim handling, negotiation, representation, or
              third-party communication is performed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
