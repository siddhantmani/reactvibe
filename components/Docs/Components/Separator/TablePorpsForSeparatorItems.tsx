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

function TablePorpsForSeparatorItems() {
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
                        <TableCell className={PropertyPoint.className}>direction</TableCell>
                        <TableCell className={PropertyPoint.className}>horizontal | vertical</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The direction of the separator
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>className</TableCell>
                        <TableCell className={PropertyPoint.className}>bg-black</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            The Tailwind CSS class for the separator
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForSeparatorItems
