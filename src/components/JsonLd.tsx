import { businessData } from "@/lib/seo-data";

export default function JsonLd({ type }: { type: "faq" | "local" }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": `${businessData.url}/#venue`,
    "name": businessData.name,
    "legalName": businessData.legalName,
    "url": businessData.url,
    "telephone": businessData.phone,
    "image": [
      `${businessData.url}/images/stage-white.jpg`,
      `${businessData.url}/images/stage-glass-floor.jpg`,
      `${businessData.url}/images/stage-arch.jpg`,
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.street,
      "addressLocality": businessData.address.city,
      "addressRegion": businessData.address.region,
      "addressCountry": businessData.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.1798,
      "longitude": 66.9750,
    },
    "hasMap": businessData.address.mapUrl,
    "maximumAttendeeCapacity": businessData.capacity.max,
    "priceRange": "PKR 50,000 - PKR 100,000+",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Generator & UPS Backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Car & Bike Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Outside Catering Allowed", "value": true },
    ],
    "sameAs": [
      businessData.social.facebook,
      businessData.social.instagram,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": businessData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {type === "local" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {type === "faq" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
