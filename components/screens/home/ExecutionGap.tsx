"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Exegap from "@/public/assets/exe-gap.png";

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

export default function ExecutionGap() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
     <div className="bg-white py-6 md:py-10 px-6 flex flex-col items-center">
      {/* Brand Header */}
      {/* <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-1">
          <span className="font-semibold text-blue-900 tracking-wider">CSC</span>
          <span className="font-medium">ClaimScope Consulting</span>
        </div>
        <p className="text-blue-900 font-medium italic text-lg">
          Clarity. Structure. Confidence.
        </p>
      </div> */}
        {/* Developer Instruction: Insert Execution Gap Image directly below this section */}
      <div className="w-full max-w-6xl flex justify-center">
         <Image
          src={Exegap}
          alt="Execution Gap Diagram"
          className="h-auto w-full rounded-lg border border-gray-200 shadow-md"
        />
      </div>

      {/* SECTION 2: THE EXECUTION GAP (UPDATED HEADER & CONTENT) */}
      <div
        className={`text-center mb-2 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] py-6 mt-10">
          Where Documentation Breaks Down
        </h2>
      </div>

      {/* UPDATED BODY CONTENT - More concise breakdowns */}
      <div className="mt-1 max-w-7xl text-center px-2 md:px-4">
        <p className="text-xl text-gray-700">
         Most organizations do not struggle because documentation is missing.
        </p>
        <p className="text-xl text-gray-700">
           They struggle because documentation is not consistently carried from scope to execution.
        </p>
      </div>
      {/* New line above the graphic */}
      <div className="mt-6 text-center max-w-7xl">
        <p className="text-lg md:text-xl font-semibold text-orange-600">        
          Documentation fails between tracking and execution—not at intake.
        </p>
      </div>

    

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <button
          onClick={() => {
            pushDataLayer({
              event: "cta_click",
              cta_name: "Learn More About the ClaimScope™ Documentation Governance Framework"
            });
            router.push('/schedule');
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm md:text-md px-6 md:px-12 py-2 md:py-6  transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Learn More About the ClaimScope™ Documentation Governance Framework
        </button>
      </div>
    </div>
  );
}
