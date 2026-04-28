"use client";

import { motion } from "framer-motion";
import { buttonMotion } from "@/components/animations/motionVariants";

export default function PrimaryButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-2xl transition-all duration-300 sm:px-8 sm:py-4 sm:text-base";
//   className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1a237e] hover:bg-[#0d47a1] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#1a237e]/50"
  const variants = {
    primary: "bg-[#1a237e] hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50",
    secondary: "bg-[#ff6f00] hover:bg-[#e65100]",
  };

  return (
    <motion.button
      type="button"
      variants={buttonMotion}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}