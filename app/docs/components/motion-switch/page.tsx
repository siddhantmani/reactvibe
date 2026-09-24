import MotionSwitchItems from '@/components/Docs/Components/MotionSwitch/MotionSwitchItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Switch Component | React Vibe",
    description:
        "A smooth React switch component for toggling settings, features, dark mode, and preferences. Customizable, animated, and easy to integrate.",
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