import FinanceOverviewItems from '@/components/Docs/Dashboard-Systems/FinanceOverview/FinanceOverviewItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Financial Dashboard React | Finance Analytics Dashboard",
    description:
        "Build a modern Financial Dashboard React with finance analytics, budget management, financial goals tracking, goal progress cards, charts, and a complete financial dashboard UI.",
}

function FinanceOverview() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/finance-overview" withTransition>
                <FinanceOverviewItems />
            </RenderOnRoute>
        </div>
    )
}

export default FinanceOverview