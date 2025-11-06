import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Use an env var so you can deploy under any subpath without editing code
  basePath,
  // Make Next’s runtime assets load correctly from that subpath
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Helpful for static hosting under subfolders
  trailingSlash: true,
};

export default nextConfig;
