"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

import Img from "@/public/assets/Home-Page-c.webp";
import {
  buttonMotion,
  fadeUp,
  heroContainer,
} from "@/components/animations/motionVariants";
import { pushDataLayer } from "@/utils/analytics";

export default function ClaimScopeLanding() {
  const router = useRouter();

  const handleExploreFramework = () => {
    pushDataLayer({
      event: "cta_click",
      cta_label: "framework_exploration",
      cta_location: "home_hero",
      cta_destination: "/solutions",
    });

    router.push("/solutions");
  };

  const handleScheduleConsultation = () => {
    pushDataLayer({
      event: "cta_click",
      cta_label: "structured_consultation",
      cta_location: "home_hero",
      cta_destination: "/schedule",
    });

    router.push("/schedule");
  };

  return (
      <section className="relative min-h-screen w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={Img}
            alt="ClaimScope Consulting hero background"
            priority
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-2 py-16 sm:px-6 lg:px-8 mt-8">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-6xl text-center"
          >
         <motion.h1
            variants={fadeUp}
            className="mt-10 md:mt-4 mx-auto max-w-6xl mb-6 text-4xl font-bold leading-tight tracking-wide text-orange-600 sm:text-5xl md:mb-4 md:text-5xl lg:text-6xl"
          >
            ClaimScope
            <span className="align-super text-lg sm:text-xl md:text-2xl text-[#ff6f00]">
              ™
            </span>
            <span className="block mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              You Don’t Have a Documentation Problem. You Have a Structure Problem
            </span>
          </motion.h1>

           <motion.p
            variants={fadeUp}
            className="mx-auto max-w-5xl px-2 text-base font-medium tracking-wide text-white/90 sm:text-lg md:text-xl lg:text-xl"
          >
            ClaimScope
            <span className="align-super text-xs sm:text-sm text-white/80">
              ™
            </span>{" "}
             establishes structured documentation governance to align records, workflows, accountability, and execution.
          </motion.p>
   <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center gap-4 pt-8 sm:flex-row sm:pt-10"
          >

               <motion.button
              variants={buttonMotion}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleConsultation}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl"
            >
              Schedule a Structured Consultation
            </motion.button>
            <motion.button
              variants={buttonMotion}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreFramework}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#F06600] hover:bg-[#e65100] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#1a237e]/50"
            >
              Explore the Framework
            </motion.button>

         
          </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 max-w-3xl md:mt-4"
            >
              <div className="inline-block rounded-lg border border-[#ff6f00]/20 bg-black/20 px-4 py-3 backdrop-blur-[2px]">
                <p className="text-sm font-light tracking-wide text-white/95 sm:text-base">
                  Advisory-only.{" "}
                  <span className="font-medium text-[#ff6f00]">
                    No claim negotiation,
                  </span>{" "}
                  representation, or third-party communication.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
