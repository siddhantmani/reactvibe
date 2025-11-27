"use client";

import React from "react";

interface SeparatorProps {
    orientation?: "vertical" | "horizontal";
    className?: string;
}

export default function Separator({
    orientation = "vertical",
    className,
}: SeparatorProps) {
    const vertical = orientation === "vertical";

    return (
        <div
            className={`${vertical ? "h-[23px] w-[1px]" : "w-[250px] h-[1px]"} ${className}`}
        />
    );
}
