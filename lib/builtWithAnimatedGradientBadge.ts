
import MorphNavPreview from "@/public/Blocks/Navigation/MorphNav/Page";
import FluxHeroPreview from "@/public/Blocks/Hero/FluxHero/Page";

export interface builtWithAnimatedGradientBadgeBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const builtWithAnimatedGradientBadge: builtWithAnimatedGradientBadgeBlock[] = [
    {
        name: "Morph Nav",
        slug: "/docs/blocks/navigation/morph-nav",
        description: "A Responsive Navbar Component that transforms into a floating pill on scroll, with a built-in mobile menu, social proof, and dark mode.",
        preview: MorphNavPreview,
        badge: "NEW",
        tags: ["Responsive Navbar Component", "Navbar Mobile Menu", "Navigation Menu Component", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Flux Hero",
        slug: "/docs/blocks/hero/flux-hero",
        description: "A complete SaaS Hero Section with a responsive navbar, animated background, CTA, and built-in dark mode for modern SaaS landing pages.",
        preview: FluxHeroPreview,
        badge: "NEW",
        tags: ["Hero Section Copy Paste", "Hero Section Component", "SaaS Hero Section", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]