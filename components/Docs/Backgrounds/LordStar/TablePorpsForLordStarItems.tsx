import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Bricolage_Grotesque, Handlee, JetBrains_Mono } from 'next/font/google'

const Headline = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese'],
})
const Property = JetBrains_Mono({
    weight: '700',
    subsets: ['vietnamese'],
})
const PropertyPoint = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese'],
})
const Section = Handlee({
    weight: '400',
    subsets: ['latin'],
})

function TablePorpsForLordStarItems() {
    return (
        <div className="wrap-anywhere text-wrap">
            <h1 className={`${Headline.className} text-3xl pt-10 pb-3`}>
                Props
            </h1>

            <Table className="dark:text-white border dark:border-gray-300 rounded-3xl">
                <TableHeader>
                    <TableRow className="dark:bg-[#222121] dark:text-white opacity-80 p-3">
                        <TableHead className={`${Property.className} w-[160px]`}>
                            Property
                        </TableHead>
                        <TableHead className={Property.className}>Type</TableHead>
                        <TableHead className={Property.className}>Default</TableHead>
                        <TableHead className={`${Property.className} text-start`}>
                            Description
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {/* Scene */}
                    <TableRow>
                        <TableCell className={Section.className}># Scene</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneBackgroundColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#000000&#34;</TableCell>
                        <TableCell>Background color of the 3D scene.</TableCell>
                    </TableRow>

                    {/* Camera */}
                    <TableRow>
                        <TableCell className={Section.className}># Camera</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFOV</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>Field of view for the perspective camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraNear</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>Near clipping plane distance.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFar</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1000</TableCell>
                        <TableCell>Far clipping plane distance.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionX</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>X-axis position of the camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionY</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>Y-axis position of the camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionZ</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>Z-axis position of the camera.</TableCell>
                    </TableRow>

                    {/* Renderer */}
                    <TableRow>
                        <TableCell className={Section.className}># Renderer</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererAntialias</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>Enables or disables anti-aliasing for smoother edges.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererSetPixelRatio</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>Defines pixel ratio to balance clarity and performance.</TableCell>
                    </TableRow>

                    {/* Orbit Controls */}
                    <TableRow>
                        <TableCell className={Section.className}># Orbit Controls</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>OrbitEnableDamping</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>Enables smooth damping effect when orbiting the camera.</TableCell>
                    </TableRow>

                    {/* Shader Colors */}
                    <TableRow>
                        <TableCell className={Section.className}># Shader Colors</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderColor1</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#0d0d0b&#34;</TableCell>
                        <TableCell>Base color used in the shader material.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderColor2</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#1a1919&#34;</TableCell>
                        <TableCell>Secondary color blended with the base shader color.</TableCell>
                    </TableRow>

                    {/* Particles */}
                    <TableRow>
                        <TableCell className={Section.className}># Particles</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleCount</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>2000</TableCell>
                        <TableCell>Total number of particles rendered in the scene.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleSize</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.05</TableCell>
                        <TableCell>Size of each particle point.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleOpacity</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.8</TableCell>
                        <TableCell>Opacity of the particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleInnerColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#ffffff&#34;</TableCell>
                        <TableCell>Inner color of each particle.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleOuterColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#000000&#34;</TableCell>
                        <TableCell>Outer color gradient of each particle.</TableCell>
                    </TableRow>

                    {/* Bloom */}
                    <TableRow>
                        <TableCell className={Section.className}># Bloom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassStrength</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1.5</TableCell>
                        <TableCell>Intensity of the bloom post-processing effect.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassRadius</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.5</TableCell>
                        <TableCell>Radius of the bloom spread.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassThreshold</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.0</TableCell>
                        <TableCell>Threshold level for bloom intensity.</TableCell>
                    </TableRow>

                    {/* Animation */}
                    <TableRow>
                        <TableCell className={Section.className}># Animation</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleRotationSpeed</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.0001</TableCell>
                        <TableCell>Rotation speed of the particle field.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderWaveSpeed</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>2.0</TableCell>
                        <TableCell>Speed of wave movement in shader animation.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderWaveFrequency</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>10.0</TableCell>
                        <TableCell>Frequency of wave oscillations in shader effect.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ShaderGlowIntensity</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>20.0</TableCell>
                        <TableCell>Overall glow intensity of the shader.</TableCell>
                    </TableRow>

                    {/* Interaction */}
                    <TableRow>
                        <TableCell className={Section.className}># Interaction</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MouseInfluence</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>5.0</TableCell>
                        <TableCell>Defines how strongly mouse movement affects the animation.</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForLordStarItems
