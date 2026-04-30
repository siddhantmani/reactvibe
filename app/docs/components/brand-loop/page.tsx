import BrandLogoItems from '@/components/Docs/Components/Brand-Logo/BrandLogoItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Logo Carousel & Brand Showcase Component",
    description:
        "A React logo showcase component with loop animation for brand sections, trusted-by logos, and SaaS landing pages.",
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