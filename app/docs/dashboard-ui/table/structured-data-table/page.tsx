import StructuredDataTableItems from '@/components/Docs/Dashboard-UI/Table/StructuredDataTable/StructuredDataTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget Tracking Table for React | React Vibe",
    description:
        "Build Budget Tracking Tables for React dashboards. Perfect for Expense Tracking Tables, Finance Dashboard, Budget Management, and financial planning table.",
}


function StructuredDataTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/table/structured-data-table" withTransition>
                <StructuredDataTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default StructuredDataTable