import { clinic } from "@/lib/clinic-data";
import { SITE_URL } from "@/lib/site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    image: `${SITE_URL}/og-image.jpg`,
    "@id": `${SITE_URL}/#clinica`,
    url: SITE_URL,
    telephone: clinic.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.addressLine,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.googlePlaceCoords.lat,
      longitude: clinic.googlePlaceCoords.lng,
    },
    hasMap: clinic.googleMapsUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating,
      reviewCount: clinic.reviewCount,
    },
    sameAs: [clinic.dentist.instagramUrl],
    medicalSpecialty: "Dentistry",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function TreatmentSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: {
      "@type": "Dentist",
      name: clinic.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
