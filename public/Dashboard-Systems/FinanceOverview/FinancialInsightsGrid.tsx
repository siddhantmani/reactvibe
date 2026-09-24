import BudgetProgressList from "./BudgetProgressList"
import CashflowOverviewChart from "./CashflowOverviewChart"
import ExpenseBreakdownChart from "./ExpenseBreakdownChart"


function FinancialInsightsGrid() {
    return (
        <div className='grid grid-cols-1 xl:flex xl:flex-row gap-3'>
            <BudgetProgressList />
            <CashflowOverviewChart />
            <ExpenseBreakdownChart />
        </div>
    )
}

export default FinancialInsightsGrid