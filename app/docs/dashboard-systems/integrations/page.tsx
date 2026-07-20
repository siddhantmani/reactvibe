import IntegrationsItems from '@/components/Docs/Dashboard-Systems/Integrations/IntegrationsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Connected Apps & Integration Dashboard | React Vibe",
    description:
        "Build responsive React Connected Apps Dashboards with Integration Management Dashboards, API Integrations Dashboards, Connected Accounts Dashboards, and sync monitoring.",
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