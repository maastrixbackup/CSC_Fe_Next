import AssessmentSection from "@/components/screens/assessment/AssessmentSection";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/assessment`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title ||
      "Documentation Readiness Assessment & Governance Review | ClaimScope Consulting";
    const description =
      seo?.meta_desc ||
      "Structured documentation readiness assessments and governance reviews for organizations seeking to evaluate governance maturity, accountability, and operational readiness.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url =
      seo?.canonical_url || "https://claimscopeconsulting.com/assessment";

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
      title:
        "Documentation Readiness Assessment & Governance Review | ClaimScope Consulting",
      description:
        "Structured documentation readiness assessments and governance reviews for operational clarity and accountability.",
    };
  }
}

export default function AssessmentPage() {
  return <AssessmentSection />;
}
