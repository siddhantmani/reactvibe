import OverlayNavItems from '@/components/Docs/Blocks/Navigation/Overlay-Nav/OverlayNavItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Responsive Navbar Component | React Vibe",
    description:
        "Responsive Navbar Component with a Navbar Mobile Menu and Navigation Menu Component for modern React websites, with built-in dark mode.",
}


function OverlayNav() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/navigation/overlay-nav" withTransition>
                <OverlayNavItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayNav