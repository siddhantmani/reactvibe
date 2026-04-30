import MotionDropdownItems from '@/components/Docs/Components/MotionDropdown/MotionDropdownItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Dropdown Menu with Submenu & Animation",
    description:
        "A React dropdown menu component with submenus, animation, and Tailwind support. Perfect for profile, settings, and user menus.",
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