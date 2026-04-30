import PulsePingItems from '@/components/Docs/Components/Pulse-Ping/PulsePingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Status Indicator & Notification Ping Component",
    description:
        "A React status indicator with pulse, ripple, and ping animations. Perfect for notifications, badges, and live UI updates.",
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