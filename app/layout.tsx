import type { Metadata } from "next";
import { SITE_URL, siteUrl } from "@/app/seo";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "Mannat Coworking Space",
    template: "%s | Mannat Coworking Space",
  },

  description:
    "Mannat Coworking Space is a premium coworking space in Sonipat, Haryana, offering private cabins, workstations, meeting rooms, and flexible office spaces for entrepreneurs, startups, teams, and professionals.",

  applicationName: "Mannat Coworking Space",

  keywords: [
    "Mannat Coworking",
    "mannat coworking",
    "coworking space in Sonipat",
    "coworking space Sonipat",
    "office space in Sonipat",
    "private office Sonipat",
    "meeting rooms Sonipat",
    "flexible workspace Sonipat",
    "premium coworking space Sonipat",
  ],

  authors: [
    {
      name: "Mannat Coworking",
      url: SITE_URL,
    },
  ],

  creator: "Mannat Coworking",
  publisher: "Mannat Coworking",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Mannat Coworking",

    title: "Mannat Coworking Space",

    description:
      "Premium coworking space in Sonipat with private cabins, workstations, meeting rooms, and flexible office spaces for entrepreneurs, startups, teams, and professionals.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mannat Coworking Space, premium workspace in Sonipat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mannat Coworking Space",

    description:
      "A thoughtfully designed coworking space for focused work, meaningful connections, and steady growth in Sonipat.",

    images: ["/images/og-image.jpg"],
  },
};

/*
 * Structured data
 *
 * One connected graph helps search engines understand:
 *
 * Website
 *   ↓
 * Mannat Coworking
 *   ↓
 * Physical coworking business
 *   ↓
 * Address / phone / logo / social profiles
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mannat Coworking",
      alternateName: "Mannat Coworking",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },

    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Mannat Coworking",
      alternateName: "Mannat Coworking",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/mannat-logo.svg`,
      },
      image: `${SITE_URL}/images/og-image.jpg`,
      description:
        "Mannat Coworking is a premium coworking space offering private cabins, workstations, meeting rooms, and flexible workspaces for entrepreneurs, startups, teams, and professionals.",
      telephone: "+919996169001",
      email: "mannatcoworking@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "S1, Second Floor, Atlas Rd, Parshuram Chowk",
        addressLocality: "Sonipat",
        addressRegion: "Haryana",
        postalCode: "131001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/mannatcoworking",
        "https://www.facebook.com/share/19CqEt7YKf/",
        "https://www.linkedin.com/in/mannat-coworking-0a858a429",
        "https://x.com/Mannat_Coorking",
      ],
    },

    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Mannat Coworking",
      url: SITE_URL,
      image: `${SITE_URL}/images/og-image.jpg`,
      logo: `${SITE_URL}/logo/mannat-logo.svg`,
      telephone: "+919996169001",
      email: "mannatcoworking@gmail.com",

      description:
        "Mannat Coworking is a premium coworking space in Sonipat, Haryana, offering private cabins, workstations, meeting rooms, and flexible office spaces.",

      address: {
        "@type": "PostalAddress",
        streetAddress: "S1, Second Floor, Atlas Rd, Parshuram Chowk",
        addressLocality: "Sonipat",
        addressRegion: "Haryana",
        postalCode: "131001",
        addressCountry: "IN",
      },

      areaServed: {
        "@type": "City",
        name: "Sonipat",
      },

      sameAs: [
        "https://www.instagram.com/mannatcoworking",
        "https://www.facebook.com/share/19CqEt7YKf/",
        "https://www.linkedin.com/in/mannat-coworking-0a858a429",
        "https://x.com/Mannat_Coorking",
      ],

      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VMRV6WNY75"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VMRV6WNY75');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}