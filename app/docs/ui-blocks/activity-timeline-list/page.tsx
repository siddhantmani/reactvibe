import ActivityTimelineListItems from '@/components/Docs/UI-Blocks/ActivityTimelineList/ActivityTimelineListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Activity Timeline Component | React Vibe",
    description:
        "Build a responsive React Activity Timeline component for dashboards. Perfect for activity feeds, recent activity, event history, audit logs, and notification timelines.",
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