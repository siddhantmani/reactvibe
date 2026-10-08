import React from 'react'
import UpcomingBillsList from './UpcomingBillsList'
import RecentTransactionsTable from './RecentTransactionsTable'
import FinancialGoalsProgress from './FinancialGoalsProgress'

function FinancialActivityGrid() {
    return (
        <div
            className="
                grid
                grid-cols-1
                @lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                @2xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,2fr)]
                gap-3
            "
        >
            <div className="min-w-0 *:h-full">
                <UpcomingBillsList />
            </div>

            {/* Full-width first row from lg, middle column at 2xl */}
            <div className="min-w-0 *:h-full @lg:col-span-2 @lg:order-first @2xl:col-span-1 @2xl:order-none">
                <RecentTransactionsTable />
            </div>

            <div className="min-w-0 *:h-full">
                <FinancialGoalsProgress />
            </div>
        </div>
    )
}

export default FinancialActivityGrid