
import NovaPricingItems from '@/components/Docs/Blocks/Pricing/NovaPricing/NovaPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Subscription Pricing Component with Billing Toggle",
    description:
        "Responsive subscription pricing section with monthly/yearly billing, featured plans, and dark mode support for React SaaS websites.",
}

function NovaPricing() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/pricing/nova-pricing" withTransition>
                <NovaPricingItems />
            </RenderOnRoute>
        </div>
    )
}

export default NovaPricing