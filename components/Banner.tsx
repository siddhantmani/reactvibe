"use client"

const lightRingColors = ["#141414,#ffffff, #ffffff, #141414"];
const darkRingColors = ["#141414, #000000, #ffffff, #141414, #141414"];

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
    ArrowLeftRight,
    ArrowRight,
    BarChart2,
    Check,
    Copy,
    Crown,
    LayoutDashboard,
    PiggyBank,
    ShieldCheck,
    ShoppingCart,
    SquaresIntersect,
    Tag,
    TrendingUp,
    Wallet,
} from "lucide-react"

import { manrope } from "@/lib/fonts"
import { useTheme } from "./ThemeProvider";
import AnimatedGradientBadge from "./AnimatedGradientBadge";
import OrbitBorder from "./Docs/Components/Orbit-Border/OrbitBorder";

const DASHBOARDS = [
    { name: "Finance Overview", href: "/docs/dashboard-systems/finance-overview", icon: LayoutDashboard, pro: false },
    { name: "Accounts", href: "/docs/dashboard-systems/accounts", icon: Wallet, pro: true },
    { name: "Transactions", href: "/docs/dashboard-systems/transactions", icon: ArrowLeftRight, pro: true },
    { name: "Budgets", href: "/docs/dashboard-systems/budgets", icon: PiggyBank, pro: true },
    { name: "Investments", href: "/docs/dashboard-systems/investments", icon: TrendingUp, pro: true },
    { name: "Integrations", href: "/docs/dashboard-systems/integrations", icon: SquaresIntersect, pro: true },
    { name: "Reports", href: "/docs/dashboard-systems/reports", icon: BarChart2, pro: true },
]

const TEMPLATE_HREF = "/docs/templates/taskforge"
const PROMO_CODE = "TASKFORGE50"
const PRICE = 99
const OFFER_PRICE = 49
const OFFER_LABEL = "Relaunch offer"

function ProBadge({ className = "" }: { className?: string }) {
    return (
        <span
            className={`inline-flex shrink-0 items-center rounded-[5px] dark:bg-white bg-[#0c0c0c] px-1.5 py-[1px] text-[9px] font-[800] leading-[14px] tracking-[0.06em] text-white dark:text-black shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] ${className}`}
        >
            PRO
        </span>
    )
}

