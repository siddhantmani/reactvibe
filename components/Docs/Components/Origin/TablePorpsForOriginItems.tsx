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

function TablePorpsForOriginItems() {
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
                        <TableCell className={PropertyPoint.className}>topIcon</TableCell>
                        <TableCell className={PropertyPoint.className}>ReactNode</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Pass your custom imported image or icon for the top central node.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>bottomIcons</TableCell>
                        <TableCell className={PropertyPoint.className}>ReactNode[]</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Array of custom images or icons for the bottom nodes.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curve</TableCell>
                        <TableCell className={PropertyPoint.className}>100</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sweep of the bezier curve.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>curveColor</TableCell>
                        <TableCell className={PropertyPoint.className}>""</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Leaves adaptive styling, or override with hex.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>topGap</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Disconnects the curve from the top node.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>bottomGap</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Disconnects the curve from the bottom nodes.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>2.8</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Seconds for a particle to travel the path.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#ffffff"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Color of the moving dot.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleLength</TableCell>
                        <TableCell className={PropertyPoint.className}>14</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Make it longer (e.g. 16) for a dash, or 8 for a perfect circle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the thickness/height of the moving particle dash.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>4</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Border radius and half-height of the particle.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>particleGlow</TableCell>
                        <TableCell className={PropertyPoint.className}>"drop-shadow(0 0 8px #ffb6e0)"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            CSS filter for the dot glow.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>strokeWidth</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Thickness of the bezier curves.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>delay</TableCell>
                        <TableCell className={PropertyPoint.className}>1.4</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Initial animation delay.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForOriginItems