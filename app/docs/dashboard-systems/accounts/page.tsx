import AccountsItems from '@/components/Docs/Dashboard-Systems/Accounts/AccountsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Account & Banking Dashboard | React Vibe",
    description:
        "Build responsive React Account Dashboards and React Banking Dashboards with Account Dashboard Templates, Linked Accounts Dashboards, and Account Health Dashboards.",
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