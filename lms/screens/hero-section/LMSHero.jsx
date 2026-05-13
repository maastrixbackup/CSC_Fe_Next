"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import lmsHeroBackground from "@/public/assets/lmshero1.png";
import {
  fadeUp,
  heroContainer,
  buttonMotion,
} from "@/components/animations/motionVariants";

const LMSHero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <Image
          src={lmsHeroBackground}
          alt="LMS training hero background"
          priority
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-2 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="absolute bottom-8 left-4 flex flex-col gap-4 text-left sm:bottom-10 sm:left-8 sm:flex-row md:bottom-12 md:left-12 lg:bottom-14 lg:left-16"
          >
            <motion.button
              variants={buttonMotion}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/access")}
              className="min-w-[250px] bg-[#1a237e] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-2xl transition-all duration-300 hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50 sm:min-w-[260px] sm:px-8 sm:py-4 sm:text-base"
            >
              Access Training Portal
            </motion.button>

            <motion.button
              variants={buttonMotion}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById("learning-modules");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="min-w-[280px] bg-[#F06600] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-xl transition-all duration-300 hover:bg-[#e65100] sm:min-w-[290px] sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Learning Modules
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LMSHero;
