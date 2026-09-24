

import TransactionTableItems from '@/components/Docs/Dashboard-UI/Table/TransactionTable/TransactionTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Data Table & Transaction Table | React Vibe",
    description:
        "Build React Data Tables and Transaction Tables for finance dashboards. Perfect for transaction history, payment records, data grids, and finance management.",
}


function TransactionTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/table/transaction-table" withTransition>
                <TransactionTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default TransactionTable