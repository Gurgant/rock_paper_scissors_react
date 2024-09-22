/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/rock_paper_scissors_react" : "",
  assetPrefix: isProd ? "/rock_paper_scissors_react/" : "",
  images: {
    unoptimized: true, // Required for Next.js to handle images with static exports
  },
};

export default nextConfig;
