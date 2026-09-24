

// import BranchFlowPreview from "@/public/Motion/BranchFlow/Preview";
// import HubFlowPreview from "@/public/Motion/HubFlow/Preview";
// import ConvergePreview from "@/public/Motion/Converge/Preview";
// import NetworkPulsePreview from "@/public/Motion/NetworkPulse/Preview";
// import PipelinePreview from "@/public/Motion/Pipeline/Preview";
// import SignalPreview from "@/public/Motion/Signal/Preview";
// import DataFlowPreview from "@/public/Motion/DataFlow/Preview";
// import ConnectionFlowPreview from "@/public/Motion/ConnectionFlow/Preview";
// import NodeFlowPreview from "@/public/Motion/NodeFlow/Preview";
// import WaveCTAPreview from "@/public/Motion/Wave-CTA/Preview";
// import WaveformPreview from "@/public/Motion/Waveform/Preview";
// import OriginPreview from "@/public/Motion/Origin/Preview";
// import NexusPreview from "@/public/Motion/Nexus/Preview";


// import FinanceOverviewPreview from "@/public/Dashboard-Systems/FinanceOverview/FinanceOverview";
// import RisingLinesPreview from "@/public/Backgrounds/RisingLines/Preview";
// import PathFlowPreview from "@/public/Backgrounds/Path-Flow/Page";
// import SpotlightGridPreview from "@/public/Backgrounds/SpotlightGrid/Page";
// import FluxHeroPreview from "@/public/Blocks/Hero/FluxHero/Page";
// import DistributionBreakdownChart from "@/public/Dashboard-UI/Chart/DistributionBreakdownChart/Preview";
// import ComparativeMetricsChart from "@/public/Dashboard-UI/Chart/ComparativeMetricsChart/Preview";
// import PerformanceTrendChart from "@/public/Dashboard-UI/Chart/PerformanceTrendChart/Preview";

// import ProgressOverviewListPreview from "@/public/Dashboard-UI/List/ProgressOverviewList/Preview";
// import ProgressTrackingListPreview from "@/public/Dashboard-UI/List/ProgressTrackingList/Preview";

// import AdvancedTransactionLogPreview from "@/components/Docs/Dashboard-UI/Table/AdvancedTransactionLog/AdvancedTransactionLogPreview";

// import StructuredDataTablePreview from "@/components/Docs/Dashboard-UI/Table/StructuredDataTable/StructuredDataTablePreview";
// import NotificationPreview from "@/public/Components/NotificationScreen/Preview";

import type { PreviewName } from "@/components/Preview/previewMap";

export interface ComponentsBlock {
    name: string;
    slug: string;
    description: string,
    // preview: React.ComponentType<{ preview?: boolean }>;
    preview: PreviewName;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const componentBlocks: ComponentsBlock[] = [
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
        tags: ["React animated network", "SaaS integration animation"],
        createdAt: "2026-9-24",
    },

    {
        name: "Node Flow",
        slug: "/docs/motion/node-flow",
        description:
            "A lightweight React motion component for visualizing AI agent flows, connected services, network relationships, and node-based workflows with animated connections.",
        preview: "NodeFlow",
        badge: "NEW",
        tags: ["React AI agent flow", "React node graph"],
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
        tags: ["React logo network", "React relationship diagram"],
        createdAt: "2026-9-24",
    },

