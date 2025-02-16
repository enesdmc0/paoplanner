import { MetadataRoute } from "next";

/**
 * Web sitesinin robots.txt dosyasını yapılandıran fonksiyon
 * @description Arama motoru botları için erişim kurallarını ve site haritasını tanımlar
 * @returns {MetadataRoute.Robots} Robots.txt yapılandırma nesnesi
 */
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
        sitemap: "https://paoplanner.com/sitemap.xml",
        host: "https://paoplanner.com",
    };
}