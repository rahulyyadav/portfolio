import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul-yadav.com.np"),
  title: {
    default: "Rahul Yadav | Full Stack Developer & Software Engineer",
    template: "%s | Rahul Yadav",
  },
  description:
    "Full Stack Developer and Software Engineer specializing in React, Node.js, and modern web technologies. View my portfolio of projects, skills, and experience.",
  keywords: [
    "Rahul Yadav",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Cloud Computing",
    "AWS",
    "VIT Vellore",
    "Nepal Developer",
  ],
  authors: [{ name: "Rahul Yadav" }],
  creator: "Rahul Yadav",
  publisher: "Rahul Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahul-yadav.com.np",
    title: "Rahul Yadav | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer and Software Engineer specializing in React, Node.js, and modern web technologies. View my portfolio of projects, skills, and experience.",
    siteName: "Rahul Yadav Portfolio",
    images: [
      {
        url: "https://rahul-yadav.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Yadav Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Yadav | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer and Software Engineer specializing in React, Node.js, and modern web technologies. View my portfolio of projects, skills, and experience.",
    creator: "@_rahulyyadav",
    images: ["https://rahul-yadav.com.np/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rahul-yadav.com.np",
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  applicationName: "Rahul Yadav Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rahul Yadav Portfolio",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
