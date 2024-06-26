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
            }
        ]
    }
};

export default nextConfig;
