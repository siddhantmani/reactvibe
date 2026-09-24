
import ProgressOverviewListItems from '@/components/Docs/Dashboard-UI/List/ProgressOverviewList/ProgressOverviewListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Progress Bar & Progress List Component | React Vibe",
    description:
        "Build React Progress Lists for dashboards, project progress tracking, status lists, and goal tracking. Free and customizable.",
}


function ProgressOverviewList() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/list/progress-overview-list" withTransition>
                <ProgressOverviewListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ProgressOverviewList