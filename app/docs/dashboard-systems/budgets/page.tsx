import BudgetsItems from '@/components/Docs/Dashboard-Systems/Budgets/BudgetsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Budget & Planning Dashboard | React Vibe",
    description:
        "Build responsive React Budget Dashboards with Budget Dashboard Templates, Budget Tracking Dashboards, Budget vs Actual Dashboards, and financial planning tools.",
}


function Budgets() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/budgets" withTransition>
                <BudgetsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Budgets