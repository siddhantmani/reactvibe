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

function TablePorpsForNetworkPulseItem() {
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
                        <TableCell className={PropertyPoint.className}>70</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The corner radius for the outer lines, determining how wide and sweeping the curves are.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>TopGap</TableCell>
                        <TableCell className={PropertyPoint.className}>60</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The vertical distance the outer lines travel downwards before splitting horizontally.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MiddleCurve</TableCell>
                        <TableCell className={PropertyPoint.className}>35</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The corner radius specifically for the inner lines to maintain smooth S-curves in tighter spaces.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MiddleTopGap</TableCell>
                        <TableCell className={PropertyPoint.className}>40</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The extra vertical distance the inner lines drop (added to TopGap) before splitting horizontally.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>IconsGap</TableCell>
                        <TableCell className={PropertyPoint.className}>53</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The horizontal spacing between the four target icons.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForNetworkPulseItem