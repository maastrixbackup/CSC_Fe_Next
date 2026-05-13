"use client";

import LMSPlatformOverview from "./LMSPlatformOverview";
import FeaturedLearingModules from "./FeaturedLearingModules";
import EnterpriseAccess from "./EnterpriseAccess";
import TrainingCategories from "./TrainingCategories";
import DownloadableResources from "./DownloadableResources";
import GovernanceSection from "./GovernanceSection";
import LMSHero from "./LMSHero";

const downloadableResources = [
  "Documentation templates",
  "Educational PDF guides",
  "Readiness checklists",
  "Governance support materials",
];

const LMSHomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#eef3f7] pt-24 text-[#102033]">
      <LMSHero />
      <main>
        <LMSPlatformOverview />
        <FeaturedLearingModules />
        <TrainingCategories />
        <EnterpriseAccess />
        <DownloadableResources resources={downloadableResources} />
        <GovernanceSection />
      </main>
    </div>
  );
};

export default LMSHomeScreen;
