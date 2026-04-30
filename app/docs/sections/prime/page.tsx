import PrimeItems from '@/components/Docs/Sections/Prime/PrimeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pricing Component with Toggle | SaaS UI",
    description:
        "Responsive React pricing component with monthly and yearly toggle, interactive pricing cards, and clean SaaS pricing UI for landing pages.",
}

function Prime() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/prime" withTransition>
                <PrimeItems />
            </RenderOnRoute>
        </div>
    )
}

export default Prime