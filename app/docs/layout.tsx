import PopupPreview from "@/components/Docs/Components/Popup/PopupPreview";
import Footer from "@/components/Docs/Footer";
import ForSiedebarProvider from "@/components/Docs/ForSiedebarProvider";
import NavbarDashboard from "@/components/Docs/NavbarDashboard";
import SupportPopupGate from "@/components/SupportPopupGate";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "React Vibe Docs",
        template: "%s | ReactVibe Docs",
    },

    description:
        "Documentation for React Vibe — motion-first, fully animated React UI components. Learn how to use, customize, and ship components fast.",

    metadataBase: new URL("https://reactvibe.com"),

    openGraph: {
        title: "React Vibe Docs – Motion-First Animated React Components",
        description:
            "Learn how to use and customize React Vibe's motion-first, fully animated React UI components. Simple, flexible, and production-ready.",
        url: "https://reactvibe.com/docs",
        siteName: "ReactVibe Docs",
        images: [
            {
                url: "/opengraph.png",
                width: 1200,
                height: 630,
                alt: "React Vibe Documentation – Motion-First Animated React UI Components",
            },
        ],
        locale: "en_US",
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "React Vibe Docs – Motion-First UI Components for React",
        description:
            "Step-by-step documentation for React Vibe's motion-first, animated React UI components. Copy, paste, and ship.",
        images: ["/opengraph.png"],
        creator: "@_siddhantmani",
    },

    robots: {
        index: true,
        follow: true,
    },
};



export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <div className="flex min-h-dvh flex-col">
                {/* NAVBAR */}
                <div className="sticky top-0 z-50 px-4 py-2">
                    <NavbarDashboard />
                </div>

                {/* SIDEBAR + CONTENT */}
                <div className="flex flex-1 min-h-0 w-full z-40 dark:text-[#f2f2f2] dark:bg-gradient-to-r from-[#0b0b0b] from-[33%] to-[#131212]">

                    {/* SIDEBAR */}
                    <div className="hidden lg:block sticky top-16 h-[calc(100dvh-4rem)] overflow-y-auto hide-scrollbar">
                        <ForSiedebarProvider />
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="flex min-w-0 flex-1 flex-col">

                        <main className="flex-1 w-full">
                            {children}
                        </main>

                        <Footer />

                        <SupportPopupGate />

                    </div>
                </div>
                
                <Toaster
                    position="top-center"
                    className="!z-[99999]"
                />

            </div>
        </ThemeProvider>
    );
}
