import NovaPricingItems from '@/components/Docs/Sections/NovaPricing/NovaPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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