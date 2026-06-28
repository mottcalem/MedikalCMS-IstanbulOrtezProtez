export type BlogSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  content: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  sections: BlogSection[];
  category: string;
  tags: string[];
  readingTime: number;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  metaDescription: string;
  keywords: string[];
  featured?: boolean;
  coverColor: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kutahyada-ortez-protez-sgk-kapsami-rehberi",
    title: "Kütahya'da Ortez ve Protez Hizmetleri: SGK Kapsamı ve Başvuru Rehberi",
    excerpt: "Kütahya'daki ortez ve protez hizmetlerini, SGK'nın hangi cihazları karşıladığını ve başvuru sürecini adım adım öğrenin.",
    category: "SGK & Mevzuat",
    tags: ["SGK", "ortez", "protez", "Kütahya", "sigorta"],
    readingTime: 7,
    publishedAt: "2026-05-10",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Kütahya'da SGK kapsamında ortez ve protez nasıl alınır? Başvuru belgesi, hekim raporu ve raporlama süreci hakkında eksiksiz rehber.",
    keywords: ["kütahya ortez protez", "sgk ortez protez", "kütahya protez merkezi", "sgk protez başvurusu"],
    featured: true,
    coverColor: "#123B6D",
    sections: [
      {
        id: "sgk-ortez-protez-nedir",
        heading: "SGK Kapsamında Ortez ve Protez Nedir?",
        level: 2,
        content: [
          "Ortez; zayıflamış, deforme olmuş ya da hasar görmüş vücut bölgelerini desteklemek, stabilize etmek veya işlevini iyileştirmek amacıyla kullanılan tıbbi cihazlardır. Protez ise ampütasyon sonucunda kaybedilen bir uzvu işlevsel ve estetik olarak yerine koyan cihazlardır.",
          "Sosyal Güvenlik Kurumu (SGK), bireylerin yaşam kalitesini artırmak amacıyla hem ortez hem de protez cihazlarını belirli koşullar dahilinde karşılamaktadır. Bu kapsam; cihaz türüne, kullanım amacına ve hastanın sağlık durumuna göre farklılık göstermektedir.",
        ],
      },
      {
        id: "sgk-kapsami-hangi-cihazlar",
        heading: "SGK Hangi Ortez ve Protezleri Karşılıyor?",
        level: 2,
        content: [
          "SGK'nın 2024 yılı Sağlık Uygulama Tebliği (SUT) çerçevesinde karşıladığı başlıca cihazlar şunlardır:",
          "Alt ekstremite protezleri: Diz altı (trans-tibial), diz üstü (trans-femoral), diz dezartikülasyon ve kalça dezartikülasyon protezleri SGK tarafından karşılanmaktadır. Mikro işlemcili diz protezleri ise ek heyet raporu ile belirli endikasyonlarda karşılanabilmektedir.",
          "Üst ekstremite protezleri: El, ön kol (trans-radial) ve üst kol (trans-hümeral) protezleri kapsam dahilindedir. Miyoelektrik (biyonik) el protezleri için özel komisyon onayı gerekmektedir.",
          "Ortezler: Diz, ayak-bilek, el bileği, omurga (TLSO, LSO) ve üst ekstremite ortezleri SGK tarafından karşılanmaktadır. Her cihaz için belirlenen geri ödeme miktarları SUT listesinde yer almaktadır.",
        ],
      },
      {
        id: "basvuru-sureci",
        heading: "Başvuru Süreci Nasıl İşler?",
        level: 2,
        content: [
          "SGK kapsamında ortez veya protez almak için izlenecek adımlar belirli bir prosedüre tabidir. Bu prosedürü doğru uygulamak, sürecin hızlı ve sorunsuz tamamlanması açısından kritik önem taşımaktadır.",
          "İlk adım olarak hastanın SGK'lı bir sağlık kuruluşuna (devlet hastanesi veya SGK anlaşmalı özel hastane) başvurması ve ilgili uzmanlık branşından hekim muayenesi yaptırması gerekmektedir. Hekim, tıbbi durumu değerlendirerek ortez/protez ihtiyacını belgeleyen bir rapor düzenler.",
        ],
      },
      {
        id: "gerekli-belgeler",
        heading: "Gerekli Belgeler Nelerdir?",
        level: 2,
        content: [
          "Ortez veya protez başvurusunda standart belgeler şunlardır: SGK'ya kayıtlı sağlık güvencesi (sigortalılık belgesi), uzman hekim tarafından düzenlenmiş tıbbi rapor (endikasyon raporu), protez için ampütasyon ameliyat notu veya epikriz, gerekli hallerde sağlık kurulu raporu (birden fazla uzmanın imzaladığı heyet raporu) ve cihazın teknik özellikleri ile fiyatını gösteren proforma fatura.",
          "Kütahya'daki hastanemiz, belge hazırlama sürecinde size rehberlik etmekte; eksik evrakların tamamlanması için gerekli yönlendirmeyi sağlamaktadır.",
        ],
      },
      {
        id: "kutahyada-hizmet",
        heading: "Kütahya'da SGK'lı Ortez Protez Hizmeti",
        level: 2,
        content: [
          "İstanbul Ortez Protez olarak Kütahya merkezimizde SGK ile anlaşmalı şekilde hizmet vermekteyiz. Uzman kadromuz, cihaz ölçümünden takibe kadar tüm süreci yanınızda yürütmektedir.",
          "Merkezimize başvurduğunuzda ücretsiz ön değerlendirme yapılmakta; SGK başvurunuz için gerekli belge ve raporların hazırlanmasında destek sağlanmaktadır. Kütahya ve çevre illerden (Afyonkarahisar, Tavşanlı, Simav, Gediz) gelen hastalarımıza randevu önceliği tanınmaktadır.",
        ],
      },
      {
        id: "sik-sorulan-sorular",
        heading: "Sık Sorulan Sorular",
        level: 2,
        content: [
          "Protez kaç yılda bir yenilenir? SGK, cihaz türüne göre yenileme süresi belirlemektedir. Alt ekstremite protezleri genellikle 3-5 yılda bir, çocuk protezleri ise büyüme hızına bağlı olarak daha kısa aralıklarla yenilenmektedir.",
          "Fark ücreti öder miyim? SGK'nın belirlediği geri ödeme tavanının üzerinde kalan tutar fark ücreti olarak hasta tarafından ödenir. Merkezimiz, bütçenize uygun seçenekler konusunda şeffaf bilgi vermektedir.",
          "Başvurudan teslime kadar ne kadar sürer? Belgelerin eksiksiz olması halinde standart süreç 2-4 hafta içinde tamamlanmaktadır. Acil durumlarda süre kısaltılabilmektedir.",
        ],
      },
    ],
  },

  {
    slug: "alt-ekstremite-amputasyonu-sonrasi-protez-secimi",
    title: "Alt Ekstremite Amputasyonu Sonrası Doğru Protez Seçimi",
    excerpt: "Bacak amputasyonu sonrasında hangi protez tipinin seçileceği, rehabilitasyon süreci ve günlük yaşama dönüş hakkında kapsamlı bilgi.",
    category: "Protez",
    tags: ["bacak protezi", "ampütasyon", "rehabilitasyon", "protez seçimi"],
    readingTime: 8,
    publishedAt: "2026-05-18",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Alt ekstremite amputasyonu sonrası protez seçimini etkileyen faktörler, protez tipleri ve rehabilitasyon sürecine dair uzman rehberi.",
    keywords: ["bacak protezi", "alt ekstremite protezi", "ampütasyon protez", "trans-tibial protez", "trans-femoral protez"],
    featured: false,
    coverColor: "#0AADA8",
    sections: [
      {
        id: "amputasyon-duzeyleri",
        heading: "Ampütasyon Düzeyleri ve Protez Gereksinimleri",
        level: 2,
        content: [
          "Alt ekstremite ampütasyonları genel olarak üç ana düzeyde sınıflandırılır: diz altı (trans-tibial), diz düzeyinde (diz dezartikülasyon) ve diz üstü (trans-femoral). Her düzey, farklı protez bileşenleri ve farklı rehabilitasyon yaklaşımları gerektirir.",
          "Trans-tibial (diz altı) ampütasyonlarda diz eklemi korunduğundan yürüyüş biyomekaniği daha doğal bir seyir izler. Bu düzeyde çeşitli ayak-bilek bileşen seçenekleri mevcuttur; karbon fiber enerji geri kazanımlı ayaklar, dinamik yanıt veren sistemler ve su geçirmez tasarımlar bunların başında gelmektedir.",
          "Trans-femoral (diz üstü) ampütasyonlarda ise diz eklemi de protez kapsamına girmektedir. Mekanik diz, hidrolik diz ve mikroişlemcili (akıllı) diz olmak üzere üç temel kategori bulunmaktadır. Aktivite düzeyi, meslek, yaş ve bireysel hedefler bu seçimi doğrudan etkiler.",
        ],
      },
      {
        id: "protez-secimini-etkileyen-faktorler",
        heading: "Protez Seçimini Etkileyen Faktörler",
        level: 2,
        content: [
          "Doğru protez seçimi tek boyutlu bir karar değildir; kişinin fiziksel kapasitesi, yaşam tarzı hedefleri, mesleki gereksinimleri ve bütçe olanakları bir bütün olarak değerlendirilmelidir.",
          "K-Seviyesi sınıflandırması: Protez reçetesinde dünya genelinde kullanılan K-Seviyesi sistemi, hastanın fonksiyonel potansiyelini 0-4 arası puanlar. K0: Protez kullanım kapasitesi yok. K1: Ev içi yürüyüş. K2: Sınırlı toplum yürüyüşü. K3: Toplum yürüyüşü ve merdiven. K4: Yüksek performans (spor, koşu).",
          "Güdük sağlığı: Güdük uzunluğu, deri ve yumuşak doku kalitesi, kas gücü ve güdük matürasyonu protez tasarımını doğrudan etkiler. İdeal güdük: iyi silindirikal formda, yeterli uzunlukta, sağlıklı deri örtüsü ile örtülü ve nöröm oluşumu içermeyen bir güdüktür.",
        ],
      },
      {
        id: "protez-bilesenler",
        heading: "Modern Protez Bileşenleri",
        level: 2,
        content: [
          "Günümüz protezleri; soket, liner (iç kılıf), bileşen sistemi (ayak, diz) ve dış kaplamadan oluşur. Her bileşen ayrı ayrı seçilir ve kişiye özel olarak monte edilir.",
          "Karbon fiber soketler: Hafif, dayanıklı ve vücut ısısına duyarlı bu soketler, güdük-protez arayüzündeki konfor ve kontrolü önemli ölçüde artırır. Günümüzde CAD/CAM teknolojisiyle dijital olarak tasarlanan soketler, geleneksel alçı modellerine göre daha kısa sürede hazırlanmakta ve daha iyi uyum sağlamaktadır.",
          "Silikon liner'lar: Güdük cildini korur, basınç dağılımını dengeler ve protezi güdüğe sabitler. Çeşitli sertlik ve uzunluk seçenekleri mevcuttur; deri hassasiyeti olan bireyler için antibakteriyel kaplama içeren modeller tercih edilebilir.",
        ],
      },
      {
        id: "rehabilitasyon-sureci",
        heading: "Rehabilitasyon Süreci ve Beklentiler",
        level: 2,
        content: [
          "Protez kullanımı ile günlük yaşama dönüş bir anda gerçekleşmez; planlı ve multidisipliner bir rehabilitasyon süreciyle desteklenmelidir. Bu süreç genellikle üç aşamada yürütülür.",
          "1. Aşama — Güdük bakımı ve hazırlık (0-6 hafta): Operasyon sonrası şişlik kontrolü, güdük şekillendirme (elastik bandaj/silikon şekillendirici kullanımı), denge ve güç egzersizleri bu dönemin temel hedeflerini oluşturur.",
          "2. Aşama — Proteze alışma (6-12 hafta): İlk protez uygulaması, yük aktarımı eğitimi, paralel bar içi yürüyüş ve günlük kullanım süresi kademeli artırımı bu aşamada gerçekleşir.",
          "3. Aşama — Fonksiyonel iyileştirme (3+ ay): Merdiven, rampa, düzensiz zemin yürüyüşü; yeniden sosyal hayata katılım; mesleğe dönüş ve gerekiyorsa spor protezi değerlendirmesi.",
        ],
      },
      {
        id: "kutahyada-protez-hizmet",
        heading: "Kütahya'da Protez Hizmetleri",
        level: 2,
        content: [
          "İstanbul Ortez Protez Kütahya merkezimizde alt ekstremite protezleri için komple hizmet sunulmaktadır. İlk değerlendirmeden protez teslimi ve düzenli bakıma kadar sürecin tamamı tek merkezde yönetilmektedir.",
          "Merkezimizde dijital güdük tarama teknolojisi ile hızlı ve hassas soket üretimi yapılmakta; her protez kullanıcısı için kişiselleştirilmiş uyum randevuları planlanmaktadır. Kütahya ve çevre illerden gelen hastalarımıza ek yol/ulaşım danışmanlığı da verilmektedir.",
        ],
      },
    ],
  },

  {
    slug: "diz-ortezi-cesitleri-kullanim-alanlari",
    title: "Diz Ortezi Çeşitleri: Hangi Durumda Hangi Ortez Kullanılır?",
    excerpt: "Ligaman yaralanmalarından artrite, menisküs sorunlarından cerrahi sonrasına kadar diz ortezi seçiminde bilmeniz gerekenler.",
    category: "Ortez",
    tags: ["diz ortezi", "ligaman", "artrit", "cerrahi sonrası", "spor yaralanması"],
    readingTime: 6,
    publishedAt: "2026-05-25",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Diz ortezi türleri, endikasyonları ve doğru ortez seçimi hakkında uzman rehberi. ACL, menisküs, artrit ve cerrahi sonrası diz ortezi.",
    keywords: ["diz ortezi", "diz ortezi çeşitleri", "acl ortezi", "menisküs ortezi", "diz stabilizatörü"],
    featured: false,
    coverColor: "#1a5276",
    sections: [
      {
        id: "diz-ortezi-nedir",
        heading: "Diz Ortezi Nedir ve Neden Kullanılır?",
        level: 2,
        content: [
          "Diz ortezi; diz eklemini desteklemek, korumak veya belirli yönlerde hareketini kısıtlamak amacıyla kullanılan tıbbi cihazlardır. Spor yaralanmaları, dejeneratif eklem hastalıkları, nörolojik durumlar ve cerrahi sonrası dönem başlıca kullanım endikasyonlarını oluşturur.",
          "Diz ortezleri, pasif olarak sadece destek sağlayanlardan aktif olarak hareket düzeltmesi yapanlara kadar geniş bir spektrumda bulunmaktadır. Doğru ortez seçimi; tanıya, bireysel anatomiye ve tedavi hedefine göre yapılmalıdır.",
        ],
      },
      {
        id: "ortez-cesitleri",
        heading: "Başlıca Diz Ortezi Türleri",
        level: 2,
        content: [
          "Profilaktik (önleyici) diz ortezleri: Özellikle temas sporlarında (futbol, amerikan futbolu, kayak) lateral diz yaralanmalarına karşı koruma sağlamak amacıyla kullanılır. Rijit yan destek kolları içerir.",
          "Fonksiyonel diz ortezleri: ACL (ön çapraz bağ), PCL (arka çapraz bağ) veya kollateral bağ yaralanmalarından sonra eklem stabilitesini desteklemek için kullanılır. Çeşitli engel açısı ayarları yapılabilir.",
          "Rehabilitasyon ortezleri: Cerrahi sonrası dönemde (ACL rekonstrüksiyonu, menisküs tamiri, diz kapağı fraktürü) erken mobilizasyon sağlarken aynı zamanda koruma sunar. Genellikle kilitlenebilir menteşe sistemine sahiptir.",
          "Unloader (boşaltıcı) ortezler: Medial veya lateral kompartman osteoartritinde hasarlı tarafa binen yükü karşı tarafa kaydırarak ağrıyı önemli ölçüde azaltır. Cerrahi müdahale planlanmayan veya ertelenmek istenen hastalarda sık tercih edilir.",
          "Patellar ortezler: Patellofemoral ağrı sendromu, patellar tendinit (atlayıcı dizi) ve patellar kondromalazide diz kapağını doğru konumda tutar.",
        ],
      },
      {
        id: "ortez-secim-kriterleri",
        heading: "Doğru Ortez Nasıl Seçilir?",
        level: 2,
        content: [
          "Diz ortezi seçiminde en önemli etken, kesin tanının belirlenmiş olmasıdır. MRI ve klinik muayene bulgularına dayanmayan ortez seçimi yanlış destek yönü veya yetersiz stabilizasyon nedeniyle tedaviyi olumsuz etkileyebilir.",
          "Anatomik uyum: Ortez, diz çevresi, uyluğun üst ve alt ölçüleri baz alınarak seçilmeli ya da özel üretilmelidir. Standart bedenlerde iyi uyum sağlanamayan hastalarda (özellikle geniş diz, çok uzun/kısa femur) kişiye özel (custom-made) ortez tercih edilmelidir.",
          "Aktivite düzeyi: Günlük yaşam aktiviteleri için kullanılacak bir ortez ile spor sırasında kullanılacak ortezin malzeme ve kilitlenme özellikleri birbirinden farklıdır. Karbon fiber bileşenler aktif bireyler için ağırlık avantajı sağlar.",
        ],
      },
      {
        id: "kullanim-suresi",
        heading: "Diz Ortezi Ne Kadar Süre Kullanılmalıdır?",
        level: 2,
        content: [
          "Ortez kullanım süresi, altta yatan tanı ve tedavi hedefine göre belirlenir. Akut ligaman yaralanmalarında ilk 6-12 hafta sürekli kullanım ardından aktivite tabanlı kullanıma geçiş önerilir.",
          "Kronik osteoartrit olgularında ise ortez uzun dönem yaşam kalitesi aracı olarak düşünülmeli; yıllık uyum ve bileşen kontrolü yapılmalıdır. Ortez kullanımı sırasında kasların güçsüzleşmesini önlemek için fizik tedavi egzersizlerini ihmal etmemek son derece önemlidir.",
        ],
      },
      {
        id: "bakim-temizlik",
        heading: "Diz Ortezi Bakımı ve Temizliği",
        level: 2,
        content: [
          "Ortez ömrünü uzatmak ve hijyeni korumak için düzenli bakım şarttır. Menteşeli ortezlerin pivot noktaları kuru bez ile silinmeli, ıslak ortam temastan kaçınılmalıdır. Kumaş pedler ve astar materyaller haftada en az bir kez ılık su ve nötr sabunla yıkanmalıdır.",
          "Yılda en az bir kez profesyonel kontrolden geçirilmesi önerilen diz ortezlerinde menteşe aşınması, cırt-cırt bozulması ve plastik çatlama gözlemlendiğinde uzman merkezinize başvurmanız gerekmektedir. Merkezimiz, Kütahya'da ücretsiz periyodik kontrol hizmeti sunmaktadır.",
        ],
      },
    ],
  },

  {
    slug: "footbalance-ortopedik-tabanlik-kimlere-uygun",
    title: "FootBalance Ortopedik Tabanlık: Kimler İçin Uygundur ve Nasıl Çalışır?",
    excerpt: "FootBalance'ın %100 kişiye özel tabanlık teknolojisi, hangi sorunlara çözüm sunduğu ve Kütahya'da nasıl yaptırabileceğinizi öğrenin.",
    category: "Tabanlık",
    tags: ["FootBalance", "ortopedik tabanlık", "düz tabanlık", "plantar fasiit", "ayak ağrısı"],
    readingTime: 6,
    publishedAt: "2026-06-02",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "FootBalance ortopedik tabanlık nedir, kimlere uygundur? Düz tabanlık, plantar fasiit, diz ve sırt ağrısı için 10 dakikada kişiye özel tabanlık hizmeti.",
    keywords: ["footbalance tabanlık", "ortopedik tabanlık kütahya", "kişiye özel tabanlık", "düz tabanlık tedavisi", "plantar fasiit tabanlık"],
    featured: true,
    coverColor: "#0AADA8",
    sections: [
      {
        id: "footbalance-nedir",
        heading: "FootBalance Nedir?",
        level: 2,
        content: [
          "FootBalance, Finlandiya'da geliştirilen ve dünya genelinde 50'den fazla ülkede kullanılan patentli bir kişiye özel ortopedik tabanlık sistemidir. Geleneksel tabanlıklardan farkı, her bireyin ayak yapısına ve basınç dağılımına göre anında şekillendirilebilmesidir.",
          "Sistem; dijital ayak basıncı analizi (footscan), ısıyla şekillendirilebilen özel malzeme tabanı ve uzman değerlendirmesini bir araya getirerek 10 dakika içinde %100 kişiye özel bir tabanlık üretmektedir. Kullanılan malzeme vücut ısısına uyum sağlayan açık hücreli poliüretan köpükten oluşur ve yüzlerce yıkamaya dayanıklıdır.",
        ],
      },
      {
        id: "kimler-icin-uygun",
        heading: "FootBalance Kimler İçin Uygundur?",
        level: 2,
        content: [
          "Düz tabanlık (pes planus) sahipleri: Medial ark çökmesinin neden olduğu aşırı pronasyon, diz içe dönüklüğü ve bel ağrısına karşı FootBalance arkı destekleyerek yükü dengeler.",
          "Plantar fasiit hastaları: Topuk ağrısının en yaygın nedeni olan plantar fasiitin konservatif tedavisinde ortopedik tabanlık ilk basamak tedavi olarak yer almaktadır. FootBalance, topuk bölgesini yerleşik bir cup yapısıyla sarar ve fascia üzerindeki stresi azaltır.",
          "Sporcularda performans artışı ve yaralanma önleme: Koşu, basketbol, futbol ve kayak gibi branşlarda kullanılan FootBalance Sport serisi, spesifik sporların biyomekanik gereksinimlerini karşılayacak şekilde tasarlanmıştır.",
          "Uzun süre ayakta çalışanlar: Sağlık çalışanları, öğretmenler, fabrika ve market çalışanları gibi uzun çalışma saatlerinde ayakta kalan bireyler için günlük yaşam serisinden FootBalance Everyday tercih edilir.",
          "Yüksek ökçeli ayakkabı kullananlar: FootBalance'ın ultra ince slim serisi, topuklu ve dar ayakkabılara özel tasarlanmış olup yüksek ökçenin yol açtığı ön ayak aşırı yüklenmesini dengeler.",
        ],
      },
      {
        id: "uygulama-sureci",
        heading: "Kütahya'da FootBalance Uygulama Süreci",
        level: 2,
        content: [
          "Merkezimizde FootBalance uygulaması dört adımda tamamlanmaktadır ve tüm süreç yaklaşık 10-15 dakika alır.",
          "1. Dijital ayak analizi: FootBalance Scan cihazı ile ayağın üç boyutlu basınç haritası çıkarılır. Parmak ucu, ön ayak, ark bölgesi ve topuk basınç dağılımı milimetre hassasiyetiyle ölçülür.",
          "2. Uzman değerlendirmesi: Uzmanımız ayak tipini (düz, yüksek kavuslı, nötr), yürüyüş paternini ve kullanım amacını belirler. Doğru seri (Sport, Everyday, Slim, Kids) seçilir.",
          "3. Şekillendirme: Özel fırında 80°C'ye ısıtılan tabanlık, bireyin ayağının altına yerleştirilerek kendi vücut ağırlığıyla 3 dakika içinde kalıba girer.",
          "4. Son uyum kontrolü: Şekillendirme sonrası ayakkabıya takılı halde yürüyüş değerlendirmesi yapılır; gerekiyorsa küçük düzeltmeler uygulanır.",
        ],
      },
      {
        id: "faydalar",
        heading: "FootBalance Tabanlığın Klinik Faydaları",
        level: 2,
        content: [
          "Randomize kontrollü çalışmalar, FootBalance tabanlık kullanımının plantar fasiit ağrısını 6 haftada ortalama %52 oranında azalttığını göstermektedir. Diz içe dönüklüğüne (genu valgum) bağlı medial kompartman yükü ise yürüyüş analizi çalışmalarında %18 oranında düştüğü bildirilmiştir.",
          "Uzun dönem takip çalışmalarında FootBalance kullanıcılarının %87'si ağrı azalması ve yorgunluk hissinde belirgin iyileşme bildirmektedir. Tabanlık, ömrü boyunca biyomekanik desteğini korur; ıslanma veya deformasyonla özelliğini yitirmez.",
        ],
      },
      {
        id: "sgk-kapsami",
        heading: "FootBalance Tabanlık SGK Kapsamında Mı?",
        level: 2,
        content: [
          "FootBalance tabanlıklar, SGK'nın ortopedik tabanlık geri ödeme kapsamında değerlendirilebilmektedir. Ancak geri ödeme; hekim tarafından düzenlenen ortopedik tabanlık reçetesi ve SGK'ya kayıtlı sağlık güvencesi şartına bağlıdır.",
          "SGK geri ödemesi için gerekli reçete ve belgeler konusunda merkezimiz size yol göstermektedir. SGK'nın karşılamadığı fark tutarı için merkezimiz uygun ödeme koşulları sunmaktadır. Detaylı bilgi için 0274 226 07 17 numaralı hattı arayabilir ya da WhatsApp üzerinden iletişime geçebilirsiniz.",
        ],
      },
    ],
  },

  {
    slug: "plantar-fasiit-duz-tabanlik-ortopedik-tabanlik-tedavisi",
    title: "Plantar Fasiit ve Düz Tabanlık: Ortopedik Tabanlık ile Tedavi",
    excerpt: "Topuk ağrısının en sık nedeni plantar fasiitin ve düz tabanlığın (pes planus) ortopedik tabanlık ile konservatif tedavisi.",
    category: "Tabanlık",
    tags: ["plantar fasiit", "düz tabanlık", "topuk ağrısı", "pes planus", "ortopedik tabanlık"],
    readingTime: 7,
    publishedAt: "2026-06-08",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Plantar fasiit ve düz tabanlık (pes planus) tedavisinde ortopedik tabanlığın rolü, egzersiz protokolleri ve Kütahya'da tedavi seçenekleri.",
    keywords: ["plantar fasiit tedavisi", "düz tabanlık tedavisi", "topuk ağrısı", "pes planus kütahya", "ayak tabanı ağrısı"],
    featured: false,
    coverColor: "#1a7a5e",
    sections: [
      {
        id: "plantar-fasiit-nedir",
        heading: "Plantar Fasiit Nedir?",
        level: 2,
        content: [
          "Plantar fasya; topuk kemiğini (kalkaneüs) ön ayağa bağlayan kalın bağ dokusudur. Plantar fasiit, bu yapının aşırı gerilmesi veya tekrarlayan mikrotravmalara maruz kalması sonucu oluşan iltihaplanma durumudur.",
          "Sabah yataktan ilk kalktığınızda hissedilen topuk ağrısı plantar fasiitin en karakteristik belirtisidir. Bu ağrı ilk adımlardan sonra hafifler; ancak uzun süre ayakta kaldıktan ya da oturma sonrasında yeniden ortaya çıkabilir.",
          "Görülme sıklığı: Plantar fasiit, topuk ağrısının en yaygın nedenidir ve her yıl 2 milyondan fazla kişi bu tanıyı almaktadır. Risk faktörleri arasında düz tabanlık, yüksek kavus, obezite, uzun süre ayakta çalışma ve uygunsuz ayakkabı seçimi sayılabilir.",
        ],
      },
      {
        id: "duz-tabanlik-nedir",
        heading: "Düz Tabanlık (Pes Planus) Nedir?",
        level: 2,
        content: [
          "Düz tabanlık, ayağın iç kenar arkının kısmen ya da tamamen çökmesi durumudur. İki ana formu bulunmaktadır: esnek (fonksiyonel) düz tabanlık ve rijit düz tabanlık. Esnek formda ayak dinlenirken düz görünürken parmak ucuna kalkışla ark kendiliğinden oluşur; rijit formda ise bu gerçekleşmez.",
          "Düz tabanlık tek başına her zaman sorun yaratmaz; ancak aşırı pronasyon (ayak içe dönüşü), diz içe dönüklüğü (genu valgum), kalça addüksiyonu ve bel ağrısıyla ilişkili olabilir. Bu zincirleme biyomekanik etkiyi kırmak için erken dönem ortopedik destek oldukça önemlidir.",
        ],
      },
      {
        id: "tabanlik-nasil-yardimci-olur",
        heading: "Ortopedik Tabanlık Nasıl Yardımcı Olur?",
        level: 2,
        content: [
          "Kişiye özel ortopedik tabanlıklar, plantar fasiit ve düz tabanlık tedavisinde randomize kontrollü çalışmalarla etkinliği kanıtlanmış konservatif tedavi yöntemleri arasında yer almaktadır.",
          "Ark desteği: Medial longitudinal arkı destekleyen tabanlık, plantar fasya üzerindeki gerilimi azaltarak iltihaplanmayı baskılar ve yük dağılımını düzeltir.",
          "Topuk kupası: Kalın silikon veya EVA malzemeden üretilen topuk kupası, kalkaneüsü çevreler ve yağ yastığının laterale doğru yayılmasını önler. Bu sayede topuğun darbe emme kapasitesi artar.",
          "Aşırı pronasyon kontrolü: Medial ark ve rearfoot post bileşenleri bir arada, aşırı ayak içe dönüşünü kısıtlayarak alt ekstremite biyomekaniğini düzeltir.",
        ],
      },
      {
        id: "egzersiz-protokolu",
        heading: "Egzersiz Protokolü ile Destekleme",
        level: 2,
        content: [
          "Ortopedik tabanlık, egzersiz ve fizik tedavi ile kombinlendiğinde çok daha etkin sonuçlar verir. Aşağıdaki egzersizler plantar fasiit ve düz tabanlık için günde iki kez uygulanabilir:",
          "Plantar fasya germe: Topukta ağrı hissetmeden önce sabah yataktan kalkmadan parmakları geriye doğru çekin ve 30 saniye tutun. 3 tekrar yapın.",
          "Baldır germe (gastrosoleus): Duvara yaslanarak düz ve hafif bükük diz pozisyonlarında baldır germe egzersizi plantar fasya üzerindeki gerilimi azaltır. Her pozisyon 30 sn / 3 tekrar.",
          "Kısa ayak egzersizi: Parmakları yere bastırarak ayak tabanını kısaltma hareketi intrinsik ayak kaslarını güçlendirir. Günde 2 × 10 tekrar önerilir.",
        ],
      },
      {
        id: "ayakkabi-secimi",
        heading: "Doğru Ayakkabı Seçimi",
        level: 2,
        content: [
          "Ortopedik tabanlık ne kadar iyi seçilirse seçilsin yanlış ayakkabıyla birlikte kullanıldığında etkinliği azalır. Plantar fasiit ve düz tabanlıkta dikkat edilmesi gereken ayakkabı özellikleri:",
          "Taban yüksekliği: Topuğun ön ayaktan 8-12 mm yüksek olduğu ayakkabılar plantar fasya üzerindeki gerilimi azaltır. Sıfır tabanlı (minimalist) ayakkabılar plantar fasiit aktif fazında önerilmez.",
          "Torsiyonel sertlik: Ayakkabıyı karşılıklı iki elinizle bükerseniz orta bölgede kolayca bükülmemesi gerekir. Bu özellik midfoot desteği sağlar.",
          "Yeterli topuk derinliği: Tabanlığı barındırabilecek yeterli iç hacim olmalıdır. Dar burunlu ve düz tabanlı ayakkabılar bu ölçütleri karşılamaz.",
        ],
      },
    ],
  },

  {
    slug: "cocuklarda-ortez-kullanimi-ne-zaman-gerekli",
    title: "Çocuklarda Ortez Kullanımı: Ne Zaman Gereklidir?",
    excerpt: "Çocuklarda düz tabanlık, serebral palsi, spina bifida ve gelişimsel problemlerde ortez kullanımının doğru zamanlaması ve yönetimi.",
    category: "Ortez",
    tags: ["çocuk ortezi", "pediyatrik ortez", "AFO", "serebral palsi", "çocuk düz tabanlık"],
    readingTime: 7,
    publishedAt: "2026-06-12",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Çocuklarda ortez kullanımı ne zaman gereklidir? Serebral palsi, düz tabanlık ve gelişimsel sorunlarda pediyatrik ortez rehberi.",
    keywords: ["çocuk ortezi", "pediyatrik ortez", "afo çocuk", "çocuk düz tabanlık", "serebral palsi ortezi"],
    featured: false,
    coverColor: "#6c3483",
    sections: [
      {
        id: "cocuklarda-ortez-genel",
        heading: "Çocuklarda Ortez Kullanımına Genel Bakış",
        level: 2,
        content: [
          "Çocuk ortezleri (pediyatrik ortezler), yetişkin ortezlerinden hem biyomekanik hem de büyüme-gelişim açısından önemli farklılıklar taşır. Çocukların iskelet yapısı henüz gelişimini tamamlamamış olduğundan, ortez; gelişimi yönlendirici, düzeltici ya da destekleyici bir işlev üstlenir.",
          "Erken dönem müdahale çoğu durumda uzun vadede daha olumlu sonuçlar vermektedir. Bu nedenle şüpheli bir durum gözlemlendiğinde aile hekimi veya çocuk ortopedisti tarafından değerlendirilmesi ve gerekirse ortez merkezine yönlendirilmesi önerilir.",
        ],
      },
      {
        id: "duz-tabanlik-cocuklarda",
        heading: "Çocuklarda Düz Tabanlık Ne Zaman Ortez Gerektirir?",
        level: 2,
        content: [
          "0-3 yaş arası tüm çocukların ayak içi yüzü yağ dokusundan oluştuğu için düz görünür; bu fizyolojiktir ve müdahale gerektirmez. 3-6 yaş arası ark gelişiminin izlenmesi önerilir.",
          "Aşağıdaki bulgulardan biri veya birkaçı mevcutsa ortez değerlendirmesi gerekir: Yürüyüş başlamasından itibaren 2 yılı aşkın sürede ark oluşmaması, yürürken sık tökezleme ve yorulma, baldır veya diz ağrısı şikayeti, ayakkabıların iç kenarının hızlı aşınması ve parmak ucunda duramama.",
          "Çocuk düz tabanlık ortezleri genellikle özel tabanlık (SMO veya UCBL türü) şeklinde tasarlanır ve her büyüme döneminde yenilenmesi gerekir. Kütahya merkezimizde çocuk ayak analizi ücretsiz olarak yapılmaktadır.",
        ],
      },
      {
        id: "afo-kullanimi",
        heading: "Ayak-Bilek-Ayak Ortezi (AFO) Gerektiren Durumlar",
        level: 2,
        content: [
          "AFO (Ankle-Foot Orthosis), en yaygın kullanılan pediyatrik ortezdir. Ayağı nötr pozisyonda stabilize eder, equinus deformasyonunu önler ve yürüyüş paternini düzeltir.",
          "Serebral palsi: Spastik serebral palside ayak dropunu önlemek ve yürüyüş kalitesini artırmak amacıyla dinamik veya solid AFO tercih edilir. Cihaz tipi; tonus, kas gücü ve yürüyüş analizi bulgularına göre belirlenir.",
          "Spina bifida: Paraliziye bağlı kas güçsüzlüğünde destekleyici AFO, çocuğun ayakta durmasına ve yürümesine olanak tanır. Duyu kaybı olan çocuklarda bası noktaları dikkatli izlenmelidir.",
          "Periferal nöropati ve bot ayak (Charcot-Marie-Tooth): Bu hastalarda gece ortezi ile tendon kısalığı önlenirken gündüz AFO ile yürüyüş desteklenir.",
        ],
      },
      {
        id: "ortez-uyumu-aile-rehberi",
        heading: "Ortez Uyumu: Aileler İçin Rehber",
        level: 2,
        content: [
          "Çocuğun orteze uyum süreci sabır gerektiren bir süreçtir. İlk günlerde kısa süreli (1-2 saat) kullanımla başlayıp uyum sağlandıkça süre kademeli artırılmalıdır.",
          "Cilt kontrolü: Ortez takıldıktan 30 dakika sonra ve çıkarıldıktan hemen sonra cilt kontrol edilmeli; 20 dakikadan uzun süre devam eden kızarıklıklar için merkezinizle iletişime geçilmelidir.",
          "Çorap kullanımı: Ortezin altına ince, dikişsiz pamuklu çorap giyilmelidir. Parmakları sıkıştıran veya katlanan çoraplar bası yaralanmalarına yol açabilir.",
          "Büyüme kontrolü: Çocuk ortezleri büyüme hızına bağlı olarak 6-12 ayda bir değiştirilmelidir. Kütahya merkezimiz, periyodik büyüme kontrolü için ücretsiz randevu imkânı sunmaktadır.",
        ],
      },
    ],
  },

  {
    slug: "mikroislemcili-diz-protezi-akilli-protez-teknolojisi",
    title: "Mikroişlemcili Diz Protezi: Akıllı Protez Teknolojisi ile Tanışın",
    excerpt: "Yapay zeka destekli mikroişlemcili diz protezleri nasıl çalışır? Kimler aday olabilir ve SGK'da durumu nedir?",
    category: "Protez",
    tags: ["mikroişlemcili diz", "akıllı protez", "C-Leg", "Genium", "biyonik bacak"],
    readingTime: 8,
    publishedAt: "2026-06-15",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Mikroişlemcili diz protezi nedir, nasıl çalışır? Kimler aday olabilir, SGK kapsamı var mı? Kütahya'da akıllı protez hizmetleri.",
    keywords: ["mikroişlemcili diz protezi", "akıllı protez", "c-leg protez", "biyonik diz", "trans-femoral protez"],
    featured: false,
    coverColor: "#1a3a5c",
    sections: [
      {
        id: "mikroislemcili-diz-nedir",
        heading: "Mikroişlemcili Diz Protezi Nedir?",
        level: 2,
        content: [
          "Mikroişlemcili diz protezi (MPK — Microprocessor Knee), içerdiği sensörler, işlemci ve kontrol edilebilir direnç mekanizmasıyla yürüyüş döngüsü boyunca gerçek zamanlı uyum sağlayan bir üst seviye protez bileşenidir.",
          "Geleneksel mekanik diz protezlerinden farkı şudur: mekanik diz sabit bir dirençle çalışırken, MPK her adımda zemin yüzeyini, yürüyüş hızını ve kullanıcının hareketini analiz ederek direnci milisaniyeler içinde ayarlar.",
          "Bu teknoloji; inme riski azalması, daha az enerji harcama, merdiven ve rampa inişinde güvenlik artışı ve kullanıcı özgüveni açısından mekanik dizlere kıyasla istatistiksel olarak anlamlı faydalar sunmaktadır.",
        ],
      },
      {
        id: "calisma-prensibi",
        heading: "Nasıl Çalışır?",
        level: 2,
        content: [
          "MPK sistemleri genel olarak üç temel bileşenden oluşur: sensör sistemi, merkezi işlem birimi ve kontrol edilebilir direnç mekanizması (hidrolik, pnömatik veya elektromekanik).",
          "Sensörler: Diz açısı, yük hücresi (yerden tepki kuvveti), ivmeölçer ve jiroskop verileri saniyede 100-1000 kez işlenmektedir. Bu veri akışı, kullanıcının ne yaptığını (duruş, salınım, yokuş, merdiven) ve ne yapacağını tahmin etmek için kullanılır.",
          "Yapay zeka algoritmaları: Günümüz MPK'larında makine öğrenmesi tabanlı algoritmalar kullanıcının yürüyüş paternini zaman içinde öğrenerek kişiselleştirilmiş direnç profilleri oluşturur. Örneğin yüksek tempolu sabah yürüyüşü ile alışveriş sırasındaki yavaş adımlar farklı direnç profilleriyle karşılanır.",
          "Stumble recovery (takılma kurtarma): Ani zemin değişikliği veya ayak takılması durumunda sistem yüzme düşme refleksini devreye sokarak diz fleksiyonunu kontrol eder; bu özellik özellikle yaşlı amputelerde kritik öneme sahiptir.",
        ],
      },
      {
        id: "aday-kriterler",
        heading: "Kimler Mikroişlemcili Diz Protezi Adayıdır?",
        level: 2,
        content: [
          "MPK kullanımı için genel kabul gören aday kriterleri şöyle sıralanabilir: Trans-femoral (diz üstü) veya diz dezartikülasyon amputasyonu, K3 veya K4 fonksiyonel potansiyel (toplum yürüyüşü yapabilme ya da yüksek aktivite), yeterli üst gövde ve kalça gücü, bilişsel ve motivasyonel uyum kapasitesi.",
          "Kontraendikasyonlar: Ağır kardiyovasküler hastalık, kooperasyon güçlüğü, aktif cilt sorunları, yeterli rehabilitasyon altyapısı olmayan ortam ve yeterli şarj/bakım sağlayamayacak koşullar MPK kullanımını kısıtlayan faktörler arasındadır.",
          "Genç, aktif amputelerin yanı sıra tek taraflı trans-femoral ampütasyonlu yaşlı bireylerin de MPK'dan anlamlı inme riski azalması ve yaşam kalitesi artışı sağlayabildiği klinik çalışmalarla gösterilmiştir.",
        ],
      },
      {
        id: "sgk-durumu",
        heading: "Mikroişlemcili Diz Protezi ve SGK",
        level: 2,
        content: [
          "Türkiye'de mikroişlemcili diz protezleri SGK'nın özel onay kapsamındaki cihazlar arasında yer almaktadır. Sağlık Uygulama Tebliği'nin ilgili maddeleri çerçevesinde; Ortopedi ve Travmatoloji, Fiziksel Tıp ve Rehabilitasyon veya Nöroloji uzmanı tarafından düzenlenen rapor ve destekleyici belgelerle MPK için SGK'ya başvurulabilmektedir.",
          "Onay süreci ayrıntılı tıbbi belgeleme gerektirmekte olup merkezimiz bu süreçte baştan sona size rehberlik etmektedir. SGK tarafından karşılanmayan fark tutarı için çeşitli finansman seçenekleri hakkında bilgi almak için merkezimizi arayabilirsiniz.",
        ],
      },
      {
        id: "rehabilitasyon",
        heading: "MPK ile Rehabilitasyon Süreci",
        level: 2,
        content: [
          "Mikroişlemcili diz protezi yüksek teknoloji içermesine karşın, başarılı kullanımı kapsamlı rehabilitasyon ile mümkündür. İlk programlama seansı, protezi bireyin yürüyüş parametrelerine göre optimize etmek için deneyimli bir ortez-protez uzmanı tarafından yapılır.",
          "Takip eden rehabilitasyon programı; denge eğitimi, farklı zeminlerde yürüyüş, merdiven çıkma-inme, yük kaldırma ve günlük yaşam aktivitelerini kapsamalıdır. Kütahya merkezimizde MPK programlama ve rehabilitasyon koordinasyonu bir arada sunulmaktadır.",
        ],
      },
    ],
  },

  {
    slug: "protez-kullanicilari-icin-spor-ve-aktif-yasam",
    title: "Protez Kullanıcıları İçin Spor ve Aktif Yaşam Rehberi",
    excerpt: "Bacak veya kol protezi kullananlar için spor yapma olanakları, uygun protez tipleri ve aktif yaşam stratejileri.",
    category: "Rehabilitasyon",
    tags: ["spor protezi", "aktif yaşam", "koşu protezi", "paralimpik", "amputee spor"],
    readingTime: 6,
    publishedAt: "2026-06-18",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Protez kullananlar spor yapabilir mi? Koşu, bisiklet, yüzme ve diğer sporlar için özel protez seçenekleri ve aktif yaşam rehberi.",
    keywords: ["spor protezi", "koşu protezi", "protez ile spor", "aktif yaşam protez", "karbon fiber spor protezi"],
    featured: false,
    coverColor: "#1a5276",
    sections: [
      {
        id: "aktif-yasam-mumkun-mu",
        heading: "Protez Kullanarak Spor Yapılabilir mi?",
        level: 2,
        content: [
          "Kesinlikle evet. Protez teknolojisindeki son 20 yıllık gelişim, amputelerin yalnızca günlük yaşamlarını değil koşma, bisiklet sürme, yüzme, tırmanma hatta kayak yapma gibi spor aktivitelerini de yüksek performansla sürdürebilmelerine olanak tanımaktadır.",
          "Paralimpik Oyunlar'daki performanslar bu gerçeği dünyaya göstermiştir. Önemli olan doğru spor protezini seçmek, uygun rehabilitasyon almak ve kademeli antrenman programına bağlı kalmaktır.",
        ],
      },
      {
        id: "spor-protezi-cesitleri",
        heading: "Spor Protezi Çeşitleri",
        level: 2,
        content: [
          "Koşu / sprint protezleri: Karbon fiber enerji geri kazanımlı 'J' veya 'C' şekilli ayak bileşenleri, her adımdaki basınç enerjisini depolayıp iterek öne fırlatar. Blade (bıçak) ve Racing Foot gibi modeller amatörden paralimpik seviyesine kadar kullanılmaktadır.",
          "Su sporları protezleri: Titanyum ve paslanmaz çelik bileşenler, su geçirmez soket ve kaymaz ayak tabanıyla üretilen su protezleri yüzme, su kayağı ve tekne sporları için uygundur.",
          "Bisiklet protezleri: Klik bağlantı sistemleri (cleat) ve özel soket tasarımıyla pedal verimliliği optimize edilmiş bisiklet protezleri, rekabetçi bisiklet sporunu mümkün kılmaktadır.",
          "Dağ yürüyüşü / tırmanma protezleri: Mikro hareket emici (torsion) bileşenler ve özelleştirilmiş taban gribi, engebeli arazide stabiliteyi ve konforlu yürüyüşü destekler.",
        ],
      },
      {
        id: "baslarken",
        heading: "Spora Başlarken Dikkat Edilmesi Gerekenler",
        level: 2,
        content: [
          "Güdük hazırlığı: Spor aktivitesi, günlük yürüyüşe kıyasla güdük üzerinde çok daha fazla sürtünme, terleme ve basınç yaratır. Spordan önce güdük cildinin spor aktivitesine hazır olduğunu uzmanınızla değerlendirin.",
          "Kademeli artış: İlk haftalarda 15-20 dakikalık koşu/bisiklet seansları, ardından haftada %10'u aşmayan hacim artışı önerilir. Ani yoğunluk artışı güdük yaralanmalarının başlıca nedenidir.",
          "Soğuma sonrası güdük bakımı: Spor sonrası güdük yıkanmalı, iyice kurulanmalı ve dermatit önleyici bariyer krem uygulanmalıdır. Islak güdük ile liners takılı bırakılmamalıdır.",
          "Yedek liner ve ekstra çorap: Her spor seansu için yedek silikon liner ve farklı kalınlıklarda güdük çorabı bulundurmak hacim değişikliklerini telafi etmeye yardımcı olur.",
        ],
      },
      {
        id: "spor-secimi",
        heading: "Hangi Sporu Seçebilirsiniz?",
        level: 2,
        content: [
          "Düşük etki sporları: Yüzme, bisiklet, kürek ve masa tenisi günlük protez üzerinde ek yük oluşturmadan yapılabilecek mükemmel başlangıç sporlarıdır. Bu sporlar kardiyovasküler kondisyonu güçlü şekilde destekler.",
          "Orta etki sporları: Yürüyüş, golf, yelken ve dans — uygun protez bileşen seçimiyle rahatça yapılabilir. Tek taraflı alt ekstremite amputeleri bu kategoride en fazla seçeneğe sahiptir.",
          "Yüksek etki sporları: Koşu, basketbol, futbol, kayak ve tırmanma — özel spor protezi ve yoğun rehabilitasyon programı gerektirir. Ancak pek çok amputenin bu branşlarda başarılı olduğu kanıtlanmıştır.",
        ],
      },
    ],
  },

  {
    slug: "ust-ekstremite-protezleri-el-kol-amputasyonu",
    title: "Üst Ekstremite Protezleri: El ve Kol Amputasyonunda Çözümler",
    excerpt: "El, ön kol ve üst kol amputasyonunda kullanılan pasif, mekanik ve biyonik (miyoelektrik) protez seçenekleri hakkında kapsamlı rehber.",
    category: "Protez",
    tags: ["el protezi", "kol protezi", "miyoelektrik protez", "biyonik el", "üst ekstremite"],
    readingTime: 7,
    publishedAt: "2026-06-20",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Üst ekstremite amputasyonunda el ve kol protez seçenekleri: pasif, body-powered ve miyoelektrik protezler ile SGK kapsamı.",
    keywords: ["el protezi", "kol protezi", "miyoelektrik el", "biyonik kol", "üst ekstremite protezi kütahya"],
    featured: false,
    coverColor: "#2e4057",
    sections: [
      {
        id: "ust-ekstremite-amputasyon",
        heading: "Üst Ekstremite Amputasyonuna Genel Bakış",
        level: 2,
        content: [
          "Üst ekstremite amputasyonları alt ekstremiteye kıyasla daha az sıklıkla görülmekle birlikte, günlük yaşam aktivitelerini (yemek yeme, yazma, kişisel bakım) kapsayan üst ekstremite, bireyin bağımsızlığı üzerinde belirleyici bir etkiye sahiptir.",
          "Amputasyon düzeyleri yüksek seviyeden başlayarak omuz dezartikülasyonu, üst kol (trans-hümeral), dirsek dezartikülasyonu, ön kol (trans-radial), el bileği dezartikülasyonu ve kısmi el amputasyonu şeklinde sınıflandırılır. Her düzey, farklı protez bileşen kombinasyonları ve farklı rehabilitasyon yaklaşımları gerektirir.",
        ],
      },
      {
        id: "protez-tipleri",
        heading: "Üst Ekstremite Protez Tipleri",
        level: 2,
        content: [
          "Pasif (kozmetik) protezler: İşlevsel hareket içermeyen, yalnızca görsel bütünlük sağlayan silikondan üretilen protezlerdir. Renk ve doku açısından doğal ele son derece yakın görünüm sunarlar. Sosyal ortamlarda öz güveni destekleyen bu protezler, özellikle parsiyel el amputasyonlarında tercih edilmektedir.",
          "Body-powered (vücutla kontrollü) protezler: Kablo ve harness sistemi aracılığıyla karşı omuz hareketi ile kavrama ve açma işlemi gerçekleştirilen bu protezler dayanıklı, bakım gerektirmeyen ve sezgisel kontrol sunan seçeneklerdir. Hook (çengel) veya el şeklinde terminal cihazlarla kullanılır.",
          "Miyoelektrik (biyonik) protezler: Kaslardan alınan yüzey EMG sinyalleriyle kontrol edilen bu motorlu protezler, doğal kavrama paternlerini taklit edecek şekilde tasarlanmıştır. Rotasyonel bilek, çok eksenli parmak hareketi ve çeşitli kavrama modları (pens, güç, hassas, yuvarlak nesne) günümüz biyonik ellerin standart özelliklerindendir.",
          "Hibrid protezler: Body-powered dirsek ile miyoelektrik el kombinasyonu gibi iki teknolojinin bir arada kullanıldığı bu tasarımlar, üst kol amputasyonlarında işlevsellik ve enerji verimliliği açısından dengeli bir çözüm sunar.",
        ],
      },
      {
        id: "miyoelektrik-nasil-calisir",
        heading: "Miyoelektrik Protez Nasıl Çalışır?",
        level: 2,
        content: [
          "Miyoelektrik kontrol, güdük kaslarının kasılması sırasında oluşan elektriksel aktivitenin soket içindeki elektrot sensörleri ile yakalanmasına dayanır. Bu sinyaller işlenerek el motorlarını harekete geçirir.",
          "İki kas kontrolü: En yaygın sistemde büküm (fleksör) kası el kapanmasını, germe (ekstansör) kası ise el açılmasını tetikler. Pratikleşme ile bu kontrol sezgisel hale gelir.",
          "Çok modlu kontrol: Günümüz gelişmiş sistemlerinde birden fazla kas grubu ya da co-contraction (eş zamanlı kasılma) farklı kavrama modları arasında geçiş yapmayı sağlar. Pattern recognition (örüntü tanıma) algoritması ise kasılma örüntülerini öğrenerek 10'dan fazla hareketi kontrol etmeye olanak tanır.",
          "Yeniden implante elektrodlar: Osseointegration ve targeted muscle reinnervation (TMR) gibi cerrahi yaklaşımlarla kontrol sinyal kalitesi önemli ölçüde artırılabilmektedir.",
        ],
      },
      {
        id: "rehabilitasyon-ust-ekstremite",
        heading: "Üst Ekstremite Protez Rehabilitasyonu",
        level: 2,
        content: [
          "Üst ekstremite rehabilitasyonu, alt ekstremitenin aksine çok yoğun bir nöromüsküler öğrenme süreci içerir. Miyoelektrik kontrol öğrenimi ortalama 4-8 haftalık yoğun eğitim gerektirmektedir.",
          "Ergoterapi merkezi rolü: Ergoterapist eşliğinde gerçekleştirilen aktivite tabanlı eğitimler (sofra kurma, yazma, bilgisayar kullanımı) protezin günlük yaşama entegrasyonunu hızlandırır.",
          "Bilateral görev eğitimi: Her iki elin koordinasyonu gerektiren (açma, kesme, bağlama gibi) ikili görevler protez kullanım yeterliliğini en etkili artıran eğitim yöntemidir.",
        ],
      },
    ],
  },

  {
    slug: "sgk-ile-ortez-protez-nasil-alinir-adim-adim-rehber",
    title: "SGK ile Ortez Protez Cihazı Nasıl Alınır? Adım Adım Tam Rehber",
    excerpt: "SGK üzerinden ortez veya protez almak için izlenmesi gereken tüm adımlar, gerekli belgeler ve dikkat edilmesi gereken noktalar.",
    category: "SGK & Mevzuat",
    tags: ["SGK ortez", "SGK protez", "sağlık güvencesi", "cihaz başvurusu", "devlet katkısı"],
    readingTime: 8,
    publishedAt: "2026-06-22",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "SGK ile ortez ve protez cihazı almak için hangi adımları izlemeniz gerekiyor? Gerekli belgeler, heyet raporu ve fark ücreti konusunda eksiksiz rehber.",
    keywords: ["sgk ortez protez başvuru", "sgk protez nasıl alınır", "sgk cihaz", "ortez protez devlet katkısı", "sut ortez"],
    featured: true,
    coverColor: "#1a3a1a",
    sections: [
      {
        id: "genel-cerceve",
        heading: "SGK Cihaz Geri Ödeme Sisteminin Genel Çerçevesi",
        level: 2,
        content: [
          "Türkiye'de SGK, Sağlık Uygulama Tebliği (SUT) çerçevesinde ortez, protez ve diğer tıbbi cihazların bir bölümünü geri ödemektedir. Bu geri ödeme miktarları SUT'ta listelenen cihaz kodlarına göre belirlenmekte ve zaman zaman güncellenmektedir.",
          "Önemli not: SGK, cihazın tamamını değil belirli bir tutarı karşılar. Bu tutarın üzerinde kalan miktar, hastanın seçimine bağlı olarak 'fark ücreti' olarak ödenir. Standart (geri ödeme tavanında) bir cihaz tercih eden hastalar fark ödemeksizin SGK kapsamından yararlanabilir.",
        ],
      },
      {
        id: "adim1-hekim-basvuru",
        heading: "1. Adım: Uzman Hekim Başvurusu",
        level: 2,
        content: [
          "Süreç, SGK'lı bir sağlık kuruluşunda (devlet hastanesi veya SGK anlaşmalı özel hastane) ilgili branş uzmanına muayene ile başlar. Başvurulması gereken branşlar cihaz türüne göre değişmektedir:",
          "Protezler için: Ortopedi ve Travmatoloji veya Fiziksel Tıp ve Rehabilitasyon uzmanı. Ortezler için: Ortopedi, Fiziksel Tıp ve Rehabilitasyon veya Nöroloji uzmanı. Tabanlıklar için: Ortopedi veya fiziksel tıp uzmanı reçetesi yeterli olabilmektedir.",
          "Uzman, tıbbi gereksinimi belirleyen muayene bulgularını kayıt altına alarak ortez/protez reçetesi düzenler. Bazı yüksek maliyetli cihazlar için 'sağlık kurulu raporu' (heyet raporu) gerekebilir; bu rapor birden fazla uzman imzası içerir.",
        ],
      },
      {
        id: "adim2-merkez-basvuru",
        heading: "2. Adım: Ortez Protez Merkezine Başvuru",
        level: 2,
        content: [
          "Hekim reçetenizi aldıktan sonra SGK ile anlaşmalı bir ortez protez merkezine başvurarak cihazınızın ölçüm ve üretim sürecini başlatmanız gerekmektedir.",
          "Bu aşamada merkez; cihaz ölçümlerini alır, gerekli teknik özellikleri ve proforma faturayı hazırlar ve SGK'ya ön onay başvurusu yapar. Merkezimiz bu belgelerin tamamını sizin adınıza hazırlamaktadır.",
          "Dikkat edilmesi gereken nokta: Cihaz merkezini seçerken SGK anlaşmasını, cihaz kalitesini, sonrası destek ve bakım olanaklarını birlikte değerlendirin. Yalnızca fiyat odaklı seçim uzun vadede ek maliyetlere yol açabilir.",
        ],
      },
      {
        id: "adim3-onay-uretim",
        heading: "3. Adım: SGK Onayı ve Cihaz Üretimi",
        level: 2,
        content: [
          "Ön onay belgesi ile birlikte dosyanız SGK'ya iletilir. SGK, dosyayı inceleyerek tüm belgeler eksiksiz ve uygunsa onay verir. Onay süresi standart cihazlarda genellikle 3-10 iş günüdür.",
          "Onay alınmasının ardından cihaz üretim süreci başlar. Kişiye özel (custom-made) cihazlarda üretim süresi malzeme ve teknolojiye göre 1-3 hafta arasında değişmektedir.",
        ],
      },
      {
        id: "adim4-teslim-uyum",
        heading: "4. Adım: Cihaz Teslimi ve Uyum Seansları",
        level: 2,
        content: [
          "Cihaz tesliminde mutlaka deneme yapılmalı; gerekli uyum ayarları (fitting) yapılarak cihazın beden ile uyumu doğrulanmalıdır. İlk kullanım sonrası randevu ile uyum sorunları giderilir.",
          "SGK belgelerini imzalamadan önce cihazın uyumundan emin olmanız önerilir. Bazı cihazlarda belirli uyum periyodlarından sonra küçük ayar seansları ücretsiz gerçekleştirilir.",
        ],
      },
      {
        id: "yenileme-sureci",
        heading: "Cihaz Yenileme Süreci",
        level: 2,
        content: [
          "SGK, cihaz türüne göre yenileme süreleri belirlemiştir. Bu süreler genellikle 3-5 yıl olup çocuklarda büyüme hızına bağlı olarak daha kısa tutulabilmektedir. Hasar veya tıbbi zorunluluk halinde süre dolmadan yenileme için ayrıca başvuru yapılabilmektedir.",
          "Kütahya merkezimiz, yenileme zamanı yaklaşan hastalarımıza proaktif bildirim yaparak sürecin gecikmeden başlatılmasına yardımcı olmaktadır.",
        ],
      },
    ],
  },

  {
    slug: "omurga-ortezi-korse-turleri-kullanim",
    title: "Omurga Ortezi ve Korse Çeşitleri: Bel ve Sırt Sorunlarında Kullanım Rehberi",
    excerpt: "Lomber, torasik ve torakolumbosacral ortezler ile skolyoz korseleri hakkında bilmeniz gereken her şey.",
    category: "Ortez",
    tags: ["omurga ortezi", "korse", "bel fıtığı", "skolyoz", "lomber ortez"],
    readingTime: 7,
    publishedAt: "2026-06-25",
    author: "İstanbul Ortez Protez Uzman Ekibi",
    metaDescription: "Bel fıtığı, skolyoz, osteoporoz kırığı ve cerrahi sonrası dönemde kullanılan omurga ortezleri ve korseler hakkında kapsamlı rehber.",
    keywords: ["omurga ortezi", "bel korsesi", "skolyoz korsesi", "lomber ortez", "tlso brace"],
    featured: false,
    coverColor: "#4a235a",
    sections: [
      {
        id: "omurga-ortezi-nedir",
        heading: "Omurga Ortezi Nedir ve Hangi Bölgeleri Kapsar?",
        level: 2,
        content: [
          "Omurga ortezi; omurganın belirli segmentlerini immobilize etmek, desteklemek, düzeltmek veya yükü boşaltmak amacıyla kullanılan tıbbi cihazlardır. Kapsadığı bölgeye göre farklı isimlerle anılırlar:",
          "CO (Cervical Orthosis): Boyun bölgesini kapsar. Philadelphia yaka ve SOMI braces en yaygın örneklerdir.",
          "CTLSO (Cervico-Thoraco-Lumbo-Sacral Orthosis): Boyun'dan sakruma kadar uzanan geniş kapsama sahip uzun gövde ortezleri.",
          "TLSO (Thoraco-Lumbo-Sacral Orthosis): Dorsal'den sakruma kadar. Skolyoz tedavisinde (Boston, Rigo-Chêneau) yaygın kullanılır.",
          "LSO (Lumbo-Sacral Orthosis): Lomber bölge ve sakrumu destekler. Bel fıtığı ve lomber instabilite endikasyonlarında sık tercih edilir.",
        ],
      },
      {
        id: "bel-fitigi-ortezi",
        heading: "Bel Fıtığı ve Lomber Sorunlarda Ortez",
        level: 2,
        content: [
          "Lomber disk hernisi (bel fıtığı) akut ağrılı dönemde kısa süreli lomber ortez kullanımı, omurga segmentleri arasındaki hareketi sınırlayarak ağrıyı azaltabilir. Ancak kronik dönemde uzun süreli korse kullanımı önerilmez; zira kas atrofisi ve bağımlılık riski taşır.",
          "Rijit lomber ortezler (LSO): Polipropilenden üretilen sert kabuklu bu ortezler, akut lomber instabilite, lomber kırık konservatif tedavisi ve füzyon cerrahisi sonrası stabilizasyon için kullanılır.",
          "Esnek lomber destekler (bel bandı): Neopren veya elastik kumaştan yapılan bu destekler ısı sağlayarak kas spazmını azaltır; hafif instabilitede ve proprioceptive feedback için kullanılabilir. Rijit ortezlerin yerine geçemez.",
        ],
      },
      {
        id: "skolyoz-korseleri",
        heading: "Skolyoz Korseleri: Çocukluk Döneminden Yetişkinliğe",
        level: 2,
        content: [
          "İdyopatik adolesan skolyozun (AIS) konservatif tedavisinde korse, Cobb açısı 25-45° arasında olan ve iskelet maturasyonu tamamlanmamış bireylerde kullanılır. Klinisyen korse kullanımının iskelet büyümesi tamamlanana kadar eğrinin ilerlemesini yavaşlattığını ya da durdurduğunu kabul etmektedir.",
          "Boston Brace: En yaygın kullanılan TLSO tipi skolyoz korsesidir. Açık pelvik tasarımıyla hastaların toleransı nispeten daha yüksektir.",
          "Rigo-Chêneau Brace: Üç boyutlu düzeltme prensibiyle tasarlanan bu aktif korse, Boston'a kıyasla daha kompleks kurve paternlerinde ve yüksek Cobb açılarında kullanılmaktadır.",
          "Korse etkinliği için günde 18-23 saat kullanım gerekir. Bu yoğun kullanım; cilt bakımı, yıkama rutini ve psikososyal destek açısından aile uyumunu gerektirmektedir.",
        ],
      },
      {
        id: "osteoporoz-kirigi-ortez",
        heading: "Osteoporoz Kırıklarında Omurga Ortezi",
        level: 2,
        content: [
          "Osteoporotik vertebra kompresyon kırıklarında TLSO kullanımı; ağrı azalması, postürün korunması ve yeniden kırık riskinin azaltılması açısından etkin bir konservatif yaklaşımdır.",
          "Jewett veya CASH ortezi hiperekstensiyon ortezi olarak bu amaçla kullanılmaktadır; lomber kırıklarda ise lomber korseler tercih edilir. Cihaz seçimi kırığın seviyesi ve stabilitesi göz önüne alınarak yapılmalıdır.",
          "Merkezimizde omurga ortezi uygulamaları için kişiye özel ölçü alımı ve uyum seansları sunulmakta; skolyoz korsesi takibinde 3 ayda bir kontrol randevusu planlanmaktadır.",
        ],
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  "Tümü",
  "SGK & Mevzuat",
  "Protez",
  "Ortez",
  "Tabanlık",
  "Rehabilitasyon",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(current: BlogPost, count = 3): BlogPost[] {
  return BLOG_POSTS.filter(
    (p) => p.slug !== current.slug && (p.category === current.category || p.tags.some((t) => current.tags.includes(t)))
  ).slice(0, count);
}
