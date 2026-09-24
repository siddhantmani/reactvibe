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

function TablePorpsForBranchFlowItems() {
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
                        <TableCell className={PropertyPoint.className}>curve</TableCell>
                        <TableCell className={PropertyPoint.className}>120</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the sweep/arch of the bezier curve.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>topGap</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Gap between the top block and the curve start.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>bottomGap</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Gap between the bottom blocks and the curve end.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curveColor</TableCell>
                        <TableCell className={PropertyPoint.className}>""</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Leaves adaptive styling, or override with hex (e.g., "#d1d5db").
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
                        <TableCell className={PropertyPoint.className}>particleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#f97316"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Particle color (defaults to orange).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleLength</TableCell>
                        <TableCell className={PropertyPoint.className}>12</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Length of the moving particle dash.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>1.25</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Border radius of the moving particle dash.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Thickness/weight of the moving particle dash.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForBranchFlowItems