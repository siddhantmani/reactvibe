import {
    ArrowLeftRight,
    BarChart2,
    LayoutDashboard,
    PiggyBank,
    SquaresIntersect,
    TrendingUp,
    Wallet,
    type LucideIcon,
} from "lucide-react"

export interface DashboardConfig {
    name: string
    subtitle: string
    href: string
    icon: LucideIcon
    pro: boolean
}

export const DASHBOARDS: DashboardConfig[] = [
    {
        name: "Finance Overview",
        subtitle: "Welcome back, Alex! Here's your financial overview.",
        href: "/docs/dashboard-systems/finance-overview",
        icon: LayoutDashboard,
        pro: false,
    },
    {
        name: "Accounts",
        subtitle: "Manage your connected accounts and balances.",
        href: "/docs/dashboard-systems/accounts",
        icon: Wallet,
        pro: true,
    },
    {
        name: "Transactions",
        subtitle: "Track, filter and review all your transactions.",
        href: "/docs/dashboard-systems/transactions",
        icon: ArrowLeftRight,
        pro: true,
    },
    {
        name: "Budgets",
        subtitle: "Monitor your spending against monthly budgets.",
        href: "/docs/dashboard-systems/budgets",
        icon: PiggyBank,
        pro: true,
    },
    {
        name: "Investments",
        subtitle: "Track your portfolio performance and holdings.",
        href: "/docs/dashboard-systems/investments",
        icon: TrendingUp,
        pro: true,
    },
    {
        name: "Integrations",
        subtitle: "Manage connected services and data syncs.",
        href: "/docs/dashboard-systems/integrations",
        icon: SquaresIntersect,
        pro: true,
    },
    {
        name: "Reports",
        subtitle: "Insights and summaries of your financial activity.",
        href: "/docs/dashboard-systems/reports",
        icon: BarChart2,
        pro: true,
    },
]

/** Finds the dashboard for a URL. Falls back to Finance Overview. */
export function getDashboard(pathname: string | null) {
    return DASHBOARDS.find((d) => pathname?.startsWith(d.href)) ?? DASHBOARDS[0]
}