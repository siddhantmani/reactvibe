import MotionSwitchItems from '@/components/Docs/Components/MotionSwitch/MotionSwitchItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Toggle Switch for Pricing & UI States",
    description:
        "A React toggle switch component with smooth animation. Perfect for pricing toggles, UI states, and Tailwind-based interfaces.",
}


function MotionSwitch() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/motion-switch" withTransition>
                <MotionSwitchItems />
            </RenderOnRoute>
        </div>
    )
}

export default MotionSwitch