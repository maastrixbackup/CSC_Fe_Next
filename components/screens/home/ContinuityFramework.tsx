"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const windowWithDataLayer = window as Window & {
    dataLayer?: Record<string, unknown>[];
  };

  windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
  windowWithDataLayer.dataLayer.push(payload);
}

const frameworkSteps = [
  {
    step: 1,
    title: "Defined Scope",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Assumption Validation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Execution Alignment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Continuous Revalidation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function ContinuityFramework() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 md:px-6 md:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(30,58,138,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-800">
            Our Methodology
          </span>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            The ClaimScope <span className="text-blue-900">Continuity Framework</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            A structured system designed to ensure documentation remains aligned
            from intake through execution.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {frameworkSteps.map((item, index) => (
            <div
              key={item.step}
              className={`group relative flex flex-col items-center rounded-2xl border-4 border-blue-600 bg-white px-6 py-8 text-center shadow-sm transition-all duration-500 hover:bg-blue-50 hover:shadow-md ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white shadow">
                {item.step}
              </div>

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-base font-semibold leading-snug text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all delay-500 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              pushDataLayer({
                event: "cta_click",
                cta_name: "View Full Framework",
              });
              router.push("/schedule");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 bg-blue-900 px-10 py-5 text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-200 hover:bg-blue-800 hover:shadow-xl active:scale-[0.97] active:bg-blue-950 md:text-lg"
          >
            View Full Framework
          </button>
        </div>
      </div>
    </section>
  );
}
