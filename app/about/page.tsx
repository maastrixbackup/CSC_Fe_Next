import AboutClient from "../../components/screens/about/AboutClient";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/about`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title =
      seo?.meta_title ||
      "About ClaimScope Consulting | Documentation Governance";

    const description =
      seo?.meta_desc ||
      "ClaimScope Consulting provides documentation governance and readiness advisory services.";

    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";

    const url = "https://claimscopeconsulting.com/about";

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
      title: "About | ClaimScope",
      description: "About ClaimScope Consulting",
    };
  }
}

export default function Page() {
  return <AboutClient />;
}