import { motion } from "framer-motion";
import { Database, AlignLeft, RefreshCw } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  fadeIn,
} from "@/components/animations/motionVariants";

const GoverFramework = () => {
  const frameworkComponents = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Structure",
      description: "Standardized documentation from intake through completion."
    },
    {
      icon: <AlignLeft className="w-8 h-8 text-blue-600" />,
      title: "Alignment",
      description: "Consistency across scope, tracking, and field execution."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Continuity",
      description: "Ongoing validation as conditions change."
    }
    // {
    //   icon: <Database className="w-8 h-8 text-blue-600" />,
    //   title: "Documentation Structure",
    //   description: "Establishes a standardized framework for how documentation is created, organized, and maintained across all projects to ensure consistency and clarity from intake through completion."
    // },
    // {
    //   icon: <AlignLeft className="w-8 h-8 text-blue-600" />,
    //   title: "Record Alignment",
    //   description: "Ensures documentation remains consistent across scope, tracking, and field execution. Reducing discrepancies and preventing misalignment across teams and workflows."
    // },
    // {
    //   icon: <Eye className="w-8 h-8 text-blue-600" />,
    //   title: "Operational Transparency",
    //   description: "Provides clear visibility into documentation status, completeness, and structure to support internal awareness and informed decision-making."
    // },
    // {
    //   icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
    //   title: "Governance Continuity",
    //   description: "Maintains documentation consistency across the full project lifecycle, ensuring that structure and alignment are preserved as projects evolve and scale."
    // }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-[#F1F4F8] py-8 sm:py-16 lg:py-16 px-4 sm:px-2 lg:px-4"
    >
      <motion.div
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#1a237e]"
        >
           The Control Layer Behind Consistent Operations
        </motion.h2>

        {/* Introduction */}
        <motion.div
          variants={fadeIn}
          className="max-w-7xl mx-auto text-center mb-8 sm:mb-12"
        >
          {/* <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            ClaimScope™ establishes a structured governance layer across documentation workflows, 
            ensuring that records are not only created, but consistently aligned, validated, and 
            maintained throughout the operational lifecycle.
          </p>

          <p className="text-gray-700 font-medium text-base sm:text-lg">
            Our capabilities are designed to eliminate inconsistency, reduce execution gaps, 
            and support long-term documentation continuity across projects, teams, and environments.
          </p> */}
        </motion.div>

        {/* Framework Components Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-7xl"
        >
          {frameworkComponents.map((component, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border-4 border-blue-600 p-5 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                {/* <div className="shrink-0">
                  {React.cloneElement(component.icon, {
                    className: "w-7 h-7 sm:w-8 sm:h-8 text-blue-600"
                  })}
                </div> */}
                <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                  {component.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {component.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GoverFramework;
