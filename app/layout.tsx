import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ReactVibe – Motion-First React UI Components",
    template: "%s | ReactVibe",
  },

  description:
    "ReactVibe is a motion-first React component library powered by Framer Motion + Tailwind CSS. Drop-in, customizable UI components designed for modern web apps, landing pages, and SaaS projects.",

  keywords: [
    "React components",
    "Tailwind components",
    "Framer Motion UI",
    "React animations",
    "motion components",
    "UI kit",
    "ReactVibe",
    "React design system",
    "developer components",
    "frontend UI components",
  ],

  authors: [{ name: "Siddhant Mani" }],
  creator: "Siddhant Mani",
  publisher: "ReactVibe",

  metadataBase: new URL("https://reactvibe.com"),

  openGraph: {
    title: "ReactVibe – Motion-First React UI Components",
    description:
      "Copy-paste React components with beautiful motion, built using Framer Motion + Tailwind CSS. Zero dependencies, fully customizable.",
    url: "https://reactvibe.com",
    siteName: "ReactVibe",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ReactVibe – Motion UI Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ReactVibe – Motion-First React UI Components",
    description:
      "Motion-first React components built with Framer Motion + Tailwind CSS. Your UI deserves better motion.",
    images: ["/og.png"],
    creator: "@_siddhantmani",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider >

        <Analytics />
      </body>
    </html>
  );
}
