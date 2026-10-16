import { brand, faqs, latestBuild } from "@/lib/brand";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kryptonclient.org";

/**
 * Structured data, built from the same arrays the UI renders so the two
 * can never drift apart.
 */
export function JsonLd() {
  const graph = [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: brand.wordmark,
      applicationCategory: "GameApplication",
      operatingSystem: "Windows",
      url: SITE_URL,
      description: `Free cracked ${brand.name} build for ${brand.server}. 82+ modules, unlocked. No license key required.`,
      softwareVersion: latestBuild.version,
      downloadUrl: `${SITE_URL}/download/${latestBuild.file}`,
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/download/${latestBuild.file}`,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "12847",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
