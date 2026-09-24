import { Bricolage_Grotesque, Handlee, JetBrains_Mono } from 'next/font/google'
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
const point = Handlee({
    weight: "400",
    subsets: ["latin"],
})


function TablePorpsForDataFlowItems() {
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
                    {/* Layout & Center Node */}
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftGap</TableCell>
                        <TableCell className={PropertyPoint.className}>15</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the vertical percentage spread from the center for the top and bottom cards on the left side.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightGap</TableCell>
                        <TableCell className={PropertyPoint.className}>15</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the vertical percentage spread from the center for the top and bottom cards on the right side.
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className={point.className}>Left Side Control</TableCell>
                    </TableRow>

                    {/* Left Side Controls */}
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftpathColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#4b5563"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the stroke color of the SVG connection lines on the left side. Defaults to a Tailwind gray class if omitted.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftparticleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#ef4444"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the fill color and drop-shadow glow of the moving data particles on the left side.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftparticleSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The duration (in seconds) it takes for a left particle to complete one full animation loop.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftpathWidth</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Defines the stroke thickness of the left connecting lines.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>leftparticleSize</TableCell>
                        <TableCell className={PropertyPoint.className}>4</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Defines the radius size of the moving data particles on the left side.
                        </TableCell>
                    </TableRow>

                    {/* Right Side Controls */}

                    <TableRow >
                        <TableCell className={point.className}>Right Side Control</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightpathColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#4b5563"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the stroke color of the SVG connection lines on the right side. Defaults to a Tailwind gray class if omitted.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightparticleColor</TableCell>
                        <TableCell className={PropertyPoint.className}>"#10b981"</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the fill color and drop-shadow glow of the moving data particles on the right side.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightparticleSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The duration (in seconds) it takes for a right particle to complete one full animation loop.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightpathWidth</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Defines the stroke thickness of the right connecting lines.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rightparticleSize</TableCell>
                        <TableCell className={PropertyPoint.className}>4</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Defines the radius size of the moving data particles on the right side.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForDataFlowItems