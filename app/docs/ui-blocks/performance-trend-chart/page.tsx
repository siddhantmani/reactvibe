import PerformanceTrendChartItems from '@/components/Docs/UI-Blocks/PerformanceTrendChart/PerformanceTrendChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Performance Trend Chart UI for React & Next.js | React Vibe",
    description:
        "Responsive performance trend chart UI for React with analytics visualization, growth tracking, and modern dashboard layouts.",
}


function PerformanceTrendChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/performance-trend-chart" withTransition>
                <PerformanceTrendChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default PerformanceTrendChart