import DistributionBreakdownChartItems from '@/components/Docs/UI-Blocks/DistributionBreakdownChart/DistributionBreakdownChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pie Chart & Distribution Chart | React Vibe",
    description:
        "Build responsive React Pie Charts and Distribution Charts for analytics dashboards. Ideal for data visualization, expense tracking, business insights, and KPI dashboards.",
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