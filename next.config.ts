import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    // The local Cloudflare worker types are not part of the static Pages build.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
