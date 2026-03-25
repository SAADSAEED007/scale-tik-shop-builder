import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/favicon.png',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}) => {
  const siteName = 'TikShop Scale';
  const fullTitle = title ? `${title} ${siteName}` : siteName;

  useEffect(() => {
    // Update basic meta tags
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let meta = isProperty 
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);
        
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description || '');
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    } else if (link) {
      link.remove();
    }

    // Update structured data
    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (structuredData) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(structuredData);
    } else if (script) {
      script.remove();
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, structuredData]);

  return null;
};

export default SEO;
