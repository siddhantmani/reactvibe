
"use client";

import React from "react";

interface SeparatorProps {
    direction?: "vertical" | "horizontal";
    className?: string;
}

export default function Separator({
    direction = "vertical",
    className = "",
}: SeparatorProps) {
    const vertical = direction === "vertical";

    return (
        <div
            aria-hidden="true"
            className={`shrink-0 ${vertical
                ? "w-px h-6"
                : "w-full h-px"
                } ${className}`}
        />
    );
}
