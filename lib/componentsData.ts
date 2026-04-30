// components-data.ts
import LaunchPreview from "@/components/Docs/HeroSection/Launch/LaunchPreview"
import pathflowImg from "@/images/previews/pathflow.png"
import launchImage from "@/images/previews/launch.png"

// Background Images
import DarkFusionImg from "@/images/previews/Backgrounds/DarkFusion.png"

// Sections
import zenithImg from "@/images/previews/Sections/Zenith.png"
import spotlightImg from "@/images/previews/Sections/Spotlight.png"
import auroraPricingImg from "@/images/previews/Sections/AuroraPricing.png"
import testimonialsFlowImg from "@/images/previews/Sections/TestimonialsFlow.png"
import glideAccordionImg from "@/images/previews/Sections/GlideAccordion.png"
import voiceFlowImg from "@/images/previews/Sections/VoiceFlow.png"
import novaPricingImg from "@/images/previews/Sections/NovaPricing.png"
import stratusImg from "@/images/previews/Sections/Stratus.png"
import auraBaseImg from "@/images/previews/Sections/AuraBaseImg.png"

// Components
import brandsImg from "@/images/previews/Components/Brands.png"
import BrandsLoopImg from "@/images/previews/Components/BrandsLoop.png"

// Text Motion
import linearRevealImg from "@/images/previews/Text Motion/Linear Reveal.png"

// Backgrounds
import PathFlowPreview from "@/components/Docs/Backgrounds/PathFlow/PathFlowPreview"

// Sections
import ZenithPreview from "@/components/Docs/Sections/Zenith/ZenithPreview"
import SpotlightPreview from "@/components/Docs/Sections/Spotlight/SpotlightPreview"
import AuroraPricingPreview from "@/components/Docs/Sections/AuroraPricing/AuroraPricingPreview"
import TestimonialsMainSection from "@/components/Docs/Sections/Testimonial-flow/TestimonialsMainSection"
import GlideAccordioPreview from "@/components/Docs/Sections/GlideAccordion/GlideAccordioPreview"
import VoiceFlowPreview from "@/components/Docs/Sections/VoiceFlow/VoiceFlowPreview"
import NovaPricingPreview from "@/components/Docs/Sections/NovaPricing/NovaPricingPreview"
import StratusPreview from "@/components/Docs/Sections/Stratus/StratusPreview"
import AuraBasePreview from "@/components/Docs/Sections/AuraBase/AuraBasePreview"

// Components
import OriginPreview from "@/components/Docs/Components/Origin/OriginPreview"
import BrandLogoPreview from "@/components/Docs/Components/Brand-Logo/BrandLogoPreview"

// Text Motion
import LinearRevealPreview from "@/components/Docs/Text-Motion/Linear-Reveal/LinearRevealPreview"
import { ComponentType } from "react"
import { StaticImageData } from "next/image"
import DarkFusion from "@/public/Backgrounds/Dark-Fusion/DarkFusion"

type ComponentEntry = {
    id: string
    component: ComponentType<Record<string, unknown>>  // ← add this type
    image: StaticImageData
    path: string
    title: string
    category: string
}

export const componentsData: ComponentEntry[] = [
    // Backgrounds
    {
        id: "backgrounds-dark-fusion",
        component: DarkFusion,
        image: DarkFusionImg,
        path: "/docs/backgrounds/dark-fusion",
        title: "Dark Fusion",
        category: "Backgrounds",
    },
    {
        id: "backgrounds-path-flow",
        component: PathFlowPreview,
        image: pathflowImg,
        path: "/docs/backgrounds/path-flow",
        title: "Path Flow",
        category: "Backgrounds",
    },

    // Hero Section
    {
        id: "hero-launch",
        component: LaunchPreview,
        image: launchImage,
        path: "/docs/hero-section/launch",
        title: "Launch",
        category: "Hero Section",
    },

    // Sections
    {
        id: "section-zenith",
        component: ZenithPreview,
        image: zenithImg,
        path: "/docs/sections/zenith",
        title: "Zenith",
        category: "Sections",
    },
    {
        id: "section-spotlight",
        component: SpotlightPreview,
        image: spotlightImg,
        path: "/docs/sections/spotlight",
        title: "Spotlight",
        category: "Sections",
    },
    {
        id: "section-aurora-pricing",
        component: AuroraPricingPreview,
        image: auroraPricingImg,
        path: "/docs/sections/aurora-pricing",
        title: "Aurora Pricing",
        category: "Sections",
    },
    {
        id: "section-testimonial-flow",
        component: TestimonialsMainSection,
        image: testimonialsFlowImg,
        path: "/docs/sections/testimonial-flow",
        title: "Testimonial Flow",
        category: "Sections",
    },
    {
        id: "section-glide-accordion",
        component: GlideAccordioPreview,
        image: glideAccordionImg,
        path: "/docs/sections/glide-accordion",
        title: "Glide Accordion",
        category: "Sections",
    },
    {
        id: "section-voice-flow",
        component: VoiceFlowPreview,
        image: voiceFlowImg,
        path: "/docs/sections/voice-flow",
        title: "Voice Flow",
        category: "Sections",
    },
    {
        id: "section-nova-pricing",
        component: NovaPricingPreview,
        image: novaPricingImg,
        path: "/docs/sections/nova-pricing",
        title: "Nova Pricing",
        category: "Sections",
    },
    {
        id: "section-stratus",
        component: StratusPreview,
        image: stratusImg,
        path: "/docs/sections/stratus",
        title: "Stratus",
        category: "Sections",
    },
    {
        id: "section-aura-base",
        component: AuraBasePreview,
        image: auraBaseImg,
        path: "/docs/sections/aura-base",
        title: "Aura Base",
        category: "Sections",
    },

    //Components
   
    {
        id: "component-origin",
        component: OriginPreview,
        image: brandsImg,
        path: "/docs/components/origin",
        title: "Origin",
        category: "Components",
    },
    {
        id: "component-brand-loop",
        component: BrandLogoPreview,
        image: BrandsLoopImg,
        path: "/docs/components/brand-loop",
        title: "Brand Loop",
        category: "Components",
    },

    // Text Motion
    {
        id: "text-linear-reveal",
        component: LinearRevealPreview,
        image: linearRevealImg,
        path: "/docs/text-motion/linear-reveal",
        title: "Linear Reveal",
        category: "Text Motion",
    },
]