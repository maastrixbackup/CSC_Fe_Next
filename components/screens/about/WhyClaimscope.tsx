"use client";

import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  AlignLeft,
  FileText,
  CheckCircle,
  ArrowRight,
  Shield,
  Eye,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

type ComparisonRow = {
  category: string;
  capability: string;
  traditional: boolean;
  claimscope: boolean;
};

type InViewTuple = [React.RefObject<HTMLDivElement | null>, boolean];

type AnimSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type CountUpProps = {
  target: number | string;
  suffix?: string;
  duration?: number;
};

const CAPABILITY_LABEL_MAP: Record<string, string> = {
  "Documentation Governance Focus": "Documentation Governance Framework™",
  "Governance Assessments": "Documentation Maturity Model™",
  "Continuity Alignment": "Operational Continuity Readiness™",
  "Institutional Knowledge Retention": "Organizational Memory Engine™",
  "Governance Readiness Indicatorsâ„¢": "Documentation Readiness Index™",
  "Governance Insightsâ„¢": "Governance Health Dashboard™",
  "AI Governance Controlsâ„¢": "AI Governance Controls™",
};

const EXTRA_COMPARISON_ROWS = [
  { category: "Readiness", capability: "Documentation Risk Engine™", traditional: false, claimscope: true },
];

