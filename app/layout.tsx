import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://smart-note-btvps5422-krish-aiw-orks.vercel.app"
  ),

  title: {
    default: "Smart Notes | AI Note Maker | KrishAIWorks",
    template: "%s | KrishAIWorks",
  },

  description:
    "Smart Notes is an AI-powered note-taking and productivity tool by KrishAIWorks. Create, organize and improve your notes faster.",

  keywords: [
    "Smart Notes",
    "AI notes",
    "AI note maker",
    "smart note taking",
    "AI productivity tool",
    "online notes",
    "note taking tool",
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

  category: "technology",

  alternates: {
    canonical:
      "https://smart-note-btvps5422-krish-aiw-orks.vercel.app/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smart-note-btvps5422-krish-aiw-orks.vercel.app/",
    siteName: "KrishAIWorks",
    title: "Smart Notes | AI Note Maker | KrishAIWorks",
    description:
      "Create, organize and improve your notes with Smart Notes, an AI-powered productivity tool by KrishAIWorks.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Smart Notes - KrishAIWorks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Notes | AI Note Maker | KrishAIWorks",
    description:
      "An AI-powered note-taking and productivity tool by KrishAIWorks.",
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
      <body>{children}</body>
    </html>
  );
}