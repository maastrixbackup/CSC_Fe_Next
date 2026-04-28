"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/Logo Upated.png";

const NAV_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "ACCESS", path: "/access" },
  { label: "PRICING", path: "/pricing" },
  { label: "INSIGHTS", path: "/insights" },
  { label: "FAQ", path: "/faq" },
  { label: "CONTACT", path: "/contact" },
];

const solutionItems = [
   {
    label: "Contractor Documentation Support",
    path: "/solutions/contractor-tracks",  // Changed from query param to route path
  },
  {
    label: "Real Estate / REO Documentation Readiness",
    path: "/solutions/reo-tracks",  // Changed from query param to route path
  },
  {
    label: "Disaster Documentation Readiness + FEMA IA/PA Education",
    path: "/solutions/disaster",  // Changed from query param to route path
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const isActive = (path) => pathname === path;

  const handleNavigation = useCallback(
    (path) => {
      router.push(path);
      setIsOpen(false);
      setDesktopDropdown(false);
      setMobileDropdown(false);
    },
    [router]
  );

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) setMobileDropdown(false);
      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileDropdown(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setDesktopDropdown(false);
        setMobileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const NavButton = ({ item }) => (
    <button
      onClick={() => handleNavigation(item.path)}
      className={`text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 relative group ${
        isActive(item.path) ? "text-gray-900" : ""
      }`}
    >
      {item.label}
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1a237e] transition-all duration-300 ${
          isActive(item.path)
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </button>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full z-30 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-auto">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => handleNavigation("/")}
          >
            <Image
              src={Logo}
              alt="CSC Logo"
              loading="eager"
              className="w-24 h-18 md:w-36 md:h-24 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-sm"
            />
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <NavButton key={item.path} item={item} />
            ))}

            {/* SOLUTIONS */}
            <div className="relative" ref={desktopRef}>
              <button
                onClick={() => setDesktopDropdown((p) => !p)}
                className={`text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 relative group flex items-center gap-1 ${
                  pathname.startsWith("/solutions")
                    ? "text-gray-900"
                    : ""
                }`}
              >
                SOLUTIONS
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${
                    desktopDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16L5 8h14z" fill="currentColor" />
                </svg>

                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1a237e] transition-all duration-300 ${
                    pathname.startsWith("/solutions")
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>

              {desktopDropdown && (
                <div className="absolute top-full left-0 mt-6 w-[380px] bg-[#fff] border border-gray-200 rounded-lg shadow-xl z-50 py-2">
                  {solutionItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {NAV_ITEMS.slice(3).map((item) => (
              <NavButton key={item.path} item={item} />
            ))}

            <button
              onClick={() => handleNavigation("/schedule")}
              className="px-6 py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white text-sm font-medium tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#1a237e]/30 hover:scale-105 transform"
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>

          {/* Mobile Toggle (UNCHANGED STYLE) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} />
                </svg>
              ) : (
                <svg className="block h-6 w-6" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (FULLY PRESERVED) */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
              >
                {item.label}
              </button>
            ))}

            <div ref={mobileRef}>
              <button
                onClick={() => setMobileDropdown((p) => !p)}
                className="w-full text-left px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center justify-between"
              >
                SOLUTIONS
                <svg
                  className={`w-5 h-5 transition-transform ${
                    mobileDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth={2} />
                </svg>
              </button>

              {mobileDropdown && (
                <div className="pl-3 pr-2 py-1 space-y-1">
                  {solutionItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                onClick={() => handleNavigation("/schedule")}
                className="w-full px-4 py-2 bg-[#1a237e] hover:bg-[#0d47a1] text-white text-base font-medium tracking-wide transition-all duration-300 rounded-md shadow-lg"
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