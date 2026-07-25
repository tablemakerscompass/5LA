/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local brand + editorial assets are optimized by next/image.
    // Remote patterns can be added here when final photography is hosted externally.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
