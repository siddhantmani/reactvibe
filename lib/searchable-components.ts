import { sidebarConfig } from "@/lib/sidebar";

// blocks
import { pricingBlocks } from "./blocks/pricing";
import { footerBlocks } from "./blocks/footer";
import { faqBlocks } from "./blocks/faq";
import { testimonialsBlocks } from "./blocks/testimonials";
import { ctaBlocks } from "./blocks/cta";
import { heroBlocks } from "./blocks/hero";
import { navigationBlocks } from "./blocks/navigation";

// dashboard-ui
import { chartBlocks } from "./dashboardUi/chart";
import { listBlocks } from "./dashboardUi/list";
import { tableBlocks } from "./dashboardUi/table";
import { widgetBlocks } from "./dashboardUi/widget";

export type SearchItem = {
    name: string;
    path: string;
    section: string;
    keywords?: string[];
};

export const sidebarSearchItems: SearchItem[] = sidebarConfig.flatMap(
    (section) =>
        section.items.map((item) => ({
            name: item.name,
            path: section.base + item.slug,
            section: section.title,
        }))
);

// blocks
function createBlockSearchItems(
    blocks: {
        name: string;
        slug: string;
        description: string;
        tags: string[];
    }[],
    category: string
): SearchItem[] {
    return blocks.map((block) => ({
        name: block.name,
        path: `/docs/blocks/${category}/${block.slug}`,
        section: `Blocks / ${category}`,
        keywords: [
            ...block.tags,
            block.description,
        ],
    }));
}

// dashboard-ui
function createDashboardSearchItems(
    items: {
        name: string;
        slug: string;
        description: string;
        tags: string[];
    }[],
    category: string
): SearchItem[] {
    return items.map((item) => ({
        name: item.name,
        path: `/docs/dashboard-ui/${category}/${item.slug}`,
        section: `Dashboard UI / ${category}`,
        keywords: [
            ...item.tags,
            item.description,
        ],
    }));
}

const blockSearchItems = [
    ...createBlockSearchItems(ctaBlocks, "cta"),
    ...createBlockSearchItems(faqBlocks, "faq"),
    ...createBlockSearchItems(footerBlocks, "footer"),
    ...createBlockSearchItems(heroBlocks, "hero"),
    ...createBlockSearchItems(navigationBlocks, "navigation"),
    ...createBlockSearchItems(pricingBlocks, "pricing"),
    ...createBlockSearchItems(testimonialsBlocks, "testimonials"),
];


const dashboardSearchItems = [
    ...createDashboardSearchItems(chartBlocks, "chart"),
    ...createDashboardSearchItems(listBlocks, "list"),
    ...createDashboardSearchItems(tableBlocks, "table"),
    ...createDashboardSearchItems(widgetBlocks, "widget"),
];

export const searchableComponents: SearchItem[] = [
    ...sidebarSearchItems,
    ...blockSearchItems,
    ...dashboardSearchItems,
];