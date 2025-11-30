import Footer from "@/components/Docs/Footer";
import ForSiedebarProvider from "@/components/Docs/ForSiedebarProvider";
import NavbarDashboard from "@/components/Docs/NavbarDashboard";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "ReactVibe Docs",
        template: "%s | ReactVibe Docs",
    },
    description:
        "Explore the full ReactVibe documentation — motion-first React components built with Framer Motion and Tailwind CSS. Learn how to use, customize, and integrate our UI components into your projects.",
    keywords: [
        "ReactVibe docs",
        "React documentation",
        "Tailwind component docs",
        "Framer Motion components",
        "UI component documentation",
        "React component library docs",
    ],
    openGraph: {
        title: "ReactVibe Documentation",
        description: "Learn how to use ReactVibe motion components. Copy-paste UI components built with Framer Motion and Tailwind CSS.",
        url: "https://reactvibe.com/docs",
        siteName: "ReactVibe Docs",
        images: [
            {
                url: "/og-docs.png",
                width: 1200,
                height: 630,
                alt: "ReactVibe Documentation",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "ReactVibe Documentation",
        description: "Documentation for ReactVibe — motion-first React components powered by Framer Motion and Tailwind CSS.",
        images: ["/og-docs.png"],
        creator: "@_siddhantmani",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="dark:text-[#f2f2f2] dark:bg-gradient-to-r from-[#0b0b0b] from-[33%] to-[#131212]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="sticky top-0 z-50 px-4 py-2">
                        <NavbarDashboard />
                    </div>

                    <div className="flex w-full z-40">
                        <div className="overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] hide-scrollbar hidden lg:block">
                            <ForSiedebarProvider />
                        </div>

                        <div className="w-full pb-44">
                            {children}
                            <Toaster position="top-center" />
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
