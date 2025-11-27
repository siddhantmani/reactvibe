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

function TablePropsForDarkFusionItems() {
    return (
        <div className="wrap-anywhere text-wrap">
            <h1 className={`${Headline.className} text-3xl pt-10 pb-3`}>Props</h1>

            <Table className="dark:text-white border dark:border-gray-300 rounded-3xl">
                <TableHeader>
                    <TableRow className="dark:bg-[#222121] dark:text-white opacity-80 p-3">
                        <TableHead className={`${Property.className}`}>Property</TableHead>
                        <TableHead className={`${Property.className}`}>Type</TableHead>
                        <TableHead className={`${Property.className}`}>Default Value</TableHead>
                        <TableHead className={`${Property.className} text-start`}>Description</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {/* ------------------ Scene ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Scene</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneBackgroundColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>#000000</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Background color of the 3D scene.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Camera ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Camera</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFOV</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Field of view angle for the camera.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraNear</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2.1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Near clipping plane distance.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFar</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1000</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Far clipping plane distance.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionX</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Camera X-axis position.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionY</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Camera Y-axis position.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionZ</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>10</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Camera Z-axis position.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Renderer ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Renderer</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererAntialias</TableCell>
                        <TableCell className={PropertyPoint.className}>boolean</TableCell>
                        <TableCell className={PropertyPoint.className}>true</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Enables anti-aliasing for smoother edges.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererSetPixelRatio</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the renderer’s pixel ratio for clarity/performance balance.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Orbit Controls ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Orbit Controls</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>OrbitEnableDamping</TableCell>
                        <TableCell className={PropertyPoint.className}>boolean</TableCell>
                        <TableCell className={PropertyPoint.className}>true</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Enables smooth inertial camera movement.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Shader Colors ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Shader Colors</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderColor1</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>#0a0a0a</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Primary shader color.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderColor2</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>#000000</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Secondary shader blend color.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Bloom ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Bloom</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassStrength</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>10.2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls bloom glow intensity.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Spread/softness of bloom.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassThreshold</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Brightness threshold to trigger bloom.
                        </TableCell>
                    </TableRow>

                    {/* ------------------ Animation ------------------ */}
                    <TableRow>
                        <TableCell className={SectionLabel.className}>#Animation</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderWaveSpeed</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1.0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Speed of the shader wave motion.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderWaveFrequency</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>10.0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Frequency of the shader wave pattern.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderGlowIntensity</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>400.0</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Glow intensity applied across the shader surface.
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePropsForDarkFusionItems
