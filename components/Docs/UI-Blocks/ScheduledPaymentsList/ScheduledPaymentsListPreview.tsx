"use client"
import { motion } from "framer-motion"

import React from "react";

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const boldFont = Manrope({
    weight: "600",
    subsets: ["latin"],
});


const bills = [
    {
        title: "Electricity Bill",
        amount: "$120.00",
        date: "May 25, 2024",
    },
    {
        title: "Internet Bill",
        amount: "$60.00",
        date: "May 28, 2024",
    },
    {
        title: "Credit Card",
        amount: "$350.00",
        date: "Jun 01, 2024",
    },
];

interface BillItemProps {
    title: string;
    amount: string;
    date: string;
    last: boolean;
}

function BillItem({ title, amount, date, last }: BillItemProps) {
    return (
        <div
            className={`pb-2 ${!last ? "border-b border-black/8 mb-4" : ""
                }`}
        >

            <div className="flex items-start justify-between gap-4">

                {/* Left */}
                <div>
                    <h3 className={`${boldFont.className} text-[11px] text-[#111827]`}>
                        {title}
                    </h3>


                    <LinearReveal
                        as='p'
                        delay={0.3}
                        Text={`${date}`}
                        className={`${boldFont.className} text-[8px] text-[#4b5563] `}
                    />
                </div>

                {/* Amount */}


                <LinearReveal
                    as='p'
                    delay={0.4}
                    Text={`${amount}`}
                    className={`${boldFont.className} text-[11px] text-[#111827]`}
                />
            </div>
        </div>
    );
}

function ScheduledPaymentsListPreview() {
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
            className="w-full rounded-[15px] border border-black/10 bg-white p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">

                <h1 className={`${boldFont.className} text-[11px] text-[#111827]`}>
                    Scheduled Payments List
                </h1>

                <button className={`${boldFont.className} text-[11px] text-[#006b46] hover:opacity-80 transition-opacity`}>
                    View All
                </button>
            </div>

            {/* Bills */}
            <div>
                {bills.map((bill, index) => (
                    <BillItem
                        key={index}
                        title={bill.title}
                        amount={bill.amount}
                        date={bill.date}
                        last={index === bills.length - 1}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default ScheduledPaymentsListPreview;