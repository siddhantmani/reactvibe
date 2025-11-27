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

function TablePorpsForShiningStarItems() {
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
                        <TableCell className={PropertyPoint.className}>
                            SceneBackgroundColor
                        </TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#000000&#34;</TableCell>
                        <TableCell>Background color of the scene.</TableCell>
                    </TableRow>

                    {/* Camera */}
                    <TableRow>
                        <TableCell className={Section.className}># Camera</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFOV</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>Field of view for perspective camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraNear</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>Near clipping plane distance.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFar</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1000</TableCell>
                        <TableCell>Far clipping plane distance.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            CameraPositionX
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>X position of the camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            CameraPositionY
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>Y position of the camera.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            CameraPositionZ
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>Z position of the camera.</TableCell>
                    </TableRow>

                    {/* Renderer */}
                    <TableRow>
                        <TableCell className={Section.className}># Renderer</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            RendererAntialias
                        </TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>Enable/disable antialiasing.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            RendererPowerPreference
                        </TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;high-performance&#34;</TableCell>
                        <TableCell>
                            Power preference: Based on your device capabilities select &#34;high-performance&#34;, or &#34;medium-performance&#34;, or
                            &#34;low-performance&#34;.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            RendererSetPixelRatio
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>
                            Maximum pixel ratio to use (based on device performance).
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            RendererOutputColorSpace
                        </TableCell>
                        <TableCell>&#34;sRGB&#34; | &#34;linear&#34;</TableCell>
                        <TableCell>&#34;sRGB&#34;</TableCell>
                        <TableCell>Defines output color space.</TableCell>
                    </TableRow>

                    {/* Bloom */}
                    <TableRow>
                        <TableCell className={Section.className}># Bloom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            UnrealBloomPassStrength
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>Strength of bloom effect.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            UnrealBloomPassRadius
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.9</TableCell>
                        <TableCell>Bloom radius.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            UnrealBloomPassThreshold
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.6</TableCell>
                        <TableCell>Bloom threshold.</TableCell>
                    </TableRow>

                    {/* Beam Shader */}
                    <TableRow>
                        <TableCell className={Section.className}># Beam Shader</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamColorCore</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#573939&#34;</TableCell>
                        <TableCell>Core beam color.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamColorGlow</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;#573939&#34;</TableCell>
                        <TableCell>Glow beam color.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamWidth</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>Beam width.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamSoftness</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.0</TableCell>
                        <TableCell>Softness of beam edges.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamNoiseScale</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>3.0</TableCell>
                        <TableCell>Noise scale applied to beams.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamNoiseAmp</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.3</TableCell>
                        <TableCell>Noise amplitude applied to beams.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamHeight</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>4.5</TableCell>
                        <TableCell>Height of the beams.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamIntensity</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1.0</TableCell>
                        <TableCell>Intensity multiplier of beams.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>BeamCount</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Number of beams to render.</TableCell>
                    </TableRow>

                    {/* Pool */}
                    <TableRow>
                        <TableCell className={Section.className}># Pool (Glow Circle)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolInnerColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;rgba(160,120,255,1)&#34;</TableCell>
                        <TableCell>Inner glow circle color.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolOuterColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;rgba(160,120,255,0)&#34;</TableCell>
                        <TableCell>Outer glow circle color.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolSize</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Diameter of the glow circle.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolYPosition</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>-2</TableCell>
                        <TableCell>Vertical position of glow circle.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolOpacity</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.7</TableCell>
                        <TableCell>Opacity of glow circle.</TableCell>
                    </TableRow>

                    {/* Particles */}
                    <TableRow>
                        <TableCell className={Section.className}># Particles</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleCount</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>10000</TableCell>
                        <TableCell>Total number of particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleSize</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.01</TableCell>
                        <TableCell>Size of particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleOpacity</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.6</TableCell>
                        <TableCell>Opacity of particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleInnerColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;rgba(255,255,255,0.9)&#34;</TableCell>
                        <TableCell>Inner color of particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>ParticleOuterColor</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>&#34;rgba(255,255,255,0)&#34;</TableCell>
                        <TableCell>Outer color of particles.</TableCell>
                    </TableRow>

                    {/* Animation */}
                    <TableRow>
                        <TableCell className={Section.className}># Animation</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>PoolScaleFrequency</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1.5</TableCell>
                        <TableCell>
                            Frequency of scaling animation for glow circle.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            PoolOpacityFrequency
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1.3</TableCell>
                        <TableCell>
                            Frequency of opacity animation for glow circle.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            ParticleRotationSpeed
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>0.02</TableCell>
                        <TableCell>Rotation speed of particles.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>
                            BeamIntensityFrequency
                        </TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>1.2</TableCell>
                        <TableCell>
                            Frequency of beam intensity oscillation.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForShiningStarItems
