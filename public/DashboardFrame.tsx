"use client"

import { useEffect, useRef, useState } from "react";

interface DashboardFrameProps {
    children: React.ReactNode;
}

export default function DashboardFrame({ children }: DashboardFrameProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const BASE_WIDTH = 1440; // match your dashboard's natural rendered width

    const [scale, setScale] = useState(1);
    const [naturalHeight, setNaturalHeight] = useState(0);

    useEffect(() => {
        const updateScale = () => {
            if (!containerRef.current || !innerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const newScale = Math.min(containerWidth / BASE_WIDTH, 1);

            // Measure the inner content's REAL height at scale=1
            const contentHeight = innerRef.current.scrollHeight;

            setScale(newScale);
            setNaturalHeight(contentHeight);
        };

        // Use ResizeObserver on inner content to catch height changes too
        const ro = new ResizeObserver(updateScale);
        if (containerRef.current) ro.observe(containerRef.current);
        if (innerRef.current) ro.observe(innerRef.current);

        updateScale();

        return () => ro.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full mx-auto max-w-fit"
            style={{
                // outer wrapper shrinks to the scaled height so no gap/clip
                height: naturalHeight * scale,
            }}
        >
            <div
                ref={innerRef}
                style={{
                    width: BASE_WIDTH,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                }}
            >
                {children}
            </div>
        </div>
    );
}