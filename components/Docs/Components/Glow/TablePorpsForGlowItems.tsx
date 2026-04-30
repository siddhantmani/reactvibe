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

function TablePropsForGlowItems() {
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
                        <TableCell className={PropertyPoint.className}>backgroundColor</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;#0d0d0d&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Background color of the container where the glow effect is applied.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>glowColor</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;#7d6e45&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Primary color of the glow that follows the cursor.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>glowSize</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;280px&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Size (radius) of the glow effect.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>glowOpacity</TableCell>
                        <TableCell className={PropertyPoint.className}>{0.3}</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Opacity of the glow effect (0 to 1).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>glowFadeAt</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;100%&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls how quickly the glow fades toward the edges.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>borderGlow</TableCell>
                        <TableCell className={PropertyPoint.className}>false</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Enables or disables glow effect on the border.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>borderGlowColor</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            &#34;rgba(130,100,255,0.4)&#34;
                        </TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Color of the border glow effect.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>borderGlowSize</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;200px&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Size of the border glow spread.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>borderGlowTransparency</TableCell>
                        <TableCell className={PropertyPoint.className}>&#34;80%&#34;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls transparency level of the border glow.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TablePropsForGlowItems
