"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import Exegap from "@/public/assets/exe-gap.png"; 

const steps = [
  {
    label: "WRITTEN",
    sub: "Scope | Contract\nAssumptions",
    color: "text-blue-900",
    border: "border-blue-900",
  },
  {
    label: "TRACKED",
    sub: "Logs | Reporting\nProgress",
    color: "text-blue-900",
    border: "border-blue-900",
  },
  {
    label: "FIELD EXECUTION",
    sub: "Actual Work | Actual Output",
    color: "text-green-600",
    border: "border-green-600",
  },
];

function Arrow({ dashed, isGap, vertical = false }: any) {
  const strokeColor = isGap ? "#ef4444" : "#9ca3af";
  const arrowColor = isGap ? "text-red-600" : "text-blue-900";

  if (vertical) {
    return (
      <div className="flex justify-center -mb-2">
        <svg width="32" height="75" viewBox="0 0 32 75" fill="none">
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="52"
            stroke={strokeColor}
            strokeWidth="4.5"
            strokeDasharray={dashed ? "8 4" : "none"}
          />
          <polygon
            points="16,52 8,34 24,34"
            fill="currentColor"
            className={arrowColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center lg:mx-4 my-6 lg:my-0">
      <svg
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        className="rotate-90 lg:rotate-0"
      >
        <line
          x1="10"
          y1="42.5"
          x2={dashed ? "52" : "60"}
          y2="42.5"
          stroke={strokeColor}
          strokeWidth="4.5"
          strokeDasharray={dashed ? "8 4" : "none"}
        />
        <polygon
          points="60,32 78,42.5 60,53"
          fill="currentColor"
          className={arrowColor}
        />
      </svg>
    </div>
  );
}

export default function ExecutionGap() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#F1F4F8] py-8 md:py-16 px-6 flex flex-col items-center">
      
      {/* Heading */}
      <div
        className={`text-center mb-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          The Execution Gap: Where Performance Breaks Down
        </h2>
      </div>

      {/* Description */}
      <div className="mt-2 max-w-7xl text-center px-2 md:px-4">
        <p className="text-xl text-gray-700">
          Most organizations do not struggle because of what is written. They
          struggle because documentation is not consistently carried from scope
          to execution
        </p>
      </div>

      {/* Highlight */}
      <div className="mt-8 text-center max-w-7xl">
        <p className="text-lg md:text-xl font-semibold text-orange-600">
          This is where documentation fails! Not at intake, but between tracking
          and execution
        </p>
      </div>

      {/* Image */}
      <div className="mt-6 w-full max-w-6xl flex justify-center">
        <Image
          src={Exegap}
          alt="Execution Gap Diagram"
          className="w-full h-auto rounded-lg shadow-md border border-gray-200"
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
          className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm md:text-md px-6 md:px-12 py-2 md:py-4 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Learn More About the ClaimScope™ Documentation Governance Framework
        </button>
      </div>
    </div>
  );
}