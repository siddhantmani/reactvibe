
import TransactionTableItems from '@/components/Docs/UI-Blocks/TransactionTable/TransactionTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Data Table & Transaction Table | React Vibe",
    description:
        "Build responsive React Data Tables and Transaction Tables for finance dashboards. Perfect for transaction history, payment records, data grids, and finance management.",
}


function TransactionTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/transaction-table" withTransition>
                <TransactionTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default TransactionTable