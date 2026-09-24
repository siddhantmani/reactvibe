import FlowlistItems from '@/components/Docs/Components/Flowlist/FlowlistItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Animated List Component | React Vibe",
    description:
        "A animated list component for smooth, staggered content reveals. Use Flowlist for feature lists, activity feeds, notifications, timelines, and interactive UI.",
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