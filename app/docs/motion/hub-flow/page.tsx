import HubFlowItems from '@/components/Docs/Motion/HubFlow/HubFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Integration & Partner Network Animation | React Vibe",
    description:
        "Animated Integration Network with an Integration Hub Component, Connected Services Animation, and Partner Network Animation for SaaS products.",
}

function HubFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/hub-flow" withTransition>
                <HubFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default HubFlow