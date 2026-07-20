// DashboardSystems-IMG
import financeOverviewImg from "@/images/previews/Dashboard Systems/Finance overview.png"
import transactionsImg from "@/images/previews/Dashboard Systems/Transactions.png"
import reportsImg from "@/images/previews/Dashboard Systems/reports.png"

// UIBlocks-IMG
import transactionTableImg from "@/images/previews/UI Blocks/Transaction Table.png"
import assetPerformanceTableImg from "@/images/previews/UI Blocks/Asset Performance Table.png"
import performanceTrendChartImg from "@/images/previews/UI Blocks/Performance Trend Chart.png"
import comparativeMetricsChartImg from "@/images/previews/UI Blocks/Comparative Metrics Chart.png"
import distributionBreakdownChartImg from "@/images/previews/UI Blocks/Distribution Breakdown Chart.png"
import structuredDataTableImg from "@/images/previews/UI Blocks/Structured Data Table.png"
import activityTimelineListImg from "@/images/previews/UI Blocks/Activity Timeline List.png"

// components-data.ts
import LaunchPreview from "@/components/Docs/HeroSection/Launch/LaunchPreview"
import pathflowImg from "@/images/previews/pathflow.png"
import launchImage from "@/images/previews/launch.png"

// Background Images
import DarkFusionImg from "@/images/previews/Backgrounds/DarkFusion.png"

// Sections
import zenithImg from "@/images/previews/Sections/Zenith.png"
import spotlightImg from "@/images/previews/Sections/Spotlight.png"
import auroraPricingImg from "@/images/previews/Sections/AuroraPricing.png"
import testimonialsFlowImg from "@/images/previews/Sections/TestimonialsFlow.png"
import glideAccordionImg from "@/images/previews/Sections/GlideAccordion.png"
import voiceFlowImg from "@/images/previews/Sections/VoiceFlow.png"
import novaPricingImg from "@/images/previews/Sections/NovaPricing.png"
import stratusImg from "@/images/previews/Sections/Stratus.png"
import auraBaseImg from "@/images/previews/Sections/AuraBaseImg.png"

// Components
import brandsImg from "@/images/previews/Components/Brands.png"
import BrandsLoopImg from "@/images/previews/Components/BrandsLoop.png"

// Text Motion
import linearRevealImg from "@/images/previews/Text Motion/Linear Reveal.png"

// Backgrounds
import PathFlowPreview from "@/components/Docs/Backgrounds/PathFlow/PathFlowPreview"

// Sections
import ZenithPreview from "@/components/Docs/Sections/Zenith/ZenithPreview"
import SpotlightPreview from "@/components/Docs/Sections/Spotlight/SpotlightPreview"
import AuroraPricingPreview from "@/components/Docs/Sections/AuroraPricing/AuroraPricingPreview"
import TestimonialsMainSection from "@/components/Docs/Sections/Testimonial-flow/TestimonialsMainSection"
import GlideAccordioPreview from "@/components/Docs/Sections/GlideAccordion/GlideAccordioPreview"
import VoiceFlowPreview from "@/components/Docs/Sections/VoiceFlow/VoiceFlowPreview"
import NovaPricingPreview from "@/components/Docs/Sections/NovaPricing/NovaPricingPreview"
import StratusPreview from "@/components/Docs/Sections/Stratus/StratusPreview"
import AuraBasePreview from "@/components/Docs/Sections/AuraBase/AuraBasePreview"

// Components
import OriginPreview from "@/components/Docs/Components/Origin/OriginPreview"
import BrandLogoPreview from "@/components/Docs/Components/Brand-Logo/BrandLogoPreview"

// Text Motion
import LinearRevealPreview from "@/components/Docs/Text-Motion/Linear-Reveal/LinearRevealPreview"
import { ComponentType } from "react"
import { StaticImageData } from "next/image"
import DarkFusion from "@/public/Backgrounds/Dark-Fusion/DarkFusion"
import ActivityTimelineListPreview from "@/components/Docs/UI-Blocks/ActivityTimelineList/ActivityTimelineListPreview"
import StructuredDataTablePreview from "@/components/Docs/UI-Blocks/StructuredDataTable/StructuredDataTablePreview"
import DistributionBreakdownChartPreview from "@/components/Docs/UI-Blocks/DistributionBreakdownChart/DistributionBreakdownChartPreview"
import ComparativeMetricsChartPreview from "@/components/Docs/UI-Blocks/ComparativeMetricsChart/ComparativeMetricsChartPreview"
import PerformanceTrendChartPreview from "@/components/Docs/UI-Blocks/PerformanceTrendChart/PerformanceTrendChartPreview"
import AssetPerformanceTablePreview from "@/components/Docs/UI-Blocks/AssetPerformanceTable/AssetPerformanceTablePreview"
import TransactionTablePreview from "@/components/Docs/UI-Blocks/TransactionTable/TransactionTablePreview"
import ReportsPreview from "@/components/Docs/Dashboard-Systems/Reports/ReportsPreview"
import TransactionsPreview from "@/components/Docs/Dashboard-Systems/Transactions/TransactionsPreview"
import FinanceOverviewPreview from "@/components/Docs/Dashboard-Systems/FinanceOverview/FinanceOverviewPreview"

