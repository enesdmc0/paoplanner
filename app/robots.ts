import { MetadataRoute } from "next";
import { defaultUrl, sitemapUrl } from "@/constants";


export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/admin",
                    "/private",
                ],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: "/search",
            },
        ],
        sitemap: sitemapUrl,
        host: defaultUrl,
    };
}