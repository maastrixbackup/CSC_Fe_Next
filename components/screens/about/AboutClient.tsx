"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BgImg from "@/public/assets/newabout.jpg";

import {
    fadeUp,
    slideLeft,
    slideRight,
    staggerContainer,
} from "@/components/animations/motionVariants";

export default function About() {
    return (
        <div className="bg-white text-gray-900">

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative text-white py-24 px-6 overflow-hidden"
            >
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${BgImg.src})`, // ✅ FIXED
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center relative z-10 py-10"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Documentation Governance, Built for{" "}
                        <span className="text-white">Operational Credibility</span>.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                    >
                        ClaimScope
                        <span className="align-super text-[10px]">™</span> (operated by
                        ClaimScope Consulting, LLC) provides consulting-only documentation
                        governance and documentation readiness advisory services across
                        contractor, real estate/REO, and disaster readiness environments.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        className="text-md text-gray-300 mt-8 italic max-w-2xl mx-auto border-t border-gray-600 pt-6"
                    >
                        "To strengthen operational clarity and readiness by implementing
                        structured, repeatable documentation governance systems."
                    </motion.p>
                </motion.div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
                {/* What We Provide / What We Don't */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-10"
                >
                    <motion.div variants={slideLeft} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                            What ClaimScope
                            <span className="align-super text-[8px]">™</span> Provides
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Advisory assessments of documentation structure and readiness",
                                "Framework design: file architecture, naming conventions, templates, and checklists",
                                "Governance advisory: implementation planning, oversight, and refinement guidance",
                                "Education-only disaster documentation readiness guidance (including FEMA IA/PA concepts)",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={fadeUp}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-[#1a237e] font-bold text-lg">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={slideRight} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                            What ClaimScope
                            <span className="align-super text-[8px]">™</span> Does Not Provide
                        </h2>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-500 mb-4 italic">
                                (Compliance-Safe)
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Claim negotiation, representation, or advocacy",
                                    "Legal advice or outcome guarantees",
                                    "Third-party communications on behalf of clients",
                                    "Preparation or submission of claims or applications",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeUp}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-[#1a237e] font-bold text-lg">•</span>
                                        <span className="text-gray-600">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Our Method */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
                >
                    <span className="text-sm font-medium text-[#1a237e] uppercase tracking-wider">
                        Our Method
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                        A Cross-Track Documentation Governance Method
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mb-8">
                        "ClaimScope
                        <span className="align-super text-[8px]">™</span> uses a documented
                        governance method to standardize how records are organized, traced,
                        and maintained over time. The method is applied across all tracks so
                        organizations can operate with consistent documentation discipline
                        regardless of environment."
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-left justify-left sm:justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200">
                        {[
                            "Assessment",
                            "Framework Design",
                            "Governance Advisory",
                            "Ongoing Governance Advisory",
                        ].map((step, index, array) => (
                            <React.Fragment key={step}>
                                <div className="text-center">
                                    <div className="font-semibold text-gray-900 border border-gray-400 py-2 px-4 text-sm sm:text-base">
                                        {step}
                                    </div>
                                </div>
                                {index < array.length - 1 && (
                                    <div className="hidden sm:block text-[#1a237e] font-bold text-2xl">
                                        →
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.section>

                {/* Who We Serve */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-8">
                        Who We Serve
                    </h2>
                    <div className="space-y-6">
                        {[
                            "Contractors and construction operations teams seeking consistent scope, change, and invoice documentation structure.",
                            "Real estate owners, investors, and portfolio teams requiring standardized asset documentation governance.",
                            "Organizations and communities seeking disaster documentation readiness education and internal record structuring guidance.",
                        ].map((description, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                            >
                                <div className="w-2 h-2 bg-[#1a237e] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    {description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Why Governance Matters */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Why Governance Matters
                    </h2>
                    <p className="text-lg text-gray-700 italic border-l-4 border-r-4 border-[#1a237e] pl-6 pr-4 text-left">
                        "Documentation is operational infrastructure. When records are
                        structured, consistent, and traceable, organizations reduce internal
                        friction, improve decision clarity, and increase readiness for
                        time-sensitive environments."
                    </p>
                </motion.section>

                {/* NEW SECTION: Operational & Disaster Program Experience */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b border-gray-200 pb-3 text-center">
                        Operational & Disaster Program Experience
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
                        <p>
                            ClaimScope<span className="align-super text-[8px]">™</span>{" "}
                            operates through ClaimScope Consulting, LLC and is supported by
                            professionals with extensive operational experience across
                            catastrophic response environments, complex claims environments,
                            emergency management operations, and federal disaster program
                            delivery programs.
                        </p>

                        <p>
                            The ClaimScope<span className="align-super text-[8px]">™</span>{" "}
                            advisory team collectively brings more than fifteen years of
                            experience supporting catastrophic claims environments, complex
                            and large‑loss operational environments, disaster recovery
                            programs, and large‑scale documentation environments. Team
                            experience includes operational roles supporting FEMA disaster
                            recovery programs such as Individual Assistance (IA) and Public
                            Assistance (PA), FEMA Consolidated Resource Center (CRC)
                            operations, Program Delivery Manager functions, Cost Validation
                            Specialist roles, and FEMA Tier III Program Supervisor
                            responsibilities.
                        </p>

                        <p>
                            Team members have also served in specialized disaster response and
                            operational leadership roles including former FEMA Strike Team
                            participation, State Lead responsibilities serving as a SAL (State
                            Applicant Liaison), and Project Consultant V positions supporting
                            disaster recovery operations and project delivery coordination.
                        </p>

                        <p>
                            This operational experience includes direct involvement in FEMA
                            Public Assistance project formulation across all Categories of
                            Work A–G, as well as Catastrophic (Cat Z) project environments,
                            including mitigation planning and Benefit‑Cost Analysis (BCA)
                            documentation considerations.
                        </p>

                        <p>
                            Through this operational background, ClaimScope
                            <span className="align-super text-[8px]">™</span> applies
                            structured documentation governance consulting practices designed
                            to support organizations in maintaining clear, consistent, and
                            traceable documentation systems that strengthen operational
                            clarity, audit readiness, and disaster documentation preparedness
                            across contractor environments, real estate portfolios,
                            infrastructure programs, and disaster recovery operations.
                        </p>

                        <p className="text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200 italic">
                            ClaimScope Consulting, LLC provides consulting‑only advisory and
                            education‑focused services related to documentation governance and
                            documentation readiness. The firm does not provide claim
                            negotiation, representation, advocacy services, legal advice,
                            coverage determinations, or third‑party communications on behalf
                            of clients.
                        </p>
                    </div>
                </motion.section>

                {/* Leadership Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        Leadership
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Terrence Walker
                            </h3>
                            <p className="text-blue-600 font-medium mb-4">
                                Managing Member | ClaimScope Consulting, LLC
                            </p>

                            <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
                                <p>
                                    Terrence Walker is the Managing Member of ClaimScope
                                    Consulting, LLC and the founder of the ClaimScope
                                    <span className="align-super text-[8px]">™</span> platform.
                                    Through ClaimScope
                                    <span className="align-super text-[8px]">™</span>, he leads
                                    structured advisory engagements focused on enterprise-grade
                                    documentation governance, operational readiness systems, and
                                    structured documentation frameworks designed to support
                                    organizational clarity and disaster documentation
                                    preparedness.
                                </p>

                                <p>
                                    Mr. Walker brings more than 15 years of professional
                                    experience across enterprise insurance operations, catastrophe
                                    response environments, FEMA program delivery, and regulatory
                                    compliance frameworks. His career has included leadership
                                    roles supporting national insurance carriers, catastrophe
                                    claims operations, federal disaster programs, and
                                    multi‑jurisdictional regulatory environments.
                                </p>

                                <p>
                                    Prior to founding ClaimScope Consulting, LLC, Mr. Walker
                                    served in multiple leadership and operational roles across the
                                    insurance and disaster recovery ecosystem, including
                                    catastrophe claims management, quality assurance oversight,
                                    federal disaster program delivery, and statewide emergency
                                    operations coordination.
                                </p>

                                {/* <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-200">
                  Mr. Walker holds a Bachelor of Arts in Business Management and
                  maintains multiple professional credentials including multi‑state
                  independent adjuster licenses, NFIP flood certification, and
                  extensive FEMA Incident Command System and Public Assistance
                  program training.
                </p> */}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Image Section */}
                {/* <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <motion.img
              src={Img}
              alt="Professional documentation consulting"
              className="w-full h-auto object-cover"
              initial={{ scale: 1.02 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.section> */}
            </div>

            {/* Compliance Footer */}
  
                <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mt-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-6 text-sm text-amber-900">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
           
            <span className="w-full leading-relaxed">
           ClaimScope Consulting, LLC operates strictly in a consulting‑only capacity. The firm provides documentation governance advisory and disaster documentation readiness education and does not provide claim negotiation, representation of any party, advocacy services, legal advice, or third‑party communications on behalf of clients.

            </span>
          </div>
        </div>
      </div>
           
        </div>
    );
}