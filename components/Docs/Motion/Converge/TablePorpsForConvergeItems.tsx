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

function TablePorpsForConvergeItems() {
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
                        <TableCell className={PropertyPoint.className}>CurveRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>250</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Adjusts how sweeping the bezier curves are.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CurveWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Adjusts the thickness of the background lines.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CurcePillColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#10b981"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Easily change the theme accent (e.g., Cyan).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PillSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>3.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Adjust the seconds it takes for a particle to cross.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PillWeight</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Thickness of the moving pill.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PillLength</TableCell>
                        <TableCell className={PropertyPoint.className}>14</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Length of the moving pill.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PillRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Border radius of the moving pill (use half of PillWeight for fully rounded ends).
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForConvergeItems