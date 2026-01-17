import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/draft/", "/gallery/"],
      },
      // Exception: Allow the specific post page
      {
        userAgent: "*",
        allow: [
          "/posts/transform-your-instagram-bio-with-fancy-fonts-the-complete-guide",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
