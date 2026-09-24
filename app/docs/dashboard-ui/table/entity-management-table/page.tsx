
import EntityManagementTableItems from '@/components/Docs/Dashboard-UI/Table/EntityManagementTable/EntityManagementTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Entity Management Table | React Vibe",
    description:
        "Build a React Entity Management Table for admin dashboards. Perfect for account management, user management, filtering, sorting, and responsive data tables.",
}


function EntityManagementTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/dashboard-ui/table/entity-management-table" withTransition>
                <EntityManagementTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default EntityManagementTable