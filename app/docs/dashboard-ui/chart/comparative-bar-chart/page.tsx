
import ComparativeBarChartItems from '@/components/Docs/Dashboard-UI/Chart/ComparativeBarChart/ComparativeBarChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Comparison Chart & React Chart Component | React Vibe",
    description:
        "Build Comparison Charts and React Chart components for dashboards. Perfect for data visualization, grouped bar charts, cash flow, and profit loss analysis.",
}

function ComparativeBarChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/chart/comparative-bar-chart" withTransition>
                <ComparativeBarChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default ComparativeBarChart