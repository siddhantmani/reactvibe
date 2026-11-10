import PopupItems from '@/components/Docs/Components/Popup/PopupItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Popup with Overlay | React Vibe",
    description:
        "A customizable React popup with overlay, dismissible content, and a backdrop for displaying messages, alerts, and important information.",
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