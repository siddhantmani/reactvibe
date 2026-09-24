"use client";

import React from "react";

interface SeparatorProps {
    direction?: "vertical" | "horizontal";
    className?: string;
}

export default function Separator({
    direction = "vertical",
    className,
}: SeparatorProps) {
    const vertical = direction === "vertical";

    return (
        <div
            className={`${vertical ? "w-[1px] h-full" : "w-full h-[1px]"} ${className}`}
        />
    );
}
