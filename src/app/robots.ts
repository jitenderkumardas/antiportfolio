import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";

  if (isProd) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/private/",
        },
      ],
      sitemap: "https://antiportfolio-theta.vercel.app/sitemap.xml",
    };
  }

  // For preview/staging deployments
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
