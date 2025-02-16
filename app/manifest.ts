import { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Pao Planner",
        short_name: "Pao Planner",
        description: "Pao Planner ile yapılacaklar listenizi oluşturun, saat ekleyin ve yaklaşan görevlerinizi anında görün. Tüm verileriniz cihazınızda şifrelenmiş olarak saklanır, internet gerektirmez ve üçüncü taraflarla paylaşılmaz. Basit, güvenli ve hızlı bir deneyim için şimdi keşfedin!",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        orientation: "portrait",
        scope: "/",
        lang: "tr",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64",
                type: "image/x-icon",
                purpose: "maskable",
            },
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    };
}