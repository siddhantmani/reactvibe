import NotificationScreenItems from '@/components/Docs/Components/NotificationScreen/NotificationScreenItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Notification Preview & iPhone Notification Screen",
    description:
        "React Notification Preview Component styled as an iPhone notification screen for showcasing push notifications, alerts, and mobile UI.",
}

function NotificationScreen() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/notification-screen" withTransition>
                <NotificationScreenItems />
            </RenderOnRoute>
        </div>
    )
}

export default NotificationScreen