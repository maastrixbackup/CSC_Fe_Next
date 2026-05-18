"use client";

import { useEffect, useState } from "react";

const exclusions = [
  "Claim negotiation or representation",
  "Third-party communication",
];

export default function NotForEveryone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F1F4F8] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-red-600 transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            IMPORTANT
          </div>

          <h2
            className={`mb-8 text-3xl font-bold leading-tight text-[#1a237e] transition-all delay-100 duration-700 md:text-4xl lg:text-4xl ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            This System Is Not Designed for Every Organization
          </h2>

          <p
            className={`mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 transition-all delay-200 duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Specifically, it is{" "}
            <span className="font-semibold text-red-600">not designed</span>{" "}
            for:
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {exclusions.map((item, index) => (
            <div
              key={item}
              className={`group flex items-start gap-6 rounded-3xl border-2 border-red-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-600 hover:shadow-xl ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold leading-tight text-gray-900">
                  {item}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  This system does not support or facilitate these activities.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mx-auto mt-16 max-w-5xl text-center transition-all delay-[600ms] duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-lg leading-relaxed text-gray-600">
            ClaimScope&trade; is a{" "}
            <span className="font-bold text-[#1a237e]">
              documentation and continuity system
            </span>{" "}
            built for organizations that require structured alignment from
            intake through execution. If that is not your need, this is not
            your system.
          </p>
        </div>
      </div>
    </div>
  );
}
