"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightBackgroundProps {
    /** Optional standard Tailwind classes to apply to the wrapper */
    className?: string;
    /** How wide the hover spotlight should be (in pixels) */
    spotlightSize?: number;
}

export default function SpotlightBackground({
    className = "",
    spotlightSize = 180,
}: SpotlightBackgroundProps) {
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
            {/* Base Layer: Normal 1px dots with the center spotlight mask */}
            <div
                className="absolute inset-0 
          [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] 
          dark:[background-image:radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] 
          [background-size:22px_22px] 
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
            />

            {/* Hover Layer: 2px bigger/brighter dots revealed dynamically by the cursor */}
            <motion.div
                className="absolute inset-0 
          [background-image:radial-gradient(rgba(0,0,0,0.5)_2px,transparent_2px)] 
          dark:[background-image:radial-gradient(rgba(255,255,255,0.9)_2px,transparent_2px)] 
          [background-size:22px_22px]"
                style={{
                    maskImage: useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
            />
        </div>
    );
}