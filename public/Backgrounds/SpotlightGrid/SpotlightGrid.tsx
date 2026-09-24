"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, MotionStyle } from "framer-motion";

interface SpotlightGridProps {
    className?: string;
    spotlightSize?: number;
    gap?: number;
    dotSize?: number;
    hoverDotSize?: number;
    dotColor?: string;
    hoverDotColor?: string;
}

export default function SpotlightGrid({
    className = "",
    spotlightSize = 180,
    gap = 22,
    dotSize = 1,
    hoverDotSize = 2,
    dotColor,
    hoverDotColor,
}: SpotlightGridProps) {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent) {
        if (!backgroundRef.current) return;
        const rect = backgroundRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    return (
        <div
            ref={backgroundRef}
            onMouseMove={handleMouseMove}
            className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
        >
            {/* Base Layer: Normal dots with the center spotlight mask */}
            <div
                className="absolute inset-0 
          [background-image:radial-gradient(var(--dot-color,rgba(0,0,0,0.15))_var(--dot-size),transparent_var(--dot-size))] 
          dark:[background-image:radial-gradient(var(--dot-color,rgba(255,255,255,0.3))_var(--dot-size),transparent_var(--dot-size))] 
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
                style={{
                    backgroundSize: `${gap}px ${gap}px`,
                    "--dot-size": `${dotSize}px`,
                    "--dot-color": dotColor,
                } as React.CSSProperties & { "--dot-size": string; "--dot-color"?: string }}
            />

            {/* Hover Layer: Brighter dots revealed dynamically by the cursor */}
            <motion.div
                className="absolute inset-0 
          [background-image:radial-gradient(var(--hover-dot-color,rgba(0,0,0,0.5))_var(--hover-dot-size),transparent_var(--hover-dot-size))] 
          dark:[background-image:radial-gradient(var(--hover-dot-color,rgba(255,255,255,0.9))_var(--hover-dot-size),transparent_var(--hover-dot-size))]"
                style={{
                    backgroundSize: `${gap}px ${gap}px`,
                    "--hover-dot-size": `${hoverDotSize}px`,
                    "--hover-dot-color": hoverDotColor,
                    maskImage: useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                } as MotionStyle & { "--hover-dot-size": string; "--hover-dot-color"?: string }}
            />
        </div>
    );
}