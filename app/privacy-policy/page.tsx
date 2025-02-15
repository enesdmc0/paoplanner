import Footer from "@/components/footer";
import Header from "@/components/header";

const data = [
  {
    title: "1. Toplanan Veriler",
    content1: "Pao Planner, aşağıdaki kişisel bilgileri toplar:",
    content2:
      "Uygulama, kullanıcı verilerini yalnızca kullanıcı doğrulama (auth) işlemleri için toplar ve saklar.",
    list: ["Ad ve Soyad", "E-posta Adresi", "Şifre"],
  },
  {
    title: "2. Veri Saklama ve Şifreleme",
    content:
      "Toplanan veriler cihazın yerel hafızasında saklanır. Veriler, şifrelenmiş bir biçimdesaklanır; yani veriler, hiçbir şekilde açık metin (plaintext) olarak cihazda tutulmaz.Uygulamanın içeriği SecureStorage ve AsyncStorage gibi güvenli depolama alanlarındasaklan ",
  },
  {
    title: "3. Veri Paylaşımı ve Üçüncü Taraflar",
    content:
      "Pao Planner, hiçbir kişisel veriyi üçüncü şahıslarla paylaşmaz, satmaz veya başka bir yere göndermez. Kullanıcı verileri sadece cihazda yerel olarak saklanır ve işlenir.",
  },
  {
    title: "4. İnternetsiz Çalışma",
    content:
      "Uygulama, internet bağlantısı gerektirmeden çalışır. Veriler yalnızca cihazda saklanır ve dış sistemlere iletilmez",
  },
  {
    title: "5. Gizlilik ve Güvenlik",
    content:
      "Verilerinizin güvenliği bizim için çok önemlidir. Uygulama, şifreleme ve güvenli depolama tekniklerini kullanarak kullanıcı verilerini korur. Ancak, internet üzerinden yapılan her türlü veri iletiminin %100 güvenli olacağı garanti edilemez.",
  },
  {
    title: "6. Veri Erişimi ve Güncellemeleri",
    content:
      "Kullanıcılar, kendi kişisel verilerine erişim sağlayabilir ve gerektiğinde bu verileri güncelleyebilir veya silebilir. Ancak, uygulama içindeki veriler yalnızca yerel cihazda saklanacağından, veri silme veya güncelleme işlemleri cihazda yapılmalıdır.",
  },
  {
    title: "7. Gizlilik Politikası Güncellemeleri",
    content:
      "Bu gizlilik politikası zaman zaman güncellenebilir. Politikada yapılan her türlü değişiklik, uygulama üzerinden bildirilecek ve kullanıcıların onayına sunulacaktır. ",
  },
  {
    title: "8. İletişim",
    content:
      "Eğer bu gizlilik politikası hakkında herhangi bir sorunuz veya endişeniz varsa, bizimle [iletişim bilgisi] üzerinden iletişime geçebilirsiniz.",
  },
];
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
          <p className="font-semibold mt-8">{data[0].title}</p>
          <p className="mb-5 mt-1">{data[0].content1}</p>
          {data[0]?.list && data[0].list.map((item, index) => <p key={index}>• {item}</p>)}

          <p className="mt-5">{data[0].content2}</p>

          {data.slice(1).map((item, index) => (
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
