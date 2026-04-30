import AuroraPricingItems from '@/components/Docs/Sections/AuroraPricing/AuroraPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pricing Component with Toggle UI (SaaS Pricing)",
    description:
        "Create a responsive React pricing section with monthly yearly toggle. Includes pricing cards, subscription UI, and SaaS pricing layout.",
}


function AuroraPricing() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/aurora-pricing" withTransition>
                <AuroraPricingItems />
            </RenderOnRoute>
        </div>
    )
}

export default AuroraPricing