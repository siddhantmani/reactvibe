
import AssetPerformanceTableItems from '@/components/Docs/Dashboard-UI/Table/AssetPerformanceTable/AssetPerformanceTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Portfolio & Asset Table | React Vibe",
    description:
        "Build React Portfolio and Asset Tables for investment dashboards.Perfect for Portfolio Holdings Tables, Asset Performance Tables, and portfolio tracking.",
}


function AssetPerformanceTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/table/asset-performance-table" withTransition>
                <AssetPerformanceTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default AssetPerformanceTable