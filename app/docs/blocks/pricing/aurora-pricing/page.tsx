
import AuroraPricingItems from '@/components/Docs/Blocks/Pricing/AuroraPricing/AuroraPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "SaaS Pricing Section with Monthly/Yearly Toggle",
    description:
        "Responsive SaaS pricing section with monthly/yearly billing, subscription plans, and dark mode support for React websites.",
}


function AuroraPricing() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/pricing/aurora-pricing" withTransition>
                <AuroraPricingItems />
            </RenderOnRoute>
        </div>
    )
}

export default AuroraPricing