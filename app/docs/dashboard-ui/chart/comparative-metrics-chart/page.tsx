
import ComparativeMetricsChartItems from '@/components/Docs/Dashboard-UI/Chart/ComparativeMetricsChart/ComparativeMetricsChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget & Expense Comparison Chart | React Vibe",
    description:
        "Build a Budget vs Actual Chart for React dashboards. Perfect for budget comparison, expense tracking, spending analysis, and financial dashboards.",
}


function ComparativeMetricsChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/chart/comparative-metrics-chart" withTransition>
                <ComparativeMetricsChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default ComparativeMetricsChart