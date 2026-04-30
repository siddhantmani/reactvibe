// components/DashboardScaler.tsx
import { useEffect, useRef } from "react";

interface DashboardScalerProps {
    children: React.ReactNode;
}

export default function DashboardScaler({ children }: DashboardScalerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 900;

    useEffect(() => {
        const scaleDashboard = () => {
            if (!ref.current) return;

            const scaleX = window.innerWidth / BASE_WIDTH;
            const scaleY = window.innerHeight / BASE_HEIGHT;
            const scale = Math.min(scaleX, scaleY);

            ref.current.style.transform = `scale(${scale})`;
        };

        scaleDashboard();
        window.addEventListener("resize", scaleDashboard);

        return () => window.removeEventListener("resize", scaleDashboard);
    }, []);

    return (
        <div className="overflow-hidden">
            <div
                ref={ref}
                className="origin-top-left"
                style={{
                    width: BASE_WIDTH,
                    height: BASE_HEIGHT,
                }}
            >
                {children}
            </div>
        </div>
    );
}
