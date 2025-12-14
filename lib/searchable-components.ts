import { sidebarConfig } from "@/lib/sidebar";

export type SearchItem = {
    name: string;
    path: string;
    section: string;
};

export const searchableComponents: SearchItem[] = sidebarConfig.flatMap(
    (section) =>
        section.items.map((item) => ({
            name: item.name,
            path: section.base + item.slug,
            section: section.title,
        }))
);
