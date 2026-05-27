"use client"

import React from "react"
import {
    Building2,
    ArrowRight,
} from "lucide-react"
import { Manrope } from "next/font/google";
import { BsBank } from "react-icons/bs";

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});


function InstitutionConnectionCTA() {

    return (
        <div className="rounded-[15px] border border-black/10 bg-white p-3 px-3 aspect-auto">

            <div className="flex items-center justify-between gap-6">

                {/* Left Side */}
                <div className="flex-1">

                    <h2 className={`${boldFont.className} text-[15px] text-[#111827]`}>
                        Need Help Connecting?
                    </h2>

                    <p className={`${boldFont.className} mt-2 text-[12px] text-[#6B7280]`}>
                        We support 12,000+ financial institutions.
                    </p>

                    {/* Button */}
                    <button className={`${boldFont.className} mt-6 flex items-center gap-3 rounded-[7px] border border-black/10 bg-white px-3 py-2 text-[12px]  text-[#111827] transition-all duration-300 hover:bg-black/[0.03] hover:gap-4`}>

                        <Building2
                            size={18}
                            strokeWidth={2.3}
                        />

                        Browse All Institutions

                        <ArrowRight
                            size={16}
                            strokeWidth={2.5}
                            className="text-[#6B7280]"
                        />

                    </button>

                </div>

                {/* Right Side */}
                <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full bg-[#F3F8F2]">

                    <div className="flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)]">

                        <BsBank
                            size={50}
                            className="text-[#9CA3AF]"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default InstitutionConnectionCTA