import MotionDropdownItems from '@/components/Docs/Components/MotionDropdown/MotionDropdownItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function MotionDropdown() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/motion-dropdown" withTransition>
                <MotionDropdownItems />
            </RenderOnRoute>
        </div>
    )
}

export default MotionDropdown