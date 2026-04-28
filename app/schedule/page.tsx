import ScheduleSection from "@/components/screens/schedule/Schedule";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/schedule`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title || "Schedule a Consultation | ClaimScope Consulting";
    const description =
      seo?.meta_desc ||
      "Schedule a documentation readiness consultation with ClaimScope Consulting. Select a service track and book your session on-site.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url =
      seo?.canonical_url || "https://claimscopeconsulting.com/schedule";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "schedule consultation, documentation readiness consultation, ClaimScope Consulting",
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
      title: "Schedule | ClaimScope Consulting",
      description:
        "Schedule a documentation readiness consultation with ClaimScope Consulting.",
    };
  }
}

export default function SchedulePage() {
  return <ScheduleSection />;
}
