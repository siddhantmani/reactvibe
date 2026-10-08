"use client";

import React from "react";

import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { PiDeviceTabletSpeaker } from "react-icons/pi";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

import { PREVIEW_WIDTHS } from "./previewBreakpoints";



interface DeviceToggleGroupProps {
    activeWidth: number;
    onWidthChange: (width: number) => void;
    className?: string;
}

export default function DeviceToggleGroup({
    activeWidth,
    onWidthChange,
    className = "",
}: DeviceToggleGroupProps) {
    return (
        <TooltipProvider>
            <div
                className={`
                    flex
                    items-center
                    border
                    rounded-md
                    divide-x
                    bg-white
                    dark:bg-[#0b0b0b]
                    dark:border-gray-800
                    dark:divide-gray-800
                    ${className}
                `}
            >
                {/* Desktop */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() =>
                                onWidthChange(
                                    PREVIEW_WIDTHS.desktop
                                )
                            }
                            className={`
                                p-2
                                transition
                                ${activeWidth ===
                                    PREVIEW_WIDTHS.desktop
                                    ? "bg-muted text-primary"
                                    : "hover:bg-muted text-muted-foreground"
                                }
                            `}
                        >
                            <CiDesktop size={20} />
                        </button>
                    </TooltipTrigger>

                    <TooltipContent>
                        Desktop (1440px)
                    </TooltipContent>
                </Tooltip>

                {/* Tablet */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() =>
                                onWidthChange(
                                    PREVIEW_WIDTHS.tablet
                                )
                            }
                            className={`
                                p-2
                                transition
                                ${activeWidth ===
                                    PREVIEW_WIDTHS.tablet
                                    ? "bg-muted text-primary"
                                    : "hover:bg-muted text-muted-foreground"
                                }
                            `}
                        >
                            <PiDeviceTabletSpeaker size={20} />
                        </button>
                    </TooltipTrigger>

                    <TooltipContent>
                        Tablet (768px)
                    </TooltipContent>
                </Tooltip>

                {/* Mobile */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() =>
                                onWidthChange(
                                    PREVIEW_WIDTHS.mobile
                                )
                            }
                            className={`
                                p-2
                                transition
                                ${activeWidth ===
                                    PREVIEW_WIDTHS.mobile
                                    ? "bg-muted text-primary"
                                    : "hover:bg-muted text-muted-foreground"
                                }
                            `}
                        >
                            <CiMobile3 size={20} />
                        </button>
                    </TooltipTrigger>

                    <TooltipContent>
                        Mobile (390px)
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}