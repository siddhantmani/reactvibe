import InvestmentsItems from '@/components/Docs/Dashboard-Systems/Investments/InvestmentsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Investment Dashboard UI for React & Next.js | React Vibe",
    description:
        "Modern investment dashboard UI for React with portfolio tracking, holdings tables, market insights, and responsive fintech layouts.",
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