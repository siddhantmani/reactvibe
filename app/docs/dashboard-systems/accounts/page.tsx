import AccountsItems from '@/components/Docs/Dashboard-Systems/Accounts/AccountsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Accounts Dashboard UI for React & Next.js | React Vibe",
    description:
        "Responsive accounts dashboard UI for React with account management, financial tracking, synced states, and activity monitoring.",
}

function Accounts() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/accounts" withTransition>
                <AccountsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Accounts