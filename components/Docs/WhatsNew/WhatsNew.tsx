"use client";

import React from "react";
import OrbitBorderGlobalPreview from "../Components/Orbit-Border/OrbitBorderGlobalPreview";
import LinearReveal from "@/components/LinearReveal";
import { Manrope } from "next/font/google";
import Link from "next/link";

const LinearRevealFont = Manrope({
    weight: "400",
    subsets: ["latin"],
});

const NewComponent = Manrope({
    weight: "400",
    subsets: ["latin"],
});

const LiquidGlassMicro: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">

            {/* Soft highlight blob */}
            <div
                className="
                    absolute left-1/4 top-1/2
                    w-[120px] h-[120px] rounded-full
                    -translate-x-1/2 -translate-y-1/2
                    bg-[rgba(255,255,255,0.08)]
                    blur-[30px] animate-microBlob
                "
            />

            {/* Light streak */}
            <div
                className="
                    absolute inset-0 opacity-[0.15]
                    bg-gradient-to-r from-white/20 to-transparent
                    animate-microStreak
                "
            />

        </div>
    );
};

function WhatsNew() {
    return (
        <Link href="/docs/backgrounds/shining-star">
            <div
                className="
                    relative flex items-center space-x-5
                    border border-[#2c2c2c] rounded-full
                    p-3 px-3 xl:scale-[85%] scale-[63%]
                    cursor-pointer overflow-hidden
                    backdrop-blur-xl bg-white/5
                    hover:scale-90 transition-transform duration-150 ease-in-out
                "
            >
                {/* Liquid Glass Background */}
                <LiquidGlassMicro />

                {/* Left badge */}
                <OrbitBorderGlobalPreview
                    RingColors={["#6af04f", "#ffa600", "#000000", "#ef49f2"]}
                    className="
                        rounded-full px-2 py-1 text-sm font-medium
                        bg-gradient-to-b from-[#131212] via-[#131313] to-[#131212]
                        text-white shadow-sm
                    "
                    style={{
                        boxShadow: `
                        0px 12px 40px rgba(60, 80, 180, 0.08),
                        0px 20px 60px rgba(0, 0, 0, 0.05)
                        `,
                    }}
                >
                    <LinearReveal
                        className={`${LinearRevealFont.className} text-xs`}
                        as="label"
                        text="New"
                    />
                    🎉
                </OrbitBorderGlobalPreview>
                {/* Right text */}
                <LinearReveal
                    className={`${NewComponent.className} text-[16px] cursor-pointer`}
                    as="label"
                    text="Shining Star →"
                />
            </div>
        </Link>
    );
}

export default WhatsNew;
