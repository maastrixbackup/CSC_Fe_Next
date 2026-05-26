"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";

import Exegap from "@/public/assets/exe-gap.png";
import Continuity from "@/public/assets/continuoty.png";
import DisasterImg from "@/public/assets/Disaster Website.jpg";
import Audience from "@/components/screens/home/Audience";
import Cta from "@/components/screens/home/CTA";
import {
  buttonMotion,
  fadeUp,
  heroContainer,
} from "@/components/animations/motionVariants";
import { capabilityItemsD, outcomeItemsD } from "@/utils/constants";

const calendlyUrl =
  "https://calendly.com/twalker-claimscopeconsulting/disaster-documentation-governance-review";

const subscribe = () => () => {};

const DisasterTracks = () => {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const rootElement = isClient ? document.body : null;

  return (
    <div className="bg-white text-slate-900">
      <section className="relative w-full overflow-hidden bg-transparent">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          <Image
            src={DisasterImg}
            alt="Disaster documentation readiness hero background"
            fill
            preload
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
        </motion.div>

        <div className="relative z-10 flex min-h-[420px] items-center px-6 py-16 sm:min-h-[460px] md:min-h-[540px] lg:px-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl"
          >
            <div className="max-w-[46rem] px-2 sm:px-0">
              <motion.div variants={fadeUp}>
                <Link
                  href="/solutions"
                  className="mt-4 mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Solutions
                </Link>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-2xl font-semibold leading-[1.24] text-white drop-shadow-sm sm:text-3xl sm:leading-[1.2] md:text-[2.4rem] md:leading-[1.16] lg:text-[2.75rem] lg:leading-[1.14]"
              >
                Disaster Response Fails When Documentation Isn&apos;t
                Structured.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-1 max-w-2xl text-base leading-7 text-slate-200 sm:text-[1.05rem]"
              >
                Documentation readiness and FEMA IA/PA education
                (advisory-only) for organizations preparing for or responding
                to disaster events.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                {rootElement ? (
                  <PopupButton
                    url={calendlyUrl}
                    rootElement={rootElement}
                    text="Schedule Consultation"
                    className="bg-[#1a237e] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 shadow-2xl hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50 sm:px-8 sm:py-4 sm:text-base"
                  />
                ) : (
                  <motion.button
                    {...buttonMotion}
                    className="bg-[#1a237e] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 shadow-2xl hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50 sm:px-8 sm:py-4 sm:text-base"
                  >
                    Schedule Consultation
                  </motion.button>
                )}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-5 max-w-2xl">
                <p className="border-l-2 border-[#F06600] pl-4 text-sm leading-6 text-slate-200 sm:text-[15px]">
                  Advisory-only.{" "}
                  <span className="font-medium text-white">
                    No claim handling, representation,
                  </span>{" "}
                  or third-party communication
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Execution Gap
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Documentation inconsistency reduces effectiveness under
                pressure.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                In disaster environments, documentation becomes inconsistent,
                incomplete, and misaligned, reducing effectiveness under
                pressure.
              </p>
            </div>

            <Image
              src={Exegap}
              alt="Execution gap diagram for disaster documentation readiness"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#eef4ff_50%,#e0ecff_100%)] p-8 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
            System Positioning
          </p>
          <h2 className="mt-4 max-w-7xl text-md font-bold leading-tight md:text-4xl">
            Structured governance ensures documentation continuity before,
            during, and after disaster events.
          </h2>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Image
              src={Continuity}
              alt="Continuity framework for disaster documentation readiness"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
                Continuity Framework
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Defined intake, validation, field alignment, and revalidation
                processes.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
              Capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityItemsD.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a237e] text-white">
                  <ArrowRight size={18} />
                </div>
                <h3 className="text-lg font-semibold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
              Outcomes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomeItemsD.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <CheckCircle className="mx-auto mb-4 h-10 w-10 text-[#1a237e]" />
                <h3 className="text-lg font-semibold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-60 px-6 py-16 text-black">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7EB3FF]">
              Case Study Preview
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From fragmented documentation to aligned execution across multiple
              projects.
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-base leading-8 text-black">
              From fragmented documentation to aligned execution across multiple
              projects.
            </p>
            <Link
              href="/case-study"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border bg-[#1a237e] px-6 py-4 font-semibold text-white transition hover:bg-[#0d47a1] hover:text-white"
            >
              View Full Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Audience />
      </section>

      <section className="pt-4">
        <Cta
          title="Prepare documentation before the next event."
          ctaLabel="Schedule a Consultation"
          compliance="Advisory-only. No claim handling, representation, or third-party communication."
        />
      </section>
    </div>
  );
};

export default DisasterTracks;
