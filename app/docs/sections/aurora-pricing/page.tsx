import AuroraPricingItems from '@/components/Docs/Sections/AuroraPricing/AuroraPricingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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