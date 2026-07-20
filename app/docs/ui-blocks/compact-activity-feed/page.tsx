import CompactActivityFeedItems from '@/components/Docs/UI-Blocks/CompactActivityFeed/CompactActivityFeedItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard Activity Feed Component | React Vibe",
    description:
        "Build a responsive Dashboard Activity Feed component for React. Perfect for recent activity feeds, payment history, account activity, and live dashboard updates.",
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