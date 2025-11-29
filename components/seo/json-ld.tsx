"use client";

import { useEffect } from "react";

// JSON-LD Schema for the website
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fancy Text Generator",
  description:
    "Transform your text into 12+ unique Unicode styles including bold, italic, script, monospace, circled, boxed, and more. Copy and paste anywhere!",
  url: "https://yourdomain.com",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "12+ Unicode Text Styles",
    "Copy & Paste Anywhere",
    "Multi-Language Support",
    "Real-time Text Transformation",
    "Social Media Ready",
    "Free to Use",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
  },
  author: {
    "@type": "Organization",
    name: "SymphonyIceAttack",
    url: "https://yourdomain.com",
  },
  publisher: {
    "@type": "Organization",
    name: "SymphonyIceAttack",
    logo: {
      "@type": "ImageObject",
      url: "https://yourdomain.com/logo.png",
    },
  },
  potentialAction: {
    "@type": "UseAction",
    target: "https://yourdomain.com",
  },
};

export function JsonLdStructuredData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "website-jsonld";
    script.textContent = JSON.stringify(websiteJsonLd, null, 2);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("website-jsonld");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
