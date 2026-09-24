
import VoiceFlowPreview from "@/components/Docs/Blocks/Testimonials/VoiceFlow/VoiceFlowPreview";
import Spotlight from "@/public/Blocks/Testimonials/Spotlight/Page";
import TestimonialsFlow from "@/public/Blocks/Testimonials/Testimonial-Flow/Page";

export interface TestimonialsBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const testimonialsBlocks: TestimonialsBlock[] = [
    {
        name: "Spotlight",
        slug: "spotlight",
        description: "An interactive React customer stories section that showcases testimonials through a focused carousel with smooth navigation and built-in dark mode.",
        preview: Spotlight,
        badge: "UPDATED",
        tags: ["Testimonials", "Spotlight Glow", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Testimonial Flow",
        slug: "testimonial-flow",
        description: "An animated React social proof section with customer review cards moving infinitely in opposite directions for a dynamic testimonial showcase.",
        preview: TestimonialsFlow,
        badge: "UPDATED",
        tags: ["Infinite Scroll", "Hover-to-Pause", "Testimonials", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Voice Flow",
        slug: "voice-flow",
        description: "An interactive React social proof carousel that highlights customer testimonials with layered cards, navigation controls, and built-in dark mode.",
        preview: VoiceFlowPreview,
        badge: "UPDATED",
        tags: ["Testimonials", "Carousel", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]
