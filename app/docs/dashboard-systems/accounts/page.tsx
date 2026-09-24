import AccountsItems from '@/components/Docs/Dashboard-Systems/Accounts/AccountsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Account & Banking Dashboard | React Vibe",
    description:
        "Build React account and banking dashboards with account overview, linked accounts, balances, transactions, and financial health UI. Free and customizable."
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