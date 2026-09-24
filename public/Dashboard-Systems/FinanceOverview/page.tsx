import FinanceOverview from "./FinanceOverview"
import OverlayFinanceMenu from "./OverlayFinanceMenu"

function Page() {
    return (
        <div className='dark:bg-[#0c0c0c] xl:overflow-hidden'>
            <div className='md:hidden fixed top-0 w-full z-50'>
                <OverlayFinanceMenu />
            </div>
            <div>
                <FinanceOverview />
            </div>
        </div>
    )
}

export default Page