import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  schemas?: any[];
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://i.ibb.co/8LPgDvJm/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png',
  schemas = []
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical URL Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Meta Tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': canonicalUrl,
      'og:image': ogImage,
      'og:site_name': 'Nirmal Kaya Physiotherapy Clinic'
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 5. Update Twitter Meta Tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 6. Manage Dynamic JSON-LD Structured Data Schema Insertion
    // Remove stale dynamically injected schemas
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo-schema');
    oldScripts.forEach(script => script.remove());

    // Inject current schemas
    schemas.forEach(schemaData => {
      if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.className = 'dynamic-seo-schema';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    });

  }, [title, description, canonicalUrl, ogType, ogImage, schemas]);

  return null;
}