type ComponentEntry = {
    id: string
    component: ComponentType<Record<string, unknown>>  
    image: StaticImageData
    path: string
    title: string
    category: string
}

export const componentsData: ComponentEntry[] = [
    // Dashboard Systems (Highest Priority)
    {
        id: "dashboard-finance-overview",
        component: FinanceOverviewPreview,
        image: financeOverviewImg,
        path: "/docs/dashboard-systems/finance-overview",
        title: "Finance Overview",
        category: "Dashboard System",
    },
    {
        id: "dashboard-transactions",
        component: TransactionsPreview,
        image: transactionsImg,
        path: "/docs/dashboard-systems/transactions",
        title: "Transactions",
        category: "Dashboard System",
    },
    {
        id: "dashboard-reports",
        component: ReportsPreview,
        image: reportsImg,
        path: "/docs/dashboard-systems/reports",
        title: "Reports",
        category: "Dashboard System",
    },

    // UI Blocks
    {
        id: "ui-transaction-table",
        component: TransactionTablePreview,
        image: transactionTableImg,
        path: "/docs/ui-blocks/transaction-table",
        title: "Transaction Table",
        category: "UI Blocks",
    },
    {
        id: "ui-asset-performance-table",
        component: AssetPerformanceTablePreview,
        image: assetPerformanceTableImg,
        path: "/docs/ui-blocks/asset-performance-table",
        title: "Asset Performance Table",
        category: "UI Blocks",
    },
    {
        id: "ui-performance-trend-chart",
        component: PerformanceTrendChartPreview,
        image: performanceTrendChartImg,
        path: "/docs/ui-blocks/performance-trend-chart",
        title: "Performance Trend Chart",
        category: "UI Blocks",
    },
    {
        id: "ui-comparative-metrics-chart",
        component: ComparativeMetricsChartPreview,
        image: comparativeMetricsChartImg,
        path: "/docs/ui-blocks/comparative-metrics-chart",
        title: "Comparative Metrics Chart",
        category: "UI Blocks",
    },
    {
        id: "ui-distribution-breakdown-chart",
        component: DistributionBreakdownChartPreview,
        image: distributionBreakdownChartImg,
        path: "/docs/ui-blocks/distribution-breakdown-chart",
        title: "Distribution Breakdown Chart",
        category: "UI Blocks",
    },
    {
        id: "ui-structured-data-table",
        component: StructuredDataTablePreview,
        image: structuredDataTableImg,
        path: "/docs/ui-blocks/structured-data-table",
        title: "Structured Data Table",
        category: "UI Blocks",
    },
    {
        id: "ui-activity-timeline-list",
        component: ActivityTimelineListPreview,
        image: activityTimelineListImg,
        path: "/docs/ui-blocks/activity-timeline-list",
        title: "Activity Timeline List",
        category: "UI Blocks",
    },

    // Hero
    {
        id: "hero-launch",
        component: LaunchPreview,
        image: launchImage,
        path: "/docs/hero-section/launch",
        title: "Launch",
        category: "Hero Section",
    },

    // Sections
    {
        id: "section-zenith",
        component: ZenithPreview,
        image: zenithImg,
        path: "/docs/sections/zenith",
        title: "Zenith",
        category: "Sections",
    },
    {
        id: "section-spotlight",
        component: SpotlightPreview,
        image: spotlightImg,
        path: "/docs/sections/spotlight",
        title: "Spotlight",
        category: "Sections",
    },
    {
        id: "section-aurora-pricing",
        component: AuroraPricingPreview,
        image: auroraPricingImg,
        path: "/docs/sections/aurora-pricing",
        title: "Aurora Pricing",
        category: "Sections",
    },

    // Components
    {
        id: "component-origin",
        component: OriginPreview,
        image: brandsImg,
        path: "/docs/components/origin",
        title: "Origin",
        category: "Components",
    },
    {
        id: "component-brand-loop",
        component: BrandLogoPreview,
        image: BrandsLoopImg,
        path: "/docs/components/brand-loop",
        title: "Brand Loop",
        category: "Components",
    },

    // Backgrounds
    {
        id: "backgrounds-dark-fusion",
        component: DarkFusion,
        image: DarkFusionImg,
        path: "/docs/backgrounds/dark-fusion",
        title: "Dark Fusion",
        category: "Backgrounds",
    },
    {
        id: "backgrounds-path-flow",
        component: PathFlowPreview,
        image: pathflowImg,
        path: "/docs/backgrounds/path-flow",
        title: "Path Flow",
        category: "Backgrounds",
    },
];