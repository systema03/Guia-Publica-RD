import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '../metadata';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  article = false,
  pathname,
}) => {
  const {
    siteUrl,
    defaultTitle,
    defaultDescription,
    defaultImage,
    twitterHandle,
    author,
    openGraph,
    robots,
    alternates,
  } = siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ''}`,
    type: article ? 'article' : 'website',
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />

      {/* OpenGraph metadata */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:locale" content={openGraph.locale} />

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Additional metadata */}
      <meta name="author" content={author} />
      <meta name="robots" content={robots.index ? 'index' : 'noindex'} />
      <meta name="googlebot" content={robots.googleBot.index ? 'index' : 'noindex'} />

      {/* Language alternates */}
      {alternates.languages && Object.entries(alternates.languages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: seo.title,
          description: seo.description,
          url: seo.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>

      {/* Organization structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Guía Pública RD',
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          sameAs: [
            'https://twitter.com/guiapublicard',
            'https://facebook.com/guiapublicard',
            'https://instagram.com/guiapublicard',
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 