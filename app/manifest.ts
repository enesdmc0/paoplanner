import { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/constants";


export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteName,
        short_name: siteName,
        description: siteDescription,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        orientation: "portrait",
        scope: "/",
        lang: "tr",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
                purpose: "maskable",
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    };
}