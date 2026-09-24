import SignalItems from '@/components/Docs/Motion/Signal/SignalItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Data Flow Animation | React Vibe",
    description:
        "React data flow animation with Particle Flow Animation, AI Workflow Animation, and Network Flow Animation for modern interfaces and hero sections.",
}

function Signal() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/signal" withTransition>
                <SignalItems />
            </RenderOnRoute>
        </div>
    )
}

export default Signal