"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomepageAudienceSections = () => {
  const router = useRouter();

  return (
    <>
      {/* Who This Is For */}
      <section className="py-8 md:py-12 bg-[linear-gradient(135deg,_#1C2F5C_0%,_#162448_60%,_#0f1a35_100%)]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-black px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              PERFECT FIT
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              This System Is Designed for Organizations That Require Operational Control — Not Just Documentation Visibility
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-7xl mx-auto text-center mb-6">
            <p className="text-xl text-white leading-7">
              ClaimScope™ Consulting is designed for organizations that recognize the importance of structured documentation,
              operational alignment, and scalable systems.
            </p>
          </div>

          {/* Ideal Client */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-xl rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center leading-tight">
              Ideal Client Profile
            </h3>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-blue-500 text-xl mt-1">•</span>
                <p>
                  Contractors managing multiple projects seeking consistency between field and office operations
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-blue-500 text-xl mt-1">•</span>
                <p>
                  Organizations looking to standardize documentation across teams and workflows
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 max-w-6xl mx-auto text-center">
            <p className="text-white leading-7">
              If your organization is focused on building structured, consistent, and scalable documentation systems,
              ClaimScope™ provides a governance-based approach designed to support those objectives.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                router.push("/use-cases");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block bg-[#1a237e] hover:bg-[#0f1a5e] text-white font-semibold py-4 px-24 rounded-lg transition duration-300 shadow-md hover:shadow-lg border-2 border-white"
            >
              View All Use Cases →
            </button>
          </div>

        </div>
      </section>

      {/* Not for Everyone */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              IMPORTANT — PLEASE READ
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              This System Is Not Designed For Every Organization
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-7xl mx-auto text-center mb-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              ClaimScope™ Consulting is built for organizations that value structured documentation, 
              operational alignment, and long-term scalability.
            </p>
          </div>

          {/* Exclusions */}
          <div className="bg-gray-100 border border-gray-200 shadow-sm rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              This Service Is NOT For
            </h3>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-orange-500 text-xl mt-1">•</span>
                <p>Organizations looking for claim negotiation, representation, or advocacy services</p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500 text-xl mt-1">•</span>
                <p>Individuals expecting ClaimScope™ to communicate with insurance carriers or third parties</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 max-w-6xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              ClaimScope™ Consulting is designed for organizations committed to implementing structured 
              documentation governance across their operations.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                router.push("/not-for-everyone");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block bg-[#1a237e] hover:bg-[#0d47a1] text-white font-semibold py-4 px-24 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Not for Everyone →
            </button>
          </div>

          {/* Compliance */}
          <div className="text-center mt-8 text-xs text-gray-400">
            Advisory-only • Documentation governance focused
          </div>

        </div>
      </section>
    </>
  );
};

export default HomepageAudienceSections;