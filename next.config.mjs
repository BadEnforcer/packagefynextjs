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
            },
            {
                protocol: "https",
                hostname: 'plus.unsplash.com'
            },
            {
                protocol: "https",
                hostname: 'firebasestorage.googleapis.com'
            }
        ]
    }
};

export default nextConfig;