function Banner() {


    const { theme } = useTheme();

    const ringColors =
        theme === "dark" ? darkRingColors : lightRingColors;

    const pathname = usePathname()
    const [copied, setCopied] = useState(false)

    const currentIndex = DASHBOARDS.findIndex((d) => pathname?.startsWith(d.href))
    const current = currentIndex >= 0 ? DASHBOARDS[currentIndex] : null

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(PROMO_CODE)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch {
            // Clipboard can be blocked (e.g. insecure context); fail silently
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2, margin: "50px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className={`${manrope.className} overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 sm:p-5 transition-colors dark:border-zinc-800 dark:bg-[#0c0c0c]`}
        >
            {/* Top row: context + price/CTA */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}
                <div className="flex min-w-0 gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 dark:shadow-emerald-900/40">
                        <Crown className="size-6 fill-white" />
                    </div>

                    <div className="min-w-0">
                        <h2 className="text-[17px] font-[700] text-slate-900 dark:text-white sm:text-[19px]">
                            {current ? (
                                <>
                                    You&apos;re viewing{" "}
                                    <span className="text-emerald-600 dark:text-emerald-400">{current.name}</span>
                                    {current.pro && <ProBadge className="ml-2 align-middle" />}
                                    <span className="text-slate-400 dark:text-zinc-500">
                                        {" "}· {currentIndex + 1} of {DASHBOARDS.length} in TaskForge
                                    </span>
                                </>
                            ) : (
                                <>
                                    Part of the{" "}
                                    <span className="text-emerald-600 dark:text-emerald-400">TaskForge</span>{" "}
                                    Admin Template
                                </>
                            )}
                        </h2>

                        <p className="mt-1 text-[13px] font-[500] text-slate-600 dark:text-zinc-400 sm:text-[14px]">
                            {current && !current.pro
                                ? "This dashboard is free. Unlock 6 more Pro dashboards, 35+ UI blocks and 15+ components with TaskForge."
                                : "Get all 7 dashboards, 35+ UI blocks and 15+ production-ready components. Built with Next.js 15, TypeScript and Tailwind CSS."}
                        </p>
                    </div>
                </div>

                {/* Right: price + CTA */}
                <div className="flex shrink-0 items-center gap-8">
                    <div className="text-right">
                        <p className="text-[11px] font-[500] uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                            {OFFER_LABEL}
                        </p>
                        <p className="flex items-baseline justify-end gap-2">
                            <span className="text-[14px] text-slate-400 line-through dark:text-zinc-500">
                                ${PRICE}
                            </span>
                            <span className="text-[24px] font-[700] tracking-tight text-slate-900 dark:text-white">
                                ${OFFER_PRICE}
                            </span>
                        </p>
                    </div>

                    <Link
                        href={TEMPLATE_HREF}
                    >
                        <OrbitBorder
                            as="div"
                            rotate={0}
                            padding={1}
                            rounded={50}
                            className={`${theme === "dark"
                                ? "bg-[#141414]"
                                : "bg-white"
                                } rounded-full p-1 text-white cursor-pointer`}
                            RingColors={ringColors}
                            style={{
                                boxShadow: `
                                                             0px 12px 40px rgba(60, 80, 180, 0.08),
                                                             0px 20px 60px rgba(0, 0, 0, 0.05)
                                                         `,
                            }}
                        >
                            <button
                                type="button"
                                className="cursor-pointer"
                            >
                                <AnimatedGradientBadge
                                    duration={3}
                                    rotationDuration={7}
                                    gradients={[
                                        ["#021a07", "#1B3017", "#233D1C"],
                                        ["#000000", "#070707", "#294626"],
                                        ["#021a07", "#1A3119", "#244022"],
                                        ["#000000", "#23381F", "#070707"],
                                        ["#021a07", "#070707", "#284224"],
                                    ]}
                                    className="flex items-center gap-3 justify-center rounded-full px-3 py-3"
                                >
                                    <span className="text-[14px] text-white whitespace-nowrap">
                                        Get TaskForge
                                    </span>

                                    <ShoppingCart
                                        size={17}
                                        className="fill-white"
                                    />
                                </AnimatedGradientBadge>
                            </button>
                        </OrbitBorder>
                    </Link>

                </div>
            </div>

            {/* Dashboard switcher */}
            <nav
                aria-label="TaskForge dashboards"
                className="hide-scrollbar mt-5 flex gap-2 overflow-x-auto xl:grid xl:grid-cols-7 xl:overflow-visible"
            >
                {DASHBOARDS.map((d, i) => {
                    const Icon = d.icon
                    const isActive = i === currentIndex

                    return (
                        <Link
                            key={d.href}
                            href={d.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`group relative flex min-w-0 shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-[13px] font-[500] transition-colors ${isActive
                                ? "border-emerald-500/40 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                                : "border-zinc-200 text-slate-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-slate-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white"
                                }`}
                        >
                            <Icon size={15} className="shrink-0" />
                            <span className="truncate whitespace-nowrap">{d.name}</span>

                            {d.pro && <ProBadge className="ml-auto" />}
                        </Link>
                    )
                })}
            </nav>

            {/* Footer: promo code + trust */}
            <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4 text-[12px] text-slate-600 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    <Tag size={14} className="text-emerald-600 dark:text-emerald-400" />
                    <span>
                        <span className="font-[600] text-slate-900 dark:text-white">$50 off</span> with code
                    </span>

                    <button
                        type="button"
                        onClick={copyCode}
                        aria-label={`Copy promo code ${PROMO_CODE}`}
                        className="flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-50 px-2 py-1 font-mono text-[11px] font-[600] text-emerald-700 transition-colors hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                    >
                        {PROMO_CODE}
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                    </button>

                    <span className="text-slate-400 dark:text-zinc-500">· First 50 customers</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-500">
                    <ShieldCheck size={14} />
                    Secure payment · Instant GitHub access
                </div>
            </div>
        </motion.div>
    )
}

export default Banner