"use client";

import React from "react";
import { Check, Copy, Tag } from "lucide-react";
import { toast } from "sonner";

import { manrope } from "@/lib/fonts";

const COUPON_CODE = "RANKFORGE50";

function RankforgeCoupon() {
    const [copied, setCopied] = React.useState(false);

    const copyCoupon = async () => {
        try {
            await navigator.clipboard.writeText(COUPON_CODE);

            setCopied(true);
            toast.success("Copied!");

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy coupon:", error);
            toast.error("Failed to copy coupon");
        }
    };

    return (
        <div
            className={`${manrope.className} mt-3 flex items-start gap-2 text-sm`}
        >
            {/* Icon */}
            <Tag
                size={14}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-green-400"
            />

            {/* Offer Content */}
            <div className="flex flex-col gap-1">
                {/* Main Offer */}
                <span className="font-[400] text-neutral-400">
                    RankForge Launch Offer —{" "}
                    <span className="font-[600] text-black dark:text-white">
                        Get RankForge for $49
                    </span>
                </span>

                {/* Coupon */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-[400] text-neutral-400">
                        Get{" "}
                        <span className="font-[600] text-black dark:text-white">
                            $50 off
                        </span>{" "}
                        with code
                    </span>

                    <button
                        type="button"
                        onClick={copyCoupon}
                        aria-label={`Copy coupon code ${COUPON_CODE}`}
                        className="group inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/5 px-2.5 py-1 font-mono text-xs text-green-400 transition-all duration-200 hover:border-green-500/40 hover:bg-green-500/10 active:scale-[0.97]"
                    >
                        <span>{COUPON_CODE}</span>

                        {copied ? (
                            <Check
                                size={13}
                                strokeWidth={2}
                                className="text-green-400"
                            />
                        ) : (
                            <Copy
                                size={13}
                                strokeWidth={1.8}
                                className="text-neutral-500 transition-colors group-hover:text-green-400"
                            />
                        )}
                    </button>

                    <span className="text-xs text-neutral-500">
                        · First 50 customers
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RankforgeCoupon