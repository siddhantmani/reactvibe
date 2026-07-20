import FinanceOverviewItems from '@/components/Docs/Dashboard-Systems/FinanceOverview/FinanceOverviewItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Finance Dashboard Template | React Vibe",
    description:
        "Build a responsive React Finance Dashboard Template featuring Budget Dashboard Templates, Expense Tracking Dashboards, Cash Flow Dashboards, and financial analytics.",
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