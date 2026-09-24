import InvestmentsItems from '@/components/Docs/Dashboard-Systems/Investments/InvestmentsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Investment & Portfolio Dashboard | React Vibe",
    description:
        "Build responsive React Investment Dashboards with Investment Dashboard Templates, Portfolio Tracking and Analytics Dashboards, and holdings management.",
}

function Investments() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-systems/investments" withTransition>
                <InvestmentsItems />
            </RenderOnRoute>
        </div>
    )
}

export default Investments