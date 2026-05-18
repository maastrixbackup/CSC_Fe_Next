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
    <div className="flex flex-col items-center bg-white px-6 py-6 md:py-10">
      <div
        className={`mb-2 text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="py-4 text-3xl font-bold text-[#1a237e] md:text-4xl">
          Where Documentation Breaks Down
        </h2>
      </div>

      <div className="mt-1 max-w-7xl px-2 text-center md:px-4">
        <p className="text-xl text-gray-700">
          Most organizations do not struggle because documentation is missing.
        </p>
        <p className="text-xl text-gray-700">
          They struggle because documentation is not consistently carried from
          scope to execution.
        </p>
      </div>

      <div className="mt-4 max-w-7xl text-center">
        <p className="text-lg font-semibold text-orange-600 md:text-xl">
          Documentation fails between tracking and execution, not at intake.
        </p>
      </div>

      <div className="mt-6 flex w-full max-w-6xl justify-center">
        <Image
          src={Exegap}
          alt="Execution Gap Diagram"
          className="h-auto w-full rounded-lg border border-gray-200 shadow-md"
        />
      </div>

      <div className="mt-16 text-center">
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "cta_click",
              cta_name:
                "Learn More About the ClaimScope Documentation Governance Framework",
            });
            router.push("/schedule");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-blue-900 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl active:scale-95 md:px-12 md:py-6 md:text-md"
        >
          Learn More About the ClaimScope Documentation Governance Framework
        </button>
      </div>
    </div>
  );
}
