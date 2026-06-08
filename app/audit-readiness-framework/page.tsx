import AuditReadinessFramework from "@/components/screens/solutiontracks/AuditReadinessFramework";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(
      `${API_URL}seo/fetch?page=/audit-readiness-framework`,
      {
        cache: "no-store",
      }
    );

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title || "Audit Readiness Framework | ClaimScope Consulting";

    const description =
      seo?.meta_desc ||
      "Explore ClaimScope's audit readiness framework for documentation integrity, traceability, governance controls, workflow visibility, and accountability.";

    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";

    const url =
      seo?.canonical_url ||
      "https://claimscopeconsulting.com/audit-readiness-framework";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "audit readiness framework, documentation integrity, governance controls, workflow visibility, documentation readiness, ClaimScope",
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
      title: "Audit Readiness Framework | ClaimScope Consulting",
      description:
        "Learn how ClaimScope supports audit readiness through documentation integrity, governance visibility, and operational accountability.",
    };
  }
}

export default function Page() {
  return <AuditReadinessFramework />;
}
