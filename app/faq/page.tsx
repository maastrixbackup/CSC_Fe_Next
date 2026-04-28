import { API_URL } from "@/utils/config";
import AllFaq from "@/components/screens/faq/AllFaq";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/faq`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title || "Documentation Readiness FAQ | ClaimScope Consulting";
    const description =
      seo?.meta_desc ||
      "Find answers to frequently asked questions about ClaimScope Consulting documentation clarity and readiness services.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url = seo?.canonical_url || "https://claimscopeconsulting.com/faq";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords || "what is documentation, documentation readiness FAQ",
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
      title: "FAQ | ClaimScope Consulting",
      description: "Frequently asked questions about ClaimScope Consulting.",
    };
  }
}

export default function FaqPage() {
  return <AllFaq />;
}
