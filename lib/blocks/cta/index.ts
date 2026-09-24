import FluxCTA from "@/public/Blocks/CTA/Flux-CTA/Page";

export interface CTABlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const ctaBlocks: CTABlock[] = [
    {
        name: "Flux CTA",
        slug: "flux-cta",
        description: "An animated React CTA section with a continuously changing gradient background, built for SaaS landing pages and free trial conversions.",
        preview: FluxCTA,
        badge: "UPDATED",
        tags: ["CTA", "cta component react", "Gradient Animation"],
        createdAt: "2026-9-24",
    },
]