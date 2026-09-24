import BrandLogoItems from '@/components/Docs/Components/Brand-Logo/BrandLogoItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Logo Cloud & Brand Loop | React Vibe",
    description:
        "A React logo cloud component for showcasing customer, client, partner, and technology logos with a smooth infinite scrolling animation.",
}

function BrandLogo() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/brand-loop" withTransition>
                <BrandLogoItems />
            </RenderOnRoute>
        </div>
    )
}

export default BrandLogo