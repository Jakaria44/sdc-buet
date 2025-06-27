import type { Metadata } from 'next'
import './globals.css'

const baseUrl = 'https://sdc-buet.vercel.app' // Replace with your actual domain

export const metadata: Metadata = {
  title: {
    default: 'BUET Software Development Club | Leading Tech Community in Bangladesh',
    template: '%s | BUET SDC'
  },
  description: 'Join the Software Development Club at Bangladesh University of Engineering and Technology (BUET). Learn programming, build projects, participate in hackathons, and grow your tech career with Bangladesh\'s premier student developer community.',
  keywords: [
    'BUET Software Development Club',
    'Bangladesh University of Engineering and Technology',
    'programming club Bangladesh',
    'software development BUET',
    'tech community Bangladesh',
    'coding club Dhaka',
    'computer science BUET',
    'developer community Bangladesh',
    'BUET SDC',
    'student programming club',
    'hackathon Bangladesh',
    'tech events BUET',
    'software engineering club',
    'web development club Bangladesh',
    'machine learning club BUET',
    'AI club Bangladesh'
  ],
  authors: [{ name: 'BUET Software Development Club' }],
  creator: 'BUET Software Development Club',
  publisher: 'Bangladesh University of Engineering and Technology',
  category: 'Education',
  classification: 'Student Organization',
  referrer: 'origin-when-cross-origin',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'BUET Software Development Club | Leading Tech Community in Bangladesh',
    description: 'Join the Software Development Club at Bangladesh University of Engineering and Technology (BUET). Learn programming, build projects, participate in hackathons, and grow your tech career.',
    siteName: 'BUET Software Development Club',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'BUET Software Development Club - Premier Tech Community',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BUET Software Development Club | Leading Tech Community in Bangladesh',
    description: 'Join the Software Development Club at Bangladesh University of Engineering and Technology (BUET). Learn programming, build projects, participate in hackathons.',
    site: '@buet_sdc',
    creator: '@buet_sdc',
    images: [`${baseUrl}/twitter-image.jpg`],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    yandex: 'your-yandex-verification-code', // Replace with actual verification code
    yahoo: 'your-yahoo-verification-code', // Replace with actual verification code
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code', // Replace with actual verification code
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
      'bn-BD': `${baseUrl}/bn`,
    },
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code', // Replace with actual verification code
    'msvalidate.01': 'your-bing-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BUET Software Development Club',
              alternateName: 'BUET SDC',
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: 'The Software Development Club at Bangladesh University of Engineering and Technology (BUET) is a vibrant community of passionate developers, innovators, and tech enthusiasts.',
              foundingDate: '2020',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bangladesh University of Engineering and Technology',
                addressLocality: 'Dhaka',
                addressRegion: 'Dhaka Division',
                postalCode: '1000',
                addressCountry: 'BD'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+880-1234-567890',
                contactType: 'General Inquiry',
                email: 'sdc@buet.ac.bd'
              },
              sameAs: [
                'https://facebook.com/buet.sdc',
                'https://github.com/buet-sdc',
                'https://linkedin.com/company/buet-sdc'
              ],
              parentOrganization: {
                '@type': 'EducationalOrganization',
                name: 'Bangladesh University of Engineering and Technology',
                url: 'https://buet.ac.bd'
              },
              memberOf: {
                '@type': 'EducationalOrganization',
                name: 'Bangladesh University of Engineering and Technology'
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BUET Software Development Club',
              url: baseUrl,
              description: 'Official website of the Software Development Club at Bangladesh University of Engineering and Technology',
              publisher: {
                '@type': 'Organization',
                name: 'BUET Software Development Club'
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: `${baseUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="application-name" content="BUET SDC" />
        <meta name="apple-mobile-web-app-title" content="BUET SDC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
