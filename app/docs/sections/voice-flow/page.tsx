import VoiceFlowItems from '@/components/Docs/Sections/VoiceFlow/VoiceFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Testimonial Slider Component for SaaS UI",
    description:
        "A modern React testimonial slider component for SaaS landing pages. Showcase customer feedback with a clean, focused UI and smooth navigation.",
}

function VoiceFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/voice-flow" withTransition>
                <VoiceFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default VoiceFlow