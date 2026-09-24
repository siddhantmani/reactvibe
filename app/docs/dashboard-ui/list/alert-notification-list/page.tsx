
import AlertNotificationListItems from '@/components/Docs/Dashboard-UI/List/AlertNotificationList/AlertNotificationListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard Alert List for React | React Vibe",
    description:
        "Build Dashboard Alert Lists for React. Perfect for Dashboard Notification Lists, Budget Alert Lists, Expense Alert Lists, and Finance Alert Dashboards.",
}

function AlertNotificationList() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/list/alert-notification-list" withTransition>
                <AlertNotificationListItems />
            </RenderOnRoute>
        </div>
    )
}

export default AlertNotificationList