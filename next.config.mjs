/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        target: 'server',
        output: "standalone",
        API_HOST_URL: process.env.API_HOST_URL
    }
};
export default nextConfig;
