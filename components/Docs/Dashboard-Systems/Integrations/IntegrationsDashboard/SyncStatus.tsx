"use client"


import LinearReveal from "@/components/LinearReveal";
import { useTheme } from "@/components/ThemeProvider";
import { manrope } from "@/lib/fonts";
import Glow from "@/public/Components/Glow/Glow";

const expenses = [
    {
        title: "Healthy",
        percentage: 80,
        amount: "$1,872",
        color: "#007a4d",
    },
    {
        title: "Warning",
        percentage: 50,
        amount: "$936",
        color: "#fca903",
    },
    {
        title: "Failed",
        percentage: 5,
        amount: "$702",
        color: "#fc031c",
    },
];

function DonutChart() {
    const radius = 95;
    const stroke = 42;
    const circumference = 2 * Math.PI * radius;

    const segments = expenses.reduce<{ item: typeof expenses[0]; dash: number; offset: number }[]>(
        (acc, item) => {
            const dash = (item.percentage / 100) * circumference;
            const prevOffset = acc.length > 0 ? acc[acc.length - 1].offset + acc[acc.length - 1].dash : 0;
            acc.push({ item, dash, offset: prevOffset });
            return acc;
        },
        []
    );

    return (
        <div className="relative">

            <svg viewBox="0 0 280 280" className="-rotate-90 w-56 h-56">
                {segments.map(({ item, dash, offset }, index) => (
                    <circle
                        key={index}
                        cx="140"
                        cy="140"
                        r={radius}
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth={stroke}
                        strokeDasharray={`${dash} ${circumference}`}
                        strokeDashoffset={-offset}
                        strokeLinecap="butt"
                        className="transition-all duration-1000"
                    />
                ))}
            </svg>

            {/* Center */}
            <div className="absolute inset-0 -left-0 flex flex-col items-center justify-center">


                <LinearReveal
                    as='h2'
                    delay={0.4}
                    Text="99%"
                    className={`${manrope.className} text-[30px] dark:text-[#ffffff] text-black`}
                />
                <p className={`${manrope.className} text-[11px] dark:text-[#ffffff] text-black`}>
                    Success Rate
                </p>

            </div>
        </div>
    );
}

interface ExpenseItemProps {
    title: string;
    percentage: number;
    amount: string;
    color: string;
}

function ExpenseItem({ title, percentage, amount, color }: ExpenseItemProps) {
    return (
        <div className="flex items-center justify-between @lg:gap-20 @2xl:gap-12">

            {/* Left */}
            <div className="flex items-center gap-2">

                <div
                    className="w-2 h-2 rounded-full"
                    style={{
                        background: color,
                    }}
                />

                <p className={`${manrope.className} text-[11px] dark:text-[#ffffff] text-black`}>
                    {title}
                </p>
            </div>

            {/* Percentage */}
            <p className={`${manrope.className} text-[11px] dark:text-[#ffffff] text-black text-right`}>
                {percentage}%
            </p>

            {/* Amount */}
            <p className={`${manrope.className} text-[11px] dark:text-[#ffffff] text-black text-right`}>
                {amount}
            </p>
        </div>
    );
}

function SyncStatus() {
    const { theme } = useTheme()
    return (
        <div className="border dark:border-[#222121] border-black/10 rounded-2xl">
            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="280px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 "
            >


                {/* Header */}
                <h1 className={`${manrope.className} text-[12px] dark:text-[#ffffff] text-black`}>
                    Sync Status
                </h1>

                {/* Content */}
                <div className="flex flex-col @md:flex-row @md:justify-between gap-3">

                    {/* Donut Chart */}
                    <div className="flex items-center justify-center">
                        <DonutChart />
                    </div>

                    {/* Expense List */}
                    <div className="">

                        <div className="space-y-6">
                            {expenses.map((item, index) => (
                                <ExpenseItem
                                    key={index}
                                    title={item.title}
                                    percentage={item.percentage}
                                    amount={item.amount}
                                    color={item.color}
                                />
                            ))}
                        </div>
                        <div className="pt-15">
                            <button className="text-[11px] text-[#007a4d] p-2 px-6 border border-[#007a4d] rounded-sm">
                                View sync logs ↗
                            </button>
                        </div>
                    </div>
                </div>
            </Glow>

        </div>
    );
}

export default SyncStatus;