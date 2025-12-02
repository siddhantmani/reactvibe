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
        <div className={`${vertical ? "h-[23px] w-[1px]" : "w-[250px] h-[1px]"} ${className}`} />
    );
}
