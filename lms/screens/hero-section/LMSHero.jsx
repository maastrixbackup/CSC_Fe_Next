"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import lmsHeroBackground from "@/public/assets/heroLms 1.png";

import {
  fadeUp,
  heroContainer,
  buttonMotion,
} from "@/components/animations/motionVariants";

const LMSHero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f7fb]">
      <div className="relative mx-auto w-full">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="
            relative w-full overflow-hidden
            h-[580px]
            sm:h-[460px]
            md:h-[580px]
            lg:h-[540px]
          "
        >
          <Image
            src={lmsHeroBackground}
            alt="LMS training hero background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#04152f]/90 via-[#0a2345]/70 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center md:items-start">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="
              w-full
              px-5 py-1
              sm:px-10 sm:pt-10
              md:px-14 md:pt-10
              lg:px-24 lg:pt-12
            "
          >
            <div className="max-w-2xl space-y-2 lg:space-y-6">
              <motion.h1
                variants={fadeUp}
                className="
                  text-4xl font-black uppercase text-white
                  leading-[1]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Clarity.
                <br />
                <span className="text-[#4EA3FF]">Structure.</span>
                <br />
                Confidence.
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="h-[4px] w-24 bg-[#F06600]"
              />

              <motion.p
                variants={fadeUp}
                className="
                  max-w-sm text-sm font-semibold leading-relaxed text-white/90
                  sm:max-w-md sm:text-base
                  md:text-lg
                  lg:text-xl
                "
              >
                Enterprise compliance solutions that bring confidence to every
                decision.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap"
              >
                <motion.button
                  variants={buttonMotion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push("/access")}
                  className="
                    w-full bg-[#1a237e] px-6 py-3.5
                    text-sm font-semibold tracking-wide text-white
                    shadow-2xl transition-all duration-300
                    hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50
                    sm:w-auto sm:px-8 sm:py-4 sm:text-base
                  "
                >
                  Access Training Portal
                </motion.button>

                <motion.button
                  variants={buttonMotion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    const section =
                      document.getElementById("learning-modules");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
                    w-full bg-[#F06600] px-6 py-3.5
                    text-xs font-bold uppercase tracking-wide text-white
                    transition-all duration-300 hover:bg-[#d85b00]
                    sm:w-auto sm:px-6 sm:py-4 sm:text-sm
                  "
                >
                  Explore Learning Modules
                </motion.button>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-1">
                <p className="text-sm font-semibold text-white sm:text-base">
                  ClaimScope™ Consulting, LLC
                </p>
                <p className="mt-1 text-xs font-medium text-[#4EA3FF] sm:text-sm">
                  Clarity. Structure. Confidence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LMSHero;