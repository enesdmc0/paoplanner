import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { termsOfUseData } from "@/constants";

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
