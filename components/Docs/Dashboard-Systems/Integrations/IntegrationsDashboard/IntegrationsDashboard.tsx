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
    Plus,
    RefreshCw,
} from "lucide-react";

import Image from 'next/image'
import { Manrope } from 'next/font/google'

import LinearReveal from "@/components/LinearReveal";
import IntegrationsHeader from "./IntegrationsHeader";
import IntegrationsMetricsGrid from "./IntegrationsMetricsGrid";
import PerformanceOverviewChart from "./PerformanceOverviewChart";
import IntegrationActivityFeed from "./IntegrationActivityFeed";
import Separator from "@/components/Docs/Separator";
import Link from "next/link";
import ManageAccount from "../../ManageAccount";
import DashboardHeader from "../../DashboardHeader";
import { manrope } from "@/lib/fonts";
import { useTheme } from "@/components/ThemeProvider";
import SyncStatus from "./SyncStatus";
import DataFlow from "./DataFlow";

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
                        className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer transition-colors ${item.name === "Integrations"
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


function IntegrationsDashboard() {
    const { theme } = useTheme();
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
                <Separator
                    direction="horizontal"
                    className="dark:bg-white/10 bg-black/10 w-full mt-2"
                />
                <div className="flex justify-end py-2 items-center gap-4">

                    {/* Sync Status */}
                    <div className="flex items-center gap-2">
                        <div className="h-[7px] w-[7px] rounded-full bg-[#8FE26A] shadow-[0_0_10px_rgba(143,226,106,0.9)]" />

                        <p className={`${manrope.className} text-[10px] 2@xl:text-[12px] text-black/45 dark:text-white/45`}>
                            Last synced: 2 min ago
                        </p>
                    </div>

                    {/* Refresh Button */}
                    <button className="flex p-1 items-center justify-center rounded-[6px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-black/70 dark:text-white/70  transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
                        <RefreshCw size={13} strokeWidth={2} />
                    </button>

                </div>
                <IntegrationsMetricsGrid />
                <div className="flex flex-col @xl:flex-row w-full gap-2 p-2">
                    <div className="grid grid-cols-1 w-full @xl:max-w-3xl 2@xl:max-w-6xl">
                        <PerformanceOverviewChart />
                    </div>
                    <div className="grid grid-cols-1 w-full @xl:max-w-lg gap-1">
                        <SyncStatus />
                        <DataFlow />
                    </div>
                </div>
                <IntegrationActivityFeed />
            </div>
        </div>
    )
}

export default IntegrationsDashboard