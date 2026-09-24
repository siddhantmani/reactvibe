"use client"


import Glow from "@/components/Docs/Components/Glow/Glow";
import { useTheme } from "@/components/ThemeProvider";
import {
    ArrowRight,
    Database,
    RefreshCw,
    Upload,
    User,
} from "lucide-react";

const stats = [
    {
        icon: RefreshCw,
        value: "12.4K",
        label: "Transactions",
        color: "text-[#72F36D]",
        bg: "bg-[#72F36D]/10",
        border: "border-[#72F36D]/15",
    },
    {
        icon: User,
        value: "8.7K",
        label: "Accounts\nUpdated",
        color: "text-[#4D8DFF]",
        bg: "bg-[#4D8DFF]/10",
        border: "border-[#4D8DFF]/15",
    },
    {
        icon: Database,
        value: "3.2K",
        label: "New Data\nPoints",
        color: "text-[#B46BFF]",
        bg: "bg-[#B46BFF]/10",
        border: "border-[#B46BFF]/15",
    },
    {
        icon: Upload,
        value: "1.1GB",
        label: "Data\nTransferred",
        color: "text-[#FFC44D]",
        bg: "bg-[#FFC44D]/10",
        border: "border-[#FFC44D]/15",
    },
];

function DataFlow() {
    const { theme } = useTheme()
    return (
        <div className=" border dark:border-[#222121] border-black/10 rounded-2xl">

            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="200px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 "
            >

                {/* Header */}
                <div>
                    <h3 className="text-[12px] text-black dark:text-white">Data Flow</h3>
                    <p className="text-[9px] text-zinc-500">
                        Data synced in the last 7 days
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-3 grid grid-cols-4 gap-5">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.label} className="flex flex-col items-start">
                                <div
                                    className={`flex p-2 items-center justify-center rounded-[7px] border ${item.bg} ${item.border}`}
                                >
                                    <Icon size={15} className={`${item.color}`} strokeWidth={2} />
                                </div>

                                <h4 className="mt-2 text-[17px] 2xl:text-[20px] text-black dark:text-white">
                                    {item.value}
                                </h4>

                                <p className="whitespace-pre-line text-[10px] 2xl:text-[11px] leading-4 text-zinc-500">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <button className="mt-3 xl:mt-5 2xl:mt-3 flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#72F36D]/20 bg-[#72F36D]/5 py-3 text-[10px] 2xl:text-[11px] dark:text-[#72F36D] text-black transition-all hover:bg-[#72F36D]/10">
                    View Data Insights
                    <ArrowRight size={12} />
                </button>
            </Glow>

        </div>
    );
}

export default DataFlow;