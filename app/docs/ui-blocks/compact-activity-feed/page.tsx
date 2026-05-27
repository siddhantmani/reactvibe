import CompactActivityFeedItems from '@/components/Docs/UI-Blocks/CompactActivityFeed/CompactActivityFeedItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Compact Activity Feed UI for React & Next.js | React Vibe",
    description:
        "Responsive compact activity feed UI for React with transaction updates, realtime activity tracking, and modern dashboard layouts.",
}


function CompactActivityFeed() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/compact-activity-feed" withTransition>
                <CompactActivityFeedItems />
            </RenderOnRoute>
        </div>
    )
}

export default CompactActivityFeed