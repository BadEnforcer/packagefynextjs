const firebase = require('./firebase.mjs');
const fstore = require('firebase/firestore');

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://packagefy.com',
    generateRobotsTxt: false,
    sitemapSize: 5000,
    outDir: './public',
    exclude: ['/admin/*', '/admin'],
    additionalPaths: async (config) => {
        const result = [];
        await getAllDestinationsFunction(result, config);
        return result;
    },
};

module.exports = config;

const getAllDestinationsFunction = async (result, config) => {
    try {
        const querySnapshot = await fstore.getDocs(fstore.collection(firebase.db, 'destinations'));

        console.log("Generating Sitemap")

        querySnapshot.forEach((doc) => {
            const data = doc.data();


            result.push({
                loc: `/destinations/${data.id}`,
                changefreq: 'monthly',
                priority: 0.5,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            });

            data.packages.forEach((p) => {
                result.push({
                    loc: `/destinations/${data.id}/package/${p.id}`,
                    changefreq: 'monthly',
                    priority: 0.5,
                    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                });
            });
        });

        console.log("Sitemap Generated : Result array is :", result)


    } catch (e) {
        console.error('Error in getAllDestinationsFunction', e);
    }
};
