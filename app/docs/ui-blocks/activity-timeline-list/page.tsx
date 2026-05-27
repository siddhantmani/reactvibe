import ActivityTimelineListItems from '@/components/Docs/UI-Blocks/ActivityTimelineList/ActivityTimelineListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Activity Timeline List UI for React & Next.js | React Vibe",
    description:
        "Responsive activity timeline list UI for React with event tracking, payment activity, and modern SaaS dashboard layouts.",
}


function ActivityTimelineList() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/activity-timeline-list" withTransition>
                <ActivityTimelineListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ActivityTimelineList