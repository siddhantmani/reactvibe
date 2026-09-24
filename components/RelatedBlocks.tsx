import Link from "next/link";

// Define the shape of your block object so TypeScript is happy
export interface BlockItem {
    slug: string;
    name: string;
    description: string;
    badge?: string;
    tags: string[];
    preview?: React.ComponentType;
}

interface RelatedBlocksProps {
    /** The slug of the currently active page (e.g., "prime") */
    currentSlug: string;
    /** The array of blocks for this specific category */
    blocks: BlockItem[];
    /** The base URL path for the links (e.g., "/docs/blocks/pricing") */
    basePath: string;
    /** The title to display above the cards */
    title?: string;
}

export default function RelatedBlocks({
    currentSlug,
    blocks,
    basePath,
    title = "Explore more blocks" // Default fallback title
}: RelatedBlocksProps) {

    // 1. Filter out the block the user is currently viewing
    const otherBlocks = blocks.filter((block) => block.slug !== currentSlug);

    // If there are no other blocks, hide the section
    if (otherBlocks.length === 0) return null;

    return (
        <div className="mt-24 pt-10 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherBlocks.map((block) => (
                    <Link
                        key={block.slug}
                        // Dynamically construct the route based on the category!
                        href={`${basePath}/${block.slug}`}
                        className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#0b0b0b] overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                    >
                        {/* Visual Placeholder for the Preview Image/Component */}
                        <div className="h-68 z-0 bg-gray-50 dark:bg-[#020202] border-b border-gray-200 dark:border-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
                            {block.preview ? (
                                <div className="absolute top-0 left-4 h-fit w-[1000px] origin-top-left scale-[0.35] pointer-events-none">
                                    <block.preview />
                                </div>
                            ) : (
                                <div className="text-sm font-medium text-gray-400 transition-transform group-hover:scale-105">
                                    Preview {block.name}
                                </div>
                            )}
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex flex-col flex-1 z-50">
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {block.name}
                                </h4>
                                {block.badge && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-white bg-indigo-600 rounded-full uppercase">
                                        {block.badge}
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                                {block.description}
                            </p>

                            {/* Tags */}
                            <div className="mt-auto flex flex-wrap gap-2">
                                {block.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-xs font-medium border text-gray-600 dark:text-gray-300 rounded-2xl"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}