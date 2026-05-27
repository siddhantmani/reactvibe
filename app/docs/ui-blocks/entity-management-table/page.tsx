import EntityManagementTableItems from '@/components/Docs/UI-Blocks/EntityManagementTable/EntityManagementTableItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Entity Management Table UI for React & Next.js | React Vibe",
    description:
        "Responsive entity management table UI for React with account management, status tracking, and modern SaaS dashboard layouts.",
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