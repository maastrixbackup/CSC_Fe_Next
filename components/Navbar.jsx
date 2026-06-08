"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Logo from "@/public/assets/Logo Upated.png";

const aboutItems = [
    { label: "About ClaimScope™", path: "/about" },
    { label: "Why ClaimScope™", path: "/why-claimscope" },
  ];

const accessItems = [
  { label: "Client Access", path: "/access" },
  { label: "AI Governance", path: "/ai-governance-human-oversight" },
];

const solutionItems = [
  {
    label: "Operational Continuity",
    path: "/operational-continuity-framework",
  },
  {
    label: "Documentation Governance",
    path: "/documentation-governance",
  },
  {
    label: "Audit Readiness",
    path: "/audit-readiness-framework",
  },
];

const assessmentItems = [
  { label: "Governance Assessment", path: "/assessment" },
  {
    label: "Readiness Scoring Explained",
    path: "/readiness-scoring-explained",
  },
];

function pushDataLayer(payload) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = useState(false);
  const [isDesktopAccessOpen, setIsDesktopAccessOpen] = useState(false);
  const [isDesktopSolutionsOpen, setIsDesktopSolutionsOpen] = useState(false);
  const [isDesktopAssessmentOpen, setIsDesktopAssessmentOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileAccessOpen, setIsMobileAccessOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileAssessmentOpen, setIsMobileAssessmentOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const desktopAboutRef = useRef(null);
  const desktopAccessRef = useRef(null);
  const desktopSolutionsRef = useRef(null);
  const desktopAssessmentRef = useRef(null);
  const mobileAboutRef = useRef(null);
  const mobileAccessRef = useRef(null);
  const mobileSolutionsRef = useRef(null);
  const mobileAssessmentRef = useRef(null);

  const isAboutActive = () =>
    pathname === "/about" || pathname === "/why-claimscope";

  const isAccessActive = () =>
    pathname === "/access" || pathname === "/ai-governance-human-oversight";

  const isSolutionsActive = () =>
    pathname === "/solutions" ||
    pathname === "/operational-continuity-framework" ||
    pathname === "/documentation-governance" ||
    pathname === "/audit-readiness-framework";

  const isAssessmentActive = () =>
    pathname === "/assessment" || pathname === "/readiness-scoring-explained";

  const closeAllDesktopDropdowns = () => {
    setIsDesktopAboutOpen(false);
    setIsDesktopAccessOpen(false);
    setIsDesktopSolutionsOpen(false);
    setIsDesktopAssessmentOpen(false);
  };

  const closeAllMobileDropdowns = () => {
    setIsMobileAboutOpen(false);
    setIsMobileAccessOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileAssessmentOpen(false);
  };

  const closeMenus = () => {
    setIsOpen(false);
    closeAllDesktopDropdowns();
    closeAllMobileDropdowns();
  };

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (!nextState) {
      closeAllMobileDropdowns();
    }
  };

  const toggleDesktopAbout = () => {
    setIsDesktopAboutOpen((prev) => !prev);
    setIsDesktopAccessOpen(false);
    setIsDesktopSolutionsOpen(false);
    setIsDesktopAssessmentOpen(false);
  };

  const toggleDesktopAccess = () => {
    setIsDesktopAccessOpen((prev) => !prev);
    setIsDesktopAboutOpen(false);
    setIsDesktopSolutionsOpen(false);
    setIsDesktopAssessmentOpen(false);
  };

  const toggleDesktopSolutions = () => {
    setIsDesktopSolutionsOpen((prev) => !prev);
    setIsDesktopAboutOpen(false);
    setIsDesktopAccessOpen(false);
    setIsDesktopAssessmentOpen(false);
  };

  const toggleDesktopAssessment = () => {
    setIsDesktopAssessmentOpen((prev) => !prev);
    setIsDesktopAboutOpen(false);
    setIsDesktopAccessOpen(false);
    setIsDesktopSolutionsOpen(false);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen((prev) => !prev);
    setIsMobileAccessOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileAssessmentOpen(false);
  };

  const toggleMobileAccess = () => {
    setIsMobileAccessOpen((prev) => !prev);
    setIsMobileAboutOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileAssessmentOpen(false);
  };

  const toggleMobileSolutions = () => {
    setIsMobileSolutionsOpen((prev) => !prev);
    setIsMobileAboutOpen(false);
    setIsMobileAccessOpen(false);
    setIsMobileAssessmentOpen(false);
  };

  const toggleMobileAssessment = () => {
    setIsMobileAssessmentOpen((prev) => !prev);
    setIsMobileAboutOpen(false);
    setIsMobileAccessOpen(false);
    setIsMobileSolutionsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDesktopAboutOpen &&
        desktopAboutRef.current &&
        !desktopAboutRef.current.contains(event.target)
      ) {
        setIsDesktopAboutOpen(false);
      }

      if (
        isDesktopAccessOpen &&
        desktopAccessRef.current &&
        !desktopAccessRef.current.contains(event.target)
      ) {
        setIsDesktopAccessOpen(false);
      }

      if (
        isDesktopSolutionsOpen &&
        desktopSolutionsRef.current &&
        !desktopSolutionsRef.current.contains(event.target)
      ) {
        setIsDesktopSolutionsOpen(false);
      }

      if (
        isDesktopAssessmentOpen &&
        desktopAssessmentRef.current &&
        !desktopAssessmentRef.current.contains(event.target)
      ) {
        setIsDesktopAssessmentOpen(false);
      }

      if (
        isMobileAboutOpen &&
        mobileAboutRef.current &&
        !mobileAboutRef.current.contains(event.target)
      ) {
        setIsMobileAboutOpen(false);
      }

      if (
        isMobileAccessOpen &&
        mobileAccessRef.current &&
        !mobileAccessRef.current.contains(event.target)
      ) {
        setIsMobileAccessOpen(false);
      }

      if (
        isMobileSolutionsOpen &&
        mobileSolutionsRef.current &&
        !mobileSolutionsRef.current.contains(event.target)
      ) {
        setIsMobileSolutionsOpen(false);
      }

      if (
        isMobileAssessmentOpen &&
        mobileAssessmentRef.current &&
        !mobileAssessmentRef.current.contains(event.target)
      ) {
        setIsMobileAssessmentOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllDesktopDropdowns();
        closeAllMobileDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [
    isDesktopAboutOpen,
    isDesktopAccessOpen,
    isDesktopSolutionsOpen,
    isDesktopAssessmentOpen,
    isMobileAboutOpen,
    isMobileAccessOpen,
    isMobileSolutionsOpen,
    isMobileAssessmentOpen,
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        closeAllMobileDropdowns();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      closeAllMobileDropdowns();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeAllDesktopDropdowns();
    }
  }, [isOpen]);

  const handleNavigation = (path) => {
    if (path.startsWith("/solutions/")) {
      const slug = path.replace("/solutions/", "");
      pushDataLayer({
        event: "service_page_view",
        service_slug: slug,
        page_path: path,
      });
    }

    router.push(path);
    closeMenus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleConsultation = () => {
    pushDataLayer({
      event: "cta_click",
      cta_label: "structured_consultation",
      cta_location: "navbar",
      cta_destination: "/schedule",
    });

    handleNavigation("/schedule");
  };

  return (
    <nav className="fixed z-30 mt-0 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[82rem] px-2 sm:px-6 lg:px-0">
        <div className="flex h-auto items-center justify-between">
          <div className="flex items-center">
            <div
              className="group flex-shrink-0 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <Image
                src={Logo}
                alt="CSC Logo"
                priority
                className="h-18 w-24 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 md:h-24 md:w-32"
              />
            </div>
          </div>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
            <div className="relative">
              <button
                type="button"
                onClick={() => handleNavigation("/")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/" ? "text-gray-900" : ""
                }`}
              >
                HOME
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="relative" ref={desktopAboutRef}>
              <button
                type="button"
                onClick={toggleDesktopAbout}
                aria-expanded={isDesktopAboutOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  isAboutActive() ? "text-gray-900" : ""
                }`}
              >
                ABOUT
                <svg
                  className={`h-6 w-6 text-black transition-transform duration-200 ${
                    isDesktopAboutOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16L5 8h14z" fill="currentColor" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    isAboutActive()
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {isDesktopAboutOpen && (
                <div className="absolute left-0 top-full z-50 mt-6 w-[280px] rounded-lg border border-gray-200 bg-[#F1F4F8] py-2 shadow-xl">
                  {aboutItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="w-full cursor-pointer px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={desktopAccessRef}>
              <button
                type="button"
                onClick={toggleDesktopAccess}
                aria-expanded={isDesktopAccessOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  isAccessActive() ? "text-gray-900" : ""
                }`}
              >
                ACCESS
                <svg
                  className={`h-6 w-6 text-black transition-transform duration-200 ${
                    isDesktopAccessOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16L5 8h14z" fill="currentColor" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    isAccessActive()
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {isDesktopAccessOpen && (
                <div className="absolute left-0 top-full z-50 mt-6 w-[280px] rounded-lg border border-gray-200 bg-[#F1F4F8] py-2 shadow-xl">
                  {accessItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="w-full cursor-pointer px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={desktopSolutionsRef}>
              <button
                type="button"
                onClick={toggleDesktopSolutions}
                aria-expanded={isDesktopSolutionsOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  isSolutionsActive() ? "text-gray-900" : ""
                }`}
              >
                SOLUTIONS
                <svg
                  className={`h-6 w-6 text-black transition-transform duration-200 ${
                    isDesktopSolutionsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16L5 8h14z" fill="currentColor" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    isSolutionsActive()
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {isDesktopSolutionsOpen && (
                <div className="absolute left-0 top-full z-50 mt-6 w-[380px] rounded-lg border border-gray-200 bg-[#F1F4F8] py-2 shadow-xl">
                  {solutionItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="w-full cursor-pointer px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={desktopAssessmentRef}>
              <button
                type="button"
                onClick={toggleDesktopAssessment}
                aria-expanded={isDesktopAssessmentOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  isAssessmentActive() ? "text-gray-900" : ""
                }`}
              >
                ASSESSMENT
                <svg
                  className={`h-6 w-6 text-black transition-transform duration-200 ${
                    isDesktopAssessmentOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16L5 8h14z" fill="currentColor" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    isAssessmentActive()
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {isDesktopAssessmentOpen && (
                <div className="absolute left-0 top-full z-50 mt-6 w-[320px] rounded-lg border border-gray-200 bg-[#F1F4F8] py-2 shadow-xl">
                  {assessmentItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="w-full cursor-pointer px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => handleNavigation("/insights")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/insights" ? "text-gray-900" : ""
                }`}
              >
                INSIGHTS
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/insights"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => handleNavigation("/faq")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/faq" ? "text-gray-900" : ""
                }`}
              >
                FAQ
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/faq"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => handleNavigation("/contact")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/contact" ? "text-gray-900" : ""
                }`}
              >
                CONTACT
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/contact"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <button
              type="button"
              onClick={handleScheduleConsultation}
              className="whitespace-nowrap bg-[#1a237e] px-6 py-4 text-sm font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0d47a1] hover:shadow-[#1a237e]/30"
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <button
              type="button"
              onClick={() => handleNavigation("/")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              HOME
            </button>

            <div ref={mobileAboutRef}>
              <button
                type="button"
                onClick={toggleMobileAbout}
                aria-expanded={isMobileAboutOpen}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                ABOUT
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileAboutOpen && (
                <div className="space-y-1 py-1 pl-3 pr-2">
                  {aboutItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div ref={mobileAccessRef}>
              <button
                type="button"
                onClick={toggleMobileAccess}
                aria-expanded={isMobileAccessOpen}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                ACCESS
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileAccessOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileAccessOpen && (
                <div className="space-y-1 py-1 pl-3 pr-2">
                  {accessItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div ref={mobileSolutionsRef}>
              <button
                type="button"
                onClick={toggleMobileSolutions}
                aria-expanded={isMobileSolutionsOpen}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                SOLUTIONS
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileSolutionsOpen && (
                <div className="space-y-1 py-1 pl-3 pr-2">
                  {solutionItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div ref={mobileAssessmentRef}>
              <button
                type="button"
                onClick={toggleMobileAssessment}
                aria-expanded={isMobileAssessmentOpen}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                ASSESSMENT
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileAssessmentOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileAssessmentOpen && (
                <div className="space-y-1 py-1 pl-3 pr-2">
                  {assessmentItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavigation("/insights")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              INSIGHTS
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("/faq")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              FAQ
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("/contact")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              CONTACT
            </button>

            <div className="px-3 py-2">
              <button
                type="button"
                onClick={handleScheduleConsultation}
                className="w-full rounded-md bg-[#1E2E66] px-4 py-3 text-base font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#0d47a1]"
              >
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