const COMPARISON_DATA = [
  { category: "Structure", capability: "Document Storage", traditional: true, claimscope: true },
  { category: "Structure", capability: "Templates", traditional: true, claimscope: true },
  { category: "Structure", capability: "Workflow Structure", traditional: false, claimscope: true },
  { category: "Structure", capability: "Documentation Classification", traditional: false, claimscope: true },
  { category: "Structure", capability: "Operational Standardization", traditional: false, claimscope: true },
  { category: "Governance", capability: "Governance Frameworks", traditional: false, claimscope: true },
  { category: "Governance", capability: "Governance Visibility", traditional: false, claimscope: true },
  { category: "Governance", capability: "Documentation Governance Framework™", traditional: false, claimscope: true },
  { category: "Governance", capability: "Human Oversight Controls", traditional: false, claimscope: true },
  { category: "Governance", capability: "AI Governance Controls™", traditional: false, claimscope: true }, // renamed
  { category: "Governance", capability: "Audit Logging", traditional: false, claimscope: true },
  { category: "Governance", capability: "Documentation Maturity Model™", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Documentation Visibility", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Workflow Accountability", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Operational Continuity Readiness™", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Audit Trail Visibility", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Knowledge Preservation", traditional: false, claimscope: true },
  { category: "Continuity", capability: "Organizational Memory Engine™", traditional: false, claimscope: true },
  { category: "Readiness", capability: "Governance Readiness Indicators™", traditional: false, claimscope: true }, // renamed
  { category: "Readiness", capability: "LMS Training Integration", traditional: false, claimscope: true },
  { category: "Readiness", capability: "Audit Readiness Focus", traditional: false, claimscope: true },
  { category: "Readiness", capability: "Governance Insights™", traditional: false, claimscope: true }, // renamed
];

const OUTCOMES = [
  {
    icon: AlignLeft,
    title: "Operational Clarity",
    description: "Establishes clear, structured documentation across all projects, reducing ambiguity and improving internal visibility into scope, status, and execution.",
  },
  {
    icon: FileText,
    title: "Consistent Record Alignment",
    description: "Maintains consistency between documentation, tracking, and field execution — reducing discrepancies and minimizing internal misalignment.",
  },
  {
    icon: CheckCircle,
    title: "Documentation Readiness",
    description: "Ensures documentation is structured, organized, and complete — supporting internal review, verification, and workflow efficiency.",
  },
  {
    icon: Shield,
    title: "Workflow Accountability",
    description: "Ensures responsibilities remain visible throughout the operational lifecycle.",
  },
  {
    icon: Eye,
    title: "Audit Visibility",
    description: "Provides traceability and documentation transparency for review activities.",
  },
];

const PILLARS = [
  { label: "Accountability", icon: Shield, desc: "Every action is logged, owned, and traceable" },
  { label: "Continuity", icon: TrendingUp, desc: "Documentation flows seamlessly from scope to close" },
  { label: "Visibility", icon: Eye, desc: "Real-time insight across all projects and teams" },
  { label: "Readiness", icon: Award, desc: "Always prepared for audits and reviews" },
];

const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; border: string; dot: string }
> = {
  Structure: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500" },
  Governance: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-[#E87722]" },
  Continuity: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-500" },
  Readiness: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
};

function useInView(threshold = 0.12): InViewTuple {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", delay = 0 }: AnimSectionProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function CountUp({ target, suffix = "", duration = 1800 }: CountUpProps) {
  const [count, setCount] = useState<number | string>(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    const num = typeof target === "number" ? target : parseFloat(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView]);
  const parsedTarget = typeof target === "number" ? target : parseFloat(target);

  return <span ref={ref}>{isNaN(parsedTarget) ? target : count}{suffix}</span>;
}

export default function WhyClaimScope() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScheduleNavigation = () => {
    router.push("/schedule");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const groupedComparison = [...COMPARISON_DATA, ...EXTRA_COMPARISON_ROWS].reduce<Record<string, ComparisonRow[]>>((acc, row) => {
    if (!acc[row.category]) acc[row.category] = [];
    acc[row.category].push(row);
    return acc;
  }, {});

  const categories = ["All", ...Object.keys(groupedComparison)];
  const filteredGroups = activeCategory === "All"
    ? groupedComparison
    : { [activeCategory]: groupedComparison[activeCategory] };

  return (
   <div className="min-h-screen font-sans overflow-x-hidden" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative py-16 md:py-16 flex items-center bg-[#1E2E66] text-white overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(232,119,34,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,119,34,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 65%)" }}
        />
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,68,128,0.25) 0%, transparent 65%)" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(232,119,34,0.08) 0%, transparent 70%)" }}
        />

        {/* Decorative vertical lines */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#E87722]/20 to-transparent" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#E87722]/10 to-transparent" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-3xl mb-14">
              <p className="text-2xl md:text-3xl text-white/70 font-extralight leading-relaxed mb-5">
                Most organizations do not struggle because documentation is missing.
              </p>
              <p className="text-xl md:text-2xl text-[#E87722] font-light leading-relaxed">
                They struggle because documentation is not consistently carried from scope to execution.
              </p>
            </div>

            {/* Four pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-4xl">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="group p-5 rounded-xl border border-white/8 bg-white/4 hover:bg-[#E87722]/10 hover:border-[#E87722]/30 transition-all duration-300 cursor-default"
                >
                  <pillar.icon className="w-5 h-5 text-[#E87722] mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium text-sm mb-1">{pillar.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { router.push('/schedule'); window.scrollTo(0, 0); }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1E2E66] hover:bg-[#1E2E66] text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(232,119,34,0.3)] border-2 border-white hover:shadow-[0_0_60px_rgba(232,119,34,0.5)]"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#comparison"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white bg-[#F06600] text-white/80 hover:text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                View Comparison
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== KEY MESSAGE BAND ===== */}
      <section className="py-6 bg-[#E87722] overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8 text-white font-medium text-sm tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Documentation Governance
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Operational Readiness
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Audit Continuity
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Accountability Frameworks
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } } .animate-marquee { animation: marquee 30s linear infinite; }`}</style>
      </section>

      {/* ===== OPERATIONAL RISKS SECTION ===== */}
      <section className="py-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection className="text-center mb-12">
            <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Governance Reality</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#0a1628]">
              Operational Risks Created by Poor Documentation Governance
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Documentation Misalignment",
                desc: "Documentation and field execution become disconnected, creating inconsistencies between planning and delivery."
              },
              {
                title: "Workflow Inconsistency",
                desc: "Teams operate from different assumptions, records, and versions of information."
              },
              {
                title: "Reduced Visibility",
                desc: "Leadership lacks confidence in documentation status, accountability, and execution alignment."
              },
              {
                title: "Audit Exposure",
                desc: "Incomplete records create challenges during audits, reviews, inspections, and operational oversight."
              }
            ].map((risk, idx) => (
              <AnimSection key={idx} delay={idx * 80} className="h-full">
                <div className="p-6 rounded-2xl border-2 border-blue-600 bg-white shadow-sm hover:shadow-md transition-all h-full hover:border-blue-600 group">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mb-4 group-hover:bg-[#E87722]/20 transition-colors">
                    <span className="text-white text-sm font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">{risk.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{risk.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
          {/* Governance descriptive cards (replaced metrics) */}
          <div className="mt-16 pt-8 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-zinc-50 border border-blue-600">
              <div className="text-lg font-semibold text-[#1E2E66] mb-2">Governance Controls Framework™</div>
              <div className="text-xs text-zinc-500 leading-relaxed">Structured governance mechanisms supporting documentation accountability, visibility, continuity, and readiness.</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-50 border border-blue-600">
              <div className="text-lg font-semibold text-[#1E2E66] mb-2">Operational Experience</div>
              <div className="text-xs text-zinc-500 leading-relaxed">Governance-informed operational experience supporting documentation consistency and workflow alignment.</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-50 border border-blue-600">
              <div className="text-lg font-semibold text-[#1E2E66] mb-2">Four Governance Pillars</div>
              <div className="text-xs text-zinc-500 leading-relaxed">Accountability, Continuity, Visibility, and Readiness.</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-50 border border-blue-600">
              <div className="text-lg font-semibold text-[#1E2E66] mb-2">Governance Visibility</div>
              <div className="text-xs text-zinc-500 leading-relaxed">Improved visibility across documentation workflows, records, and operational processes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section id="comparison" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Competitive Comparison</p>
                <h2 className="text-left font-bold leading-tight text-blue-900 md:text-2xl lg:text-3xl">
                 Why Documentation Governance Requires More Than Storage and Workflow
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Most organizations already maintain document repositories, workflow tools, learning systems, and operational platforms.
                ClaimScope™ focuses on the governance, readiness, continuity, accountability, 
                and oversight layers that operate above and alongside those systems.
                It is designed to complement existing organizational technology investments by
                improving documentation governance visibility, operational continuity, audit readiness,
                and organizational memory.
                </p>
              </div>
              {/* Score cards removed per compliance directive */}
            </div>
          </AnimSection>

          {/* Category filter tabs */}
          <AnimSection>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-[#1E2E66] text-white border-[#1E2E66]"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-[#E87722]/40 hover:text-[#E87722]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimSection>

          <AnimSection>
            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-200/50">
              {/* Table header - removed numerical subtext */}
              <div className="grid grid-cols-[1fr_160px_160px] bg-[#1E2E66] ">
                <div className="p-5 pl-7">
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Capability</p>
                </div>
                <div className="p-5 text-center border-l border-white/8">
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Conventional Documentation Approaches</p>
                </div>
                <div className="p-5 text-center border-l border-[#E87722]/20 bg-[#E87722]/10">
                  <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] font-semibold">ClaimScope™ Documentation Governance Framework</p>
                </div>
              </div>

              {/* Table body */}
              {Object.entries(filteredGroups).map(([category, rows]) => {
                const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Structure;
                return (
                  <div key={category}>
                    {/* Category header */}
                    <div className={`grid grid-cols-[1fr_160px_160px] border-t border-zinc-200 ${colors.bg}`}>
                      <div className="px-7 py-3 flex items-center gap-3 col-span-3 ">
                        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                        <p className={`text-xs uppercase tracking-[0.18em] font-bold ${colors.text}`}>{category}</p>
                      </div>
                    </div>

                    {rows.map((row, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredRow(`${category}-${idx}`)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={`grid grid-cols-[1fr_160px_160px] border-t border-zinc-100 transition-colors duration-150 ${
                          hoveredRow === `${category}-${idx}` ? "bg-orange-50/60" : idx % 2 === 0 ? "bg-white" : "bg-zinc-50/50"
                        }`}
                      >
                        <div className="px-7 py-4 flex items-center">
                          <span className="text-[#0a1628] text-sm">{CAPABILITY_LABEL_MAP[row.capability] || row.capability}</span>
                        </div>
                        <div className="py-4 flex items-center justify-center border-l border-zinc-100">
                          {row.traditional ? (
                            <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center">
                              <span className="text-emerald-600 text-xs font-bold">✓</span>
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                              <span className="text-zinc-400 text-xs">✕</span>
                            </div>
                          )}
                        </div>
                        <div className="py-4 flex items-center justify-center border-l border-[#E87722]/10 bg-[#E87722]/3">
                          <div className="w-7 h-7 rounded-full bg-[#E87722] flex items-center justify-center shadow-sm shadow-[#E87722]/30">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            {/* Governance disclaimer (enterprise compliance) */}
            <div className="mt-6 text-center text-xs text-zinc-400 border-t border-zinc-200 pt-6">
              <p>The comparison reflects ClaimScope™'s governance methodology and documentation readiness framework. Capabilities shown are intended to illustrate governance-focused distinctions and are not intended as statements regarding any specific third-party product or vendor.</p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ===== NEW ENTERPRISE PERSPECTIVE SECTION ===== */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimSection>
            <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-4 font-semibold">Enterprise Perspective</p>
            <h2 className="text-3xl md:text-5xl text-gray-800 ld mb-6">Enterprise Perspective</h2>
            <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
              <p>
                ClaimScope™ was designed to establish documentation governance, operational continuity, accountability, and audit readiness across projects, portfolios, and organizational workflows.
              </p>
              <p>
                Unlike traditional documentation systems that primarily focus on storage and retrieval, ClaimScope™ focuses on how documentation is structured, validated, maintained, and carried forward throughout the operational lifecycle.
              </p>
              <p>
                ClaimScope™ is not intended to replace document storage systems, workflow platforms, learning management systems, operational software, or existing organizational technology investments.
              </p>
              <p>
                It is positioned as a governance, readiness, continuity, and oversight framework layer that operates alongside those systems.
              </p>
              <p className="font-medium text-[#1E2E66]">
                The objective is not simply to store records. The objective is to improve visibility, accountability, consistency, continuity, and organizational confidence.
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ===== WHY GOVERNANCE MATTERS (REVISED) ===== */}
      <section className="py-24 bg-[#1E2E66] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-full opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(-45deg, #E87722 0, #E87722 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-4 font-semibold">Why Governance Matters</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-white leading-tight mb-8">
                Documentation alone does not create readiness.<br />
                <span className="text-[#E87722] italic">Governance creates readiness.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  Organizations frequently maintain extensive documentation but still experience execution gaps, workflow inconsistency, audit challenges, and accountability breakdowns.
                </p>
                <p className="text-white/60 text-base leading-relaxed border-l-4 border-[#E87722]/50 pl-6">
                  ClaimScope™ was designed to help organizations establish governance structures that improve documentation visibility, workflow accountability, operational continuity, audit preparedness, and organizational confidence.
                </p>
              </div>
            </AnimSection>

            <AnimSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "High", label: "risk of misalignment without structured governance" },
                  { num: "Faster", label: "audit resolution with accountability frameworks" },
                  { num: "Reduced", label: "internal friction through workflow visibility" },
                  { num: "Full", label: "lifecycle governance with ClaimScope™" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl backdrop-blur-sm transition-all hover:scale-[1.02] ${
                      i % 2 === 0
                        ? "bg-[#1E2E66] border border-[#E87722]/30 shadow-lg"
                        : "bg-white/10 border border-white/20"
                    }`}
                  >
                    <div
                      className={`text-3xl font-light mb-2 ${
                        i % 2 === 0 ? "text-[#E87722]" : "text-white"
                      }`}
                    >
                      {item.num}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        i % 2 === 0 ? "text-white/60" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section id="executive-view" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection>
            <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Leadership</p>
            <h2 className="text-4xl md:text-5xl text-[#0a1628] mb-16">Leadership & Governance Perspective</h2>
          </AnimSection>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <AnimSection className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-[#E87722]/60 via-[#1E2E66]/30 to-[#E87722]/20">
                    <div className="absolute inset-0 rounded-3xl bg-white" />
                  </div>
                  <div className="relative bg-white rounded-3xl p-8 border border-[#E87722]/20 shadow-xl">
                    <div className="relative w-28 h-28 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E87722] to-[#c05d10] opacity-15" />
                      <div className="w-full h-full rounded-full border-2 border-[#E87722]/30 bg-[#1E2E66] flex items-center justify-center">
                        <span className="text-3xl font-light text-[#E87722]">TW</span>
                      </div>
                      <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white" />
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-[#0a1628] mb-1">Terrence Walker</h3>
                      <p className="text-[#E87722] text-sm font-medium">Managing Member</p>
                      <p className="text-zinc-500 text-sm">ClaimScope Consulting, LLC</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {["Governance", "Catastrophe Claims", "FEMA Programs"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs bg-[#0a1628]/5 text-[#0a1628]/70 border border-[#0a1628]/10">{tag}</span>
                      ))}
                    </div>
                    <div className="text-center text-sm text-zinc-500 mb-6">
                      <span className="font-semibold text-[#0a1628]">15+</span> years of operational experience
                    </div>
                    <button
                      onClick={() => { router.push('/schedule'); window.scrollTo(0, 0); }}
                      className="w-full py-3.5 bg-[#1E2E66] hover:bg-[#1E2E66] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#E87722]/30 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      Connect with Terrence
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimSection>

            <AnimSection delay={150} className="md:col-span-3">
              <div className="space-y-6">
                <div className="p-7 rounded-2xl bg-white border border-zinc-200 hover:border-[#E87722]/30 transition-colors duration-300 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 bg-[#E87722] rounded-full" />
                    <p className="text-xs uppercase tracking-[0.15em] text-[#E87722] font-semibold">Governance Experience</p>
                  </div>
                  <p className="text-[#0a1628]/70 leading-relaxed">
                    Terrence Walker brings more than 15 years of operational experience spanning catastrophe response, FEMA program delivery, insurance operations, documentation governance, operational continuity, and organizational accountability frameworks.
                  </p>
                </div>
                {[
                  {
                    label: "Background",
                    content: "Mr. Walker brings more than 15 years of professional experience across enterprise insurance operations, catastrophe response environments, FEMA program delivery, and regulatory compliance frameworks. His career has included leadership roles supporting national insurance carriers, catastrophe claims operations, federal disaster programs, and multi-jurisdictional regulatory environments."
                  },
                  {
                    label: "Prior Roles",
                    content: "Prior to founding ClaimScope Consulting, LLC, Mr. Walker served in multiple leadership and operational roles across the insurance and disaster recovery ecosystem, including catastrophe claims management, quality assurance oversight, federal disaster program delivery, and statewide emergency operations coordination."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-7 rounded-2xl bg-white border border-zinc-200 hover:border-[#E87722]/30 transition-colors duration-300 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-[#E87722] rounded-full" />
                      <p className="text-xs uppercase tracking-[0.15em] text-[#E87722] font-semibold">{item.label}</p>
                    </div>
                    <p className="text-[#0a1628]/70 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ===== GOVERNANCE FRAMEWORK (header changed) ===== */}
      <section id="governance" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-4 font-semibold">Governance Framework</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#0a1628] mb-6 leading-tight">
                Governance Through Operational Accountability
              </h2>
              <p className="text-[#0a1628]/60 leading-relaxed mb-5">
                Most documentation platforms focus on storing information. ClaimScope™ focuses on helping organizations establish governance structures that improve documentation readiness, workflow accountability, operational continuity, audit preparedness, and responsible technology adoption.
              </p>
              <p className="text-[#0a1628]/60 leading-relaxed mb-8">
                Rather than functioning solely as a repository, ClaimScope™ provides governance-centered frameworks designed to improve visibility, consistency, accountability, and organizational confidence.
              </p>

              <div className="space-y-3">
                {[
                  "Advisory-only documentation governance and readiness consulting",
                  "Designed to operate alongside storage, workflow, LMS, and operational systems",
                  "No claim negotiation, legal services, or insurance adjusting",
                  "Governance frameworks that improve audit readiness",
                  "Operational continuity across the full project lifecycle",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-lg bg-[#E87722]/10 border border-[#E87722]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#E87722] text-xs">✓</span>
                    </div>
                    <span className="text-[#0a1628]/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </AnimSection>

            <AnimSection delay={200}>
              <div className="relative pl-6">
                <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#E87722] via-[#1E2E66]/30 to-[#E87722]/20" />
                <div className="space-y-4">
                  {[
                    { step: "01", label: "Defined Scope", sub: "Establish documented scope, requirements, and operational objectives.", active: true },
                    { step: "02", label: "Accountability Assignment", sub: "Assign ownership, governance responsibility, and documentation accountability.", active: false },
                    { step: "03", label: "Execution Alignment", sub: "Validate consistency between documentation, workflow activity, and operational execution.", active: false },
                    { step: "04", label: "Continuous Revalidation", sub: "Maintain documentation integrity as conditions, assumptions, and requirements evolve.", active: false },
                  ].map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                        item.active
                          ? "bg-[#E87722] border-[#E87722] text-white shadow-lg shadow-[#E87722]/40"
                          : "bg-white border-zinc-300 text-zinc-400"
                      }`}>
                        {item.active ? "●" : i + 1}
                      </div>
                      <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                        item.active
                          ? "border-[#E87722]/30 bg-gradient-to-r from-[#E87722]/5 to-[#1E2E66]/3 shadow-md"
                          : "border-zinc-200 bg-white hover:border-zinc-300"
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-xs font-bold tracking-widest ${item.active ? "text-[#E87722]" : "text-zinc-300"}`}>{item.step}</span>
                              <span className={`font-semibold text-sm ${item.active ? "text-[#E87722]" : "text-zinc-700"}`}>{item.label}</span>
                            </div>
                            <p className="text-zinc-500 text-xs">{item.sub}</p>
                          </div>
                          {item.active && (
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722]/10">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] animate-pulse" />
                              <span className="text-[#E87722] text-xs font-medium">Active</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES (numeric claims removed) ===== */}
      <section id="outcomes" className="py-24 bg-[#1E2E66] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #E87722 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E87722 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimSection className="mb-16">
            <p className="text-[#E87722] text-xs uppercase tracking-[0.2em] mb-4 font-semibold">Operational Outcomes</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight max-w-2xl">
                When documentation is structured,{" "}
                <span className="text-[#E87722] italic">operations stop guessing.</span>
              </h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                ClaimScope™ establishes a structured documentation environment that supports alignment across teams, workflows, and project lifecycles.
              </p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {OUTCOMES.map((outcome, idx) => (
              <AnimSection key={idx} delay={idx * 120}>
                <div className="group relative p-8 rounded-3xl border border-white/8 bg-white/3 hover:bg-white/6 transition-all duration-500 h-full flex flex-col overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{ background: `radial-gradient(circle at 0% 0%, rgba(232,119,34,0.08) 0%, transparent 60%)` }}
                  />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-[#E87722]/10 border border-[#E87722]/20 flex items-center justify-center mb-5 group-hover:bg-[#E87722]/20 transition-colors">
                      <outcome.icon className="w-5 h-5 text-[#E87722]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E87722] transition-colors duration-300">
                      {outcome.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="text-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { router.push('/schedule'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#1E2E66] hover:bg-[#1E2E66] text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_60px_rgba(232,119,34,0.25)] hover:shadow-[0_0_80px_rgba(232,119,34,0.4)] text-lg border-2 border-white"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </AnimSection>
        </div>
      </section>

      {/* ===== FOOTER COMPLIANCE STATEMENT (UPDATED) ===== */}
      <section className="py-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] text-zinc-400 uppercase tracking-wider">
           This comparison is intended to illustrate governance-oriented methodology distinctions and does not evaluate, rank, or compare any specific third-party product, platform, or vendor. Organizations frequently utilize multiple systems as part of their documentation and operational environment. ClaimScope™ is designed to complement existing systems by providing documentation governance, readiness, continuity, accountability, and oversight frameworks.
            ClaimScope™ is not intended to replace document storage systems, workflow platforms, learning management systems, operational software, or existing organizational technology investments.
          </p>
        </div>
      </section>

    </div>
  );
}
