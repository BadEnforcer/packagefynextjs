/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [{
            protocol: 'https',
            hostname: 'wallpaper.dog'
        },
            {
                protocol: "https",
                hostname: 'images.unsplash.com'
            },
            {
                protocol: "https",
                hostname: 'images.pexels.com'
            }
        ]
    }
};

export default nextConfig;
