import EntityManagementTableItems from '@/components/Docs/UI-Blocks/EntityManagementTable/EntityManagementTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Entity Management Table | React Vibe",
    description:
        "Build a responsive React Entity Management Table for admin dashboards. Perfect for account management, user management, filtering, sorting, and responsive data tables.",
}


function EntityManagementTable() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/entity-management-table" withTransition>
                <EntityManagementTableItems />
            </RenderOnRoute>
        </div>
    )
}

export default EntityManagementTable