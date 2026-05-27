import FinanceOverviewItems from '@/components/Docs/Dashboard-Systems/FinanceOverview/FinanceOverviewItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Finance Overview Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern finance overview dashboard UI for React and Next.js with analytics charts, expense tracking, transaction tables, financial goals, and responsive SaaS layouts.",
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