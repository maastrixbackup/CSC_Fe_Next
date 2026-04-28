/** @type {import("framer-motion").Variants} */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------- FADE IN ---------- */
/** @type {import("framer-motion").Variants} */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ---------- SLIDE LEFT ---------- */
/** @type {import("framer-motion").Variants} */
export const slideLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------- SLIDE RIGHT ---------- */
/** @type {import("framer-motion").Variants} */
export const slideRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------- SCALE IN (CARDS) ---------- */
/** @type {import("framer-motion").Variants} */
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* ---------- STAGGER CONTAINER ---------- */
/** @type {import("framer-motion").Variants} */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ---------- FAST STAGGER (LISTS) ---------- */
/** @type {import("framer-motion").Variants} */
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ---------- HERO CONTAINER ---------- */
/** @type {import("framer-motion").Variants} */
export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

/* ---------- BUTTON INTERACTIONS ---------- */
export const buttonMotion = {
  whileHover: {
    scale: 1.06,
    y: -2,
    transition: { duration: 0.2 },
  },
  whileTap: {
    scale: 0.95,
  },
};

/* ---------- CARD HOVER ---------- */
export const cardHover = {
  whileHover: {
    y: -8,
    transition: { duration: 0.2 },
  },
};
