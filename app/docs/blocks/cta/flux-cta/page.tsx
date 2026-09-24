
import FluxCTAItems from '@/components/Docs/Blocks/CTA/Flux-CTA/FluxCTAItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React CTA Section Component | React Vibe",
    description:
        "Animated React CTA section component with a changing gradient background for SaaS CTA sections, landing page CTA, and free trial CTA.",
}

function FluxCTA() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/cta/flux-cta" withTransition>
                <FluxCTAItems />
            </RenderOnRoute>
        </div>
    )
}

export default FluxCTA