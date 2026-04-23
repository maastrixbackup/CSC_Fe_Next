"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Img from "@/assets/About Us.jpg";
import BgImg from "@/assets/newabout.jpg";
import Seo from "@/components/Seo";

import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "@/components/animations/motionVariants";

import { API_URL } from "@/utils/config";

export default function About() {
  const [seoData, setSeoData] = useState(null);

  const fetchSeo = useCallback(async (signal: AbortSignal) => {
    try {
      const response = await fetch(`${API_URL}seo/fetch?page=/about`, {
        signal,
      });

      if (!response.ok) throw new Error("Failed to fetch SEO");

      const result = await response.json();
      setSeoData(result?.data || result);
    } catch (error: any) {
      if (error?.name === "AbortError") return;
      console.error("SEO fetch error:", error);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchSeo(controller.signal);
    return () => controller.abort();
  }, [fetchSeo]);

  return (
    <div className="bg-white text-gray-900">
      
      {/* SEO */}
      <Seo
        title={
          seoData?.meta_title ||
          "About ClaimScope Consulting | Documentation Governance"
        }
        description={
          seoData?.meta_desc ||
          "ClaimScope Consulting provides documentation governance and readiness advisory services."
        }
        keywords={seoData?.meta_keywords || ""}
        ogTitle={seoData?.og_title || ""}
        ogDescription={seoData?.og_description || ""}
        ogImage={seoData?.og_image || ""}
        canonicalPath={seoData?.canonical_url || "/about"}
      />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-24 px-6 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0"
        >
          <Image
            src={BgImg}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
            Documentation Governance, Built for Operational Credibility.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200">
            ClaimScope™ provides consulting-only documentation governance services.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* WHAT WE PROVIDE */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div variants={slideLeft}>
            <h2 className="text-2xl font-semibold mb-4">
              What ClaimScope™ Provides
            </h2>

            <ul className="space-y-3">
              {[
                "Advisory assessments",
                "Framework design",
                "Governance advisory",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex gap-2">
                  <span className="text-[#1a237e]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={slideRight}>
            <h2 className="text-2xl font-semibold mb-4">
              What ClaimScope™ Does Not Provide
            </h2>

            <ul className="space-y-3 text-gray-600">
              {[
                "No claim negotiation",
                "No legal advice",
                "No third-party communication",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex gap-2">
                  <span className="text-[#1a237e]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* IMAGE SECTION */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="overflow-hidden rounded-xl border">
            <motion.div
              initial={{ scale: 1.02 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={Img}
                alt="Consulting"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

      </div>

      {/* FOOTER */}
      <motion.section className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-4xl mx-auto text-sm text-center">
          ClaimScope Consulting operates in a consulting-only capacity.
        </div>
      </motion.section>
    </div>
  );
}