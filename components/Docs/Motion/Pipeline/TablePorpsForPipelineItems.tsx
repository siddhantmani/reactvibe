import {
    Bricolage_Grotesque,
    Handlee,
    JetBrains_Mono,
} from "next/font/google";

import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Headline = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
});

const Property = JetBrains_Mono({
    weight: "700",
    subsets: ["latin"],
});

const PropertyPoint = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
});

const point = Handlee({
    weight: "400",
    subsets: ["latin"],
});

function TablePorpsForPipelineItems() {
    return (
        <div className="wrap-anywhere text-wrap">
            <h1 className={`${Headline.className} text-3xl pt-10 pb-3`}>
                Props
            </h1>

            <Table className="dark:text-white border dark:border-gray-300 rounded-3xl">
                <TableHeader>
                    <TableRow className="dark:bg-[#222121] dark:text-white opacity-80 p-3">
                        <TableHead className={`${Property.className}`}>
                            Property
                        </TableHead>

                        <TableHead className={`${Property.className}`}>
                            Default Value
                        </TableHead>

                        <TableHead
                            className={`${Property.className} text-start`}
                        >
                            Description
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            particleCount
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            2
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Control the number of particles
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            particleSpeed
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            3
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Control the speed of particles
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            particleSize
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            2.5
                        </TableCell>

                        <TableCell className={PropertyPoint.className}>
                            Control the size of particles
                        </TableCell>
                    </TableRow>



                </TableBody>
            </Table>
        </div>
    );
}

export default TablePorpsForPipelineItems;