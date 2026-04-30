import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'

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

function TablePropsForLinearRevealItems() {
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
                        <TableCell className={PropertyPoint.className}>Text</TableCell>
                        <TableCell className={PropertyPoint.className}>The Linear Text </TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The text content to be revealed with the linear animation.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>as</TableCell>
                        <TableCell className={PropertyPoint.className}>&quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The HTML element or React component to render as the root of the Linear Reveal.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>delay</TableCell>
                        <TableCell className={PropertyPoint.className}>{0.2}</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The delay before the linear animation starts, in seconds.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>className</TableCell>
                        <TableCell className={PropertyPoint.className}>text-4xl</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Additional CSS classes to style the root element of the Linear Reveal.
                        </TableCell>
                    </TableRow>




                </TableBody>
            </Table>
        </div>
    )
}

export default TablePropsForLinearRevealItems
