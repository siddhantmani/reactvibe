import AssetPerformanceTableItems from '@/components/Docs/UI-Blocks/AssetPerformanceTable/AssetPerformanceTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Asset Performance Table UI for React & Next.js | React Vibe",
    description:
        "Responsive asset performance table UI for React with portfolio tracking, investment analytics, and modern finance dashboard layouts.",
}


function AssetPerformanceTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/asset-performance-table" withTransition>
                <AssetPerformanceTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default AssetPerformanceTable