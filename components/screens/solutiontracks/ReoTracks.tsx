import SolutionTrackTemplate from "@/components/screens/solutiontracks/SolutionTrackTemplate";

const capabilityItems = [
  "Portfolio documentation standardization",
  "Reporting alignment",
  "Transaction readiness support",
  "Governance consistency",
];

const outcomeItems = [
  "Consistent reporting across assets",
  "Improved decision clarity",
  "Reduced operational drift",
  "Scalable portfolio governance",
];

const audienceItems = [
  "REO managers",
  "Investors",
  "Property portfolio operators",
];

const exclusionItems = [
  "No asset management services",
  "No negotiation services",
];

const calendlyUrl =
  "https://calendly.com/twalker-claimscopeconsulting/portfolio-documentation-governance-review-45-minutes";

const ReoTracks = () => {
  return (
    <SolutionTrackTemplate
      badge="Real Estate / REO Documentation Readiness"
      title="In Real Estate, Performance Breaks Down When Documentation Is Not Aligned."
      description="ClaimScope provides structured documentation governance for REO portfolios and real estate operations."
      calendlyUrl={calendlyUrl}
      consultationLabel="Schedule a Consultation"
      exploreLabel=""
      executionTitle="Portfolio-level inconsistency creates performance drift."
      executionDescription="Portfolio-level inconsistency occurs when properties, teams, and reporting standards vary. This leads to misaligned decisions and performance drift."
      positioningText="One governance system applied across assets ensures consistent documentation alignment."
      continuityTitle="Structured intake, validation, alignment, and revalidation across portfolio workflows."
      capabilityItems={capabilityItems}
      outcomeItems={outcomeItems}
    //   audienceItems={audienceItems}
    //   exclusionItems={exclusionItems}
      ctaTitle="Align documentation across your portfolio."
    />
  );
};

export default ReoTracks;
