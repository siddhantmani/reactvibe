
import Prime from "@/public/Blocks/Pricing/Prime/Prime";
import Page from "@/public/Blocks/Pricing/Aurora-Pricing/Page";
import page from "@/public/Blocks/Pricing/Nova-Pricing/Page";
import zenithPage from "@/public/Blocks/Pricing/Zenith/Page";

export interface builtWithMotionSwitchBlock {
    name: string;
    slug: string;
    description: string;
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string;
    tags: string[];
    createdAt: string;
}

export const builtWithMotionSwitch: builtWithMotionSwitchBlock[] = [
    {
        name: "Aurora Pricing",
        slug: "/docs/blocks/pricing/aurora-pricing",
        description: "A clean SaaS pricing section with three pricing tiers, monthly/yearly billing, a featured plan, and built-in dark mode support.",
        preview: Page,
        tags: ["Monthly/Yearly Toggle", "Gradient Highlight", "Popular Badge"],
        createdAt: "2026-7-29",
    },
    {
        name: "Nova Pricing",
        slug: "/docs/blocks/pricing/nova-pricing",
        description: "A three-tier subscription pricing component with monthly/yearly billing, a highlighted popular plan, and dark mode support.",
        preview: page,
        tags: ["Monthly/Yearly Toggle", "Multi-Tier Grid", "Dark Center Card"],
        createdAt: "2026-7-29",
    },
    {
        name: "Zenith",
        slug: "/docs/blocks/pricing/zenith",
        description: "A reusable React SaaS pricing section with monthly/yearly billing, subscription plans, responsive cards, and dark mode support.",
        preview: zenithPage,
        tags: ["Monthly/Yearly Toggle", "Minimalist Card", "Popular Badge"],
        createdAt: "2026-7-29",
    }
];