import {
    Bricolage_Grotesque,
    Handlee,
    JetBrains_Mono,
} from "next/font/google";

import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Headline = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
});

const Property = JetBrains_Mono({
    weight: "700",
    subsets: ["latin"],
});

const PropertyPoint = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
});

const point = Handlee({
    weight: "400",
    subsets: ["latin"],
});

function TablePorpsForSignalItems() {
    return (
        <div className="wrap-anywhere text-wrap">
            <h1 className={`${Headline.className} text-3xl pt-10 pb-3`}>
                Props
            </h1>

            <Table className="dark:text-white border dark:border-gray-300 rounded-3xl">
                <TableHeader>
                    <TableRow className="dark:bg-[#222121] dark:text-white opacity-80 p-3">
                        <TableHead className={`${Property.className}`}>
                            Property
                        </TableHead>

                        <TableHead className={`${Property.className}`}>
                            Default Value
                        </TableHead>

                        <TableHead
                            className={`${Property.className} text-start`}
                        >
                            Description
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {/* ==============================
                        LAYOUT CONTROLS
                    ============================== */}

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftGap
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            5
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the vertical spread of the signal waves
                            from the center on the left side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightGap
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            10
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the vertical spread of the signal waves
                            from the center on the right side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={point.className}>
                            Left Side Control
                        </TableCell>
                    </TableRow>

                    {/* ==============================
                        LEFT SIDE CONTROLS
                    ============================== */}

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftpathColor
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            "#4b5563"
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the signal paths on the left
                            side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftparticleColor
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            "#ef4444"
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the moving particles on the left
                            side, including their glow effect.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftparticleSpeed
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the base speed of the moving particles on
                            the left side. Individual particles can move at
                            different speeds.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftpathWidth
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            0.3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the stroke thickness of the signal paths
                            on the left side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftparticleSize
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            2
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the radius of the moving particles on the
                            left side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            leftParticleDelay
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            0
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the initial delay, in seconds, before the
                            left-side particles begin moving.
                        </TableCell>
                    </TableRow>

                    {/* ==============================
                        RIGHT SIDE CONTROLS
                    ============================== */}

                    <TableRow>
                        <TableCell className={point.className}>
                            Right Side Control
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightpathColor
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            "#4b5563"
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the signal paths on the right
                            side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightparticleColor
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            "#10b981"
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the moving particles on the
                            right side, including their glow effect.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightparticleSpeed
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the base speed of the moving particles on
                            the right side. Individual particles can move at
                            different speeds.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightpathWidth
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            0.3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the stroke thickness of the signal paths
                            on the right side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightparticleSize
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            2
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the radius of the moving particles on the
                            right side.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            rightParticleDelay
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Controls the initial delay, in seconds, before the
                            right-side particles begin moving.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default TablePorpsForSignalItems;