import PrivacyPolicy from "@/components/screens/termsandconditions/Privecy";
import { buildMetadata } from "@/components/Seo";
import { fetchLegalDocument } from "@/components/screens/termsandconditions/legalDocuments";

export async function generateMetadata() {
  try {
    const document = await fetchLegalDocument("cms/policy");

    return buildMetadata({
      title: `${document?.title || "Privacy Policy"} | ClaimScope Consulting`,
      description:
        document?.short_desc ||
        "Read ClaimScope Consulting's privacy policy and data handling practices.",
      keywords: "privacy policy, data handling, information security",
      path: "/privacy-policy",
    });
  } catch {
    return buildMetadata({
      title: "Privacy Policy | ClaimScope Consulting",
      description:
        "Read ClaimScope Consulting's privacy policy and data handling practices.",
      keywords: "privacy policy, data handling, information security",
      path: "/privacy-policy",
    });
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
