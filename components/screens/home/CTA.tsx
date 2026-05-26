"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import img from "@/public/assets/cta.jpg";
import {
  buttonMotion,
  slideLeft,
  slideRight,
  staggerContainer,
} from "@/components/animations/motionVariants";

type CtaBannerProps = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  compliance?: string;
  subheading?: string;
};

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

const CtaBanner = ({
  title = "Move from Fragmented Documentation to Controlled Operations",
  // body = "If your organization is ready to implement structured documentation governance and improve consistency across operations, the next step is a structured consultation.",
  ctaLabel = "Start with a Structured Documentation Assessment",
  ctaHref = "/schedule",
  compliance = "Advisory-only. No third-party communication, representation, or claim handling.",
  // subheading = "Start with a structured documentation assessment",
}: CtaBannerProps) => {
  const router = useRouter();

  const handleCTA = () => {
    pushDataLayer({
      event: "cta_click",
      cta_label: "structured_consultation",
      cta_location: "home_cta_banner",
      cta_destination: ctaHref,
    });

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    router.push(ctaHref);
  };

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-16"
      style={{
        background:
          "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            variants={slideLeft}
            className="space-y-6 text-white sm:space-y-8"
          >
            <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-sm sm:text-4xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
{/* 
            <div className="space-y-4 text-base leading-relaxed text-white/85 sm:text-lg">
              <p>{body}</p>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7EB3FF] sm:text-base">
              {subheading}
            </p> */}

            <motion.button
              {...buttonMotion}
              onClick={handleCTA}
              className="group relative w-full rounded-xl text-base font-bold transition-all duration-300 md:w-auto sm:text-md"
              style={{
                background: "#1a237e",
                color: "#fff",
                padding: "14px 68px",
                boxShadow: "0 4px 20px rgba(26,35,126,0.45)",
                border: "2px solid #ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0f1a5e";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(26,35,126,0.65), 0 0 0 3px rgba(255,255,255,0.10)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a237e";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(26,35,126,0.45)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {ctaLabel}
            </motion.button>

            <div
              className="rounded-lg px-6 py-4 sm:px-8 sm:py-5"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-xs italic text-white/55 sm:text-sm">
                {compliance}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="flex w-full justify-center md:justify-end"
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-xl md:max-w-none"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.45)" }}
            >
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={img}
                  alt="Move from Fragmented Documentation to Structured Execution"
                  className="h-48 w-full object-cover sm:h-56 md:h-80 lg:h-96"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
