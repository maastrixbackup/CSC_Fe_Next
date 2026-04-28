import SolutionTrackTemplate from "@/components/screens/solutiontracks/SolutionTrackTemplate";

const capabilityItems = [
  "Standardized scope narratives",
  "Field-to-office alignment",
  "Documentation validation workflows",
  "Operational tracking consistency",
];

const outcomeItems = [
  "Reduced execution friction",
  "Aligned teams and documentation",
  "Increased operational clarity",
  "Scalable project workflows",
];

const audienceItems = [
  "Contractors managing multiple jobs, crews, and documentation streams",
];

const exclusionItems = [
  "No claim handling",
  "No quick fixes",
  "No third-party communication",
];

const frameworkSteps = [
  "Intake & Defined Scope",
  "Input & Assumption Validation",
  "Field Execution Alignment",
  "Continuous Revalidation",
];

const calendlyUrl =
  "https://calendly.com/twalker-claimscopeconsulting/contractor-governance-audit";

const Contractor = () => {
  return (
    <SolutionTrackTemplate
      badge="Contractor Documentation Support"
      title="You Don&apos;t Have a Production Problem. You Have a Documentation Breakdown."
      description="ClaimScope establishes structured documentation governance for contractors operating across field and office environments."
      calendlyUrl={calendlyUrl}
      consultationLabel="Schedule a Structured Documentation Consultation"
      exploreLabel="Explore the Framework"
      executionTitle="Execution happens daily, but documentation does not always keep up."
      executionDescription="Contractors execute work daily, but documentation does not consistently follow execution. Scope, field activity, and tracking systems become misaligned, creating friction, delays, and decision breakdowns."
      positioningText="The ClaimScope Continuity Framework is the control system behind structured documentation governance, aligning documentation from intake through execution."
      continuityTitle="Control is validated across stages, not assumed."
      continuitySteps={frameworkSteps}
      capabilityItems={capabilityItems}
      outcomeItems={outcomeItems}
    //   audienceItems={audienceItems}
    //   exclusionItems={exclusionItems}
      ctaTitle="Move from fragmented documentation to controlled operations."
    />
  );
};

export default Contractor;
