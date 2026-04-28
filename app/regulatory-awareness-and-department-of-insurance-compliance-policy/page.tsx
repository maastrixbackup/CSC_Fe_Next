import RegulatoryPolicy from "@/components/screens/termsandconditions/Regulatory";
import { buildMetadata } from "@/components/Seo";
import { fetchLegalDocument } from "@/components/screens/termsandconditions/legalDocuments";

const canonicalPath =
  "/regulatory-awareness-and-department-of-insurance-compliance-policy";

export async function generateMetadata() {
  try {
    const document = await fetchLegalDocument("cms/regulatory");

    return buildMetadata({
      title:
        `${document?.title || "Regulatory Awareness & Department of Insurance Compliance Policy"} | ClaimScope Consulting`,
      description:
        document?.short_desc ||
        "Read ClaimScope Consulting's regulatory awareness and DOI compliance policy.",
      path: canonicalPath,
    });
  } catch {
    return buildMetadata({
      title:
        "Regulatory Awareness & Department of Insurance Compliance Policy | ClaimScope Consulting",
      description:
        "Read ClaimScope Consulting's regulatory awareness and DOI compliance policy.",
      path: canonicalPath,
    });
  }
}

export default function RegulatoryPolicyPage() {
  return <RegulatoryPolicy />;
}
