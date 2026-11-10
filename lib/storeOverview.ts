

import type { PreviewName } from "@/components/Preview/previewMap";

import spotforge from "@/images/spotforge.gif";
import rankforge from "@/images/rankforge.gif";
import taskforge from "@/images/taskforge1.gif";

import { StaticImageData } from "next/image";

export interface storesBlock {
    name: string;
    slug: string;
    description: string;
    /** Live component preview (for components) */
    preview?: PreviewName;
    /** Or a GIF / image */
    image?: string | StaticImageData;
    /** Or a video (recommended over GIF, see below) */
    video?: string;
    /** First frame shown while the video loads */
    poster?: string;
    badge?: string;
    createdAt: string;
}

export const storeOverview: storesBlock[] = [
    {
        name: "TaskForge",
        slug: "/docs/templates/taskforge",
        description: "Finance Dashboard Template for Modern SaaS.",
        image: taskforge,
        badge: "NEW",
        createdAt: "2026-11-01",
    },
    {
        name: "SpotForge",
        slug: "/docs/templates/spotforge",
        description: "Advertising Marketplace SaaS Template.",
        image: spotforge,
        badge: "NEW",
        createdAt: "2026-11-01",
    },
    {
        name: "RankForge",
        slug: "/docs/templates/rankforge",
        description: "Competitive Leaderboard SaaS Template.",
        image: rankforge,
        badge: "NEW",
        createdAt: "2026-11-01",
    },
]