import WaveCTAItems from '@/components/Docs/Hero/WaveCTA/WaveCTAItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Wave Background | Animated Hero CTA | React Vibe",
    description: "Add a modern React wave background to your hero or CTA section. Animated flowing paths and particles create an engaging background for SaaS, startup, and product websites.",
}

function WaveCTA() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/wave-cta" withTransition>
                <WaveCTAItems />
            </RenderOnRoute>
        </div>
    )
}

export default WaveCTA