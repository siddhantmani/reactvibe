
import PrimeItems from '@/components/Docs/Blocks/Pricing/Prime/PrimeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "SaaS Pricing Component with Monthly/Yearly Toggle",
    description:
        "Responsive SaaS pricing section with monthly/yearly toggle, subscription pricing, and dark mode support for modern React websites.",
}

function Prime() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/pricing/prime" withTransition>
                <PrimeItems />
            </RenderOnRoute>
        </div>
    )
}

export default Prime