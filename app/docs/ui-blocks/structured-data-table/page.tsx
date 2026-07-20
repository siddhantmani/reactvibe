import StructuredDataTableItems from '@/components/Docs/UI-Blocks/StructuredDataTable/StructuredDataTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget Tracking Table for React | React Vibe",
    description:
        "Build responsive Budget Tracking Tables for React dashboards. Perfect for Expense Tracking Tables, Finance Dashboard Tables, Budget Management Tables, and financial planning.",
}


function StructuredDataTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/structured-data-table" withTransition>
                <StructuredDataTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default StructuredDataTable