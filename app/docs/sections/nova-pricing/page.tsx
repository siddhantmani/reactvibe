import NovaPricingItems from '@/components/Docs/Sections/NovaPricing/NovaPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pricing Component with Monthly Yearly Plans",
    description:
        "Build a responsive React pricing section with monthly yearly toggle, plan comparison, and modern SaaS pricing UI for better conversions.",
}


function NovaPricing() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/nova-pricing" withTransition>
                <NovaPricingItems />
            </RenderOnRoute>
        </div>
    )
}

export default NovaPricing