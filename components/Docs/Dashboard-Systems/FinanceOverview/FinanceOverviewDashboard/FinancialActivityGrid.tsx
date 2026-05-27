import React from 'react'
import UpcomingBillsList from './UpcomingBillsList'
import RecentTransactionsTable from './RecentTransactionsTable'
import FinancialGoalsProgress from './FinancialGoalsProgress'

function FinancialActivityGrid() {
    return (
        <div className='flex gap-3'>
            <UpcomingBillsList />
            <RecentTransactionsTable />
            <FinancialGoalsProgress />
        </div>
    )
}

export default FinancialActivityGrid