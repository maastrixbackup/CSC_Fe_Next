"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHROMELESS_PATHS = new Set(["/member-login"]);
const CHROMELESS_PREFIXES = ["/intake"];

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const hideChrome =
    CHROMELESS_PATHS.has(pathname) ||
    CHROMELESS_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  return (
    <>
      {!hideChrome && <Navbar />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
