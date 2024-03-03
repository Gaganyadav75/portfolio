/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        WEATHER_API: process.env.WEATHER_API,
      },
};

export default nextConfig;
