import PulsePingItems from '@/components/Docs/Components/Pulse-Ping/PulsePingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Animated Pulse Indicator & Pulse Ping | React Vibe",
    description:
        "A customizable animated pulse indicator for React with continuously changing colors and smooth motion. Use it for status states, loading, or visual accents.",
}


function PulsePing() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/pulse-ping" withTransition>
                <PulsePingItems />
            </RenderOnRoute>
        </div>
    )
}

export default PulsePing