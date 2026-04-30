import FluxCTAItems from '@/components/Docs/Sections/Flux-CTA/FluxCTAItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React CTA Section with Animated Gradient Background",
    description:
        "Create an animated React CTA section with gradient background and interactive design. Ideal for landing pages and conversion-focused UI.",
}

function FluxCTA() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/flux-cta" withTransition>
                <FluxCTAItems />
            </RenderOnRoute>
        </div>
    )
}

export default FluxCTA