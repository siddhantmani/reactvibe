
import ProgressOverviewListPreview from "@/public/Dashboard-UI/List/ProgressOverviewList/Preview";
import ScheduledPaymentsListPreview from "@/public/Dashboard-UI/List/ScheduledPaymentsList/Preview";
import ProgressTrackingListPreview from "@/public/Dashboard-UI/List/ProgressTrackingList/Preview";
import ActivityTimelineListPreview from "@/public/Dashboard-UI/List/ActivityTimelineList/Preview";
import AlertNotificationListPreview from "@/public/Dashboard-UI/List/AlertNotificationList/Preview";
import CompactActivityFeedPreview from "@/public/Dashboard-UI/List/CompactActivityFeed/Preview";


export interface ListBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const listBlocks: ListBlock[] = [
    {
        name: "Progress Overview List",
        slug: "progress-overview-list",
        description: "A reusable React Progress Bar and Progress List Component for displaying project progress, status tracking, and completion metrics in modern dashboard applications.",
        preview: ProgressOverviewListPreview,
        badge: "UPDATED",
        tags: ["React Progress Bar", "Progress List Component", "React Progress Component", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Scheduled Payments List",
        slug: "scheduled-payments-list",
        description: "A reusable React Payment List component for Billing Dashboards, Payment Management, and Financial Dashboards. Ideal for payment history, billing lists, subscription management, and expense tracking.",
        preview: ScheduledPaymentsListPreview,
        badge: "UPDATED",
        tags: ["Subscription Management", "Payment List", "Bill Management ", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Progress Tracking List",
        slug: "progress-tracking-list",
        description: "A reusable React Goal Progress Tracker component for Progress Tracking Dashboards and Goal Dashboards. Ideal for savings tracking, milestone tracking, progress lists, and dashboard widgets.",
        preview: ProgressTrackingListPreview,
        badge: "UPDATED",
        tags: ["Progress Bar", "React Goal Component", "Savings Tracker", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Activity Timeline List",
        slug: "activity-timeline-list",
        description: "A reusable React Activity Timeline component for dashboard activity feeds, recent activity, event history, audit logs, and user event timelines in modern React applications.",
        preview: ActivityTimelineListPreview,
        badge: "UPDATED",
        tags: ["System Activity Log", "activity log", " Event History Timeline", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Alert Notification List",
        slug: "alert-notification-list",
        description: "A reusable Dashboard Alert List for React applications, designed to build Dashboard Notification Lists, Budget Notification Lists, Budget Warning Lists, Financial Alert Lists, and responsive React Dashboard Alerts.",
        preview: AlertNotificationListPreview,
        badge: "UPDATED",
        tags: ["Dashboard Alert List", "React Alert List", "Alert Notification List", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Compact Activity Feed",
        slug: "compact-activity-feed",
        description: "A reusable Dashboard Activity Feed component for React applications, featuring recent activity, account activity, payment history, transaction updates, and live dashboard feeds.",
        preview: CompactActivityFeedPreview,
        badge: "UPDATED",
        tags: ["Activity Feed Card", "Account Activity Feed", "Payment History Feed", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]