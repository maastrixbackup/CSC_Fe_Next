"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHROMELESS_PATHS = new Set(["/member-login"]);

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const hideChrome = CHROMELESS_PATHS.has(pathname);

  return (
    <>
      {!hideChrome && <Navbar />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
