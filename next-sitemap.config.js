/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://reactvibe.com",
    generateRobotsTxt: true,

    sitemapSize: 5000,
    generateIndexSitemap: true,

    changefreq: "weekly",
    priority: 0.7,

    trailingSlash: false,

    // Only exclude what exists and should NOT be crawled
    exclude: [
        "/api/*"   // API routes should not be indexed
    ],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                disallow: ["/api"],
            }
        ],
    },
};
