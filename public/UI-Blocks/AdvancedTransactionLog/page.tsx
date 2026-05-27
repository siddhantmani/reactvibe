import DashboardFrame from '@/public/DashboardFrame'
import React from 'react'
import AdvancedTransactionLog from './AdvancedTransactionLog'

function Page() {
    return (
        <div>
            <DashboardFrame>
                <AdvancedTransactionLog />
            </DashboardFrame>
        </div>
    )
}

export default Page