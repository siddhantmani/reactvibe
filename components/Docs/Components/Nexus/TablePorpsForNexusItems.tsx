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

function TablePorpsForNexusItems() {
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
                        <TableCell className={PropertyPoint.className}>icons</TableCell>
                        <TableCell className={PropertyPoint.className}>ReactNode[]</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Array of custom images or icons for the 6 outer nodes. Falls back to default SVGs.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>centerContent</TableCell>
                        <TableCell className={PropertyPoint.className}>ReactNode</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Custom content for the center node. Overrides the default animated "Integrated" button.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curve</TableCell>
                        <TableCell className={PropertyPoint.className}>150</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the bezier curve sweep for the 4 corner connection lines.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>centerGapX</TableCell>
                        <TableCell className={PropertyPoint.className}>70</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            How far the side lines stop from the center node along the X-axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>centerGapY</TableCell>
                        <TableCell className={PropertyPoint.className}>30</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            How far the top and bottom lines stop from the center node along the Y-axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>nodeGap</TableCell>
                        <TableCell className={PropertyPoint.className}>40</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            How far the lines start from the outer connecting nodes.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curveColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#ffffff"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Color of the background bezier connection curves.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>3</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Duration (in seconds) it takes for a particle to travel the path once.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#ffffff"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Color of the moving particle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleLength</TableCell>
                        <TableCell className={PropertyPoint.className}>12</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Length of the traveling dash (use 4-8 for perfectly round dots).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Border radius of the traveling particle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>4</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Thickness/height of the traveling particle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleGlow</TableCell>
                        <TableCell className={PropertyPoint.className}>"drop-shadow(0 0 8px #ffffff)"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            CSS filter used to generate the glowing effect behind the particle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>strokeWidth</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Thickness of the static background bezier curves.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForNexusItems