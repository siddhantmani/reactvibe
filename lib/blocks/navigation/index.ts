import OverlayNavPreview from "@/public/Blocks/Navigation/Overlay-Nav/Page";
import OverlayMenuPreview from "@/public/Blocks/Navigation/Overlay-Menu/Page";
import MorphNavPreview from "@/public/Blocks/Navigation/MorphNav/Page";
import MorphMenuPreview from "@/public/Blocks/Navigation/MorphMenu/page";

export interface NavigationBlock {
    name: string;
    slug: string;
    description: string,
    preview: React.ComponentType<{ preview?: boolean }>;
    badge?: string,
    tags: string[],
    createdAt: string
}

export const navigationBlocks: NavigationBlock[] = [
    {
        name: "Overlay Nav",
        slug: "overlay-nav",
        description: "A Responsive Navbar Component with a built-in Navbar Mobile Menu, clean navigation, and dark mode support for modern React websites.",
        preview: OverlayNavPreview,
        badge: "UPDATED",
        tags: ["Navbar", "Mobile Menu", "Sign In Button", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Overlay Menu",
        slug: "overlay-menu",
        description: "A Navbar Menu Component with responsive navigation, mobile menu support, social proof, and built-in dark mode for modern React websites.",
        preview: OverlayMenuPreview,
        badge: "UPDATED",
        tags: ["Mobile Menu", "Sign In Button", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Morph Nav",
        slug: "morph-nav",
        description: "A Responsive Navbar Component that transforms into a floating pill on scroll, with a built-in mobile menu, social proof, and dark mode.",
        preview: MorphNavPreview,
        badge: "NEW",
        tags: ["Mobile Menu", "Sign In Button", "Dark Mode"],
        createdAt: "2026-7-29",
    },
    {
        name: "Morph Menu",
        slug: "morph-menu",
        description: "A Responsive Navbar Component with a built-in Navbar Mobile Menu that transforms into a floating pill on scroll, with social proof and dark mode.",
        preview: MorphMenuPreview,
        badge: "NEW",
        tags: ["Mobile Menu", "Sign In Button", "Dark Mode"],
        createdAt: "2026-7-29",
    },
]