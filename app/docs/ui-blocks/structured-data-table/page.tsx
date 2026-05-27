import StructuredDataTableItems from '@/components/Docs/UI-Blocks/StructuredDataTable/StructuredDataTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Budget Data Table UI for React & Next.js| React Vibe",
    description:
        "Responsive budget data table UI for React with expense tracking, progress indicators, and modern finance dashboard layouts.",
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