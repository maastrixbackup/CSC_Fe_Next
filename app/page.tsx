"use client";

import { useRouter } from "next/navigation";

import ExecutionGap from "@/components/screens/home/ExecutionGap";
import ContinuityFramework from "@/components/screens/home/ContinuityFramework";
import Positioning from "@/components/screens/home/Positioning";
// import CoreCapablity from "@/components/screens/CoreCapability";
import GoverFramework from "@/components/screens/home/Government";
import GovernanceOutcome from "@/components/screens/home/GovernanceOutcome";
import WhoServe from "@/components/screens/home/WhoServe";
import Filter from "@/components/screens/home/Filter";
import CtaBanner from "@/components/screens/home/CTA";
import ComparisionSection from "@/components/screens/home/ComparisionSection";
import Hero from "@/components/screens/home/Hero";

export default function ClaimScopeLanding() {

  return (
    <>
      <Hero />
      <Positioning />
      <GoverFramework />
      <ContinuityFramework />
      <WhoServe />
      <GovernanceOutcome />
      <ExecutionGap />
      <ComparisionSection />
      <CtaBanner 
        title="Assess Your Documentation Readiness"
        body="Determine governance maturity, documentation continuity risks, and operational readiness through ClaimScope™ structured assessment frameworks."
        ctaLabel="Begin Governance Assessment"
      />
      <Filter />

    </>

  );
}
