import ContactSection from "@/components/screens/contact/Contact";
import { API_URL } from "@/utils/config";

export async function generateMetadata() {
  try {
    const res = await fetch(`${API_URL}seo/fetch?page=/contact`, {
      cache: "no-store",
    });

    const result = await res.json();
    const seo = result?.data || result;

    const title = seo?.meta_title || "Contact ClaimScope Consulting";
    const description =
      seo?.meta_desc ||
      "Get in touch with ClaimScope Consulting, LLC for documentation clarity and readiness services.";
    const image = seo?.og_image
      ? seo.og_image.startsWith("http")
        ? seo.og_image
        : `https://claimscopeconsulting.com${seo.og_image}`
      : "https://claimscopeconsulting.com/og-image.png";
    const url = seo?.canonical_url || "https://claimscopeconsulting.com/contact";

    return {
      title,
      description,
      keywords:
        seo?.meta_keywords ||
        "documentation readiness consultation, schedule a consultation, contact ClaimScope Consulting",
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
      title: "Contact | ClaimScope Consulting",
      description: "Contact ClaimScope Consulting.",
    };
  }
}

export default function ContactPage() {
  return <ContactSection />;
}
