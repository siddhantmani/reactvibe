import IntegrationsItems from '@/components/Docs/Dashboard-Systems/Integrations/IntegrationsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Integrations Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern integrations dashboard UI for React with sync analytics, connected apps, activity tracking, and responsive SaaS layouts.",
}

function Integrations() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/integrations" withTransition>
                <IntegrationsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Integrations