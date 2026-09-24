import ScheduledPaymentsListItems from '@/components/Docs/Dashboard-UI/List/ScheduledPaymentsList/ScheduledPaymentsListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Payment List & Billing Dashboard | React Vibe",
    description:
        "Build React Payment Lists for billing dashboards, payment history, subscription management, invoices, and scheduled billing. Free and customizable.",
}


function ScheduledPaymentsList() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/list/scheduled-payments-list" withTransition>
                <ScheduledPaymentsListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ScheduledPaymentsList