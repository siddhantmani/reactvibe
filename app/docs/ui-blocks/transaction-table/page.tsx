
import TransactionTableItems from '@/components/Docs/UI-Blocks/TransactionTable/TransactionTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Transaction Table UI for React & Next.js | React Vibe",
    description:
        "Responsive transaction table UI for React with payment tracking, status indicators, and modern finance dashboard layouts.",
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