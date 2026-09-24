import MotionDropdownItems from '@/components/Docs/Components/MotionDropdown/MotionDropdownItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Custom Dropdown | React Vibe",
    description:
        "A customizable React dropdown with smooth animations for menus, actions, settings, and navigation. Build polished dropdown interactions with Motion Dropdown.",
}


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