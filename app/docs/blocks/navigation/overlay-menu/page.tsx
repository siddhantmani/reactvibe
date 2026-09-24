import OverlayMenuItems from '@/components/Docs/Blocks/Navigation/Overlay-Menu/OverlayMenuItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Navbar Menu Component | Responsive Navigation Menu",
    description:
        "Responsive Navbar Component with a Navbar Menu Component, mobile navigation, social proof, and built-in dark mode for modern React websites.",
}


function OverlayMenu() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/navigation/overlay-menu" withTransition>
                <OverlayMenuItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayMenu