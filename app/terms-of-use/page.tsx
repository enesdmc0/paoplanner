import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "1. Giriş",
    content:
      "Bu Kullanım Şartları, Pao Planner uygulamasının kullanımını düzenler. Uygulamayı indirerek ve kullanarak, bu şartları kabul etmiş olursunuz. Eğer bu şartları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.",
  },
  {
    title: "2. Hizmet Açıklaması",
    content:
      "Pao Planner, kullanıcıların günlük notlarını, toplantılarını ve yapılacaklarını takip etmelerini sağlayan bir uygulamadır. Uygulama, tamamen cihazın yerel hafızasında çalışır ve herhangi bir veri sunuculara veya üçüncü taraflara gönderilmez.",
  },
  {
    title: "3. Kullanıcı Sorumlulukları",
    contentList: [
      "Kullanıcı, uygulamayı yalnızca kişisel kullanım amacıyla kullanmayı kabul eder.",
      "Kullanıcı, uygulamayı yasalara aykırı veya kötü amaçlı faaliyetler için kullanmayacağını kabul eder.",
      "Kullanıcı, hesap bilgilerini güvenli bir şekilde saklamaktan sorumludur.",
    ],
  },
  {
    title: "4. Veri Güvenliği ve Gizlilik",
    contentList: [
      "Uygulama, kullanıcı verilerini şifrelenmiş olarak cihazda saklar ve hiçbir şekilde üçüncü taraflarla paylaşmaz.",
      "Gizlilik Politikamız, kullanıcı verilerinin nasıl işlendiğine dair daha fazla bilgi sağlar. (Bkz. [Gizlilik Politikası])",
    ],
  },
  {
    title: "5. Sorumluluk Reddi (Disclaimer)",
    contentList: [
      "Uygulama “olduğu gibi” (as-is) sunulmaktadır ve herhangi bir garanti verilmemektedir.",
      "Geliştirici, veri kaybı, yazılım hataları veya kullanıcı hatalarından doğabilecek herhangi bir zarardan sorumlu tutulamaz.",
    ],
  },
  {
    title: "6. Güncellemeler ve Değişiklikler",
    contentList: [
      "Bu kullanım şartları zaman zaman güncellenebilir. Güncellemeler, uygulama üzerinden veya web sitemiz aracılığıyla duyurulacaktır.",
    ],
  },
  {
    title: "7. İletişim",
    content:
      "Herhangi bir sorunuz varsa, bizimle enesdmc@icloud.com üzerinden iletişime geçebilirsiniz.",
  },
];
const TermsOfUse = () => {
  return (
    <div className="min-h-screen  bg-[#0a0a0a] text-[#e3e4e6]  flex flex-col font-next-sans">
      <div className="relative z-10 flex flex-col items-center gap-10 p-20 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-5">
          <Image
            alt="Pao Planner Logo"
            src="/logo.svg"
            className="rounded-lg"
            width={60}
            height={60}
          />
          <h1 className="font-bold text-2xl text-[#e3e4e6]">Pao Planner</h1>
        </Link>
        <div className="text-sm">
          <h2 className="font-bold">Kullanım Şartları (Terms of Use)</h2>

          {data.map((item, index) => (
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

        <footer className="flex flex-col items-center gap-2">
          <p className="text-[#e3e4e6] font-bold">Pao Planner</p>
          <div className="flex gap-5">
            {["App Store", "İletişim", "X", "Privecy Policy", "Terms of Use"].map((item, index) => (
              <a
                className="text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
          <a href="https://enesdmc.com" target="_blank" className="flex gap-5 ">
            <p className="text-[#979699] hover:underline font-semibold">Enes Demirci</p>
            <p className="text-[#979699] hover:underline font-semibold">© 2025</p>
          </a>
        </footer>
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
