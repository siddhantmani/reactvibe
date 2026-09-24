"use client";
import { motion } from "framer-motion"

import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    PiggyBank,
    Target,
    TrendingUp,
    Receipt,
    BarChart2,
    Settings,
    SquaresIntersect,
} from "lucide-react";

import Image from 'next/image'
import { Manrope } from 'next/font/google'
import LinearReveal from "@/components/LinearReveal";
import InvestmentsHeader from "./InvestmentsHeader";
import InvestmentsMetricsGrid from "./InvestmentsMetricsGrid";
import PortfolioPerformanceChart from "./PortfolioPerformanceChart";
import InvestmentsExpenseBreakdown from "./InvestmentsExpenseBreakdown";
import InvestmentHoldingsTable from "./InvestmentHoldingsTable";
import InvestmentInsightsCard from "./InvestmentInsightsCard";
import InvestmentTransactionsList from "./InvestmentTransactionsList";
import MarketUpdateCard from "./MarketUpdateCard";
import Link from "next/link";
import Separator from "@/components/Docs/Separator";
import ManageAccount from "../../ManageAccount";
import MetricsGrid from "../../MetricsGrid";
import DashboardHeader from "../../DashboardHeader";

const fontBold = Manrope({
    weight: '600',
    subsets: ['latin']
});

function Sidebar() {
    const items = [
        { name: "Finance Overview", icon: <LayoutDashboard size={15} />, link: "/docs/dashboard-systems/finance-overview" },
        { name: "Accounts", icon: <Wallet size={15} />, link: "/docs/dashboard-systems/accounts" },
        { name: "Transactions", icon: <ArrowLeftRight size={15} />, link: "/docs/dashboard-systems/transactions" },
        { name: "Budgets", icon: <PiggyBank size={15} />, link: "/docs/dashboard-systems/budgets" },
        { name: "Investments", icon: <TrendingUp size={15} />, link: "/docs/dashboard-systems/investments" },
        { name: "Integrations", icon: <SquaresIntersect size={15} />, link: "/docs/dashboard-systems/integrations" },
        { name: "Reports", icon: <BarChart2 size={15} />, link: "/docs/dashboard-systems/reports" },
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
                        className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer transition-colors ${item.name === "Investments"
                            ? "text-black dark:text-white"
                            : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="w-full mt-auto pt-2">
                <ManageAccount />
            </div>
        </div>
    )
}


function InvestmentsDashboard() {
    return (
        <div className='flex h-[990px]'>
            <div className="flex z-50 @md:max-w-[33%] @xl:max-w-[17%] w-full hidden @md:flex sticky top-0 h-full h-screen">
                <Sidebar />
                <Separator
                    direction="vertical"
                    className="bg-black/12 dark:bg-white/12 shrink-0"
                />
            </div>
            <div className="@md:mt-0 bg-[#f8f8f8] dark:bg-[#070606] border border-black/5 px-2 py-2 rounded-br-2xl rounded-tr-2xl space-y-3 w-full mx-auto overflow-y-auto h-full hide-scrollbar ">
                <DashboardHeader />
                <MetricsGrid />
                <div className="grid grid-cols-1 @xl:grid-cols-2 gap-2">
                    <PortfolioPerformanceChart />
                    <InvestmentsExpenseBreakdown />
                </div>
                <div className="flex flex-col @xl:flex-row gap-2">
                    <div className="grid grid-cols-1 xl:max-w-5xl 2xl:max-w-6xl w-full">
                        <InvestmentHoldingsTable />
                    </div>
                    <div className="grid grid-cols-1 gap-2 xl:max-w-md w-full">
                        <InvestmentInsightsCard />
                        <InvestmentTransactionsList />
                        <MarketUpdateCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentsDashboard