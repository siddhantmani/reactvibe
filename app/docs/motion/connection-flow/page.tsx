import ConnectionFlowItems from '@/components/Docs/ConnectionFlow/ConnectionFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Data Flow & Integration Animation | React Vibe",
    description:
        "Build animated React data flows, SaaS integrations, connection networks, and interactive data pipeline visuals with this smooth, infinitely looping motion component.",
}

function ConnectionFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/connection-flow" withTransition>
                <ConnectionFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default ConnectionFlow