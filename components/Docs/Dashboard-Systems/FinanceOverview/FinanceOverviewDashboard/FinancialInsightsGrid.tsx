import React from 'react'
import BudgetProgressList from './BudgetProgressList'
import CashflowOverviewChart from './CashflowOverviewChart'
import ExpenseBreakdownChart from './ExpenseBreakdownChart'

function FinancialInsightsGrid() {
    return (
        <div
            className="
                grid
                grid-cols-1
                @lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                @xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,2fr)]
                gap-3
            "
        >
            <div className="min-w-0 *:h-full">
                <BudgetProgressList />
            </div>

            {/* Full-width first row at lg, middle column at xl */}
            <div className="min-w-0 *:h-full @lg:col-span-2 @lg:order-first @xl:col-span-1 @xl:order-none">
                <CashflowOverviewChart />
            </div>

            <div className="min-w-0 *:h-full">
                <ExpenseBreakdownChart />
            </div>
        </div>
    )
}

export default FinancialInsightsGrid