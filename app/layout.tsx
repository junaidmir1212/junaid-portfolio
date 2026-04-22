import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadjuniadmir.vercel.app"),

  title: "Muhammad Junaid Mir | AI & Software Portfolio",
  description:
    "Portfolio of Muhammad Junaid Mir, a BSc (Hons) Computer Science graduate building software engineering, AI, NLP, and blockchain projects for real-world applications.",
  keywords: [
    "Muhammad Junaid Mir",
    "BSc Computer Science Graduate",
    "Computer Science Portfolio",
    "AI Portfolio",
    "NLP Portfolio",
    "Blockchain Portfolio",
    "Computer Science Graduate UK",
    "Python Developer",
  ],
  authors: [{ name: "Muhammad Junaid Mir" }],
  creator: "Muhammad Junaid Mir",

  openGraph: {
    title: "Muhammad Junaid Mir | AI & Software Portfolio",
    description:
      "BSc (Hons) Computer Science graduate portfolio featuring AI, NLP, software engineering, and blockchain projects.",
    url: "/",
    siteName: "Muhammad Junaid Mir Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Junaid Mir Portfolio",
      },
    ],
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Junaid Mir | AI & Software Portfolio",
    description:
      "Portfolio featuring AI, NLP, software engineering, and blockchain project work.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}