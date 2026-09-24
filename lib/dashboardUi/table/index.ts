
import StructuredDataTablePreview from "@/components/Docs/Dashboard-UI/Table/StructuredDataTable/StructuredDataTablePreview";
import TransactionTable from "@/public/Dashboard-UI/Table/TransactionTable/Preview";
import EntityManagementTablePreview from "@/components/Docs/Dashboard-UI/Table/EntityManagementTable/EntityManagementTablePreview";
import AssetPerformanceTablePreview from "@/components/Docs/Dashboard-UI/Table/AssetPerformanceTable/AssetPerformanceTablePreview";
import AdvancedTransactionLogPreview from "@/components/Docs/Dashboard-UI/Table/AdvancedTransactionLog/AdvancedTransactionLogPreview";

export interface TableBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const tableBlocks: TableBlock[] = [
    {
        name: "Transaction Table",
        slug: "transaction-table",
        description: "A reusable React Data Table component for Transaction Tables, Transaction History, and Finance Dashboards. Ideal for payment history, transaction management, data grids, and modern financial applications.",
        preview: TransactionTable,
        badge: "UPDATED",
        tags: ["Transaction Table", "Transaction History", "React Table Component ", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Structured Data Table",
        slug: "structured-data-table",
        description: "A reusable Budget Tracking Table for React dashboards, designed to build Expense Tracking Tables, Budget Overview Tables, Budget Allocation Tables, Budget Status Tables, and responsive Finance Dashboard Tables.",
        preview: StructuredDataTablePreview,
        badge: "UPDATED",
        tags: ["Budget Tracking Table", "Financial Data Table", "Budget Overview Table", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Entity Management Table",
        slug: "entity-management-table",
        description: "A reusable React Entity Management Table component for admin dashboards, featuring account management, user management, responsive data tables, and advanced filtering with sorting controls.",
        preview: EntityManagementTablePreview,
        badge: "UPDATED",
        tags: ["user management table", "account management table", "data table React", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Asset Performance Table",
        slug: "asset-performance-table",
        description: "A reusable React Portfolio Table for investment dashboards, designed to build Portfolio Holdings Tables, Asset Performance Tables, Investment Portfolio Tables, Portfolio Analytics Tables, and responsive portfolio dashboards.",
        preview: AssetPerformanceTablePreview,
        badge: "UPDATED",
        tags: ["Portfolio Performance Table", "Portfolio Holdings Table", "react Asset Table", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Advanced Transaction Log",
        slug: "advanced-transaction-log",
        description: "A reusable React Transaction Log component for fintech dashboards, featuring transaction history, payment records, activity tracking, advanced filtering, and responsive data tables.",
        preview: AdvancedTransactionLogPreview,
        badge: "UPDATED",
        tags: ["table component React", "transaction management", "React data table component", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]