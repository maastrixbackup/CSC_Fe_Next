import AIGovernanceHumanOversight from "@/components/screens/access/AIGovernanceHumanOversight";
import { buildMetadata } from "@/components/Seo";

export async function generateMetadata() {
  return buildMetadata({
    title: "AI Governance & Human Oversight | ClaimScope Consulting",
    description:
      "Understand ClaimScope's responsible AI posture, including human review requirements, audit logging, access controls, and governance documentation.",
    keywords:
      "AI governance, human oversight, audit logging, role-based access controls, governance documentation, ClaimScope",
    path: "/ai-governance-human-oversight",
  });
}

export default function Page() {
  return <AIGovernanceHumanOversight />;
}
