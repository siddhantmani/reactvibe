"use client"
import { motion } from "framer-motion"

import React from "react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});


const transactions = [
    {
        date: "May 20, 2024",
        description: "Salary - May",
        category: "Income",
        amount: "+$5,200.00",
        status: "Completed",
        positive: true,
        categoryColor: "bg-[#dff7e3] text-[#15803d]",
    },
    {
        date: "May 19, 2024",
        description: "Grocery Store",
        category: "Food",
        amount: "-$87.64",
        status: "Completed",
        positive: false,
        categoryColor: "bg-[#fff1cf] text-[#b7791f]",
    },
    {
        date: "May 18, 2024",
        description: "Netflix Subscription",
        category: "Entertainment",
        amount: "-$15.99",
        status: "Completed",
        positive: false,
        categoryColor: "bg-[#efe4ff] text-[#7c3aed]",
    },
    {
        date: "May 17, 2024",
        description: "Uber Ride",
        category: "Transport",
        amount: "-$24.50",
        status: "Completed",
        positive: false,
        categoryColor: "bg-[#e3f1ff] text-[#2563eb]",
    },
    {
        date: "May 16, 2024",
        description: "Freelance Project",
        category: "Income",
        amount: "+$320.00",
        status: "Completed",
        positive: true,
        categoryColor: "bg-[#dff7e3] text-[#15803d]",
    },
];

interface TransactionRowProps {
    date: string;
    description: string;
    category: string;
    amount: string;
    status: string;
    positive: boolean;
    categoryColor: string;
}
function TransactionRow({
    date,
    description,
    category,
    amount,
    status,
    positive,
    categoryColor,
}: TransactionRowProps) {
    return (
        <div className="grid grid-cols-[1.2fr_1.7fr_1.4fr_1.2fr_1fr] items-center gap-2 py-1">

            {/* Date */}



            <LinearReveal
                as='p'
                delay={0.3}
                Text={`${date}`}
                className={`${boldFont.className} whitespace-nowrap text-[9px] text-[#4b5563]`}
            />

            {/* Description */}
            <p className={`${boldFont.className} text-[10px] text-[#111827]`}>
                {description}
            </p>

            {/* Category */}
            <div>
                <span
                    className={`${boldFont.className} inline-flex items-center rounded-[5px] px-[5px] py-[3px] text-[9px] ${categoryColor}`}
                >
                    {category}
                </span>
            </div>

            {/* Amount */}

            <LinearReveal
                as='p'
                delay={0.5}
                Text={`${amount}`}
                className={`${boldFont.className} text-[10px] ${positive
                    ? "text-[#16a34a]"
                    : "text-[#ef4444]"
                    }`}
            />



            {/* Status */}
            <div>
                <span className={`${boldFont.className} inline-flex items-center rounded-[5px] bg-[#dff7e3] px-[5px] py-[3px] text-[9px] text-[#15803d]`}>
                    {status}
                </span>
            </div>
        </div>
    );
}

function TransactionTablePreview() {
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
            className="w-full rounded-[15px] border border-black/10 p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-x-auto bg-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">

                <h1 className={`${boldFont.className} text-[11px] text-[#111827]`}>
                    Transaction Table
                </h1>

                <button className={`${boldFont.className} text-[11px] text-[#006b46] hover:opacity-80 transition-opacity`}>
                    View All
                </button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.7fr_1.4fr_1.2fr_1fr] gap-6 border-b border-black/8 pb-5">

                {["Date", "Description", "Category", "Amount", "Status"].map(
                    (item) => (
                        <p
                            key={item}
                            className={`${boldFont.className} text-[10px] text-[#4b5563]`}
                        >
                            {item}
                        </p>
                    )
                )}
            </div>

            {/* Rows */}
            <div className="divide-y divide-black/5">
                {transactions.map((transaction, index) => (
                    <TransactionRow
                        key={index}
                        {...transaction}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default TransactionTablePreview;