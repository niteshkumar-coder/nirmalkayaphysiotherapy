/**
 * High-performance Schema generator following Google Structured Data guidelines.
 * Generates accurate JSON-LD structured schemas to boost Google Search and Maps rankings.
 */

// 1. Website Schema
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nirmal Kaya Physiotherapy Clinic",
    "url": "https://nirmalkaya.online/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nirmalkaya.online/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// 2. Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nirmal Kaya Physiotherapy Clinic",
    "alternateName": "Nirmal Kaya Rehab",
    "url": "https://nirmalkaya.online/",
    "logo": "https://i.ibb.co/8LPgDvJm/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100063772314198",
      "https://www.youtube.com/@dr.kundankumar9926/videos",
      "https://in.linkedin.com/in/dr-kundan-kumar-a44211247"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9899532930",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8294059645",
        "contactType": "emergency",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ]
  };
}

// 3. Local Business / Medical Clinic Schema
export function getLocalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Nirmal Kaya Physiotherapy Clinic",
    "image": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    "@id": "https://nirmalkaya.online/#clinic",
    "url": "https://nirmalkaya.online/",
    "telephone": "+919899532930",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No. 11D, Rajendra Nagar",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.6022",
      "longitude": "85.1585"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "20:00",
        "description": "BY APPOINTMENT ONLY"
      }
    ],
    "medicalSpecialty": "Physiotherapy",
    "founder": {
      "@type": "Person",
      "name": "Dr. Kundan Kumar",
      "jobTitle": "Doctor of Physiotherapy, BCCI Bihar Senior Physio"
    }
  };
}

// 4. Physiotherapy Service Schema
export function getPhysioServiceSchema(serviceName: string, serviceUrl: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": serviceName,
    "description": description,
    "url": serviceUrl,
    "provider": {
      "@type": "MedicalClinic",
      "name": "Nirmal Kaya Physiotherapy Clinic",
      "url": "https://nirmalkaya.online/"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "500",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://nirmalkaya.online/book"
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patients seeking " + serviceName
    }
  };
}

// 5. FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 6. Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// 7. Review Section Schema
export function getReviewSchema(reviews: { author: string; ratingValue: number; reviewBody: string; datePublished: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Physiotherapy and Rehabilitation Care",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    "description": "Expert physiotherapy treatments for back pain, neck pain, sports injuries, paralysis and stroke recovery.",
    "brand": {
      "@type": "Brand",
      "name": "Nirmal Kaya"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(rev => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.author
      },
      "datePublished": rev.datePublished,
      "reviewBody": rev.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.ratingValue.toString(),
        "bestRating": "5"
      }
    }))
  };
}
