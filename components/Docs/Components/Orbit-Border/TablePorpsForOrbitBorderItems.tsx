import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Bricolage_Grotesque, JetBrains_Mono, Handlee } from 'next/font/google'

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

const SectionLabel = Handlee({
    weight: "400",
    subsets: ["latin"],
})

function TablePropsForOrbitBorderItems() {
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
                        <TableCell className={PropertyPoint.className}>as</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;div&#34; | &#34;span&#34; | &#34;button&#34; </TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The HTML element or React component to render as the root of the Orbit Border.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>rotate</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                           Rotation angle of the orbit border in degrees.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>padding</TableCell>
                        <TableCell className={PropertyPoint.className}>50</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Padding around the content inside the orbit border, in pixels.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RingColors</TableCell>
                        <TableCell className={PropertyPoint.className}>{[`"#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"`]}</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            An array of colors for the orbit border rings.
                        </TableCell>
                    </TableRow>

                    


                </TableBody>
            </Table>
        </div>
    )
}

export default TablePropsForOrbitBorderItems
