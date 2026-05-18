"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Img from "@/public/assets/Home-Page-c.webp";
import {
  buttonMotion,
  fadeUp,
  heroContainer,
} from "@/components/animations/motionVariants";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ExecutionGap from "@/components/screens/home/ExecutionGap";
import ContinuityFramework from "@/components/screens/home/ContinuityFramework";
import Positioning from "@/components/screens/home/Positioning";
// import CoreCapablity from "@/components/screens/CoreCapability";
import GoverFramework from "@/components/screens/home/Government";
import GovernanceOutcome from "@/components/screens/home/GovernanceOutcome";
import WhoServe from "@/components/screens/home/WhoServe";
import Filter from "@/components/screens/home/Filter";
import CtaBanner from "@/components/screens/home/CTA";

export default function ClaimScopeLanding() {
  const router = useRouter();

  return (
    <>
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-2 py-26 sm:px-6 lg:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl text-center"
        >
     <motion.h1
            variants={fadeUp}
            className="mt-10 md:mt-4 mx-auto max-w-6xl mb-6 text-3xl font-bold leading-tight tracking-wide text-orange-600 sm:text-5xl md:mb-4 md:text-5xl lg:text-6xl"
          >
            ClaimScope
            <span className="align-super text-lg sm:text-xl md:text-2xl text-[#ff6f00]">
              ™
            </span>
            <span className="block mt-4 text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold text-white">
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
           is a structured documentation governance system designed to align records, workflows, and execution across complex operational environments
          </motion.p>

          <motion.div
            variants={fadeUp}
             className="flex flex-col justify-center gap-4 pt-8 sm:flex-row sm:pt-10"
          >
            <PrimaryButton onClick={() => router.push("/schedule")}>
              Schedule Consultation
            </PrimaryButton>

            <PrimaryButton
              variant="secondary"
              onClick={() => router.push("/solutions")}
            >
              Explore the Framework
            </PrimaryButton>
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

        <ExecutionGap />
        <Positioning /> 
        <GoverFramework />
         <ContinuityFramework />
        
        <WhoServe />
        <GovernanceOutcome />
<Filter />
        <CtaBanner />
    </>
 
  );
}
