import AdvancedTransactionLogItems from '@/components/Docs/UI-Blocks/AdvancedTransactionLog/AdvancedTransactionLogItem'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Advanced Transaction Log UI for React & Next.js | React Vibe",
    description:
        "Responsive transaction log UI for React with filters, payment tracking, categorized activity, and modern fintech layouts.",
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