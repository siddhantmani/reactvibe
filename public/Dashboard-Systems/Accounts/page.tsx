"use client"

import DashboardFrame from '@/public/DashboardFrame'
import React from 'react'
import AccountsDashboard from './AccountsDashboard'

import { motion } from "framer-motion"

function Page() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
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
            <DashboardFrame>
                <AccountsDashboard />
            </DashboardFrame>
        </motion.div>
    )
}

export default Page