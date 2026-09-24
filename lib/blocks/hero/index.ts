
import LaunchPreview from "@/public/Blocks/Hero/Launch/Page";
import FluxHeroPreview from "@/public/Blocks/Hero/FluxHero/Page";

export interface HeroBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const heroBlocks: HeroBlock[] = [
    {
        name: "Launch",
        slug: "launch",
        description: "A copy-paste Hero Section Component combining a complete navbar, responsive hero, and built-in dark mode for SaaS and landing pages.",
        preview: LaunchPreview,
        badge: "UPDATED",
        tags: ["Hero Section", "Navbar", "Mobile Menu", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Flux Hero",
        slug: "flux-hero",
        description: "A complete SaaS Hero Section with a responsive navbar, animated background, CTA, and built-in dark mode for modern SaaS landing pages.",
        preview: FluxHeroPreview,
        badge: "NEW",
        tags: ["Hero Section", "Navbar", "Mobile Menu", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]