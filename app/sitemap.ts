import { MetadataRoute } from "next";
import { defaultUrl, privacyPolicyUrl, termsOfUseUrl } from "@/constants";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: defaultUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: privacyPolicyUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: termsOfUseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}