import SolutionTrackTemplate from "@/components/screens/solutiontracks/SolutionTrackTemplate";
const capabilityItems = [
  "Disaster documentation readiness",
  "FEMA IA/PA education (advisory)",
  "Structured intake workflows",
  "Documentation validation",
];

const outcomeItems = [
  "Increased readiness",
  "Improved documentation clarity",
  "Structured disaster workflows",
  "Scalable response systems",
];

const audienceItems = [
  "Organizations preparing for disaster events",
  "Organizations responding to disaster events",
];

const exclusionItems = [
  "No claim handling",
  "No representation",
];

const calendlyUrl =
  "https://calendly.com/twalker-claimscopeconsulting/disaster-documentation-governance-review";

const Disaster = () => {
  return (
    <SolutionTrackTemplate
      badge="Disaster Documentation Readiness + FEMA IA/PA Education"
      title="Disaster Response Fails When Documentation Is Not Structured."
      description="ClaimScope provides documentation readiness and FEMA IA/PA education in an advisory-only model."
      calendlyUrl={calendlyUrl}
      consultationLabel="Schedule a Consultation"
        exploreLabel=""
      executionTitle="Documentation inconsistency reduces effectiveness under pressure."
      executionDescription="In disaster environments, documentation becomes inconsistent, incomplete, and misaligned, reducing effectiveness under pressure."
      positioningText="Structured governance ensures documentation continuity before, during, and after disaster events."
      continuityTitle="Defined intake, validation, field alignment, and revalidation processes."
      capabilityItems={capabilityItems}
      outcomeItems={outcomeItems}
    //   audienceItems={audienceItems}
    //   exclusionItems={exclusionItems}
      ctaTitle="Prepare documentation before the next event."
    />
  );
};

export default Disaster;
