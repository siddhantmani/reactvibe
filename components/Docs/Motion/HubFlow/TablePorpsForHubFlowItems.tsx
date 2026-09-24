import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Headline = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

const Property = JetBrains_Mono({
    weight: "700",
    subsets: ["latin"],
})

const PropertyPoint = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
})

function TablePorpsForHubFlowItems() {
    return (
        <div className="wrap-anywhere text-wrap">
            <h1 className={`${Headline.className} text-3xl pt-10 pb-3`}>Props</h1>

            <Table className="dark:text-white border dark:border-gray-300 rounded-3xl">
                <TableHeader>
                    <TableRow className="dark:bg-[#222121] dark:text-white opacity-80 p-3">
                        <TableHead className={`${Property.className}`}>Property</TableHead>
                        <TableHead className={`${Property.className}`}>Default Value</TableHead>
                        <TableHead className={`${Property.className} text-start`}>Description</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curveTopGap</TableCell>
                        <TableCell className={PropertyPoint.className}>8</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Space between the top outer pills and the start of the curves.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curveBottomGap</TableCell>
                        <TableCell className={PropertyPoint.className}>8</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Space between the bottom outer pills and the end of the curves.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>gap</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Adjust this to pull paths away from or overlap with the central pill.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>pillGap</TableCell>
                        <TableCell className={PropertyPoint.className}>130</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The horizontal spacing between the top pills.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>pillRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>999</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Make it 16 for a rounded rectangle, 999 for fully rounded.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>topCurve</TableCell>
                        <TableCell className={PropertyPoint.className}>120</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The vertical drop distance before the lines sweep to the center.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>bottomCurve</TableCell>
                        <TableCell className={PropertyPoint.className}>120</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The vertical drop distance after the lines leave the center.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#f97316"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Color for the top incoming particles. E.g., Red.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>bottomParticleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#eb1c2d"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Distinct color for the bottom outgoing particles. E.g., Cyan.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Seconds it takes for a particle to travel the path.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleLength</TableCell>
                        <TableCell className={PropertyPoint.className}>16</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The width of the moving dash.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The thickness of the moving dash.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleCurve</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Border radius of the moving dash.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForHubFlowItems