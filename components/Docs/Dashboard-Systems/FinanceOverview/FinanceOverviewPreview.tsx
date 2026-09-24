"use client"
import { motion } from "framer-motion"
import FinanceOverviewDashboard from './FinanceOverviewDashboard/FinanceOverviewDashboard'
import FinanceOverviewNavMenu from "../NavMenu"


function FinanceOverviewPreview() {
    return (
        <motion.div className='@xl:overflow-hidden pt-10'
            initial={{ opacity: 0, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
        >
            <div className='@md:hidden fixed top-0 w-full z-50'>
                <FinanceOverviewNavMenu />
            </div>
            <FinanceOverviewDashboard />
        </motion.div>
    )
}

export default FinanceOverviewPreview