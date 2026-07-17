import ProgressOverviewListItems from '@/components/Docs/UI-Blocks/ProgressOverviewList/ProgressOverviewListItems'
import ScheduledPaymentsListItems from '@/components/Docs/UI-Blocks/ScheduledPaymentsList/ScheduledPaymentsListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "React Payment List & Billing Dashboard | React Vibe",
    description:
        "Build responsive React Payment Lists and Billing Dashboards for finance apps. Perfect for payment history, bill management, payment tables, and subscription management.",
}


function ScheduledPaymentsList() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/scheduled-payments-list" withTransition>
                <ScheduledPaymentsListItems />
            </RenderOnRoute>
        </div>
    )
}

export default ScheduledPaymentsList