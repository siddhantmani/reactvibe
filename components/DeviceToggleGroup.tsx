"use client";

import React from "react";
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { PiDeviceTabletSpeaker } from "react-icons/pi";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface DeviceToggleGroupProps {
    /** The current width of the canvas to highlight the active button */
    activeWidth: number;
    /** Function to call when a device button is clicked */
    onWidthChange: (width: number) => void;
    /** Optional standard Tailwind classes */
    className?: string;
}

export default function DeviceToggleGroup({
    activeWidth,
    onWidthChange,
    className = "",
}: DeviceToggleGroupProps) {
    return (
        // TooltipProvider is added here just in case the user doesn't have it wrapped at the root
        <TooltipProvider>
            <div className={`flex items-center border rounded-md divide-x bg-white dark:bg-[#0b0b0b] dark:border-gray-800 dark:divide-gray-800 ${className}`}>
                {/* Desktop */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => onWidthChange(1440)}
                            className={`p-2 transition ${activeWidth >= 1440 ? "bg-muted text-primary" : "hover:bg-muted text-muted-foreground"
                                }`}
                        >
                            <CiDesktop size={20} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Desktop (1440px)</TooltipContent>
                </Tooltip>

                {/* Tablet */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => onWidthChange(1055)}
                            className={`p-2 transition ${activeWidth === 1055
                                ? "bg-muted text-primary"
                                : "hover:bg-muted text-muted-foreground"
                                }`}
                        >
                            <PiDeviceTabletSpeaker size={20} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Tablet (768px)</TooltipContent>
                </Tooltip>

                {/* Mobile */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => onWidthChange(390)}
                            className={`p-2 transition ${activeWidth < 768 ? "bg-muted text-primary" : "hover:bg-muted text-muted-foreground"
                                }`}
                        >
                            <CiMobile3 size={20} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Mobile (320px)</TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}