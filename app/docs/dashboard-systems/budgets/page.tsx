import BudgetsItems from '@/components/Docs/Dashboard-Systems/Budgets/BudgetsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern budget dashboard UI for React with expense tracking, budget analytics, category management, and responsive fintech layouts.",
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