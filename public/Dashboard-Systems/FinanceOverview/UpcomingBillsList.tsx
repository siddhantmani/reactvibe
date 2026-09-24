"use client"

import { Manrope } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";
import Glow from "@/components/Docs/Components/Glow/Glow";
import { useTheme } from "@/components/ThemeProvider";

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
            className={`pb-2 ${!last ? "border-b border-black/8 dark:border-white/10 mb-4" : ""
                }`}
        >

            <div className="flex items-start justify-between gap-4">

                {/* Left */}
                <div>
                    <h3 className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}>
                        {title}
                    </h3>


                    <LinearReveal
                        as="p"
                        delay={0.3}
                        Text={`${date}`}
                        className={`${boldFont.className} text-[8px] text-[#4b5563] dark:text-white/60`}
                    />
                </div>

                {/* Amount */}
                <LinearReveal
                    as="p"
                    delay={0.4}
                    Text={`${amount}`}
                    className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}
                />
            </div>
        </div>
    );
}

function UpcomingBillsList() {
    const { theme } = useTheme();

    return (
        <div className="w-full xl:max-w-[200px] rounded-2xl border dark:border-[#222121] border-black/10">

            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 h-full "
            >

                {/* Header */}
                <div className="flex items-center justify-between mb-10">

                    <h1 className={`${boldFont.className} text-[11px] text-[#111827] dark:text-white`}>
                        Upcoming Bills
                    </h1>

                    <button className={`${boldFont.className} text-[11px] text-[#006b46] dark:text-[#5ED19B] hover:opacity-80 transition-opacity`}>
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
            </Glow>

        </div>
    );
}

export default UpcomingBillsList;