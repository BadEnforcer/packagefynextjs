/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://packagefy.com',
    generateRobotsTxt: false,
    sitemapSize: 5000, // Adjust this to include all URLs in one file if desired
    outDir: './public',
};

module.exports = config;

