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

function TablePorpsForRisingLinesItems() {
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
                        <TableCell className={PropertyPoint.className}>lineCount</TableCell>
                        <TableCell className={PropertyPoint.className}>200</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The total number of lines rendered on the screen.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>color</TableCell>
                        <TableCell className={PropertyPoint.className}>"#737373"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The color of the lines (accepts hex, rgb, or Tailwind color codes).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>thickness</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The width or thickness of each line (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>speed</TableCell>
                        <TableCell className={PropertyPoint.className}>10</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the movement speed of the lines (higher number = faster).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>heightMin</TableCell>
                        <TableCell className={PropertyPoint.className}>120</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The minimum height a line can randomly be (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>heightMax</TableCell>
                        <TableCell className={PropertyPoint.className}>370</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The maximum height a line can randomly be (in pixels).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>opacityMin</TableCell>
                        <TableCell className={PropertyPoint.className}>0.15</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The minimum opacity limit for the faintest lines.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>opacityMax</TableCell>
                        <TableCell className={PropertyPoint.className}>0.6</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The maximum opacity limit for the most visible lines.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>direction</TableCell>
                        <TableCell className={PropertyPoint.className}>"bottom-to-top"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The direction of the line movement. Accepts "bottom-to-top" or "top-to-bottom".
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForRisingLinesItems