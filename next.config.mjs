/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverMinification: true,
  },
  output: "standalone",
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];

    return config;
  },
  images: {
    domains: [
      "images.unsplash.com",
      "ts-production.imgix.net",
      "media.istockphoto.com",
      "hct-marathon-app.s3.ap-south-1.amazonaws.com",
      "storage.googleapis.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
