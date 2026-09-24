"use client"
import DashboardFrame from "@/components/DashboardFrame"
import { motion } from "framer-motion"
import BudgetsDashboard from "./BudgetsDashboard/BudgetsDashboard"
import NavMenu from "../NavMenu"


function BudgetsPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="@xl:overflow-hidden"
        >
            <div className='@md:hidden sticky top-0 w-full z-50'>
                <NavMenu />
            </div>
            <BudgetsDashboard />
        </motion.div>
    )
}

export default BudgetsPreview