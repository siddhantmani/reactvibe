"use client";
import { motion } from "framer-motion"

import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    PiggyBank,
    TrendingUp,
    BarChart2,
    SquaresIntersect,
} from "lucide-react";

import { Manrope } from 'next/font/google'
import LinearReveal from "@/public/Text-Motion/LinearReveal/LinearReveal";
import FinanceOverviewHeader from "./FinanceOverviewHeader";
import FinancialMetricsGrid from "./FinancialMetricsGrid";
import FinancialInsightsGrid from "./FinancialInsightsGrid";
import FinancialActivityGrid from "./FinancialActivityGrid";
import FinanceOverviewFooter from "./FinanceOverviewFooter";
import Separator from "@/components/Docs/Separator";
import Link from "next/link";
import ManageAccount from "./ManageAccount";


const fontBold = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});

function Sidebar() {
    const items = [
        { name: "Finance Overview", icon: <LayoutDashboard size={15} />, link: "#" },
        { name: "Accounts", icon: <Wallet size={15} />, link: "#" },
        { name: "Transactions", icon: <ArrowLeftRight size={15} />, link: "#" },
        { name: "Budgets", icon: <PiggyBank size={15} />, link: "#" },
        { name: "Investments", icon: <TrendingUp size={15} />, link: "#" },
        { name: "Integrations", icon: <SquaresIntersect size={15} />, link: "#" },
        { name: "Reports", icon: <BarChart2 size={15} />, link: "#" },
    ];

    return (
        <div className="h-full w-full flex flex-col bg-[#F9FAF6] dark:bg-[#070606] backdrop-blur-4xl relative p-3 px-3 rounded-tl-[15px] rounded-bl-4xl">
            <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
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
                className="flex justify-between items-center mb-5"
            >
                <LinearReveal
                    as='h1'
                    Text="Taskforge"
                    className={`${fontBold.className} text-black dark:text-white font-bold text-lg px-3`}
                />
            </motion.div>

            <nav className="space-y-2">
                {items.map((item, i) => (
                    <Link
                        key={i}
                        href={item.link || "#"}
                        className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer transition-colors ${item.name === "Finance Overview"
                            ? "text-black dark:text-white"
                            : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="absolute bottom-2 w-full">
                <ManageAccount />
            </div>
        </div>
    )
}

function FinanceOverview() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
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
            className='flex h-screen overflow-hidden'
        >
            <div className="flex h-full md:w-50 lg:w-60 z-50">
                <Sidebar />
                <Separator
                    direction="vertical"
                    className="bg-black/30 dark:bg-white/20 h-full"
                />
            </div>
            <div className="mt-16 md:mt-0 flex-1 bg-[#f8f8f8] dark:bg-[#070606] border border-black/5 px-2 py-2 rounded-br-2xl rounded-tr-2xl space-y-3 w-full mx-auto overflow-y-auto h-full ">
                <FinanceOverviewHeader />
                <FinancialMetricsGrid />
                <FinancialInsightsGrid />
                <FinancialActivityGrid />
                <FinanceOverviewFooter />
            </div>
        </motion.div>
    )
}

export default FinanceOverview