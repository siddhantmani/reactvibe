
import MorphNavPreview from "@/public/Blocks/Navigation/MorphNav/Page";
import FluxHeroPreview from "@/public/Blocks/Hero/FluxHero/Page";

export interface builtWithSpotlightBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const builtWithSpotlight: builtWithSpotlightBlock[] = [
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