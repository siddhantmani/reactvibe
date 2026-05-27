import TransactionsItems from '@/components/Docs/Dashboard-Systems/Transactions/TransactionsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Transactions Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern transactions dashboard UI for React with payment tracking, transaction history, expense analytics, and responsive fintech layouts.",
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