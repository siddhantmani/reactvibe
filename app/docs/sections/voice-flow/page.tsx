import VoiceFlowItems from '@/components/Docs/Sections/VoiceFlow/VoiceFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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