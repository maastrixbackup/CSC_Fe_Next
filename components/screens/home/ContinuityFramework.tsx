"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import Continuity from "@/public/assets/continuoty.png"; // adjust path if needed

const frameworkSteps = [
  "Intake and Defined Scope",
  "Input and Assumption Validation",
  "Field Execution Alignment",
  "Continuous Revalidation",
];

export default function ContinuityFramework() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-8 md:py-16 px-4 md:px-6 flex flex-col items-center">
      
      {/* Header */}
      <div
        className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          The ClaimScope™ Continuity Framework
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-7xl mx-auto">
          A structured governance system designed to ensure documentation
          remains aligned from intake through execution.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl text-center px-2">
        
        {/* Emphasis */}
        <div className="mb-8 md:mb-12 px-4">
          <p className="text-xl md:text-2xl font-bold text-blue-900 leading-relaxed">
            The ClaimScope™ Continuity Framework is the control system behind structured documentation governance.
          </p>
        </div>

        {/* Subline */}
        <div className="mb-6 px-4">
          <p className="text-lg md:text-xl font-semibold text-orange-600">
            Control is not created at intake. It is validated through continuity.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
          <h3 className="font-semibold text-xl text-gray-800 mb-6">
            Framework Flow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {frameworkSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 bg-white border-4 border-blue-600 
                rounded-xl p-6 shadow-sm hover:shadow transition-all text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold text-base">
                  {index + 1}
                </div>

                <h4 className="text-lg font-semibold text-gray-800">
                  Step {index + 1}
                </h4>

                <p className="text-gray-700 text-base leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              This system ensures documentation is not only created, but
              <span className="text-blue-900 font-semibold">
                {" "}maintained, validated, and aligned{" "}
              </span>
              throughout the entire lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mt-12 w-full max-w-6xl flex justify-center">
        <Image
          src={Continuity}
          alt="ClaimScope Continuity Framework Diagram"
          className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
          priority
        />
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button
          onClick={() => {
            router.push("/schedule");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-blue-900 hover:bg-blue-800 active:bg-blue-950 
          text-white font-semibold text-base md:text-md 
          px-8 md:px-14 py-4 
          transition-all duration-200 shadow-lg hover:shadow-2xl active:scale-[0.97]"
        >
          Learn More About the ClaimScope™ Documentation Governance Framework
        </button>
      </div>
    </div>
  );
}