import ProgressOverviewListItems from '@/components/Docs/UI-Blocks/ProgressOverviewList/ProgressOverviewListItems'
import ScheduledPaymentsListItems from '@/components/Docs/UI-Blocks/ScheduledPaymentsList/ScheduledPaymentsListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "Scheduled Payments List UI for React & Next.js | React Vibe",
    description:
        "Responsive scheduled payments list UI for React with billing tracking, payment reminders, and clean finance dashboard layouts.",
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