
import NotificationScreeniPhoneDuoPreview from "@/public/Components/NotificationScreen/NotificationScreenIphoneDuo";
import NotificationScreenPreview from "@/public/Components/NotificationScreen/Page";
import SplitFAQPreview from "@/public/Blocks/FAQ/Split-FAQ/Preview";

export interface builtWithFlowlistBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const builtWithFlowlist: builtWithFlowlistBlock[] = [
    {
        name: "iPhone Duo Notification Screen",
        slug: "/docs/components/notification-screen",
        description: "Notification Screen is an interactive iPhone Duo notification preview built for showcasing push notifications, alerts, invoices, payments, and app updates. Users can scroll through the notifications just like they would on a real phone.",
        preview: NotificationScreeniPhoneDuoPreview,
        badge: "NEW",
        tags: ["React notification preview", "React iPhone notification", "IOS notification preview", "Dark Mode"],
        createdAt: "2026-7-29",
    },  
    {
        name: "iPhone Notification Screen",
        slug: "/docs/components/notification-screen",
        description: "Notification Screen is an interactive iPhone-style notification preview built for showcasing push notifications, alerts, invoices, payments, and app updates. Users can scroll through the notifications just like they would on a real phone.",
        preview: NotificationScreenPreview,
        badge: "NEW",
        tags: ["React notification preview", "React iPhone notification", "IOS notification preview", "Dark Mode"],
        createdAt: "2026-7-29",
    },  
    {
        name: "Split FAQ",
        slug: "/docs/blocks/faq/split-faq",
        description: "A responsive split FAQ section that pairs a strong headline and supporting copy with a structured question-and-answer layout.",
        preview: SplitFAQPreview,
        badge: "NEW",
        tags: ["react FAQ section", "React FAQ component", "FAQ UI component", "Dark Mode"],
        createdAt: "2026-7-29",
    },  
]