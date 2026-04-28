import { API_URL } from "@/utils/config";
import Insights from "@/components/screens/insights/Insights";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/insights`, {
      cache: "no-store",
    });
    const result = await res.json();
    const seo = result?.data || result;
    const title =
      seo?.meta_title ||
      "ClaimScope Insights | Documentation Governance & Readiness";
    const description =
      seo?.meta_desc ||
      "Structured insights on documentation governance, operational clarity, and documentation readiness systems.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url = seo?.canonical_url || "https://claimscopeconsulting.com/insights";

    return {
      title,
      description,
      keywords: seo?.meta_keywords || "",
      alternates: { canonical: url },
      openGraph: {
        title: seo?.og_title || title,
        description: seo?.og_description || description,
        url,
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
      title: "Insights | ClaimScope Consulting",
      description: "Documentation governance and readiness insights.",
    };
  }
}

export default function InsightsPage() {
  return <Insights />;
}
