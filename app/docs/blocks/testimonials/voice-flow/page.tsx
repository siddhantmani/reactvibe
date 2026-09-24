
import VoiceFlowItems from '@/components/Docs/Blocks/Testimonials/VoiceFlow/VoiceFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Social Proof Carousel | React Vibe",
    description:
        "Build a React social proof carousel for landing page testimonials and product testimonial sections, with smooth navigation and built-in dark mode.",
}

function VoiceFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/testimonials/voice-flow" withTransition>
                <VoiceFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default VoiceFlow