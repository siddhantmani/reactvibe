import DistributionBreakdownChartItems from '@/components/Docs/Dashboard-UI/Chart/DistributionBreakdownChart/DistributionBreakdownChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pie Chart & Distribution Chart | React Vibe",
    description:
        "Build React Pie and Distribution Charts for analytics dashboards. Ideal for data visualization, expense tracking, business insights, and KPI dashboards.",
}

function DistributionBreakdownChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/chart/distribution-breakdown-chart" withTransition>
                <DistributionBreakdownChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default DistributionBreakdownChart