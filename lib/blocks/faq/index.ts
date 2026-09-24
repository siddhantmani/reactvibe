
import ResolvePreview from "@/public/Blocks/FAQ/Resolve/page";
import GlideAccordion from "@/public/Blocks/FAQ/Glide-Accordion/Page";
import SplitFAQPreview from "@/public/Blocks/FAQ/Split-FAQ/Preview";
import StratusPreview from "@/components/Docs/Blocks/FAQ/Stratus/StratusPreview";

export interface FAQBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const faqBlocks: FAQBlock[] = [
    {
        name: "Resolve",
        slug: "resolve",
        description: "A clean React FAQ accordion for landing pages that keeps answers organized with expandable questions and built-in dark mode.",
        preview: ResolvePreview,
        badge: "UPDATED",
        tags: ["Accordion", "Outline Icon", "FAQ Section"],
        createdAt: "2026-7-29",
    },
    {
        name: "Stratus",
        slug: "stratus",
        description: "A minimal React FAQ section with large typography and expandable accordion items, built for clean SaaS and landing-page layouts.",
        preview: StratusPreview,
        badge: "UPDATED",
        tags: ["Accordion", "Solid Card", "Dark Toggle"],
        createdAt: "2026-7-29",
    },
    {
        name: "Glide Accordion",
        slug: "glide-accordion",
        description: "A compact React FAQ card layout with expandable questions, ideal for product pages, SaaS sites, and clean landing-page designs.",
        preview: GlideAccordion,
        badge: "UPDATED",
        tags: ["Accordion", "Directional Prop", "Compact Layout"],
        createdAt: "2026-7-29",
    },
    {
        name: "Split FAQ",
        slug: "split-faq",
        description: "A responsive split FAQ section that pairs a strong headline and supporting copy with a structured question-and-answer layout.",
        preview: SplitFAQPreview,
        badge: "NEW",
        tags: ["Accordion", "Directional Prop", "Compact Layout"],
        createdAt: "2026-7-29",
    },
]