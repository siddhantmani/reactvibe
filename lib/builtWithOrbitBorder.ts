import Prime from "@/public/Blocks/Pricing/Prime/Prime";
import Page from "@/public/Blocks/Pricing/Aurora-Pricing/Page";
import zenithPage from "@/public/Blocks/Pricing/Zenith/Page";
import RadiantFramePreview from "@/public/Blocks/Footer/Radiant-Frame/Page";
import AuraBasePreview from "@/public/Blocks/Footer/AuraBase/page";

import ResolvePreview from "@/public/Blocks/FAQ/Resolve/page";
import GlideAccordion from "@/public/Blocks/FAQ/Glide-Accordion/Page";
import SplitFAQPreview from "@/public/Blocks/FAQ/Split-FAQ/Preview";
import Spotlight from "@/public/Blocks/Testimonials/Spotlight/Page";
import LaunchPreview from "@/public/Blocks/Hero/Launch/Page";


export interface builtWithOrbitBorderBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const builtWithOrbitBorder: builtWithOrbitBorderBlock[] = [
    {
        name: "Prime",
        slug: "/docs/blocks/pricing/prime",
        description: "A React pricing component with a monthly and yearly toggle, built for modern SaaS pricing pages and subscription-based products. This responsive pricing section includes interactive pricing cards and dynamic plan switching, making it ideal for creating a clean and scalable pricing table design. Designed for flexibility, it helps developers build a complete React SaaS pricing page with a smooth toggle UI and customizable plans.",
        preview: Prime,
        badge: "NEW",
        tags: ["Monthly/Yearly Toggle", "Featured Dark Card", "SaaS"],
        createdAt: "2026-7-29",
    },
    {
        name: "Aurora Pricing",
        slug: "/docs/blocks/pricing/aurora-pricing",
        description: "A modern React pricing component designed with a clean subscription plan UI and a smooth monthly yearly toggle for SaaS applications. This responsive pricing section features structured pricing cards, clear plan comparison, and a conversion-focused layout. Ideal for building a scalable React SaaS pricing page with a flexible pricing table design and intuitive user experience.",
        preview: Page,
        badge: "UPDATED",
        tags: ["Monthly/Yearly Toggle", "Gradient Highlight", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Zenith",
        slug: "/docs/blocks/pricing/zenith",
        description: "Build a responsive React pricing section with monthly yearly toggle, plan comparison, and modern SaaS pricing UI for better convers",
        preview: zenithPage,
        badge: "UPDATED",
        tags: ["Monthly/Yearly Toggle", "Minimalist Card", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Radiant Frame",
        slug: "/docs/blocks/footer/radiant-frame",
        description: "An animated React footer with a color-shifting frame, responsive layout, and built-in dark mode for modern landing pages and SaaS websites.",
        preview: RadiantFramePreview,
        badge: "UPDATED",
        tags: ["Footer with Social Links", "react Footer Component"],
        createdAt: "2026-7-29",
    },
    {
        name: "Aura Base",
        slug: "/docs/blocks/footer/aura-base",
        description: "A responsive React footer with App Store and Google Play download buttons, social links, navigation, and built-in dark mode.",
        preview: AuraBasePreview,
        badge: "UPDATED",
        tags: ["Footer for Landing Page", "react Footer Component"],
        createdAt: "2026-7-29",
    },
    {
        name: "Resolve",
        slug: "/docs/blocks/faq/resolve",
        description: "A clean React FAQ accordion for landing pages that keeps answers organized with expandable questions and built-in dark mode.",
        preview: ResolvePreview,
        badge: "UPDATED",
        tags: ["Accordion", "Outline Icon", "FAQ Section"],
        createdAt: "2026-7-29",
    },
    {
        name: "Glide Accordion",
        slug: "/docs/blocks/faq/glide-accordion",
        description: "A compact React FAQ card layout with expandable questions, ideal for product pages, SaaS sites, and clean landing-page designs.",
        preview: GlideAccordion,
        badge: "UPDATED",
        tags: ["Accordion", "Directional Prop", "Compact Layout"],
        createdAt: "2026-7-29",
    },
    {
        name: "Split FAQ",
        slug: "/docs/blocks/faq/split-faq",
        description: "A responsive split FAQ section that pairs a strong headline and supporting copy with a structured question-and-answer layout.",
        preview: SplitFAQPreview,
        badge: "NEW",
        tags: ["Accordion", "Directional Prop", "Compact Layout"],
        createdAt: "2026-7-29",
    },
    {
        name: "Spotlight",
        slug: "/docs/blocks/testimonials/spotlight",
        description: "An interactive React customer stories section that showcases testimonials through a focused carousel with smooth navigation and built-in dark mode.",
        preview: Spotlight,
        badge: "UPDATED",
        tags: ["Testimonials", "Spotlight Glow", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Launch",
        slug: "/docs/blocks/hero/flux-hero",
        description: "A copy-paste Hero Section Component combining a complete navbar, responsive hero, and built-in dark mode for SaaS and landing pages.",
        preview: LaunchPreview,
        badge: "UPDATED",
        tags: ["Hero Section", "Navbar", "Mobile Menu", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]