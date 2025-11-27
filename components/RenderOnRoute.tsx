"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface RenderOnRouteProps {
    path: string;
    children: ReactNode;
    withTransition?: boolean;
}

export default function RenderOnRoute({
    path,
    children,
    withTransition = false,
}: RenderOnRouteProps) {
    const pathname = usePathname();
    const isActive = pathname === path;

    if (!withTransition) {
        return isActive ? <>{children}</> : null;
    }

    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <motion.div
                    key={path}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ height: "100%" }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
