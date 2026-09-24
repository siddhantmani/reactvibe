"use client";

import {
    ArrowRight,
    BadgeCheck,
} from "lucide-react"
import { manrope } from "@/lib/fonts";
import { useTheme } from "@/components/ThemeProvider";
import Glow from "@/components/Docs/Components/Glow/Glow";

const activities = [
    {
        name: "Stripe",
        description: "Payment data synced",
        time: "2 min ago",
        logo: "S",
        logoBg: "bg-[#635BFF]/15",
        logoColor: "text-[#7A73FF]",
    },
    {
        name: "Xero",
        description: "Bank transactions updated",
        time: "5 min ago",
        logo: "X",
        logoBg: "bg-[#13B5EA]/15",
        logoColor: "text-[#35C8FF]",
    },
    {
        name: "Slack",
        description: "Expense alerts enabled",
        time: "15 min ago",
        logo: "#",
        logoBg: "bg-[#E879F9]/15",
        logoColor: "text-[#F0A5FF]",
    },
    {
        name: "Google Analytics",
        description: "Data import completed",
        time: "30 min ago",
        logo: "G",
        logoBg: "bg-[#F59E0B]/15",
        logoColor: "text-[#FFB547]",
    },
]

function IntegrationActivityFeed() {
    const { theme } = useTheme()
    return (
        <div className=" z-10 border dark:border-[#222121] border-black/10 rounded-2xl">
            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0b631f"
                glowSize="220px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4"
            >

                {/* Top */}
                <div className="flex items-center justify-between">

                    <h2 className={`${manrope.className} text-[12px] text-black dark:text-white`}>
                        Recent Activity
                    </h2>

                    <button className={`${manrope.className} flex items-center gap-2 text-[12px] text-[#8FE26A] transition-all duration-300 hover:gap-3`}>
                        View All Activity

                        <ArrowRight size={13} />
                    </button>
                </div>

                {/* Activities */}
                <div className="mt-4 grid gap-2 grid-cols-2 @xl:grid-cols-4">

                    {activities.map((item) => (
                        <div
                            key={item.name}
                            className="group py-10 flex items-start gap-4 rounded-[10px] border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02] pl-5 transition-all duration-300 hover:border-black/10 hover:bg-black/[0.04] dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                        >

                            {/* Logo */}
                            <div
                                className={`flex h-5 w-5 2@xl:w-7 2@xl:h-7 shrink-0 items-center justify-center rounded-[5px] border border-black/10 dark:border-white/10 ${item.logoBg}`}
                            >

                                <span
                                    className={`text-[15px]  font-bold ${item.logoColor}`}
                                >
                                    {item.logo}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="flex-1">

                                <div className="flex items-center gap-2">

                                    <h3 className={`${manrope.className} text-[12px] 2@xl:text-[16px] text-black dark:text-white`}>
                                        {item.name}
                                    </h3>

                                    <BadgeCheck
                                        size={12}
                                        className="text-[#8FE26A]"
                                        strokeWidth={2.3}
                                    />

                                </div>

                                <p className={`${manrope.className} mt-1 text-[10px] 2@xl:text-[12px] text-black/45 dark:text-white/45`}>
                                    {item.description}
                                </p>

                                <p className={`${manrope.className} mt-3 text-[10px] 2@xl:text-[11px] text-black/30 dark:text-white/30`}>
                                    {item.time}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </Glow>
        </div>

    )
}

export default IntegrationActivityFeed