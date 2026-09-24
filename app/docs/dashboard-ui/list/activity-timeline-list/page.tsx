
import ActivityTimelineListItems from '@/components/Docs/Dashboard-UI/List/ActivityTimelineList/ActivityTimelineListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Activity Timeline Component | React Vibe",
    description:
        "Build a Activity Timeline component for dashboards. Perfect for activity feeds, recent activity, event history, audit logs, and notification timelines.",
}

function ActivityTimelineList() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/list/activity-timeline-list" withTransition>
                <ActivityTimelineListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ActivityTimelineList