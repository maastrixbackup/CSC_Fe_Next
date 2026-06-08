import DocumentationGovernance from "@/components/screens/solutiontracks/DocumentationGovernance";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(
      `${API_URL}seo/fetch?page=/documentation-governance`,
      {
        cache: "no-store",
      }
    );

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title ||
      "Documentation Governance Framework | ClaimScope Consulting";

    const description =
      seo?.meta_desc ||
      "Learn how ClaimScope approaches documentation classification, ownership, workflow accountability, governance visibility, audit logging, and operational standardization.";

    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";

    const url =
      seo?.canonical_url ||
      "https://claimscopeconsulting.com/documentation-governance";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "documentation governance, governance framework, audit logging, workflow accountability, operational standardization, ClaimScope",
      alternates: { canonical: url },
      openGraph: {
        title: seo?.og_title || title,
        description: seo?.og_description || description,
        url,
        siteName: "ClaimScope Consulting",
        images: [image],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Documentation Governance Framework | ClaimScope Consulting",
      description:
        "Explore ClaimScope's documentation governance framework for accountability, visibility, audit readiness, and operational consistency.",
    };
  }
}

export default function Page() {
  return <DocumentationGovernance />;
}
