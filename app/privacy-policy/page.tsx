import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { privacyPolicyData } from "@/constants";

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-[#e3e4e6]  flex flex-col font-next-sans">
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 p-5 sm:p-10 md:p-16 max-w-4xl mx-auto">
        <Header />
        <div className="text-xs md:text-sm">
          <h2 className="font-bold">Gizlilik Politikası (Privacy Policy)</h2>
          <p className="mt-8">
            Bu Gizlilik Politikası, Pao Planner uygulamasını kullanan kullanıcıların kişisel
            verilerinin nasıl toplandığını, saklandığını ve kullanıldığını açıklamaktadır.
            Uygulamanızın güvenliği ve kullanıcı bilgilerinin korunması en büyük önceliğimizdir.
          </p>
          <p className="font-semibold mt-8">{privacyPolicyData[0].title}</p>
          <p className="mb-5 mt-1">{privacyPolicyData[0].content1}</p>
          {privacyPolicyData[0]?.list &&
            privacyPolicyData[0].list.map((item, index) => <p key={index}>• {item}</p>)}

          <p className="mt-5">{privacyPolicyData[0].content2}</p>

          {privacyPolicyData.slice(1).map((item, index) => (
            <div key={index} className="space-y-1 mt-8">
              <p className="font-semibold"> {item.title} </p>
              <p>{item.content}</p>
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

export default PrivacyPolicy;
