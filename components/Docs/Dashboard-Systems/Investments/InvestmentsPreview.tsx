"use client"
import { motion } from "framer-motion"
import DashboardFrame from "@/components/DashboardFrame"

import React from 'react'
import InvestmentsDashboard from "./InvestmentsDashboard/InvestmentsDashboard"
import NavMenu from "../NavMenu"

function InvestmentsPreview() {
    return (
        <motion.div
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
            className="@xl:overflow-hidden"
        >
            <div className='@md:hidden sticky top-0 w-full z-50'>
                <NavMenu />
            </div>
            <InvestmentsDashboard />
        </motion.div >
    )
}

export default InvestmentsPreview