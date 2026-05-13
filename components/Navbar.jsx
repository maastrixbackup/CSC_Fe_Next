"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/public/assets/Logo Upated.png";

const solutionItems = [
  {
    label: "Contractor Documentation Support",
    path: "/solutions/contractor-tracks",
  },
  {
    label: "Real Estate / REO Documentation Readiness",
    path: "/solutions/reo-tracks",
  },
  {
    label: "Disaster Documentation Readiness + FEMA IA/PA Education",
    path: "/solutions/disaster",
  },
];

const accessItems = [
  { label: "Client Portal", path: "/access" },
  { label: "Training Portal (LMS)", path: "/lms" },
  { label: "Member Login", path: "/member-login" },
  { label: "Documentation Resources", path: "/lms/documentation-readiness" },
  // { label: "Governance & Compliance Resources", path: "/access#advisory-support" },
];

function pushDataLayer(payload) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

function isAccessPath(path) {
  return ["/access", "/lms", "/member-login", "/control/login"].includes(path);
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopSolutionsOpen, setIsDesktopSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isDesktopAccessOpen, setIsDesktopAccessOpen] = useState(false);
  const [isMobileAccessOpen, setIsMobileAccessOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const desktopSolutionsRef = useRef(null);
  const mobileSolutionsRef = useRef(null);
  const desktopAccessRef = useRef(null);
  const mobileAccessRef = useRef(null);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (!nextState) {
      setIsMobileSolutionsOpen(false);
      setIsMobileAccessOpen(false);
    }
  };

  const toggleDesktopSolutions = () => {
    setIsDesktopSolutionsOpen((prev) => !prev);
    setIsDesktopAccessOpen(false);
  };

  const toggleMobileSolutions = () => {
    setIsMobileSolutionsOpen((prev) => !prev);
    setIsMobileAccessOpen(false);
  };

  const toggleDesktopAccess = () => {
    setIsDesktopAccessOpen((prev) => !prev);
    setIsDesktopSolutionsOpen(false);
  };

  const toggleMobileAccess = () => {
    setIsMobileAccessOpen((prev) => !prev);
    setIsMobileSolutionsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDesktopSolutionsOpen &&
        desktopSolutionsRef.current &&
        !desktopSolutionsRef.current.contains(event.target)
      ) {
        setIsDesktopSolutionsOpen(false);
      }

      if (
        isMobileSolutionsOpen &&
        mobileSolutionsRef.current &&
        !mobileSolutionsRef.current.contains(event.target)
      ) {
        setIsMobileSolutionsOpen(false);
      }

      if (
        isDesktopAccessOpen &&
        desktopAccessRef.current &&
        !desktopAccessRef.current.contains(event.target)
      ) {
        setIsDesktopAccessOpen(false);
      }

      if (
        isMobileAccessOpen &&
        mobileAccessRef.current &&
        !mobileAccessRef.current.contains(event.target)
      ) {
        setIsMobileAccessOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsDesktopSolutionsOpen(false);
        setIsMobileSolutionsOpen(false);
        setIsDesktopAccessOpen(false);
        setIsMobileAccessOpen(false);
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
    isDesktopSolutionsOpen,
    isMobileSolutionsOpen,
    isDesktopAccessOpen,
    isMobileAccessOpen,
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsMobileSolutionsOpen(false);
        setIsMobileAccessOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setIsDesktopSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsDesktopAccessOpen(false);
    setIsMobileAccessOpen(false);
  };

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                className="h-18 w-24 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 md:h-24 md:w-36"
              />
            </div>
          </div>

          <div className="hidden items-center space-x-8 lg:flex">
            <div className="relative">
              <button
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

            <div className="relative">
              <button
                onClick={() => handleNavigation("/about")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/about" ? "text-gray-900" : ""
                }`}
              >
                ABOUT
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/about"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="relative" ref={desktopAccessRef}>
              <button
                onClick={toggleDesktopAccess}
                aria-expanded={isDesktopAccessOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  isAccessPath(pathname) ? "text-gray-900" : ""
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
                    isAccessPath(pathname)
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {isDesktopAccessOpen && (
                <div className="absolute left-0 top-full z-50 mt-6 w-[320px] rounded-lg border border-gray-200 bg-[#F1F4F8] py-2 shadow-xl">
                  {accessItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={desktopSolutionsRef}>
              <button
                onClick={toggleDesktopSolutions}
                aria-expanded={isDesktopSolutionsOpen}
                className={`group relative flex items-center gap-1 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname.startsWith("/solutions") ? "text-gray-900" : ""
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
                    pathname.startsWith("/solutions")
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
                      onClick={() => handleNavigation(item.path)}
                      className="w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleNavigation("/pricing")}
                className={`group relative py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 ${
                  pathname === "/pricing" ? "text-gray-900" : ""
                }`}
              >
                PRICING
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#1a237e] transition-all duration-300 ${
                    pathname === "/pricing"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="relative">
              <button
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
              onClick={handleScheduleConsultation}
              className="whitespace-nowrap px-6 py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-[#1a237e]/30 hover:scale-105 transform"
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>

          <div className="lg:hidden">
            <button
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
          <div className="space-y-1 px-2 pt-2 pb-3">
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              HOME
            </button>

            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              ABOUT
            </button>

            <div ref={mobileAccessRef}>
              <button
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
              onClick={() => handleNavigation("/pricing")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              PRICING
            </button>

            <button
              onClick={() => handleNavigation("/faq")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavigation("/insights")}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              INSIGHTS
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full rounded-md px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              CONTACT
            </button>

            <div className="px-3 py-2">
              <button
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
