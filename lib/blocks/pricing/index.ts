
import Prime from "@/public/Blocks/Pricing/Prime/Prime";
import Page from "@/public/Blocks/Pricing/Aurora-Pricing/Page";
import page from "@/public/Blocks/Pricing/Nova-Pricing/Page";
import zenithPage from "@/public/Blocks/Pricing/Zenith/Page";

export interface PricingBlock {
    name: string;
    slug: string;
    description: string;
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string;
    tags: string[];
    createdAt: string;
}

export const pricingBlocks: PricingBlock[] = [
    {
        name: "Prime",
        slug: "prime",
        description: "A responsive SaaS pricing component with monthly/yearly billing, subscription plans, and built-in dark mode support.",
        preview: Prime,
        badge: "NEW",
        tags: ["Monthly/Yearly Toggle", "Featured Dark Card", "SaaS"],
        createdAt: "2026-7-29",
    },
    {
        name: "Aurora Pricing",
        slug: "aurora-pricing",
        description: "A clean SaaS pricing section with three pricing tiers, monthly/yearly billing, a featured plan, and built-in dark mode support.",
        preview: Page,
        tags: ["Monthly/Yearly Toggle", "Gradient Highlight", "Popular Badge"],
        createdAt: "2026-7-29",
    },
    {
        name: "Nova Pricing",
        slug: "nova-pricing",
        description: "A three-tier subscription pricing component with monthly/yearly billing, a highlighted popular plan, and dark mode support.",
        preview: page,
        tags: ["Monthly/Yearly Toggle", "Multi-Tier Grid", "Dark Center Card"],
        createdAt: "2026-7-29",
    },
    {
        name: "Zenith",
        slug: "zenith",
        description: "A reusable React SaaS pricing section with monthly/yearly billing, subscription plans, responsive cards, and dark mode support.",
        preview: zenithPage,
        tags: ["Monthly/Yearly Toggle", "Minimalist Card", "Popular Badge"],
        createdAt: "2026-7-29",
    }
];