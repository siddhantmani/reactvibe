import ComparativeMetricsChartItems from '@/components/Docs/UI-Blocks/ComparativeMetricsChart/ComparativeMetricsChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget Comparison Chart UI for React & Next.js | React Vibe",
    description:
        "Responsive budget comparison chart UI for React with spending analytics, expense tracking, and modern dashboard visualization.",
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