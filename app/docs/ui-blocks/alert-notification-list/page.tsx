import AlertNotificationListItems from '@/components/Docs/UI-Blocks/AlertNotificationList/AlertNotificationListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard Alert List for React | React Vibe",
    description:
        "Build responsive Dashboard Alert Lists for React. Perfect for Dashboard Notification Lists, Budget Alert Lists, Expense Alert Lists, and Finance Alert Dashboards.",
}


function AlertNotificationList() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/alert-notification-list" withTransition>
                <AlertNotificationListItems />
            </RenderOnRoute>
        </div>
    )
}

export default AlertNotificationList