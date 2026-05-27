
import ProgressOverviewListItems from '@/components/Docs/UI-Blocks/ProgressOverviewList/ProgressOverviewListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Progress Overview List UI for React & Next.js | React Vibe",
    description:
        "Responsive progress overview list UI for React with progress bars, tracking sections, and clean dashboard layouts for SaaS apps.",
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