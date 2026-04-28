"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/access#system-access", label: "System Access", match: "/access" },
  {
    href: "/access#advisory-support",
    label: "Advisory Support",
    match: "/intake/documentation-readiness-review",
  },
  {
    href: "/access#enterprise-licensing",
    label: "Enterprise Licensing",
    match: "/intake/enterprise-licensing",
  },
  { href: "/", label: "Home", match: "/" },
];

function isActivePath(pathname, item) {
  if (item.label === "Home") return pathname === "/";
  if (item.href.startsWith("/access#")) return pathname === "/access";
  return pathname === item.match;
}

export default function AccessNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "border-b border-[#b9c5d1]/40 bg-[#f7f8fa]/90 backdrop-blur-md"
          : "border-b border-[#b9c5d1]/45 bg-[#f7f8fa]/88 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-[78px] max-w-[1240px] items-center justify-between gap-5 px-5">
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src="/assets/Logo Upated.png"
            alt="ClaimScope logo"
            width={144}
            height={96}
            className="h-18 w-24 object-contain transition-all duration-300 hover:scale-105 hover:brightness-110 md:h-24 md:w-36"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#5c6b78] md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active ? "font-bold text-[#1f4f82]" : "hover:text-[#1f4f82]"
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="rounded-md p-2 text-[#5c6b78] hover:bg-[#e0e7ed]/50 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-[#b9c5d1]/30 bg-[#f7f8fa] md:hidden">
          <div className="flex flex-col space-y-3 px-5 py-4">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[#1f4f82]/10 font-bold text-[#1f4f82]"
                      : "text-[#5c6b78] hover:bg-[#e0e7ed]/50 hover:text-[#1f4f82]"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
