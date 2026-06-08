import GovernanceReadinessIndicatorsExplained from "@/components/screens/assessment/ReadinessScoringExplained";
import { buildMetadata } from "@/components/Seo";

export async function generateMetadata() {
  return buildMetadata({
    title:
      "Readiness Scoring Explained | ClaimScope Consulting",
    description:
      "Understand the Documentation Readiness Index™ methodology, including governance maturity, documentation accountability, workflow consistency, operational continuity alignment, and audit preparedness indicators.",
    keywords:
      "documentation readiness index, governance health indicators, readiness scoring, audit preparedness, operational continuity, ClaimScope",
    path: "/readiness-scoring-explained",
  });
}

export default function Page() {
  return <GovernanceReadinessIndicatorsExplained />;
}
