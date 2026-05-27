import AlertNotificationListItems from '@/components/Docs/UI-Blocks/AlertNotificationList/AlertNotificationListItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Alert Notification List UI for React & Next.js | React Vibe",
    description:
        "Responsive alert notification list UI for React with budget alerts, status updates, and modern SaaS dashboard layouts.",
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