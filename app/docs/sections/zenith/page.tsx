import ZenithItems from '@/components/Docs/Sections/Zenith/ZenithItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pricing UI with Monthly Yearly Toggle",
    description:
        "Create a responsive React pricing section with monthly and yearly toggle. Includes dynamic pricing cards for SaaS and subscription UI.",
}

function Zenith() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/zenith" withTransition>
                <ZenithItems />
            </RenderOnRoute>
        </div>
    )
}

export default Zenith