import FinanceOverviewPreview from "@/public/Dashboard-Systems/FinanceOverview/page";

export interface builtWithGlowBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const builtWithGlow: builtWithGlowBlock[] = [
    {
        name: "Finance Overview",
        slug: "/docs/dashboard-systems/finance-overview",
        description: "A production-ready React Finance Dashboard Template featuring Budget Dashboard Templates, Expense Dashboard Templates, Cash Flow Dashboards, Financial Analytics Dashboards, and modern financial management workflows.",
        preview: FinanceOverviewPreview,
        badge: "UPDATED",
        tags: ["React Finance Dashboard ", "Finance Dashboard Template ", "Expense Tracking Dashboard", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]