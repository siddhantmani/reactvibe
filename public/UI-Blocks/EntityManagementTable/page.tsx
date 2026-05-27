"use client"

import { motion } from "framer-motion"

import React from "react"
import {
    ChevronDown,
    EllipsisVertical,
    Plus,
} from "lucide-react"
import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const accounts = [
    {
        bank: "Chase Checking",
        subtitle: "Checking Account •••• 4521",
        type: "Cash",
        typeColor: "bg-[#EAF8EC] text-[#1F9D47]",
        balance: "$4,250.00",
        logo: "C",
        logoBg: "bg-[#0057B8]",
    },
    {
        bank: "Bank of America Savings",
        subtitle: "Savings Account •••• 7890",
        type: "Cash",
        typeColor: "bg-[#EAF8EC] text-[#1F9D47]",
        balance: "$8,200.00",
        logo: "B",
        logoBg: "bg-[#E11D48]",
    },
    {
        bank: "Wells Fargo Credit Card",
        subtitle: "Credit Card •••• 1234",
        type: "Credit Card",
        typeColor: "bg-[#F2E9FF] text-[#8B5CF6]",
        balance: "-$2,450.00",
        logo: "W",
        logoBg: "bg-[#B91C1C]",
    },
    {
        bank: "AMEX Platinum",
        subtitle: "Credit Card •••• 5678",
        type: "Credit Card",
        typeColor: "bg-[#F2E9FF] text-[#8B5CF6]",
        balance: "-$1,930.00",
        logo: "A",
        logoBg: "bg-[#2563EB]",
    },
    {
        bank: "Robinhood Brokerage",
        subtitle: "Investment •••• 2468",
        type: "Investment",
        typeColor: "bg-[#E8F0FF] text-[#2563EB]",
        balance: "$5,240.00",
        logo: "R",
        logoBg: "bg-[#16A34A]",
    },
    {
        bank: "Vanguard IRA",
        subtitle: "Retirement •••• 1357",
        type: "Investment",
        typeColor: "bg-[#E8F0FF] text-[#2563EB]",
        balance: "$2,180.00",
        logo: "V",
        logoBg: "bg-[#DC2626]",
    },
    {
        bank: "PayPal Wallet",
        subtitle: "Digital Wallet •••• 8642",
        type: "Cash",
        typeColor: "bg-[#EAF8EC] text-[#1F9D47]",
        balance: "$320.00",
        logo: "P",
        logoBg: "bg-[#1D4ED8]",
    },
]

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});

function Page() {

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
            className="rounded-[15px] border border-black/10 bg-white p-2 px-2 aspect-video">

            {/* Top */}
            <div className="flex items-center justify-between">

                <h2 className={`${boldFont.className} text-[14px] text-[#111827] px-2`}>
                    Entity Management Table
                </h2>

                <div className="flex items-center gap-3">

                    {/* Filter */}
                    <button className={`${boldFont.className} flex items-center gap-2 rounded-[8px] border border-black/10 bg-white px-2 py-2 text-[11px] font-medium text-[#374151] transition-all duration-300 hover:bg-black/[0.02]`}>

                        All Accounts

                        <ChevronDown
                            size={16}
                            strokeWidth={2.2}
                        />

                    </button>

                    {/* Sort */}
                    <button className={`${boldFont.className} flex items-center gap-2 rounded-[8px] border border-black/10 bg-white px-2 py-2 text-[11px] font-medium text-[#374151] transition-all duration-300 hover:bg-black/[0.02]`}>

                        Sort by: Balance

                        <ChevronDown
                            size={16}
                            strokeWidth={2.2}
                        />

                    </button>

                </div>

            </div>

            {/* Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-black/5">

                {/* Header */}
                <div className="grid grid-cols-[2.3fr_1fr_1fr_1fr_50px] items-center border-b border-black/5 bg-[#FAFAFA] px-6 py-4">

                    <p className={`${boldFont.className} text-[13px] text-[#6B7280]`}>
                        Account
                    </p>

                    <p className={`${boldFont.className} text-[13px] text-[#6B7280]`}>
                        Type
                    </p>

                    <p className={`${boldFont.className} text-[13px] text-[#6B7280]`}>
                        Balance
                    </p>

                    <p className={`${boldFont.className} text-[13px] text-[#6B7280]`}>
                        Status
                    </p>

                </div>

                {/* Rows */}
                {accounts.map((account, index) => (

                    <div
                        key={index}
                        className="grid grid-cols-[2.3fr_1fr_1fr_1fr_50px] items-center border-b border-black/5 px-6 py-5 transition-all duration-300 hover:bg-black/[0.015]"
                    >

                        {/* Account */}
                        <div className="flex items-center gap-4">

                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[18px] font-bold text-white ${account.logoBg}`}
                            >
                                {account.logo}
                            </div>

                            <div>

                                <h3 className={`${boldFont.className} text-[13px] text-[#111827]`}>
                                    {account.bank}
                                </h3>

                                <p className={`${boldFont.className} text-[10px] text-[#6B7280]`}>
                                    {account.subtitle}
                                </p>

                            </div>

                        </div>

                        {/* Type */}
                        <div>

                            <span
                                className={`${boldFont.className} rounded-[6px] px-2 py-1 text-[11px] ${account.typeColor}`}
                            >
                                {account.type}
                            </span>

                        </div>

                        {/* Balance */}
                        <div>

                            <LinearReveal
                                as='p'
                                delay={0.2}
                                Text={account.balance}
                                className={`${boldFont.className} text-[14px] ${account.balance.includes("-")
                                    ? "text-[#DC2626]"
                                    : "text-[#111827]"
                                    }`}
                            />



                        </div>

                        {/* Status */}
                        <div>

                            <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#EAF8EC] px-2 py-1">

                                <div className="h-2 w-2 rounded-[5px] bg-[#22C55E]" />

                                <span className={`${boldFont.className} text-[11px] text-[#1F9D47]`}>
                                    Synced
                                </span>

                            </div>

                        </div>

                        {/* Menu */}
                        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-[#9CA3AF] transition-all duration-300 hover:bg-black/[0.04] hover:text-[#111827]">

                            <EllipsisVertical
                                size={18}
                                strokeWidth={2.3}
                            />

                        </button>

                    </div>

                ))}

                {/* Footer */}
                <div className="p-4">

                    <button className={`${boldFont.className} flex h-[56px] w-full items-center justify-center gap-2 rounded-[10px] border border-dashed border-[#22C55E]/30 bg-[#22C55E]/[0.03] text-[14px] font-semibold text-[#16A34A] transition-all duration-300 hover:bg-[#22C55E]/[0.06]`}>

                        <Plus
                            size={18}
                            strokeWidth={2.5}
                        />

                        Add Account

                    </button>

                </div>

            </div>

        </motion.div>
    )
}

export default Page