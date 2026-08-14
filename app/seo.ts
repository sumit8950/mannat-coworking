import type { Metadata } from "next";

/**
 * The canonical production URL. Set NEXT_PUBLIC_SITE_URL in the deployment
 * environment if the production domain is different from this value.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mannatcoworking.com").replace(/\/$/, "");

export const siteUrl = new URL(SITE_URL);

const ogImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Mannat Coworking, premium workspace in Sonipat",
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const socialTitle = `${title} | Mannat Coworking`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: "Mannat Coworking",
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
