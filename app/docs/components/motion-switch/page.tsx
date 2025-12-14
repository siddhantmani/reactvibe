import MotionSwitchItems from '@/components/Docs/Components/MotionSwitch/MotionSwitchItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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