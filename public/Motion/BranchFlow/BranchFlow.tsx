"use client";

// Helper component for the corner bracket styling seen in the image
const NodeBrackets = () => (
    <>
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gray-400 dark:border-gray-500 transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gray-400 dark:border-gray-500 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-gray-400 dark:border-gray-500 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gray-400 dark:border-gray-500 transition-colors duration-300" />
    </>
);

const bottomIntegrationNodes = [
    { id: "app1", color: "#ec4899", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg> },
    { id: "app2", color: "#16a34a", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-7.5a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0v-3z" /></svg> },
    { id: "app3", color: "#ea580c", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" /></svg> },
    { id: "app4", color: "#eab308", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.022 19.818a5.9847 5.9847 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.7378-7.0968zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944z" /></svg> },
    { id: "app5", color: "#b45309", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" /></svg> },
    { id: "app6", color: "#f97316", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.22 1.75-.61 2.51l2.6 1.5c.65-1.21 1.01-2.58 1.01-4.01 0-4.66-3.56-8.5-8-8.95zM9 5.08V2.05C4.56 2.5 1 6.34 1 11c0 1.43.36 2.8 1.01 4.01l2.6-1.5C4.22 12.75 4 11.9 4 11c0-3.53 2.61-6.43 6-6.92zM12 19c-2.09 0-3.95-.91-5.23-2.35l-2.2 2.2C6.18 20.48 8.93 21.5 12 21.5s5.82-1.02 7.43-2.65l-2.2-2.2C15.95 18.09 14.09 19 12 19z" /></svg> },
    { id: "app7", color: "#0284c7", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9 11.5c0 .828-.672 1.5-1.5 1.5S6 12.328 6 11.5 6.672 10 7.5 10 9 10.672 9 11.5zm4 4.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" /></svg> },
];

export interface BranchFlowProps {
    curve?: number;
    topGap?: number;
    bottomGap?: number;
    curveColor?: string;
    particleSpeed?: number;
    particleColor?: string;
    particleLength?: number;
    particleRadius?: number;
    particleWeight?: number;
}

export default function BranchFlow({
    curve = 100,
    topGap = 0,
    bottomGap = 0,
    curveColor = "", // Defaults to adaptive styling if undefined/empty
    particleSpeed = 2.5,
    particleColor = "#f97316",
    particleLength = 12,
    particleRadius = 1.25,
    particleWeight = 2.5,
}: BranchFlowProps) {
    // Canvas dimensions
    const CANVAS_WIDTH = 1000;
    const CANVAS_HEIGHT = 500;

    // Node layout coordinates
    const TOP_NODE_Y = 120;
    const BOTTOM_NODES_Y = 380;
    const CENTER_X = CANVAS_WIDTH / 2;

    // Distribution calculations
    const nodeSpacing = 110;
    const bottomNodesStartX = CENTER_X - (nodeSpacing * (bottomIntegrationNodes.length - 1)) / 2;

    // Dimensions of the top central block
    const TOP_BLOCK_WIDTH = 110;
    const TOP_BLOCK_HEIGHT = 110;

    // Exact path connection points adjusted by gaps
    const pathStartY = TOP_NODE_Y + (TOP_BLOCK_HEIGHT / 2) + topGap;
    const pathEndY = BOTTOM_NODES_Y - 26 - bottomGap; // 26px is exactly half the 52px bottom node height

    // Cubic bezier generator
    const generatePath = (endX: number) => {
        return `M ${CENTER_X} ${pathStartY} C ${CENTER_X} ${pathStartY + curve}, ${endX} ${pathEndY - curve}, ${endX} ${pathEndY}`;
    };

    return (
        <div className="bg-white dark:bg-[#050505] flex items-center justify-center p-4 font-sans overflow-hidden transition-colors duration-300">

            <div className="w-full overflow-x-auto custom-scrollbar flex justify-start md:justify-center">

                <div className="w-[1000px] h-[500px] relative shrink-0">

                    {/*SVG Paths & Particles Canvas */}
                    <svg
                        viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                        <defs>
                            <filter id="glow-particle" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Iterate over paths and animate particles outwards */}
                        {bottomIntegrationNodes.map((node, index) => {
                            const nodeX = bottomNodesStartX + index * nodeSpacing;
                            const pathData = generatePath(nodeX);

                            // Stagger the animations slightly so they don't all fire uniformly
                            const delay = index * 0.3;

                            return (
                                <g key={`path-${node.id}`}>
                                    {/* Static background path */}
                                    <path
                                        d={pathData}
                                        strokeWidth="1.2"
                                        className={curveColor ? "" : "stroke-orange-200 dark:stroke-orange-900/40 transition-colors duration-300"}
                                        style={curveColor ? { stroke: curveColor } : {}}
                                    />

                                    {/* Flowing Particle */}
                                    <g filter="url(#glow-particle)">
                                        <rect
                                            width={particleLength}
                                            height={particleWeight}
                                            rx={particleRadius}
                                            fill={particleColor}
                                            x={-(particleLength / 2)}
                                            y={-(particleWeight / 2)}
                                        >
                                            <animateMotion
                                                dur={`${particleSpeed}s`}
                                                repeatCount="indefinite"
                                                path={pathData}
                                                rotate="auto"
                                                begin={`${delay}s`}
                                            />
                                        </rect>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Top Central Brand Node */}
                    <div
                        className="absolute z-20 flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300"
                        style={{
                            width: `${TOP_BLOCK_WIDTH}px`,
                            height: `${TOP_BLOCK_HEIGHT}px`,
                            left: `${CENTER_X - (TOP_BLOCK_WIDTH / 2)}px`,
                            top: `${TOP_NODE_Y - (TOP_BLOCK_HEIGHT / 2)}px`,
                        }}
                    >
                        <NodeBrackets />

                        {/* Abstract Brand Logo */}
                        <div className="relative w-12 h-12 flex flex-col justify-center">
                            <div className="w-7 h-3 bg-gradient-to-r from-orange-300 to-orange-400 absolute top-1 left-0 shadow-sm" />
                            <div className="w-12 h-6 bg-gradient-to-tr from-orange-400 to-red-400 opacity-90 absolute bottom-1 right-0 rounded-bl-xl rounded-tr-md shadow-sm transform -rotate-12" />
                            <div className="w-4 h-9 bg-gradient-to-b from-orange-300 to-orange-500 absolute top-3 left-0 shadow-sm rounded-b-md" />
                        </div>
                    </div>

                    {/* Bottom Output Nodes */}
                    {bottomIntegrationNodes.map((node, index) => {
                        const nodeX = bottomNodesStartX + index * nodeSpacing;
                        return (
                            <div
                                key={node.id}
                                className="absolute z-20 w-[52px] h-[52px] flex items-center justify-center p-2.5 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
                                style={{
                                    left: `${nodeX - 26}px`,
                                    top: `${BOTTOM_NODES_Y - 26}px`
                                }}
                            >
                                <NodeBrackets />

                                <div style={{ color: node.color }} className="transition-colors duration-300">
                                    {node.icon}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}