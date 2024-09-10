/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    target: 'server',
    env: {
        API_HOST_URL: process.env.API_HOST_URL
    }
};
export default nextConfig;
