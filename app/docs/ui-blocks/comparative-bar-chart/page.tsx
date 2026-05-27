import ComparativeBarChartItems from '@/components/Docs/UI-Blocks/ComparativeBarChart/ComparativeBarChartItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Comparative Bar Chart UI for React & Next.js | React Vibe",
    description:
        "Modern comparative bar chart UI for React with income vs expense analytics, responsive data visualization, and SaaS dashboard layouts.",
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