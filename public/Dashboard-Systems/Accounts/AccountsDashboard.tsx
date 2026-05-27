"use client";
import LinearReveal from "@/components/LinearReveal";
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
import { Manrope } from "next/font/google";
import AccountsHeader from "./AccountsHeader";
import AccountsMetricsGrid from "./AccountsMetricsGrid";
import AccountsManagementTable from "./AccountsManagementTable";
import AccountHealthOverview from "./AccountHealthOverview";
import RecentAccountActivity from "./RecentAccountActivity";
import InstitutionConnectionCTA from "./InstitutionConnectionCTA";

const fontBold = Manrope({
    weight: '600',
    subsets: ['latin']
});


function Sidebar() {
    const items = [
        { name: "Finance Overview", icon: <LayoutDashboard size={15} /> },
        { name: "Accounts", icon: <Wallet size={15} /> },
        { name: "Transactions", icon: <ArrowLeftRight size={15} /> },
        { name: "Budgets", icon: <PiggyBank size={15} /> },
        { name: "Investments", icon: <TrendingUp size={15} /> },
        { name: "Integrations", icon: <SquaresIntersect size={15} /> },
        { name: "Reports", icon: <BarChart2 size={15} /> },
    ];

    return (
        <div className="w-64 h-full bg-[#F9FAF6] backdrop-blur-4xl relative p-3 px-3 rounded-tl-[15px] rounded-bl-4xl overflow-hidden">
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
                    Text="Accounts"
                    className={`${fontBold.className} text-black font-bold text-lg`}
                />
            </motion.div>

            <nav className="space-y-2 pt-2">
                {items.map((item, i) => (
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
                        key={i}
                        className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer ${item.name === "Accounts"
                            ? "hover:bg-[#CEF5B1] text-black/90"
                            : "hover:bg-[#CEF5B1] text-black/50"
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </motion.div>
                ))}
            </nav>

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
                className="rounded-[15px] absolute bottom-0 right-0 scale-[90%] overflow-hidden bg-gradient-to-br from-[#015c46] via-[#01684e] to-[#014536] p-4 w-full">

                {/* Background glow circles */}
                <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-black/10 rounded-full blur-2xl" />

                {/* Cards */}
                <div className="relative flex justify-center items-center mt-1 mb-3 h-[100px]">

                    {/* Back card */}
                    <div className="absolute left-[58px] top-[4px] w-[82px] h-[58px] rounded-[12px] bg-[#f5f5f5] shadow-xl rotate-[-12deg] p-3">
                        <div className="w-[10px] h-[10px] rounded-[3px] bg-[#b98a3f]" />
                        <div className="mt-4 space-y-1">
                            <div className="w-[35px] h-[3px] bg-[#d9d9d9] rounded-full" />
                            <div className="w-[25px] h-[3px] bg-[#e8e8e8] rounded-full" />
                        </div>
                    </div>

                    {/* Front card */}
                    <div className="absolute right-[50px] top-[18px] w-[92px] h-[62px] rounded-[12px] bg-gradient-to-br from-[#8cff8d] to-[#5fb96d] shadow-2xl rotate-[10deg] p-3">
                        <div className="w-[10px] h-[10px] rounded-[3px] bg-[#b98a3f]" />

                        <div className="mt-4 flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="w-[40px] h-[3px] bg-white/80 rounded-full" />
                                <div className="w-[28px] h-[3px] bg-white/60 rounded-full" />
                            </div>

                            <div className="flex gap-1">
                                <div className="w-[7px] h-[7px] rounded-full bg-white/70" />
                                <div className="w-[7px] h-[7px] rounded-full bg-white/40" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="relative text-center text-white space-y-1 w-full">
                    <h1 className="text-[18px leading-tight">
                        Upgrade to Premium
                    </h1>

                    <p className="text-[12px] text-white/90 leading-[2] mt-1 px-3">
                        Unlock advanced insights and custom reports.
                    </p>
                    <div className="w-full mt-6 px-14 rounded-[10px] bg-[#cbf3a7] p-0 py-4 text-[16px] font-semibold text-[#000000]">
                        Upgrade Now
                    </div>
                </div>

            </motion.div>
        </div>
    )
}


function AccountsDashboard() {
    return (
        <div className='flex justify-center'>
            <div>
                <Sidebar />
            </div>
            <div className=" bg-[#f8f8f8] border border-black/5 px-2 py-2 rounded-br-2xl rounded-tr-2xl space-y-3 max-w-7xl">
                <AccountsHeader />
                <AccountsMetricsGrid />
                <div className="grid grid-cols-2 gap-2">
                    <div className="grid grid-cols-1 gap-2">
                        <AccountsManagementTable />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <AccountHealthOverview />
                        <RecentAccountActivity />
                        <InstitutionConnectionCTA />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccountsDashboard