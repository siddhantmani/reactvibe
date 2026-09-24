
import InsightRecommendationCardPreview from "@/public/Dashboard-UI/Widget/InsightRecommendationCard/Preview";

export interface WidgetBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const widgetBlocks: WidgetBlock[] = [
    {
        name: "Insight Recommendation Card",
        slug: "insight-recommendation-card",
        description: "A reusable React Recommendation & Insight Card for dashboards, designed to build Dashboard Recommendation Cards, Analytics Recommendation Cards, Business Insight Cards, Financial Recommendation Cards, and intelligent recommendation widgets.",
        preview: InsightRecommendationCardPreview,
        badge: "UPDATED",
        tags: ["React Recommendation Card", "Analytics Recommendation Card", "Business Insight Card", "Dark Mode"],
        createdAt: "2026-7-29",
    }
]