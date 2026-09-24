import OriginItems from '@/components/Docs/Components/Origin/OriginItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Connected Apps & Integration Network | React Vibe",
    description:
        "React connected apps and integration network with animated nodes, connected services, and integration flow for SaaS and partner ecosystems.",
}

function Origin() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/origin" withTransition>
                <OriginItems />
            </RenderOnRoute>
        </div>
    )
}

export default Origin