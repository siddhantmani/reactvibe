import NexusItems from '@/components/Docs/Components/Nexus/NexusItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Integration Network | Connected Apps",
    description:
        "Animated React integration network with connected apps, connected services, and integration flow for SaaS products and integration pages.",
}

function Nexus() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/nexus" withTransition>
                <NexusItems />
            </RenderOnRoute>
        </div>
    )
}

export default Nexus