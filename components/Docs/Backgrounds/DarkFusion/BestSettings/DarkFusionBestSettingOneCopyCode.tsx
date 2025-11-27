import React from "react";
import { Bricolage_Grotesque, JetBrains_Mono, Handlee } from "next/font/google";
import LinearReveal from "@/components/LinearReveal";

const Property = JetBrains_Mono({
    weight: "700",
    subsets: ["latin"],
});

const PropertyPoint = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"],
});

const SectionLabel = Handlee({
    weight: "400",
    subsets: ["latin"],
});

const LinearRevealFont = Bricolage_Grotesque({
    weight: "500",
    subsets: ["latin"],
})

function DarkFusionBestSettingOneCopyCode() {
    return (
        <div className="my-6 select-text">
            <LinearReveal
                as={"h1"}
                text='Copy Props'
                className={`text-2xl pb-3 ${LinearRevealFont.className}`}
            />
            <table className="border-collapse w-full text-sm">
                <thead>
                    <tr className="border-t">
                        <th className={`${Property.className} border px-4 py-2 text-left`}>Prop</th>
                        <th className={`${Property.className} border px-4 py-2 text-left`}>Value</th>
                    </tr>
                </thead>

                <tbody className={PropertyPoint.className}>
                    {/* Scene */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Scene</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">SceneBackgroundColor</td>
                        <td className="border px-4 py-2">#000000</td>
                    </tr>

                    {/* Camera */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Camera</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraFOV</td>
                        <td className="border px-4 py-2">5</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraNear</td>
                        <td className="border px-4 py-2">7.2</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraFar</td>
                        <td className="border px-4 py-2">1000</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraPositionX</td>
                        <td className="border px-4 py-2">0</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraPositionY</td>
                        <td className="border px-4 py-2">0</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">CameraPositionZ</td>
                        <td className="border px-4 py-2">10</td>
                    </tr>

                    {/* Renderer */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Renderer</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">RendererAntialias</td>
                        <td className="border px-4 py-2">true</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">RendererSetPixelRatio</td>
                        <td className="border px-4 py-2">2</td>
                    </tr>

                    {/* Orbit Controls */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Orbit Controls</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">OrbitEnableDamping</td>
                        <td className="border px-4 py-2">true</td>
                    </tr>

                    {/* Shader Colors */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Shader Colors</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">ShaderColor1</td>
                        <td className="border px-4 py-2">#0a0a0a</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">ShaderColor2</td>
                        <td className="border px-4 py-2">#000000</td>
                    </tr>

                    {/* Bloom */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Bloom</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">UnrealBloomPassStrength</td>
                        <td className="border px-4 py-2">10.2</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">UnrealBloomPassRadius</td>
                        <td className="border px-4 py-2">6.5</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">UnrealBloomPassThreshold</td>
                        <td className="border px-4 py-2">0.0</td>
                    </tr>

                    {/* Animation */}
                    <tr>
                        <td colSpan={2} className="pt-4 pb-1">
                            <span className={`${SectionLabel.className}`}>#Animation</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">ShaderWaveSpeed</td>
                        <td className="border px-4 py-2">1.0</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">ShaderWaveFrequency</td>
                        <td className="border px-4 py-2">10.0</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">ShaderGlowIntensity</td>
                        <td className="border px-4 py-2">400.0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DarkFusionBestSettingOneCopyCode;
