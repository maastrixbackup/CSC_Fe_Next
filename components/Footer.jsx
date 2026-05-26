"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "@/public/assets/bg-remove.png";
import {
  fadeIn,
  fadeUp,
  staggerContainer,
} from "@/components/animations/motionVariants";

const fallbackRegions = [
  "Alabama",
  "Florida",
  "Georgia",
  "Louisiana",
  "Mississippi",
  "Tennessee",
];

function pushDataLayer(payload) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

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
  const [advisoryRegions, setAdvisoryRegions] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadRegions = async () => {
      try {
        const response = await fetch("/api/regions");
        if (!response.ok) return;

        const json = await response.json();
        const normalized = normalizeRegionList(json);
        if (!normalized.length) return;

        if (mounted) {
          setAdvisoryRegions(normalized);
        }
      } catch {
        // Keep footer fallback regions if the proxy route fails.
      }
    };

    loadRegions();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLinkClick = (href) => {
    if (!href || href === "#") return;

    if (href.startsWith("/solutions/")) {
      const slug = href.replace("/solutions/", "");
      pushDataLayer({
        event: "service_page_view",
        service_slug: slug,
        page_path: href,
      });
    }
  };

  const serviceLinks = [
    {
      name: "Contractor Documentation Support",
      href: "/solutions/contractor-tracks",
    },
    {
      name: "Real Estate & REO Documentation",
      href: "/solutions/reo-tracks",
    },
    {
      name: "Disaster Documentation & FEMA Education",
      href: "/solutions/disaster",
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

    return regions.map((region, index) => ({
      id: `${region}-${index}`,
      name: region,
      href: `/documentation-readiness?region=${encodeURIComponent(region)}`,
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
      className="bg-[#1E2E66] text-white"
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
                className="mr-3 h-[220px] w-[320px] object-contain md:h-auto md:w-full"
                priority={false}
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
                <Mail className="mr-2 h-4 w-4 text-slate-500" />
                contact@claimscopeconsulting.com
              </a>

              <a
                href="tel:+12562127273"
                className="flex items-center text-sm transition-colors hover:text-slate-100"
              >
                <Phone className="mr-2 h-4 w-4 text-slate-500" />
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
                  <li key={link.id || link.name}>
                    <motion.div
                      whileHover={{ x: link.href && link.href !== "#" ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.href && link.href !== "#" ? (
                        <Link
                          href={link.href}
                          onClick={() => handleLinkClick(link.href)}
                          className="inline-flex items-center gap-1 text-left text-sm transition-colors hover:text-white"
                        >
                          <span>{link.name}</span>
                        
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-300">
                          {link.name}
                        </span>
                      )}
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
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={link.href}
                      className="text-left text-sm transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
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

          <div className="flex flex-col items-center justify-center md:flex-row">
            <p className="text-center text-xs text-slate-500">
              &copy; {currentYear} ClaimScope Consulting, LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
