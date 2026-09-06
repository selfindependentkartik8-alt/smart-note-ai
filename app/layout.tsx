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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

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