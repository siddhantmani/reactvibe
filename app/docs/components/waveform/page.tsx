import WaveformItems from '@/components/Docs/Components/Waveform/WaveformItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Waveform Animation Component",
    description:
        "A lightweight React waveform animation component for UI visuals, loaders, and hero sections with smooth motion effects.",
}

function Waveform() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/waveform" withTransition>
                <WaveformItems />
            </RenderOnRoute>
        </div>
    )
}

export default Waveform