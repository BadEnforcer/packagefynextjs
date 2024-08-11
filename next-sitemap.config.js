/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://packagefy.com',
    generateRobotsTxt: false,
    sitemapSize: 5000,
    outDir: './public',
    // Exclude specific paths from the sitemap
    exclude: ['/admin/*'],
    // Optional: Add a custom function to dynamically include/exclude URLs
    transform: async (config, url) => {
        // Exclude /admin URLs
        if (url.startsWith(`${config.siteUrl}/admin`)) {
            return null; // Exclude this URL
        }
        // Optionally include specific patterns
        if (url.startsWith(`${config.siteUrl}/destination`)) {
            return {
                loc: url,
                changefreq: 'daily',
                priority: 0.7,
            };
        }
        // Include all other URLs
        return {
            loc: url,
            changefreq: 'daily',
            priority: 0.7,
        };
    },
};

module.exports = config;
