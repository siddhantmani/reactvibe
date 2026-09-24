import MorphMenuItems from '@/components/Docs/Blocks/Navigation/MorphMenu/MorphMenuItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Responsive Navbar Component | Scroll Pill",
    description:
        "Responsive Navbar Component with a Navbar Mobile Menu, scroll-to-pill animation, social proof, and built-in dark mode for modern React websites.",
}

function MorphMenu() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/navigation/morph-menu" withTransition>
                <MorphMenuItems />
            </RenderOnRoute>
        </div>
    )
}

export default MorphMenu