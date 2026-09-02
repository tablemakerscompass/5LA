/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local brand + editorial assets are optimized by next/image.
    // Remote patterns can be added here when final photography is hosted externally.
    formats: ["image/avif", "image/webp"],
  },

  /**
   * The Experience Sectors routes were retired when Business became the
   * "What We Do" flow and Technology, Training and Media moved onto the
   * company pages that do that work. Permanent, because the old URLs are
   * indexed and linked from outside the site.
   */
  async redirects() {
    return [
      // Per spec the overview goes to the homepage, not /what-we-do.
      { source: "/experience-sectors", destination: "/", statusCode: 301 },
      {
        source: "/experience-sectors/business",
        destination: "/what-we-do",
        statusCode: 301,
      },
      {
        source: "/experience-sectors/technology",
        destination: "/our-companies/velaxity",
        statusCode: 301,
      },
      {
        source: "/experience-sectors/training",
        destination: "/our-companies/5la-academy",
        statusCode: 301,
      },
      {
        source: "/experience-sectors/media",
        destination: "/our-companies/georgia-b-media-group",
        statusCode: 301,
      },
      // Anything else that lived under the old section.
      {
        source: "/experience-sectors/:path*",
        destination: "/what-we-do",
        statusCode: 301,
      },

      /*
       * The Our Companies overview was retired. The individual company pages
       * stay live at their existing URLs — so this matches the overview only,
       * never /our-companies/:slug.
       */
      { source: "/our-companies", destination: "/", statusCode: 301 },

      /* Aunt Sarah's Girls was promoted to a top-level route. */
      {
        source: "/our-companies/aunt-sarahs-girls",
        destination: "/aunt-sarahs-girls",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
