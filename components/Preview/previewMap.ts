import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type PreviewProps = {
    preview?: boolean;
};

const createPreview = (
    loader: () => Promise<{
        default: ComponentType<PreviewProps>;
    }>
) =>
    dynamic<PreviewProps>(loader, {
        ssr: false,
    });

export const previewMap = {
    // =========================
    // MOTION
    // =========================

    BranchFlow: createPreview(
        () => import("@/public/Motion/BranchFlow/Preview")
    ),

    HubFlow: createPreview(
        () => import("@/public/Motion/HubFlow/Preview")
    ),

    Converge: createPreview(
        () => import("@/public/Motion/Converge/Preview")
    ),

    NetworkPulse: createPreview(
        () => import("@/public/Motion/NetworkPulse/Preview")
    ),

    Pipeline: createPreview(
        () => import("@/public/Motion/Pipeline/Preview")
    ),

    Signal: createPreview(
        () => import("@/public/Motion/Signal/Preview")
    ),

    DataFlow: createPreview(
        () => import("@/public/Motion/DataFlow/Preview")
    ),

    ConnectionFlow: createPreview(
        () => import("@/public/Motion/ConnectionFlow/Preview")
    ),

    NodeFlow: createPreview(
        () => import("@/public/Motion/NodeFlow/Preview")
    ),

    WaveCTA: createPreview(
        () => import("@/public/Motion/Wave-CTA/Preview")
    ),

    Waveform: createPreview(
        () => import("@/public/Motion/Waveform/Preview")
    ),

    Origin: createPreview(
        () => import("@/public/Motion/Origin/Preview")
    ),

    Nexus: createPreview(
        () => import("@/public/Motion/Nexus/Preview")
    ),

    // =========================
    // DASHBOARD SYSTEMS
    // =========================

    FinanceOverview: createPreview(
        () =>
            import(
                "@/public/Dashboard-Systems/FinanceOverview/FinanceOverview"
            )
    ),

    // =========================
    // BACKGROUNDS
    // =========================

    RisingLines: createPreview(
        () => import("@/public/Backgrounds/RisingLines/Preview")
    ),

    PathFlow: createPreview(
        () => import("@/public/Backgrounds/Path-Flow/Page")
    ),

    SpotlightGrid: createPreview(
        () => import("@/public/Backgrounds/SpotlightGrid/Page")
    ),

    // =========================
    // HERO BLOCKS
    // =========================

    FluxHero: createPreview(
        () => import("@/public/Blocks/Hero/FluxHero/Page")
    ),

    // =========================
    // DASHBOARD UI — CHARTS
    // =========================

    DistributionBreakdownChart: createPreview(
        () =>
            import(
                "@/public/Dashboard-UI/Chart/DistributionBreakdownChart/Preview"
            )
    ),

    ComparativeMetricsChart: createPreview(
        () =>
            import(
                "@/public/Dashboard-UI/Chart/ComparativeMetricsChart/Preview"
            )
    ),

    PerformanceTrendChart: createPreview(
        () =>
            import(
                "@/public/Dashboard-UI/Chart/PerformanceTrendChart/Preview"
            )
    ),

    // =========================
    // DASHBOARD UI — LISTS
    // =========================

    ProgressOverviewList: createPreview(
        () =>
            import(
                "@/public/Dashboard-UI/List/ProgressOverviewList/Preview"
            )
    ),

    ProgressTrackingList: createPreview(
        () =>
            import(
                "@/public/Dashboard-UI/List/ProgressTrackingList/Preview"
            )
    ),

    // =========================
    // DASHBOARD UI — TABLES
    // =========================

    AdvancedTransactionLog: createPreview(
        () =>
            import(
                "@/components/Docs/Dashboard-UI/Table/AdvancedTransactionLog/AdvancedTransactionLogPreview"
            )
    ),

    StructuredDataTable: createPreview(
        () =>
            import(
                "@/components/Docs/Dashboard-UI/Table/StructuredDataTable/StructuredDataTablePreview"
            )
    ),

    // =========================
    // COMPONENTS
    // =========================

    NotificationScreen: createPreview(
        () => import("@/public/Components/NotificationScreen/Preview")
    ),
} as const;

export type PreviewName = keyof typeof previewMap;