import ReportsItems from '@/components/Docs/Dashboard-Systems/Reports/ReportsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Reports & Reporting Dashboard | React Vibe",
    description:
        "Build responsive React Reports Dashboards with Reporting Dashboard Templates, Financial Reports Dashboards, Cash Flow Reports Dashboards, and executive reporting tools.",
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