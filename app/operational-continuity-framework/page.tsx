import OperationalContinuityFramework from "@/components/screens/solutiontracks/OperationalContinuityFramework";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(
      `${API_URL}seo/fetch?page=/operational-continuity-framework`,
      {
        cache: "no-store",
      }
    );

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title ||
      "Operational Continuity Framework | ClaimScope Consulting";

    const description =
      seo?.meta_desc ||
      "Explore ClaimScope's Operational Continuity Framework for documentation alignment, accountability, governance visibility, and audit readiness.";

    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";

    const url =
      seo?.canonical_url ||
      "https://claimscopeconsulting.com/operational-continuity-framework";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "operational continuity framework, documentation governance, audit readiness, accountability, ClaimScope",
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
      title: "Operational Continuity Framework | ClaimScope Consulting",
      description:
        "Learn how ClaimScope supports operational continuity through documentation alignment, governance visibility, and readiness controls.",
    };
  }
}

export default function Page() {
  return <OperationalContinuityFramework />;
}
