"use client";

import { useEffect, useState } from "react";

const exclusions = [
  "Claim Negotiation",
  "Claim Representation",
  "Claim Advocacy",
  "Insurance Adjusting",
  "Third Party Communications",
  "Legal Services",
];

export default function NotForEveryone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
     <div className="py-12 px-6 bg-[#F1F4F8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-200 bg-red-50 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            IMPORTANT
          </div>

          <h2 
            className={`text-3xl md:text-4xl lg:text-4xl font-bold text-[#1a237e] leading-tight mb-8 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            This System Is Not Designed 
            for Every Organization
          </h2>

          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Specifically, it is <span className="font-semibold text-orange-600">not designed</span> for:
          </p>
        </div>

        {/* Exclusions Grid - Matching Your CoreCapability Style */}
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exclusions.map((item, index) => (
            <div
              key={index}
              className={`group flex items-center gap-3 rounded-xl border border-red-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-orange-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

              <h3 className="text-base font-semibold leading-snug text-gray-900">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div 
          className={`mt-16 text-center max-w-5xl mx-auto transition-all duration-700 delay-[600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            ClaimScope™ is a{" "}
            <span className="font-bold text-[#1a237e]">
              documentation and continuity system
            </span>{" "}
            built for organizations that require structured alignment from intake through execution.
            If that is not your need, this is not your system.
          </p>
        </div>

      </div>
    </div>
  );
}
