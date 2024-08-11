/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://packagefy.com', // Replace with your site's URL
    generateRobotsTxt: false, // (optional) Generate a robots.txt file
    // sitemapSize: 5000, // (optional) Limits the number of URLs in a single sitemap file
    outDir: './public', // (optional) The output directory for the generated sitemap files
}

module.exports = config;
