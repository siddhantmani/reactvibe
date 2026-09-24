

import type { PreviewName } from "@/components/Preview/previewMap";

export interface motionsBlock {
    name: string;
    slug: string;
    description: string,
    preview: PreviewName;
    // preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const motionBlocks: motionsBlock[] = [
    {
        name: "Branch Flow",
        slug: "/docs/motion/branch-flow",
        description: "A customizable Workflow Flow Animation with particles traveling along branching paths to visualize processes, pipelines, data flows, and connected systems.",
        preview: "BranchFlow",
        badge: "New",
        tags: ["Workflow Flow Animation", "Logo Network Animation"],
        createdAt: "2026-9-24",
    },
    {
        name: "Hub Flow",
        slug: "/docs/motion/hub-flow",
        description: "A customizable Integration Network Animation connecting brands through flowing paths and particles, with active highlights for SaaS integrations and partner networks.",
        preview: "HubFlow",
        badge: "NEW",
        tags: ["Integration Network Animation", "Partner Network Animation"],
        createdAt: "2026-9-24",
    },
    {
        name: "Converge",
        slug: "/docs/motion/converge",
        description:
            "A customizable AI Orchestration Animation where flowing particles converge through multiple paths to visualize AI workflows, pipelines, and process flows.",
        preview: "Converge",
        badge: "NEW",
        tags: ["AI Orchestration Animation", "AI Workflow Animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Network Pulse",
        slug: "/docs/motion/network-pulse",
        description:
            "A Network Flow Animation that highlights active connections with flowing particles and rotating network states, revealing related information for each connection.",
        preview: "NetworkPulse",
        badge: "NEW",
        tags: ["Animated Network Flow", "Network Flow Animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Pipeline",
        slug: "/docs/motion/pipeline",
        description:
            "A React Workflow Pipeline Animation component for visualizing data flows, workflows, processes, integrations, and multi-step systems.",
        preview: "Pipeline",
        badge: "NEW",
        tags: ["Data Pipeline Animation", "Workflow Pipeline Animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Signal",
        slug: "/docs/motion/signal",
        description:
            "Signal is a customizable React flow animation that uses particles traveling along paths to visualize data, workflows, networks, and active connections.",
        preview: "Signal",
        badge: "NEW",
        tags: ["AI Workflow Animation", "Agent Flow Animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Data Flow",
        slug: "/docs/motion/data-flow",
        description:
            "An animated React data flow component for visualizing integrations, data pipelines, AI workflows, and connections between products or services.",
        preview: "DataFlow",
        badge: "NEW",
        tags: ["React Data Flow Component", "React Data Flow Visualization"],
        createdAt: "2026-9-24",
    },
    {
        name: "Connection Flow",
        slug: "/docs/motion/connection-flow",
        description:
            "A smooth React animation for visualizing data flows, SaaS integrations, API connections, and connected systems with curved paths and continuously moving particles.",
        preview: "ConnectionFlow",
        badge: "NEW",
        tags: ["React animated network","SaaS integration animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Node Flow",
        slug: "/docs/motion/node-flow",
        description:
            "A lightweight React motion component for visualizing AI agent flows, connected services, network relationships, and node-based workflows with animated connections.",
        preview: "NodeFlow",
        badge: "NEW",
        tags: ["React AI agent flow","React node graph"],
        createdAt: "2026-9-24",
    },

    {
        name: "Wave CTA",
        slug: "/docs/motion/wave-cta",
        description:
            "An interactive React Wave Background CTA built with Framer Motion in React, featuring a fluid wave animation that improves user engagement in modern landing pages and UI components.",
        preview: "WaveCTA",
        badge: "UPDATED",
        tags: ["React wave background"],
        createdAt: "2026-9-24",
    },

    {
        name: "Waveform",
        slug: "/docs/motion/waveform",
        description:
            "A lightweight React waveform component designed to add subtle motion and visual rhythm to modern interfaces. Ideal for hero sections, audio visuals, or loading states, it brings dynamic feedback without heavy dependencies.",
        preview: "Waveform",
        badge: "UPDATED",
        tags: ["React wave background"],
        createdAt: "2026-9-24",
    },

    {
        name: "Origin",
        slug: "/docs/motion/origin",
        description:
            "An animated network component for visually connecting apps, services, brands, or other entities around a central origin. Use it for SaaS integrations, partner ecosystems, connected services, relationship diagrams, or product networks.",
        preview: "Origin",
        badge: "UPDATED",
        tags: ["React logo network","React relationship diagram"],
        createdAt: "2026-9-24",
    },

    {
        name: "Nexus",
        slug: "/docs/motion/nexus",
        description:
            "A customizable motion component for creating connected visual systems with animated paths, particles, and dynamic movement.",
        preview: "Nexus",
        badge: "UPDATED",
        tags: ["Animated integration network","React connected services"],
        createdAt: "2026-9-24",
    },
]