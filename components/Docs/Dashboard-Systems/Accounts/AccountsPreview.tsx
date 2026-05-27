"use client"
import { motion } from "framer-motion"

import DashboardFrame from '@/components/DashboardFrame'
import React from 'react'
import AccountsDashboard from './AccountsDashboard/AccountsDashboard'

function AccountsPreview() {
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
            exit={{ opacity: 0, y: -10 }}
        >
            <DashboardFrame>
                <AccountsDashboard />
            </DashboardFrame>
        </motion.div>
    )
}

export default AccountsPreview