export const siteMetadata = {
  title: 'Guía Pública RD - Servicios Públicos en República Dominicana',
  defaultTitle: 'Guía Pública RD - Servicios Públicos en República Dominicana',
  description: 'Accede a información detallada sobre servicios públicos en República Dominicana, incluyendo trámites, requisitos y ubicaciones de instituciones gubernamentales.',
  defaultDescription: 'Accede a información detallada sobre servicios públicos en República Dominicana, incluyendo trámites, requisitos y ubicaciones de instituciones gubernamentales.',
  keywords: 'servicios públicos, República Dominicana, trámites gubernamentales, instituciones públicas, gobierno dominicano, servicios ciudadanos',
  author: 'Guía Pública RD',
  siteUrl: 'https://guiapublicard.netlify.app',
  defaultImage: 'https://guiapublicard.netlify.app/og-image.jpg',
  locale: 'es-DO',
  type: 'website',
  twitterHandle: '@guiapublicard',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://guiapublicard.netlify.app',
    siteName: 'Guía Pública RD',
    title: 'Guía Pública RD - Servicios Públicos en República Dominicana',
    description: 'Accede a información detallada sobre servicios públicos en República Dominicana, incluyendo trámites, requisitos y ubicaciones de instituciones gubernamentales.',
    images: [
      {
        url: 'https://guiapublicard.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía Pública RD - Servicios Públicos en República Dominicana',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://guiapublicard.netlify.app',
    languages: {
      'es-DO': 'https://guiapublicard.netlify.app',
      'en-US': 'https://guiapublicard.netlify.app/en',
    },
  },
} as const; 