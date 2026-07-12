
import ProgressOverviewListItems from '@/components/Docs/UI-Blocks/ProgressOverviewList/ProgressOverviewListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Progress Bar & Progress List Component | React Vibe",
    description:
        "Build responsive React Progress Bar and Progress List Component for dashboards. Perfect for project progress tracking, status lists, and Tailwind apps.",
}

function ProgressOverviewList() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/progress-overview-list" withTransition>
                <ProgressOverviewListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ProgressOverviewList