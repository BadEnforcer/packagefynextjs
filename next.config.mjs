/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [{
            protocol: 'https',
            hostname: 'wallpaper.dog'
        }]
    }
};

export default nextConfig;
