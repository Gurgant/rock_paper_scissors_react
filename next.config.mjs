/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? "/rock_paper_scissors_react" : "", // Base path for GitHub Pages
  assetPrefix: isProd ? "/rock_paper_scissors_react/" : "", // Ensures assets load correctly
  images: {
    unoptimized: true, // Disable image optimization, which is required for static exports
  },
};

export default nextConfig;
