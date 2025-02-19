import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { defaultUrl, META_DATA, termsOfUseData } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: META_DATA.termsOfUse.title,
  description: META_DATA.termsOfUse.description.slice(0, 160),
  alternates: {
    canonical: META_DATA.termsOfUse.canonical,
  },
  openGraph: {
    title: META_DATA.termsOfUse.title,
    description: META_DATA.termsOfUse.description,
    url: META_DATA.termsOfUse.canonical,
    siteName: META_DATA.termsOfUse.siteName,
    images: [
      {
        url: `${defaultUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: META_DATA.termsOfUse.siteName,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_DATA.termsOfUse.title,
    description: META_DATA.termsOfUse.description,
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

const TermsOfUse = () => {
  return (
    <div className="min-h-screen  bg-[#0a0a0a] text-[#e3e4e6]  flex flex-col font-next-sans">
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 p-5 sm:p-10 md:p-16 max-w-4xl mx-auto">
        <Header />
        <div className="text-xs md:text-sm">
          <h2 className="font-bold">Kullanım Şartları (Terms of Use)</h2>

          {termsOfUseData.map((item, index) => (
            <div key={index} className="mt-8">
              <p className="font-semibold">{item.title} </p>
              {item.content && <p>{item.content}</p>}
              {item.contentList && (
                <>
                  {item.contentList.map((content, index) => (
                    <p className="mt-1" key={index}>
                      • {content}
                    </p>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>

        <Footer />
      </div>

      <svg
        className="pointer-events-none fixed isolate z-50 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default TermsOfUse;
