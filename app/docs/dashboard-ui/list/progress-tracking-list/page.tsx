
import ProgressTrackingListItems from '@/components/Docs/Dashboard-UI/List/ProgressTrackingList/ProgressTrackingListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Goal Progress Tracker Component | React Vibe",
    description:
        "Build a React Goal Progress Tracker component for dashboards. Perfect for savings tracking, project progress, milestone tracking, and personal finance dashboards.",
}

function ProgressTrackingList() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/list/progress-tracking-list" withTransition>
                <ProgressTrackingListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ProgressTrackingList