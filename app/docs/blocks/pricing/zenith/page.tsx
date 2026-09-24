
import ZenithItems from '@/components/Docs/Blocks/Pricing/Zenith/ZenithItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React SaaS Pricing Section | Monthly/Yearly Toggle",
    description:
        "A responsive React SaaS pricing section with monthly/yearly billing, subscription plans, dark mode, and a clean pricing table.",
}

function ZenithPage() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/pricing/zenith" withTransition>
                <ZenithItems />
            </RenderOnRoute>
        </div>
    )
}

export default ZenithPage