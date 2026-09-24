import FluxHeroItems from '@/components/Docs/Blocks/Hero/FluxHero/FluxHeroItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "SaaS Hero Section & Navbar | React Vibe",
    description:
        "A React SaaS Hero Section with Navbar and Hero layout, animated background, CTA, and built-in dark mode for SaaS landing pages.",
}

function FluxHero() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/hero/flux-hero" withTransition>
                <FluxHeroItems />
            </RenderOnRoute>
        </div>
    )
}

export default FluxHero