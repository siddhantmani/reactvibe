import Page from "@/public/Blocks/Footer/Signature/Page";
import RadiantFrame from "@/public/Blocks/Footer/Radiant-Frame/Page";
import AuraBase from "@/public/Blocks/Footer/AuraBase/page";


export interface FooterBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const footerBlocks: FooterBlock[] = [
    {
        name: "Signature",
        slug: "signature",
        description: "A responsive React footer with social links, multi-column navigation, and built-in dark mode for modern landing pages and SaaS websites.",
        preview: Page,
        badge: "UPDATED",
        tags: ["Footer", "Multi-Column", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Radiant Frame",
        slug: "radiant-frame",
        description: "An animated React footer with a color-shifting frame, responsive layout, and built-in dark mode for modern landing pages and SaaS websites.",
        preview: RadiantFrame,
        badge: "UPDATED",
        tags: ["Animated Border", "Color-Shifting", "Footer", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Aura Base",
        slug: "aura-base",
        description: "A responsive React footer with App Store and Google Play download buttons, social links, navigation, and built-in dark mode.",
        preview: AuraBase,
        badge: "UPDATED",
        tags: ["Animated Border", "App Badges", "Footer", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]