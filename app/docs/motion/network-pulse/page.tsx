import NetworkPulseItem from '@/components/Docs/Motion/NetworkPulse/NetworkPulseItem'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Network Flow Animation | React Vibe",
    description:
        "Animated Network Flow with Network Connection Animation, Active Connection Animation, and Network Topology Animation for monitoring and workflows.",
}

function NetworkPulse() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/network-pulse" withTransition>
                <NetworkPulseItem />
            </RenderOnRoute>
        </div>
    )
}

export default NetworkPulse