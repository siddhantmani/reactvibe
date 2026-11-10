import PopupItems from '@/components/Docs/Components/Popup/PopupItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Animated Pulse Indicator & Pulse Ping | React Vibe",
    description:
        "A customizable animated pulse indicator for React with continuously changing colors and smooth motion. Use it for status states, loading, or visual accents.",
}

function Popup() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/popup" withTransition>
                <PopupItems />
            </RenderOnRoute>
        </div>
    )
}

export default Popup