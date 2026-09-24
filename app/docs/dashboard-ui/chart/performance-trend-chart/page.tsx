
import PerformanceTrendChartItems from '@/components/Docs/Dashboard-UI/Chart/PerformanceTrendChart/PerformanceTrendChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Performance & Trend Chart | React Vibe",
    description:
        "Build responsive React Performance and Trend Charts for dashboards. Perfect for KPI Trend Charts, Revenue Trend Charts, and performance analytics.",
}


function PerformanceTrendChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/chart/performance-trend-chart" withTransition>
                <PerformanceTrendChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default PerformanceTrendChart