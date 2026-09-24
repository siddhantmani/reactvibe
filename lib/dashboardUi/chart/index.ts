
import DistributionBreakdownChart from "@/public/Dashboard-UI/Chart/DistributionBreakdownChart/Preview";
import ComparativeBarChart from "@/public/Dashboard-UI/Chart/ComparativeBarChart/ComparativeBarChartPublicPreview";
import ComparativeMetricsChart from "@/public/Dashboard-UI/Chart/ComparativeMetricsChart/Preview";
import PerformanceTrendChart from "@/public/Dashboard-UI/Chart/PerformanceTrendChart/Preview";

export interface ChartBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const chartBlocks: ChartBlock[] = [
    {
        name: "Comparative Bar Chart",
        slug: "comparative-bar-chart",
        description: "A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.",
        preview: ComparativeBarChart,
        badge: "UPDATED",
        tags: ["Bar Chart", "Cash Flow", "Analytics", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Distribution Dreakdown Chart",
        slug: "distribution-breakdown-chart",
        description: "A reusable React Pie Chart component for Distribution Charts, Business Visualization, and Analytics Dashboards. Perfect for expense tracking, category visualization, and modern data visualization dashboards.",
        preview: DistributionBreakdownChart,
        badge: "UPDATED",
        tags: ["Pie Chart", "Expense Tracking", "Distribution", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Comparative Metrics Chart",
        slug: "comparative-metrics-chart",
        description: "A reusable Budget vs Actual Chart for React dashboards, designed to compare planned and actual spending with grouped bar charts, budget analysis, and financial performance insights.",
        preview: ComparativeMetricsChart,
        badge: "UPDATED",
        tags: ["Grouped Bar", "Financial Analysis", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Performance Trend Chart",
        slug: "performance-trend-chart",
        description: "A reusable React Performance Chart designed to build Performance Trend Charts, KPI Trend Charts, Revenue Trend Charts, Dashboard Performance Charts, and interactive analytics dashboards.",
        preview: PerformanceTrendChart,
        badge: "UPDATED",
        tags: ["Line Chart", "Trend Analysis", "KPI Widget", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]