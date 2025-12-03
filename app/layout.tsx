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
    default: "React Vibe – Animated, Motion-First UI Components for React",
    template: "%s | ReactVibe",
  },

  description:
    "Motion-first, fully animated React components built with Framer Motion and Tailwind CSS. Open source. Zero dependencies. Zero setup. Copy, paste, and ship smooth interactions.",

  keywords: [
    "animated UI components",
    "React components",
    "Tailwind components",
    "Framer Motion UI",
    "React animations",
    "motion components",
    "ReactVibe",
    "React design system",
    "React UI kit",
    "frontend UI components",
  ],

  authors: [{ name: "Siddhant Mani" }],
  creator: "Siddhant Mani",
  publisher: "React Vibe",

  metadataBase: new URL("https://reactvibe.com"),

  openGraph: {
    title: "React Vibe – Animated, Motion-First UI Components for React",
    description:
      "Motion-first, fully animated React components built with Framer Motion and Tailwind CSS. Open source. Zero dependencies. Zero setup. Copy, paste, and ship smooth interactions.",
    url: "https://reactvibe.com",
    siteName: "ReactVibe",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "React Vibe – Animated, Motion-First React UI Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "React Vibe – Animated, Motion-First UI Components for React",
    description:
      "Motion-first, fully animated React components built with Framer Motion and Tailwind CSS. Open source. Zero dependencies. Zero setup. Copy, paste, and ship smooth interactions.",
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
