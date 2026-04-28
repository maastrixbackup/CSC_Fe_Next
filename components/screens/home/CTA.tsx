"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import img from "@/public/assets/cta.jpg"; // adjust if using /public
import {
  slideLeft,
  slideRight,
  staggerContainer,
  buttonMotion,
} from "@/components/animations/motionVariants";

const CtaBanner = ({
  title = "Move from Fragmented Documentation to Controlled Operations",
  body = "If your organization is ready to implement structured documentation governance and improve consistency across operations, the next step is a structured consultation.",
  ctaLabel = "Explore the Framework",
  ctaHref = "/schedule",
  compliance = "Advisory-only. No third-party communication, representation, or claim handling.",
  subheading = "Start with a structured documentation assessment",
}) => {
  const router = useRouter();

  const handleCTA = () => {
    window.scrollTo(0, 0);
    router.push(ctaHref);
  };

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 w-full overflow-hidden mb-6"
      style={{
        background:
          "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={slideLeft}
            className="text-white space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-sm">
              {title}
            </h2>

            <div
              className="space-y-4 text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <p>{body}</p>
            </div>

            <p
              className="text-sm sm:text-base font-semibold tracking-wide uppercase"
              style={{ color: "#7EB3FF", letterSpacing: "0.08em" }}
            >
              {subheading}
            </p>

            {/* CTA */}
            <motion.button
              {...buttonMotion}
              onClick={handleCTA}
              className="relative group font-bold text-base sm:text-md rounded-xl w-full md:w-auto transition-all duration-300"
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

            {/* Compliance */}
            <div
              className="rounded-lg px-6 py-4 sm:px-8 sm:py-5"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-xs sm:text-sm italic"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {compliance}
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={slideRight}
            className="flex justify-center md:justify-end w-full"
          >
            <div
              className="w-full max-w-md md:max-w-none overflow-hidden rounded-xl relative"
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
                  className="w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover"
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