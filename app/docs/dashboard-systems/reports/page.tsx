import ReportsItems from '@/components/Docs/Dashboard-Systems/Reports/ReportsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Reports Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern reports dashboard UI for React with financial analytics, cashflow reports, expense insights, and responsive SaaS layouts.",
}

function Reports() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/reports" withTransition>
                <ReportsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Reports