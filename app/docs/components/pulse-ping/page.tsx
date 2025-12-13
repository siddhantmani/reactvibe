import PulsePingItems from '@/components/Docs/Components/Pulse-Ping/PulsePingItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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