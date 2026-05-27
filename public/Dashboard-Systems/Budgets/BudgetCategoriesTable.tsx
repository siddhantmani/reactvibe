"use client"

import React from "react"
import {
    Ellipsis,
    Plus,
    Home,
    UtensilsCrossed,
    Car,
    ShoppingBag,
    Clapperboard,
    Heart,
    MoreHorizontal,
} from "lucide-react"
import { Manrope } from "next/font/google";

const fontBold = Manrope({
    weight: '500', // Specify the font weight if needed  
    subsets: ['latin']
});


const categories = [
    {
        name: "Housing",
        icon: Home,
        iconBg: "bg-[#EAF8EC]",
        iconColor: "text-[#16A34A]",
        budgeted: "$2,000.00",
        spent: "$1,872.00",
        remaining: "$128.00",
        progress: 94,
        status: "On Track",
        danger: false,
    },
    {
        name: "Food & Dining",
        icon: UtensilsCrossed,
        iconBg: "bg-[#EAF8EC]",
        iconColor: "text-[#16A34A]",
        budgeted: "$1,200.00",
        spent: "$936.00",
        remaining: "$264.00",
        progress: 78,
        status: "On Track",
        danger: false,
    },
    {
        name: "Transport",
        icon: Car,
        iconBg: "bg-[#E8F0FF]",
        iconColor: "text-[#2563EB]",
        budgeted: "$800.00",
        spent: "$702.00",
        remaining: "$98.00",
        progress: 88,
        status: "On Track",
        danger: false,
    },
    {
        name: "Shopping",
        icon: ShoppingBag,
        iconBg: "bg-[#F2E9FF]",
        iconColor: "text-[#8B5CF6]",
        budgeted: "$600.00",
        spent: "$468.00",
        remaining: "$132.00",
        progress: 78,
        status: "On Track",
        danger: false,
    },
    {
        name: "Entertainment",
        icon: Clapperboard,
        iconBg: "bg-[#FEF3C7]",
        iconColor: "text-[#F59E0B]",
        budgeted: "$400.00",
        spent: "$374.00",
        remaining: "$26.00",
        progress: 94,
        status: "On Track",
        danger: false,
    },
    {
        name: "Health & Fitness",
        icon: Heart,
        iconBg: "bg-[#FEE2E2]",
        iconColor: "text-[#EF4444]",
        budgeted: "$300.00",
        spent: "$320.50",
        remaining: "-$20.50",
        progress: 107,
        status: "Over Budget",
        danger: true,
    },
    {
        name: "Others",
        icon: MoreHorizontal,
        iconBg: "bg-[#F3F4F6]",
        iconColor: "text-[#6B7280]",
        budgeted: "$3,150.00",
        spent: "$1,888.50",
        remaining: "$1,261.50",
        progress: 60,
        status: "On Track",
        danger: false,
    },
]

interface PercentageProgressProps {
    value?: number;
    color?: string;
    bg?: string;
}

function PercentageProgress({
    value = 6,
    color = "#16a34a",
    bg,
}: PercentageProgressProps) {
    const [progress, setProgress] = React.useState(0);
    const [displayProgress, setDisplayProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 400);
        return () => clearTimeout(timer);
    }, [value]);

    React.useEffect(() => {
        if (progress === 0) return;

        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);

            setDisplayProgress(Math.round(eased * progress));

            if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [progress]);

    return (
        <div className="space-y-2">
            <p
                className={`${fontBold.className} text-[12px]`}
                style={{ color }}
            >
                {displayProgress}%
            </p>

            {/* <ProgressBar value={66} color="#000000" /> */}

            <div className="relative w-full h-[6px] bg-black/5 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-[1100ms]"
                    style={{
                        width: `${Math.min(progress, 100)}%`,
                        background: color,
                    }}
                />
            </div>
        </div>
    );
}


function BudgetCategoriesTable() {

    return (
        <div className="rounded-[15px] border border-black/10 bg-white p-3 px-3 aspect-video">

            {/* Heading */}
            <div>

                <h2 className={`${fontBold.className} text-[14px] text-[#111827]`}>
                    Budget Categories
                </h2>

            </div>

            {/* Table */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">

                {/* Header */}
                <div className="grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.4fr_1.2fr_50px] items-center border-b border-black/5 bg-[#FAFAFA] px-6 py-4">

                    {[
                        "Category",
                        "Budgeted",
                        "Spent",
                        "Remaining",
                        "Progress",
                        "Status",
                    ].map((item) => (
                        <p
                            key={item}
                            className={`${fontBold.className} text-[13px] text-[#6B7280]`}
                        >
                            {item}
                        </p>
                    ))}

                </div>

                {/* Rows */}
                {categories.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.4fr_1.2fr_50px] items-center border-b border-black/5 px-6 py-2 transition-all duration-300 hover:bg-black/[0.015]"
                        >

                            {/* Category */}
                            <div className="flex items-center gap-4">

                                <div
                                    className={`flex h-6 w-6 items-center justify-center rounded-[4px] ${item.iconBg}`}
                                >

                                    <Icon
                                        size={13}
                                        className={item.iconColor}
                                        strokeWidth={2.2}
                                    />

                                </div>

                                <h3 className={`${fontBold.className} text-[12px] text-[#111827]`}>
                                    {item.name}
                                </h3>

                            </div>

                            {/* Budgeted */}
                            <p className={`${fontBold.className} text-[12px] text-[#111827]`}>
                                {item.budgeted}
                            </p>

                            {/* Spent */}
                            <p className={`${fontBold.className} text-[12px] text-[#111827]`}>
                                {item.spent}
                            </p>

                            {/* Remaining */}
                            <p
                                className={`${fontBold.className} text-[12px] text-[#111827] ${item.danger
                                    ? "text-[#EF4444]"
                                    : "text-[#111827]"
                                    }`}
                            >
                                {item.remaining}
                            </p>

                            {/* Progress */}
                            {/* Progress */}
                            <div className="flex items-center gap-3 w-full">

                                <span className="w-[70px]">
                                    <PercentageProgress
                                        value={item.progress}
                                        color={item.danger ? "#EF4444" : "#16A34A"}
                                    />
                                </span>

                            </div>

                            {/* Status */}
                            <div>

                                <span
                                    className={`${fontBold.className} rounded-[4px] px-1 py-1 text-[12px] whitespace-nowrap ${item.danger
                                        ? "bg-[#FEE2E2] text-[#EF4444]"
                                        : "bg-[#EAF8EC] text-[#16A34A]"
                                        }`}
                                >
                                    {item.status}
                                </span>

                            </div>

                            {/* Menu */}
                            <button className="flex h-10 w-10 items-center justify-center rounded-xl text-[#9CA3AF] transition-all duration-300 hover:bg-black/[0.04] hover:text-[#111827]">

                                <Ellipsis
                                    size={18}
                                    strokeWidth={2.4}
                                />

                            </button>

                        </div>
                    )
                })}

                {/* Footer */}
                <div className="p-4">

                    <button className={`${fontBold.className} flex h-10 w-full items-center justify-center gap-2 rounded-[8px] border border-dashed border-[#22C55E]/30 bg-[#22C55E]/[0.03] text-[13px] font-semibold text-[#16A34A] transition-all duration-300 hover:bg-[#22C55E]/[0.06]`}>

                        <Plus
                            size={14}
                            strokeWidth={2.5}
                        />

                        Add Budget Category

                    </button>

                </div>

            </div>

        </div>
    )
}

export default BudgetCategoriesTable