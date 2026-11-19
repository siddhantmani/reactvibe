import { sidebarConfig } from "@/lib/sidebar";
import { generatedSearchItems } from "./search-index.generated";

export type SearchItem = { name: string; path: string; section: string; keywords?: string[] };

export const sidebarSearchItems: SearchItem[] = sidebarConfig.flatMap((section) =>
    section.items.map((item) => ({ name: item.name, path: section.base + item.slug, section: section.title }))
);

export const searchableComponents: SearchItem[] = [...sidebarSearchItems, ...generatedSearchItems];