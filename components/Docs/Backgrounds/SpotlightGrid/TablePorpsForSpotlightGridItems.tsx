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

function TablePorpsForSpotlightGridItems() {

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
                        <TableCell className={PropertyPoint.className}>spotlightSize</TableCell>
                        <TableCell className={PropertyPoint.className}>230</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Adjust the cursor radius.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>gap</TableCell>
                        <TableCell className={PropertyPoint.className}>20</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The space between the dots (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>dotSize</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The radius of the base dots (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>hoverDotSize</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The radius of the dots when hovered (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>dotColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#333333"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The color of the base dots.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>hoverDotColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#ffffff"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The color of the dots when hovered.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForSpotlightGridItems