"use client";

import {
    previewMap,
    type PreviewName,
} from "./previewMap";

interface ClientPreviewProps {
    name: PreviewName;
    preview?: boolean;
}

export default function ClientPreview({
    name,
    preview = false,
}: ClientPreviewProps) {
    const Preview = previewMap[name];

    if (!Preview) {
        return null;
    }

    return <Preview preview={preview} />;
}