    {
        name: "Nexus",
        slug: "/docs/motion/nexus",
        description:
            "A customizable motion component for creating connected visual systems with animated paths, particles, and dynamic movement.",
        preview: "Nexus",
        badge: "UPDATED",
        tags: ["Animated integration network", "React connected services"],
        createdAt: "2026-9-24",
    },
    {
        name: "Finance Overview",
        slug: "/docs/dashboard-systems/finance-overview",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: "FinanceOverview",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Rising Lines",
        slug: "/docs/backgrounds/rising-lines",
        description: "A lightweight React background animation with continuously moving lines that can flow upward or downward using a configurable direction prop.",
        preview: "RisingLines",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Path Flow",
        slug: "/docs/backgrounds/path-flow",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: "PathFlow",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Spotlight Grid",
        slug: "/docs/backgrounds/spotlight-grid",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: "SpotlightGrid",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Flux Hero",
        slug: "/docs/blocks/hero/flux-hero",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: "FluxHero",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Wave CTA",
        slug: "/docs/motion/wave-cta",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: "WaveCTA",
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Distribution Dreakdown Chart",
        slug: "/docs/dashboard-ui/chart/distribution-breakdown-chart",
        description: "A reusable React Pie Chart component for Distribution Charts, Business Visualization, and Analytics Dashboards. Perfect for expense tracking, category visualization, and modern data visualization dashboards.",
        preview: "DistributionBreakdownChart",
        badge: "UPDATED",
        tags: ["Pie Chart", "Expense Tracking", "Distribution", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Comparative Metrics Chart",
        slug: "/docs/dashboard-ui/chart/comparative-metrics-chart",
        description: "A reusable Budget vs Actual Chart for React dashboards, designed to compare planned and actual spending with grouped bar charts, budget analysis, and financial performance insights.",
        preview: "ComparativeMetricsChart",
        badge: "UPDATED",
        tags: ["Grouped Bar", "Financial Analysis", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Performance Trend Chart",
        slug: "/docs/dashboard-ui/chart/performance-trend-chart",
        description: "A reusable React Performance Chart designed to build Performance Trend Charts, KPI Trend Charts, Revenue Trend Charts, Dashboard Performance Charts, and interactive analytics dashboards.",
        preview: "PerformanceTrendChart",
        badge: "UPDATED",
        tags: ["Line Chart", "Trend Analysis", "KPI Widget", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Progress Overview List",
        slug: "/docs/dashboard-ui/list/progress-overview-list",
        description: "A reusable React Progress Bar and Progress List Component for displaying project progress, status tracking, and completion metrics in modern dashboard applications.",
        preview: "ProgressOverviewList",
        badge: "UPDATED",
        tags: ["React Progress Bar", "Progress List Component", "React Progress Component", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Progress Tracking List",
        slug: "/docs/dashboard-ui/list/progress-tracking-list",
        description: "A reusable React Goal Progress Tracker component for Progress Tracking Dashboards and Goal Dashboards. Ideal for savings tracking, milestone tracking, progress lists, and dashboard widgets.",
        preview: "ProgressTrackingList",
        badge: "UPDATED",
        tags: ["Progress Bar", "React Goal Component", "Savings Tracker", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Advanced Transaction Log",
        slug: "/docs/dashboard-ui/table/advanced-transaction-log",
        description: "A reusable React Transaction Log component for fintech dashboards, featuring transaction history, payment records, activity tracking, advanced filtering, and responsive data tables.",
        preview: "AdvancedTransactionLog",
        badge: "UPDATED",
        tags: ["table component React", "transaction management", "React data table component", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Structured Data Table",
        slug: "/docs/dashboard-ui/table/structured-data-table",
        description: "A reusable Budget Tracking Table for React dashboards, designed to build Expense Tracking Tables, Budget Overview Tables, Budget Allocation Tables, Budget Status Tables, and responsive Finance Dashboard Tables.",
        preview: "StructuredDataTable",
        badge: "UPDATED",
        tags: ["Budget Tracking Table", "Financial Data Table", "Budget Overview Table", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Notification Screen",
        slug: "/docs/components/notification-screen",
        description: "Notification Screen is an interactive iPhone-style notification preview built for showcasing push notifications, alerts, invoices, payments, and app updates. Users can scroll through the notifications just like they would on a real phone.",
        preview: "NotificationScreen",
        badge: "UPDATED",
        tags: ["Budget Tracking Table", "Financial Data Table", "Budget Overview Table", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]