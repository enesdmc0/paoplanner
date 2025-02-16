import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://paoplanner.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://paoplanner.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://paoplanner.com/terms-of-use',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}