import ComparativeMetricsChartItems from '@/components/Docs/UI-Blocks/ComparativeMetricsChart/ComparativeMetricsChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget vs Actual Chart for React | React Vibe",
    description:
        "Build a responsive Budget vs Actual Chart for React dashboards. Perfect for budget comparison, expense tracking, spending analysis, and financial dashboards.",
}


function ComparativeMetricsChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/comparative-metrics-chart" withTransition>
                <ComparativeMetricsChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default ComparativeMetricsChart