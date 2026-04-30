"use client"

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface GlowProps {
    backgroundColor: string;
    glowColor: string;
    glowSize: string;
    glowOpacity?: number;
    glowFadeAt?: string;
    borderGlow: boolean;
    borderGlowColor: string;
    borderGlowSize: string;
    borderGlowTransparency: string;
    className: string;
    children: React.ReactNode;

}

export default function UsingGlow({
    backgroundColor,
    glowColor,
    glowSize,
    glowOpacity = 1,
    glowFadeAt,
    borderGlow,
    borderGlowColor,
    borderGlowSize,
    borderGlowTransparency,
    className,
    children,
}: GlowProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    function hexOrRgbWithOpacity(color: string, opacity: number): string {
     
        if (color.startsWith("rgba")) {
            return color.replace(/[\d.]+\)$/, `${opacity})`);
        }
      
        if (color.startsWith("rgb")) {
            return color.replace("rgb(", "rgba(").replace(")", `, ${opacity})`);
        }
  
        const hex = color.replace("#", "");
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    const glowBackground = useTransform(
        [mouseX, mouseY],
        ([x, y]: number[]) => {
       
            const color = hexOrRgbWithOpacity(glowColor, glowOpacity);
            return `radial-gradient(${glowSize} circle at ${x}px ${y}px, ${color}, transparent ${glowFadeAt})`;
        }
    );
    const borderBackground = useTransform(
        [mouseX, mouseY],
        ([x, y]: number[]) => {
            if (!cardRef.current) return "transparent";
            const rect = cardRef.current.getBoundingClientRect();
            const xPct = (x / rect.width) * 100;
            const yPct = (y / rect.height) * 100;
            return `radial-gradient(${borderGlowSize} circle at ${xPct}% ${yPct}%, ${borderGlowColor}, transparent ${borderGlowTransparency})`;
        }
    );

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            style={{ backgroundColor }}
            className={`relative overflow-hidden rounded-2xl border border-white/[0.08] ${className}`}
        >
        
            <motion.div
                style={{ background: glowBackground }}
                className="absolute inset-0 pointer-events-none"
            />

       
            {borderGlow && (
                <motion.div
                    style={{
                        background: borderBackground,
                        WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskClip: "border-box",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                    className="absolute inset-0 pointer-events-none border border-transparent"
                />
            )}

       
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}