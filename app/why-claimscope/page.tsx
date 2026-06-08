import WhyClaimscope from "@/components/screens/about/WhyClaimscope";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/why-claimscope`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title ||
      "Why ClaimScope | Documentation Governance and Readiness";

    const description =
      seo?.meta_desc ||
      "Explore how ClaimScope approaches documentation governance, operational continuity, audit readiness, and accountability beyond basic storage and workflow tools.";

    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";

    const url =
      seo?.canonical_url || "https://claimscopeconsulting.com/why-claimscope";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "ClaimScope, documentation governance, audit readiness, operational continuity, documentation readiness",
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
      title: "Why ClaimScope | ClaimScope Consulting",
      description:
        "Learn how ClaimScope helps organizations improve documentation governance, continuity, accountability, and readiness.",
    };
  }
}

export default function Page() {
  return <WhyClaimscope />;
}
