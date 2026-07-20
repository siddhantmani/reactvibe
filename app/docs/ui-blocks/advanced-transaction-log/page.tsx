import AdvancedTransactionLogItems from '@/components/Docs/UI-Blocks/AdvancedTransactionLog/AdvancedTransactionLogItem'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Transaction Log Component | React Vibe",
    description:
        "Build a responsive React Transaction Log component for fintech dashboards. Perfect for transaction history, payment tracking, transaction management, and responsive data tables.",
}


function AdvancedTransactionLog() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/advanced-transaction-log" withTransition>
                <AdvancedTransactionLogItems />
            </RenderOnRoute>
        </div>

    )
}

export default AdvancedTransactionLog