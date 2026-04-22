import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Junaid Mir | Graduate BSc (Hons) Computer Science | AI, NLP & Software Projects",
  description:
    "Portfolio of Muhammad Junaid Mir, a BSc (Hons) Computer Science graduate building software engineering, AI, NLP, and blockchain projects for real-world applications.",
  keywords: [
    "Muhammad Junaid Mir",
    "Graduate BSc (Hons) Computer Science",
    "BSc (Hons) Computer Science Portfolio",
    "AI Portfolio",
    "NLP Portfolio",
    "Blockchain Portfolio",
    "Computer Science Graduate UK",
    "Python Developer",
  ],
  authors: [{ name: "Muhammad Junaid Mir" }],
  creator: "Muhammad Junaid Mir",

  openGraph: {
    title: "Muhammad Junaid Mir | Graduate BSc (Hons) Computer Science Portfolio",
    description:
      "BSc (Hons) Computer Science graduate portfolio featuring AI, NLP, software engineering, and blockchain projects.",
    url: "https://muhammadjuniadmir.vercel.app/",
    siteName: "Muhammad Junaid Mir Portfolio",
    images: [
      {
        url: "https://muhammadjuniadmir.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Junaid Mir Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Junaid Mir | Graduate BSc (Hons) Computer Science Portfolio",
    description:
      "Portfolio featuring AI, NLP, software engineering, and blockchain project work.",
    images: ["https://muhammadjuniadmir.vercel.app/og-image.jpg"],
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