import FlowlistItems from '@/components/Docs/Components/Flowlist/FlowlistItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Animated List Component with Framer Motion",
    description:
        "Build a React animated list component with Framer Motion. Includes stagger animations, FAQ lists, and smooth UI transitions.",
}


function FlowList() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/flowlist" withTransition>
                <FlowlistItems />
            </RenderOnRoute>
        </div>
    )
}

export default FlowList