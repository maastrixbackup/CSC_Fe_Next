// utils/seo.ts

const SITE_URL = "https://claimscopeconsulting.com";
const SITE_NAME = "ClaimScope Consulting";

export function buildMetadata({
  title,
  description,
  keywords,
  image,
  path = "/",
}: {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
}) {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}