import DistributionBreakdownChartItems from '@/components/Docs/UI-Blocks/DistributionBreakdownChart/DistributionBreakdownChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Expense Breakdown Chart UI for React & Next.js | React Vibe",
    description:
        "Responsive expense breakdown chart UI for React with category analytics, finance insights, and modern dashboard data visualization.",
}


function DistributionBreakdownChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/distribution-breakdown-chart" withTransition>
                <DistributionBreakdownChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default DistributionBreakdownChart