import RankforgeItems from '@/components/Docs/Templates/Rankforge/RankforgeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Accounts Dashboard UI for React & Next.js | React Vibe",
    description:
        "Responsive accounts dashboard UI for React with account management, financial tracking, synced states, and activity monitoring.",
}


function Rankforge() {
    return (
        <div>
            <RenderOnRoute path="/docs/templates/rankforge" withTransition>
                <RankforgeItems />
            </RenderOnRoute>
        </div>
    )
}

export default Rankforge