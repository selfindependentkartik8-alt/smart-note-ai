import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartnotes.krishaiworks.com"),

  title: {
    default: "Smart Notes | AI-Powered Notes by KrishAIWorks",
    template: "%s | Smart Notes",
  },

  description:
    "Smart Notes helps you create, organize and manage notes with an easy and intelligent note-taking experience by KrishAIWorks.",

  keywords: [
    "Smart Notes",
    "AI notes",
    "online notes",
    "note taking app",
    "smart note taking",
    "digital notes",
    "productivity tool",
    "KrishAIWorks",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  applicationName: "Smart Notes",
  category: "productivity",

  alternates: {
    canonical: "https://smartnotes.krishaiworks.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartnotes.krishaiworks.com",
    siteName: "Smart Notes",
    title: "Smart Notes | AI-Powered Notes by KrishAIWorks",
    description:
      "Create, organize and manage your notes with Smart Notes by KrishAIWorks.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Smart Notes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Notes | AI-Powered Notes",
    description:
      "Create, organize and manage your notes with Smart Notes by KrishAIWorks.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      "@id": "https://smartnotes.krishaiworks.com/#webapplication",
      name: "Smart Notes",
      url: "https://smartnotes.krishaiworks.com",
      description:
        "Smart Notes helps you create, organize and manage notes with an easy and intelligent note-taking experience by KrishAIWorks.",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://smartnotes.krishaiworks.com/#webpage",
      url: "https://smartnotes.krishaiworks.com",
      name: "Smart Notes | AI-Powered Notes by KrishAIWorks",
      description:
        "Smart Notes helps you create, organize and manage notes with an easy and intelligent note-taking experience by KrishAIWorks.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id": "https://smartnotes.krishaiworks.com/#webapplication",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          id="smart-notes-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}