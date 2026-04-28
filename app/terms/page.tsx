import Terms from "@/components/screens/termsandconditions/Terms";
import { buildMetadata } from "@/components/Seo";
import { fetchLegalDocument } from "@/components/screens/termsandconditions/legalDocuments";

export async function generateMetadata() {
  try {
    const document = await fetchLegalDocument("cms/terms");

    return buildMetadata({
      title: `${document?.title || "Terms of Use"} | ClaimScope Consulting`,
      description:
        document?.short_desc ||
        "Read the terms of use for ClaimScope Consulting services and website access.",
      keywords: "terms of use, consulting disclaimer",
      path: "/terms",
    });
  } catch {
    return buildMetadata({
      title: "Terms of Use | ClaimScope Consulting",
      description:
        "Read the terms of use for ClaimScope Consulting services and website access.",
      keywords: "terms of use, consulting disclaimer",
      path: "/terms",
    });
  }
}

export default function TermsPage() {
  return <Terms />;
}
