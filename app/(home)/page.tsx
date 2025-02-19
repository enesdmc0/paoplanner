import { Metadata } from "next";
import { HomeClient } from "./client";
import { defaultUrl, META_DATA } from "@/constants";

export const metadata: Metadata = {
  title: META_DATA.home.title,
  description: META_DATA.home.description.slice(0, 160),
  alternates: {
    canonical: META_DATA.home.canonical,
  },
  openGraph: {
    title: META_DATA.home.title,
    description: META_DATA.home.description,
    url: META_DATA.home.canonical,
    siteName: "Ana Sayfa",
    images: [
      {
        url: `${defaultUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: META_DATA.home.siteName,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_DATA.home.title,
    description: META_DATA.home.description,
    images: [`${defaultUrl}/og-image.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Home = () => {
  return <HomeClient />;
};

export default Home;
