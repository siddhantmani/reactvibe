import React from 'react'
import BudgetProgressList from './BudgetProgressList'
import CashflowOverviewChart from './CashflowOverviewChart'
import ExpenseBreakdownChart from './ExpenseBreakdownChart'

function FinancialInsightsGrid() {
    return (
        <div className='flex gap-3'>
            <BudgetProgressList />
            <CashflowOverviewChart />
            <ExpenseBreakdownChart />
        </div>
    )
}

export default FinancialInsightsGrid