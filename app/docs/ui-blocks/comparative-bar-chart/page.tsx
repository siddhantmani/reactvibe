import ComparativeBarChartItems from '@/components/Docs/UI-Blocks/ComparativeBarChart/ComparativeBarChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Comparison Chart & React Chart Component | React Vibe",
    description:
        "Build responsive Comparison Charts and React Chart components for dashboards. Perfect for data visualization, grouped bar charts, cash flow, and profit loss analysis.",
}

function ComparativeBarChart() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/comparative-bar-chart" withTransition>
                <ComparativeBarChartItems />
            </RenderOnRoute>
        </div>
    )
}

export default ComparativeBarChart