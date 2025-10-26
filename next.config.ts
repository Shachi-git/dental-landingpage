import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/copyparty/u/johnpaul.olimpo/dental-implant-usa-form-page",
  assetPrefix: "/copyparty/u/johnpaul.olimpo/dental-implant-usa-form-page/",
};

export default nextConfig;