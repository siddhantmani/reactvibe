export function gpuCheck(): boolean {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;

    if (!gl) return true; // no WebGL = definitely low-end

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    let renderer = "";

    if (debugInfo) {
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        renderer = renderer ? renderer.toLowerCase() : "";
    }

    const lowEndKeywords = [
        "mali",
        "adreno",
        "apple",
        "powervr",
        "intel",              // integrated GPUs
        "iris",
        "hd graphics"
    ];

    return lowEndKeywords.some((kw) => renderer.includes(kw));
}
