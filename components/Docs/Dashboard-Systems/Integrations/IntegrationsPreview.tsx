"use client"
import { motion } from "framer-motion"

import DashboardFrame from "@/components/DashboardFrame"
import IntegrationsDashboard from "./IntegrationsDashboard/IntegrationsDashboard"
import NavMenu from "../NavMenu"

function IntegrationsPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
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
            className="@xl:overflow-hidden"
        >
            <div className='@md:hidden sticky top-0 w-full z-50'>
                <NavMenu />
            </div>
            <IntegrationsDashboard />
        </motion.div >
    )
}

export default IntegrationsPreview