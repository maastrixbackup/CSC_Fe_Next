import AccessEngage from "@/components/screens/access/AccessEngage";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/access`, {
      cache: "no-store",
    });
    const result = await res.json();
    const seo = result?.data || result;
    const title = seo?.meta_title || "Access | ClaimScope Consulting";
    const description =
      seo?.meta_desc ||
      "Access ClaimScope system subscriptions, advisory support, and enterprise licensing.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url = seo?.canonical_url || "https://claimscopeconsulting.com/access";

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
      title: "Access | ClaimScope Consulting",
      description:
        "Access ClaimScope system subscriptions, advisory support, and enterprise licensing.",
    };
  }
}

export default function AccessPage() {
  return <AccessEngage />;
}
