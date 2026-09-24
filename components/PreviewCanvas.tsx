"use client";

import { useEffect, useRef, useState } from "react";

// Extracting magic numbers to constants improves maintainability
const VIRTUAL_WIDTH = 1280;
const VIRTUAL_HEIGHT = 720;

export function PreviewCanvas({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.28);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const observer = new ResizeObserver((entries) => {
            // Clear any pending animation frames to prevent state update pile-ups
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            // Throttle state updates to sync exactly with the browser's refresh rate
            animationFrameId = requestAnimationFrame(() => {
                const { width } = entries[0].contentRect;
                setScale(width / VIRTUAL_WIDTH);
            });
        });

        observer.observe(container);

        return () => {
            observer.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-auto hide-scrollbar rounded-xl">
            <div
                className="absolute left-0 top-0 origin-top-left pointer-events-none"
                style={{
                    width: VIRTUAL_WIDTH,
                    height: VIRTUAL_HEIGHT,
                    transform: `scale(${scale})`,
                    willChange: "transform",
                }}
            >
                {children}
            </div>
        </div>
    );
}