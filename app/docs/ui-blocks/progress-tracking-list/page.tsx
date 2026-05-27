import ProgressTrackingListItems from '@/components/Docs/UI-Blocks/ProgressTrackingList/ProgressTrackingListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Progress Tracking List UI for React & Next.js | React Vibe",
    description:
        "Responsive progress tracking list UI for React with goal tracking, milestone progress bars, and modern dashboard layouts.",
}

function ProgressTrackingList() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/progress-tracking-list" withTransition>
                <ProgressTrackingListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ProgressTrackingList