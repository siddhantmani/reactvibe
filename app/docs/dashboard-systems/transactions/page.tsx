import TransactionsItems from '@/components/Docs/Dashboard-Systems/Transactions/TransactionsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Transaction & Payment Dashboard | React Vibe",
    description:
        "Build responsive React Transaction Dashboards and React Payment Dashboards with Transaction Dashboard Templates, Expense Tracking Dashboards, and financial analytics.",
}

function Transactions() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/transactions" withTransition>
                <TransactionsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Transactions