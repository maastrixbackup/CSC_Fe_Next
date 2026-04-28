"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Logo from "@/public/assets/bg-remove.png";
import { fadeIn, fadeUp, staggerContainer } from "./animations/motionVariants";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const fallbackRegions = [
  "Alabama",
  "Florida",
  "Georgia",
  "Louisiana",
  "Mississippi",
  "Tennessee",
];

const normalizeRegionList = (res) => {
  const rows = Array.isArray(res)
    ? res
    : Array.isArray(res?.data)
      ? res.data
      : Array.isArray(res?.data?.data)
        ? res.data.data
        : Array.isArray(res?.regions)
          ? res.regions
          : [];

  return rows
    .filter((item) => {
      if (item?.status == null) return true;
      return (
        Number(item.status) === 1 ||
        String(item.status).toLowerCase() === "active"
      );
    })
    .map((item) => ({
      id: Number(item?.id ?? 0),
      region_name: String(item?.region_name ?? "").trim(),
    }))
    .filter((item) => item.region_name);
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [advisoryRegions, setAdvisoryRegions] = useState([]);

  useEffect(() => {
    if (!API_URL) return;

    let mounted = true;

    const loadRegions = async () => {
      const endpoints = [`${API_URL}cms/region/`, `${API_URL}cms/region/all`];

      for (const url of endpoints) {
        try {
          const response = await fetch(url);
          if (!response.ok) continue;

          const normalized = normalizeRegionList(await response.json());
          if (!normalized.length) continue;

          if (mounted) setAdvisoryRegions(normalized);
          return;
        } catch {
          // Try the next endpoint and keep the fallback regions if all fail.
        }
      }
    };

    loadRegions();

    return () => {
      mounted = false;
    };
  }, []);

  const handleNavigation = (href) => {
    if (!href || href === "#") return;
    router.push(href);
    window.scrollTo(0, 0);
  };

  const serviceLinks = [
    {
      name: "Contractor Documentation Support",
      href: "/service/contractor-documentation-support",
    },
    {
      name: "Real Estate & REO Documentation",
      href: "/service/real-estate-reo-documentation-readiness",
    },
    {
      name: "Disaster Documentation & FEMA Education",
      href: "/service/disaster-documentation-readiness-fema-education",
    },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "States We Serve", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
    {
      name: "Regulatory Awareness & Department of Insurance Compliance Policy",
      href: "/regulatory-awareness-and-department-of-insurance-compliance-policy",
    },
  ];

  const stateLinks = useMemo(() => {
    const regions = advisoryRegions.length
      ? advisoryRegions.map((region) => region.region_name)
      : fallbackRegions;

    return regions.map((region) => ({
      name: region,
      href: `/government-documentation-readiness/${encodeURIComponent(region)}`,
    }));
  }, [advisoryRegions]);

  const footerSections = [
    { title: "Services", links: serviceLinks },
    { title: "Company", links: companyLinks },
    { title: "Advisory Service Regions", links: stateLinks },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-slate-900 text-slate-300"
    >
      <div className="h-[3px] w-full bg-orange-500" />

      <motion.div
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <motion.div variants={fadeIn} className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center"
            >
              <Image
                src={Logo}
                alt="ClaimScope Consulting Logo"
                className="mr-3 h-auto w-[320px] object-contain md:w-full"
              />
            </motion.div>

            <p className="mb-4 text-sm text-white">
              Professional documentation clarity and readiness consulting
              services.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:contact@claimscopeconsulting.com"
                className="flex items-center text-sm transition-colors hover:text-slate-100"
              >
                <span className="mr-2 text-slate-500">@</span>
                contact@claimscopeconsulting.com
              </a>

              <a
                href="tel:+12562127273"
                className="flex items-center text-sm transition-colors hover:text-slate-100"
              >
                <span className="mr-2 text-slate-500">Tel</span>
                +1 (256) 212-7273
              </a>
            </div>
          </motion.div>

          {footerSections.map((section) => (
            <motion.div key={section.title} variants={fadeIn}>
              <h4 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-wider text-orange-500">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.div
                      whileHover={{ x: link.href && link.href !== "#" ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavigation(link.href)}
                        className="text-left text-sm transition-colors hover:text-white"
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={fadeIn}>
            <h4 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Legal
            </h4>

            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleNavigation(link.href)}
                    className="text-left text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 rounded-lg border border-slate-700 bg-slate-600 p-3"
            >
              <p className="text-xs leading-relaxed text-white">
                ClaimScope Consulting, LLC provides documentation governance
                consulting and documentation readiness advisory only.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-lg bg-orange-500 p-4"
          >
            <p className="text-sm text-white">
              ClaimScope&trade; operates through ClaimScope Consulting, LLC.
              ClaimScope Consulting, LLC is an Alabama-based documentation
              governance and disaster readiness consulting firm. The firm
              operates strictly in a consulting-only capacity focused on
              documentation readiness, organization, and governance education.
              ClaimScope Consulting, LLC does not provide claim negotiation,
              representation, advocacy, legal advice, coverage determinations,
              or third-party communication services.
            </p>
          </motion.div>

          <p className="text-center text-xs text-slate-500">
            &copy; {currentYear} ClaimScope Consulting, LLC. All rights
            reserved.
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
