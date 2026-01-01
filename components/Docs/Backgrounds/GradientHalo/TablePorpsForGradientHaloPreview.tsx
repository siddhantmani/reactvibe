import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Bricolage_Grotesque, Handlee, JetBrains_Mono } from 'next/font/google';
import LinearReveal from '@/components/LinearReveal';

const Property = JetBrains_Mono({
    weight: '700', 
    subsets: ['vietnamese']
});
const PropertyPoint = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});
const SceneSpecify = Handlee({
    weight: '400', 
    subsets: ['latin']
});

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})


function TablePorpsForGradientHaloPreview() {
    return (
        <div className=' wrap-anywhere text-wrap'>

            <LinearReveal
                as={'h2'}
                text='Props'
                className={`${LinearRevealFont.className} text-3xl pt-10 pb-3`}
            />

            <Table className='dark:text-white border dark:border-gray-300 rounded-3xl'>
                <TableHeader>
                    <TableRow className='dark:bg-[#222121] dark:text-white opacity-80 p-3'>
                        <TableHead className={`${Property.className} w-[100px]`}>Property</TableHead>
                        <TableHead className={`${Property.className}`}>Type</TableHead>
                        <TableHead className={`${Property.className}`}>Default Value</TableHead>
                        <TableHead className={`${Property.className} text-start`}>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Scene</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneFogColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>#000000</TableCell>
                        <TableCell className={PropertyPoint.className}>Sets the fog’s color in the scene.</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneFogNearDistance</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.1</TableCell>
                        <TableCell className={PropertyPoint.className}>Distance from the camera where fog starts appearing.</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneFogFarDistance</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1.1</TableCell>
                        <TableCell className={PropertyPoint.className}>Distance from the camera where fog becomes fully opaque.</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneBackgroundColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>#ffffff</TableCell>
                        <TableCell className={PropertyPoint.className}>Sets the background color of the scene.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Camera</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFOV</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>25</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Field of view (in degrees) for the perspective camera.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraNear</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Distance from the camera where rendering starts.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraFar</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1000</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Distance from the camera where rendering stops.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CameraPositionZ</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Position of the camera along the Z‑axis.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Renderer</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererAntialias</TableCell>
                        <TableCell className={PropertyPoint.className}>boolean</TableCell>
                        <TableCell className={PropertyPoint.className}>true</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Enables smooth edge rendering to reduce jagged lines in graphics.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererPowerPreference</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>&ldquo;high-performance&ldquo;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Suggests the GPU performance mode (&ldquo;high-performance&ldquo;, &ldquo;low-power&ldquo;, or &ldquo;default&ldquo;) for rendering.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RendererSetPixelRatio</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={`${PropertyPoint.className}`}>
                            Sets the renderer’s pixel ratio, often matching window.devicePixelRatio for sharper visuals.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Mesh</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>&ldquo;0xffffff&ldquo;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the cube’s surface color.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshMetalness</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.7</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls how metallic the cube’s material appears (0 = non‑metal, 1 = fully metallic).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshRoughness</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls how rough or matte the cube’s surface looks (0 = perfectly smooth, 1 = fully rough).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshCubeWidth</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Width of the cube along the X‑axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshCubeHeight</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Height of the cube along the Y‑axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>MeshCubeDepth</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Depth of the cube along the Z‑axis.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Lights</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>DirectionalLightColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>&ldquo;0xffffff&ldquo;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the directional light.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>DirectionalLightValue</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the intensity of the directional light.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>DirectionalLightPositionX</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Position of the directional light along the X‑axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>DirectionalLightPositionY</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Position of the directional light along the Y‑axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>DirectionalLightPositionZ</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>2</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Position of the directional light along the Z‑axis.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneAmbientLightColor</TableCell>
                        <TableCell className={PropertyPoint.className}>string</TableCell>
                        <TableCell className={PropertyPoint.className}>&ldquo;0xffffff&ldquo;</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the color of the ambient light in the scene.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>SceneAmbientLightValue</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.5</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the intensity of the ambient light in the scene.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#Bloom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassStrength</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the intensity of the bloom effect (higher values = brighter glow).
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassRadius</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Sets the spread or softness of the bloom glow.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>UnrealBloomPassThreshold</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.1</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Brightness level at which bloom starts to appear (pixels darker than this are ignored).
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#RGB Shift</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>RGBShiftAmount</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.0025</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Controls the intensity of the RGB channel offset, creating a chromatic aberration or “color fringing” effect.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={`${SceneSpecify.className}`}>#RGB Shift</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CubeRotationX</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.001</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Amount to rotate the cube around the X‑axis on each animation frame.
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={PropertyPoint.className}>CubeRotationY</TableCell>
                        <TableCell className={PropertyPoint.className}>number</TableCell>
                        <TableCell className={PropertyPoint.className}>0.001</TableCell>
                        <TableCell className={PropertyPoint.className}>
                            Amount to rotate the cube around the Y‑axis on each animation frame.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TablePorpsForGradientHaloPreview