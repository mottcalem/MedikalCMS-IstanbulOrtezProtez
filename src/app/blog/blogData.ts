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
  featuredOrder?: number;
  coverColor: string;
  coverImage: string;
};

export const BLOG_POSTS: BlogPost[] = [
{
  "slug": "kutahya-ilk-bacak-protezine-alisma-sureci",
    featured: true,
    featuredOrder: 0,
  "title": "Kütahya’da İlk Bacak Protezine Alışma: Prova ve Yürüyüş Süreci",
  "excerpt": "İlk bacak protezine alışma sürecinde prova, soket uyumu, yürüyüş eğitimi ve kontrol randevuları hakkında Kütahya için bilgilendirici rehber.",
  "category": "Protez",
  "tags": [
    "ilk bacak protezi",
    "proteze alışma süreci",
    "Kütahya bacak protezi",
    "protez yürüyüş eğitimi"
  ],
  "readingTime": 2,
  "publishedAt": "2026-10-26",
  "author": "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
  "metaDescription": "İlk bacak protezine alışma sürecinde prova, soket uyumu, yürüyüş eğitimi ve kontrol randevuları hakkında Kütahya için bilgilendirici rehber.",
  "keywords": [
    "ilk bacak protezi",
    "proteze alışma süreci",
    "Kütahya bacak protezi",
    "protez yürüyüş eğitimi"
  ],
  "coverColor": "#123B6D",
  "coverImage": "/hero-prosthetic.jpg",
  "sections": [
    {
      "id": "ilk-degerlendirme",
      "heading": "İlk Bacak Protezi Öncesinde Neler Değerlendirilir?",
      "level": 2,
      "content": [
        "İlk bacak protezine alışmak, cihazın tesliminden daha geniş bir süreçtir. Amputasyon seviyesi, kalan uzvun durumu, genel sağlık, denge ve günlük yaşam hedefleri birlikte ele alınır. Ev içinde hareket etmek ile uzun mesafe yürümek farklı ihtiyaçlar oluşturabilir; hedeflerinizi ilk görüşmede açıkça anlatmanız planlamayı kolaylaştırır.",
        "Protez uygulamasına ne zaman başlanacağına sağlık ekibi karar verir. Başka bir kullanıcının takvimini kendinize ölçüt almak yerine yara iyileşmesi ve rehabilitasyon değerlendirmesi doğrultusunda ilerlemek gerekir. Seçenekler için [alt ekstremite protezi rehberimizi](/blog/kutahyada-alt-ekstremite-protezi-yaptirmayi-dusunenler-icin-rehber) inceleyebilirsiniz."
      ]
    },
    {
      "id": "prova",
      "heading": "Prova ve Soket Uyumu Neden Önemlidir?",
      "level": 2,
      "content": [
        "Soket, kalan uzuv ile protez arasındaki bağlantıyı sağlar. Provada yalnızca protezin boyu değil, soketin oturuşu, basıncın dağılımı ve hareket sırasında hissedilen güven değerlendirilir. Rahatsızlığın tam yerini ve hangi hareketle oluştuğunu tarif etmek, düzenlemelerin daha doğru yapılmasına yardımcı olur.",
        "İlk denemede her şeyin kusursuz hissettirmesi beklenmemelidir; buna karşılık ağrıya katlanmak da uyum sürecinin hedefi değildir. Belirgin ağrı, sürtünme ya da cilt hasarında kullanımı sürdürmeden ekibinizle görüşün. Soketi kendiniz kesmeyin veya bağlantı ayarlarını değiştirmeyin."
      ]
    },
    {
      "id": "yuruyus",
      "heading": "Yürüyüş Eğitiminde Nasıl İlerlenir?",
      "level": 2,
      "content": [
        "Fizyoterapist, değerlendirmeye göre ayağa kalkma, ağırlık aktarma, denge ve adım çalışmalarını planlar. Yardımcı yürüme cihazının gerekip gerekmediği de kişiye göre belirlenir. Merdiven, eğim ve dış ortam çalışmaları için güvenli düzeye ulaşmak gerekir.",
        "Günlük kullanım süresi ve dinlenme aralıkları kişisel programla belirlenmelidir. İlk günlerde uzun yürüyüş hedeflemek yerine verilen hareketleri güvenli biçimde uygulamaya odaklanın. Egzersizlerin amacı ve sınırları için [protezle aktif yaşam yazımızı](/blog/protez-kullanicilari-icin-spor-ve-aktif-yasam) okuyabilirsiniz."
      ]
    },
    {
      "id": "takip",
      "heading": "Kontrole Giderken Hangi Bilgileri Kaydetmelisiniz?",
      "level": 2,
      "content": [
        "Hangi ayakkabıyla yürüdüğünüzü, kullanım süresini ve rahatsızlığın ne zaman başladığını not edin. Soketin gün içinde gevşemesi veya sıkılaşması gibi değişiklikleri de bildirin. Takip sıklığı herkes için aynı değildir; belirgin uyum sorunu varsa planlanan kontrol tarihini beklemeyin."
      ]
    },
    {
      "id": "sorular",
      "heading": "İlk Protez Kullanımı Hakkında Sık Sorulan Sorular",
      "level": 2,
      "content": [
        "Proteze kaç günde alışılır? Herkes için geçerli bir süre yoktur. Amputasyon seviyesi, fiziksel kapasite, soket uyumu ve rehabilitasyon süreci bu süreyi etkiler.",
        "İlk protezle hemen dışarı çıkılır mı? Dış ortam yürüyüşü için denge ve güvenli hareket becerileri değerlendirilmelidir. Kararı rehabilitasyon ekibinizle birlikte verin."
      ]
    },
    {
      "id": "bilgi",
      "heading": "Kütahya’da Protez Provası İçin Bilgi Alın",
      "level": 2,
      "content": [
        "Arıkan Ortopedi ile [iletişime geçerek](/#iletisim) mevcut reçeteniz, kullandığınız cihaz ve günlük yaşam hedefleriniz üzerinden prova ve takip süreci hakkında bilgi alabilirsiniz.",
        "Kaynak: [NHS amputasyon ve rehabilitasyon bilgileri](https://www.nhs.uk/tests-and-treatments/amputation/). Bu yazı genel bilgilendirmedir; kişisel tedavi ve kullanım programı sağlık ekibiniz tarafından belirlenir."
      ]
    }
  ]
},
{
  "slug": "bacak-protezinde-guduk-soket-liner-bakimi",
    featured: true,
    featuredOrder: 2,
  "title": "Bacak Protezinde Güdük, Soket ve Liner Bakımı Nasıl Yapılır?",
  "excerpt": "Bacak protezinde güdük cildi, soket ve liner bakımı; günlük kontrol, temizlik ve uyum sorunlarında izlenecek adımlar için pratik rehber.",
  "category": "Protez",
  "tags": [
    "protez bakımı",
    "güdük bakımı",
    "soket uyumu",
    "protez liner temizliği"
  ],
  "readingTime": 2,
  "publishedAt": "2026-10-19",
  "author": "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
  "metaDescription": "Bacak protezinde güdük cildi, soket ve liner bakımı; günlük kontrol, temizlik ve uyum sorunlarında izlenecek adımlar için pratik rehber.",
  "keywords": [
    "protez bakımı",
    "güdük bakımı",
    "soket uyumu",
    "protez liner temizliği"
  ],
  "coverColor": "#123B6D",
  "coverImage": "/protez-soket-liner-bakimi.jpg",
  "sections": [
    {
      "id": "bakim",
      "heading": "Protez Bakımında Üç Ayrı Alan",
      "level": 2,
      "content": [
        "Bacak protezinin bakımı yalnızca dış yüzeyini silmek değildir. Kalan uzvun cildi, soketin iç yüzeyi ve kullanılıyorsa liner ayrı ayrı değerlendirilmelidir. Liner, cilt ile soket arasında kullanılan ara yüzdür; her protez aynı liner veya bağlantı sistemine sahip değildir.",
        "Bakım talimatlarını teslim sırasında yazılı istemek yararlıdır. Malzeme ve mekanizma değiştiğinde temizlik yöntemi de değişebilir. Üreticinin talimatı ve uygulama ekibinin önerisi, internetteki genel tariflerden önce gelir."
      ]
    },
    {
      "id": "cilt",
      "heading": "Güdük Cildini Günlük Kontrol Etmek",
      "level": 2,
      "content": [
        "Protez çıkarıldığında ciltte yeni kızarıklık, sürtünme veya yara olup olmadığını inceleyin. Görmekte zorlandığınız alanlar için ayna kullanılabilir. Cildi temiz tutun ve protezi yeniden takmadan önce iyice kurulayın. Kullanacağınız cilt ürünlerini sağlık ekibinizle görüşün.",
        "Uzun süren kızarıklık, su toplaması veya açık yara varsa protezi zorlayarak kullanmayın; değerlendirme isteyin. Akıntı, yayılan kızarıklık ya da ateş gibi enfeksiyonu düşündüren belirtilerde sağlık kuruluşuna başvurun. Duyu kaybı olan kişiler yalnızca ağrıya güvenmemelidir."
      ]
    },
    {
      "id": "liner",
      "heading": "Liner ve Soket Temizliğinde Nelere Dikkat Edilir?",
      "level": 2,
      "content": [
        "Liner için önerilen ürün, yıkama yöntemi ve kurutma koşullarını üretici talimatından kontrol edin. Uygunluğu belirtilmemiş kimyasal, aşındırıcı veya yüksek ısı kullanmayın. Temizlikten sonra çatlak, yırtık ve yüzey bozulması olup olmadığını inceleyin.",
        "Soketin temizliği sırasında elektronik ve mekanik parçalara su kaçırmamak gerekir. Cihazınızın suya dayanımını varsaymayın. Gevşeyen parça, olağandışı ses veya kilitlenme sorunu varsa teknik kontrol yaptırın; bağlantıları kendiniz sökmeyin."
      ]
    },
    {
      "id": "uyum",
      "heading": "Soket Uyumu Değişirse Ne Yapılmalı?",
      "level": 2,
      "content": [
        "Günlük kullanımda soketin alışılmıştan farklı hissettirmesi kontrol gerektirebilir. Yeni baskı noktası, dönme veya gevşeme varsa ne zaman oluştuğunu not edin. Dolgu eklemek veya çorap katmanını değiştirmek gibi uygulamaları yalnızca size öğretilen plan kapsamında yapın.",
        "Yeni protez kullanıyorsanız [ilk proteze alışma rehberi](/blog/kutahya-ilk-bacak-protezine-alisma-sureci), prova ve takipte hangi bilgileri paylaşabileceğinizi açıklar."
      ]
    },
    {
      "id": "sorular",
      "heading": "Protez Bakımı Hakkında Sık Sorulan Sorular",
      "level": 2,
      "content": [
        "Her liner aynı ürünle yıkanır mı? Hayır. Malzeme ve üreticiye göre talimat değişebilir; cihazınıza ait yönergeyi izleyin.",
        "Protezle duş alınır mı? Ancak ilgili modelin kullanım koşulları buna izin veriyorsa değerlendirilebilir. Genel bir suya dayanıklılık kabulüyle hareket etmeyin."
      ]
    },
    {
      "id": "iletisim",
      "heading": "Kütahya’da Protez Bakımı ve Kontrol",
      "level": 2,
      "content": [
        "Uyum ve bakım sorularınız için [Arıkan Ortopedi’ye ulaşabilirsiniz](/#iletisim). Görüşmeye protezinizi ve varsa ürün kullanım kılavuzunu getirmeniz, cihazınıza uygun bilgi alınmasını kolaylaştırır.",
        "Kaynak: [Leeds Teaching Hospitals güdük bakımı rehberi](https://flipbooks.leedsth.nhs.uk/LN002621.pdf). İçerik genel bilgi amaçlıdır; kişisel bakım planınız için sağlık ekibinize danışın."
      ]
    }
  ]
},
{
  "slug": "afo-ile-ayakkabi-secimi-kutahya",
  "title": "AFO ile Ayakkabı Seçimi: Uyum, Numara ve Prova Rehberi",
  "excerpt": "AFO ile uyumlu ayakkabı nasıl seçilir? Numara, iç hacim, kapanış sistemi ve prova sırasında kontrol edilecek noktalar hakkında rehber.",
  "category": "Ortez",
  "tags": [
    "AFO ayakkabı seçimi",
    "ortez ayakkabı uyumu",
    "Kütahya AFO",
    "ayak bileği ortezi"
  ],
  "readingTime": 2,
  "publishedAt": "2026-10-12",
  "author": "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
  "metaDescription": "AFO ile uyumlu ayakkabı nasıl seçilir? Numara, iç hacim, kapanış sistemi ve prova sırasında kontrol edilecek noktalar hakkında rehber.",
  "keywords": [
    "AFO ayakkabı seçimi",
    "ortez ayakkabı uyumu",
    "Kütahya AFO",
    "ayak bileği ortezi"
  ],
  "coverColor": "#0AADA8",
  "coverImage": "/kutahya-afo-ayak-bilegi-ortezi.png",
  "sections": [
    {
      "id": "uyum",
      "heading": "AFO ve Ayakkabı Birlikte Değerlendirilmelidir",
      "level": 2,
      "content": [
        "AFO, ayak ve ayak bileğini destekleyen bir ortezdir. Ayakkabının içine yerleşen bölüm ek hacim gerektirdiği için günlük ayakkabınız yeni cihazınızla uyum sağlamayabilir. Ayakkabı seçimi, ortezin planlanan şekilde kullanılabilmesinin bir parçasıdır.",
        "Her AFO aynı sertlikte veya hacimde değildir. Ayakkabı önerisi, kullandığınız model ve hekim tarafından belirlenen hareket kontrolüyle birlikte ele alınmalıdır. Temel bilgiler için [Kütahya AFO rehberimize](/blog/kutahya-afo-kisiye-ozel-ayak-ayak-bilegi-ortezi-rehberi) göz atabilirsiniz."
      ]
    },
    {
      "id": "hacim",
      "heading": "Yalnızca Büyük Numara Almak Yeterli mi?",
      "level": 2,
      "content": [
        "Uzunluk kadar genişlik, derinlik ve açılıp kapanma kolaylığı da önemlidir. Sırf AFO sığsın diye gereğinden uzun bir ayakkabı almak yürümeyi zorlaştırabilir. Ayak, ortez ve ayakkabıyı birlikte deneyerek karar verin.",
        "Geniş açılan, bağcık veya cırt cırtla sabitlenen modeller uygulamayı kolaylaştırabilir. Çıkarılabilir iç taban ek alan sağlayabilir; bunun cihazınız için uygunluğunu uygulama ekibinize sorun. Ortezi sığdırmak için kesmeyin veya ısıtarak değiştirmeyin."
      ]
    },
    {
      "id": "prova",
      "heading": "Ayakkabı Provasında Kontrol Edilecek Noktalar",
      "level": 2,
      "content": [
        "Provaya AFO’nuzu ve kullanmanız önerilen çorabı götürün. Topuğun ortezdeki yerine oturduğunu, kayışların kapanabildiğini ve ayakkabının ayağı aşırı sıkıştırmadığını kontrol ettirin. Oturarak rahat gelen bir modelin ayakta ve yürürken de denenmesi gerekir.",
        "Topuk yüksekliği ve taban yapısı yürüyüşü etkileyebilir. Belirgin biçimde farklı ayakkabıya geçmeden önce ekibinizden görüş alın. Tek taraflı AFO kullanımında iki ayağın birlikte değerlendirilmesi ve yürüyüşün kontrol edilmesi önemlidir."
      ]
    },
    {
      "id": "cilt",
      "heading": "Yeni Ayakkabıyla Cilt Kontrolü",
      "level": 2,
      "content": [
        "İlk kullanımlardan sonra parmakları, topuk çevresini ve kayışların temas alanlarını inceleyin. Ağrı, kalıcı kızarıklık veya su toplaması olduğunda kullanımı zorlamayın; uyum değerlendirmesi isteyin. Yeni ayakkabının açılmasını beklemek, belirgin baskının çözümü değildir.",
        "Çocuklarda büyüme nedeniyle daha önce uygun olan ayakkabı ve ortez dar gelebilir. Yeni şikâyetleri yalnızca ayakkabı numarasıyla açıklamadan cihazın da kontrol edilmesini sağlayın. [Çocuklarda ortez kullanımı rehberi](/blog/cocuklarda-ortez-kullanimi-ne-zaman-gerekli) bu süreç hakkında ek bilgi sunar."
      ]
    },
    {
      "id": "sorular",
      "heading": "AFO Ayakkabısı Hakkında Sık Sorulan Sorular",
      "level": 2,
      "content": [
        "AFO için kaç numara büyük ayakkabı gerekir? Sabit bir numara farkı yoktur; uygunluk ortezle yapılan provayla belirlenir.",
        "Her spor ayakkabı uygun mudur? Hayır. Modelin iç hacmi, kapanış sistemi ve taban özellikleri birlikte kontrol edilmelidir."
      ]
    },
    {
      "id": "iletisim",
      "heading": "Kütahya’da AFO ve Ayakkabı Uyumu İçin Destek",
      "level": 2,
      "content": [
        "Ayakkabı satın almadan önce [Arıkan Ortopedi ile görüşerek](/#iletisim) cihazınızla prova hakkında bilgi alabilirsiniz. Mevcut ayakkabınızı getirmeniz karşılaştırmayı kolaylaştırır.",
        "Kaynak: [North Tees and Hartlepool NHS AFO hasta rehberi](https://www.nth.nhs.uk/resources/ankle-foot-orthosis/). Bu içerik genel bilgilendirmedir; bireysel cihaz ve kullanım önerileri uzman değerlendirmesi gerektirir."
      ]
    }
  ]
},
{
  "slug": "ortopedik-tabanliga-alisma-ve-ayakkabi-uyumu",
    featured: true,
    featuredOrder: 4,
  "title": "Ortopedik Tabanlığa Alışma Süreci ve Doğru Ayakkabı Uyumu",
  "excerpt": "Yeni ortopedik tabanlığa alışırken kullanım süresi, ayakkabı uyumu, temizlik ve kontrol gerektiren belirtiler hakkında bilgilendirici rehber.",
  "category": "Tabanlık",
  "tags": [
    "ortopedik tabanlığa alışma",
    "kişiye özel tabanlık",
    "tabanlık ayakkabı uyumu",
    "Kütahya tabanlık"
  ],
  "readingTime": 2,
  "publishedAt": "2026-10-05",
  "author": "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
  "metaDescription": "Yeni ortopedik tabanlığa alışırken kullanım süresi, ayakkabı uyumu, temizlik ve kontrol gerektiren belirtiler hakkında bilgilendirici rehber.",
  "keywords": [
    "ortopedik tabanlığa alışma",
    "kişiye özel tabanlık",
    "tabanlık ayakkabı uyumu",
    "Kütahya tabanlık"
  ],
  "coverColor": "#0AADA8",
  "coverImage": "/footbalance-tabanlik.webp",
  "sections": [
    {
      "id": "baslangic",
      "heading": "Yeni Tabanlık Kullanımında İlk Adım",
      "level": 2,
      "content": [
        "Kişiye özel ortopedik tabanlık, ayakkabının içinde ayağı desteklemek amacıyla planlanır. Yeni bir tabanlıkla yürümek alışılmıştan farklı hissedilebilir. İlk günden uzun süre kullanmak yerine size verilen kademeli kullanım planını izlemek gerekir.",
        "Tabanlığın hedefi ve kullanım alanı değerlendirmeye göre değişir. Her ayak ağrısı aynı nedene bağlı olmadığı için başka bir kişinin tabanlığını veya kullanım programını örnek almayın. Ürün yaklaşımını tanımak için [FootBalance tabanlık yazımızı](/blog/footbalance-ortopedik-tabanlik-kimlere-uygun) okuyabilirsiniz."
      ]
    },
    {
      "id": "sure",
      "heading": "Tabanlık Günde Kaç Saat Kullanılmalı?",
      "level": 2,
      "content": [
        "Kullanım süresini değerlendirmeyi yapan uzman belirlemelidir. Başlangıçta kısa sürelerle deneme ve toleransa göre artırma önerilebilir; ancak herkes için aynı gün ve saat çizelgesi uygun değildir. İşte ayakta kalma sürenizi ve spor alışkanlıklarınızı görüşmede anlatın.",
        "Yeni başlayan veya artan ağrıyı uyumun kaçınılmaz parçası saymayın. Belirgin rahatsızlık, ciltte yara veya kalıcı baskı izi varsa kullanıma ara verip kontrol isteyin. Duyu kaybınız ya da dolaşım sorununuz varsa kullanım planı ayrıca değerlendirilmelidir."
      ]
    },
    {
      "id": "ayakkabi",
      "heading": "Tabanlık Hangi Ayakkabıya Uyar?",
      "level": 2,
      "content": [
        "Ayak ve tabanlık için yeterli iç hacim, güvenli kapanış ve dengeli yerleşim aranır. Tabanlık ayakkabıda kıvrılmadan durmalı, parmakları sıkıştırmamalıdır. Çıkarılabilir iç tabanı olan ayakkabılar uyumu kolaylaştırabilir.",
        "Tabanlığı mevcut iç tabanın üstüne koymanın uygun olup olmadığını sorun. Farklı ayakkabıya geçerken yeniden kontrol edin; bir modelde rahat olan tabanlık dar bir modelde aynı sonucu vermeyebilir. Tabanlığı kendi kararınızla kesmeyin veya üzerine ek parça yapıştırmayın."
      ]
    },
    {
      "id": "bakim",
      "heading": "Temizlik ve Aşınma Kontrolü",
      "level": 2,
      "content": [
        "Temizlik ürünü ve kurutma yöntemi malzemeye göre değişir. Size verilen talimatı izleyin; yüksek ısı veya uygunluğu belirtilmemiş kimyasallar kullanmayın. Tabanlığın yüzeyini, kenarlarını ve ayakkabıda düz durup durmadığını düzenli inceleyin.",
        "Yenileme zamanı için herkese uygun sabit bir ay sayısı yoktur. Kullanım yoğunluğu, malzeme durumu ve şikâyetlerdeki değişim birlikte değerlendirilir. Belirgin aşınma ya da yeni rahatsızlık olduğunda kontrol talep edin."
      ]
    },
    {
      "id": "sorular",
      "heading": "Tabanlık Kullanımı Hakkında Sık Sorulan Sorular",
      "level": 2,
      "content": [
        "Tabanlıkla hemen spora başlanır mı? Spor türü ve yüklenme düzeyini uzmana bildirin; günlük kullanıma alışma ile spor kullanımı ayrı planlanabilir.",
        "Tabanlık bütün ayak ağrılarını giderir mi? Böyle bir garanti verilemez. Gerekli görülürse hekim değerlendirmesi, egzersiz ve başka yaklaşımlar birlikte ele alınır."
      ]
    },
    {
      "id": "iletisim",
      "heading": "Kütahya’da Tabanlık Uyumu İçin Değerlendirme",
      "level": 2,
      "content": [
        "[Arıkan Ortopedi’ye başvururken](/#iletisim) günlük ayakkabınızı, tabanlığınızı ve varsa reçetenizi getirin. Hangi faaliyet sırasında rahatsız olduğunuzu not etmeniz değerlendirmeye yardımcı olur.",
        "Kaynaklar: [Rotherham NHS tabanlık kullanım bilgileri](https://www.therotherhamft.nhs.uk/patients-and-visitors/patient-information/orthotic-insoles) ve [Royal National Orthopaedic Hospital tabanlık rehberi](https://www.rnoh.nhs.uk/patients-and-visitors/patient-information-guides/foot-orthosis-patients-guide). Bu içerik kişisel tedavi önerisi yerine geçmez."
      ]
    }
  ]
},
{
  "slug": "kutahya-ortez-protez-ilk-randevu-hazirligi",
  "title": "Kütahya Ortez Protez Randevusu: İlk Görüşmeye Hazırlık Rehberi",
  "excerpt": "Kütahya’da ilk ortez protez randevusuna hazırlık: mevcut belgeler, günlük yaşam hedefleri, ölçü ve prova hakkında sorulacak sorular.",
  "category": "Rehabilitasyon",
  "tags": [
    "Kütahya ortez protez randevu",
    "ortez protez değerlendirme",
    "protez ilk muayene",
    "ortez ölçü ve prova"
  ],
  "readingTime": 2,
  "publishedAt": "2026-09-28",
  "author": "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
  "metaDescription": "Kütahya’da ilk ortez protez randevusuna hazırlık: mevcut belgeler, günlük yaşam hedefleri, ölçü ve prova hakkında sorulacak sorular.",
  "keywords": [
    "Kütahya ortez protez randevu",
    "ortez protez değerlendirme",
    "protez ilk muayene",
    "ortez ölçü ve prova"
  ],
  "coverColor": "#0AADA8",
  "coverImage": "/hero-foot-analysis.jpg",
  "sections": [
    {
      "id": "hazirlik",
      "heading": "İlk Ortez Protez Görüşmesinin Amacı",
      "level": 2,
      "content": [
        "Ortez veya protez için ilk görüşme, ihtiyaçların anlaşılması ve sonraki adımların planlanması için yapılır. Ortez vücuttaki bir bölgeyi desteklerken protez eksik uzvun işlevine yardımcı olmak üzere tasarlanır. Hangi uygulamanın uygun olduğu reçete, klinik değerlendirme ve günlük gereksinimlere bağlıdır.",
        "Kütahya’da merkez ararken yalnızca cihazın adına odaklanmayın. Ölçü, prova, kullanım eğitimi ve takip sürecinin nasıl yürütüldüğünü de öğrenin. [Merkez seçimi rehberimiz](/blog/kutahyada-ortez-protez-merkezi-secerken-nelere-dikkat-etmelisiniz) bu konuda sorabileceğiniz başlıkları açıklar."
      ]
    },
    {
      "id": "belgeler",
      "heading": "Randevuya Hangi Belgeler ve Eşyalar Getirilmeli?",
      "level": 2,
      "content": [
        "Varsa hekim reçetenizi, ilgili raporlarınızı ve önceki cihaz bilgilerinizi hazırlayın. Merkezden gelmeden önce hangi belgelerin gerekli olduğunu öğrenin. Bu hazırlık listesi, resmi başvuru veya geri ödeme için zorunlu evrak listesi anlamına gelmez.",
        "Kullanmakta olduğunuz ortez, protez veya tabanlığı ve günlük ayakkabınızı da getirin. Yürüme yardımcısı kullanıyorsanız bunu bildirin. Ölçü alınacak bölgeye erişimi kolaylaştıran rahat kıyafet, görüşme sırasında pratiklik sağlayabilir."
      ]
    },
    {
      "id": "hedefler",
      "heading": "Günlük Yaşam Hedeflerinizi Nasıl Anlatabilirsiniz?",
      "level": 2,
      "content": [
        "Ev içindeki hareketler, işe gidiş, merdivenler, ayakta kalma süresi ve spor beklentileri farklı ihtiyaçlar oluşturur. En çok zorlandığınız üç etkinliği önceden yazın. Önceki cihazınız varsa sevdiğiniz ve rahatsız olduğunuz özellikleri somut örneklerle anlatın.",
        "Ağrı veya baskı yaşıyorsanız yerini, başlangıç zamanını ve hangi hareketle arttığını not edin. Düşme, takılma ya da denge sorunu yaşamanız da görüşmede paylaşılmalıdır. Sağlık durumunuzla ilgili değişiklikleri gizlemeden aktarmak değerlendirmeyi kolaylaştırır."
      ]
    },
    {
      "id": "sorular",
      "heading": "Ölçü, Üretim ve Prova İçin Sorulacak Sorular",
      "level": 2,
      "content": [
        "Önerilen cihazın hangi ihtiyaca yönelik olduğunu, alternatiflerin nasıl değerlendirildiğini ve ölçünün hangi yöntemle alınacağını sorun. Üretim ve teslim süresinin cihaz türüne ve prova gereksinimine göre değişebileceğini göz önünde bulundurun.",
        "Teslimde takma ve çıkarma, temizlik, cilt kontrolü ve günlük kullanım eğitiminin nasıl verileceğini öğrenin. Kontrol randevularını, ayar gerektiğinde kime ulaşacağınızı ve garanti koşullarını yazılı istemeniz yararlıdır."
      ]
    },
    {
      "id": "ucret",
      "heading": "Ücret ve SGK Süreci Hakkında Ne Sorulmalı?",
      "level": 2,
      "content": [
        "Fiyat teklifinin hangi parçaları ve hizmetleri kapsadığını, prova ve sonraki ayarların koşullarını netleştirin. Geri ödeme uygunluğu kişiye, ürüne ve güncel kurallara göre ayrıca doğrulanmalıdır; bu yazı belirli bir ödeme veya karşılama sözü vermez.",
        "Başvuru adımlarını tanımak için [SGK ile ortez protez alma rehberini](/blog/sgk-ile-ortez-protez-nasil-alinir-adim-adim-rehber) inceleyebilir, kendi işleminiz için güncel gereklilikleri ilgili kurum ve merkezden öğrenebilirsiniz."
      ]
    },
    {
      "id": "randevu",
      "heading": "Kütahya’da İlk Görüşme İçin İletişim",
      "level": 2,
      "content": [
        "Arıkan Ortopedi ile [iletişim bölümünden](/#iletisim) görüşerek randevu ve hazırlık hakkında bilgi alabilirsiniz. Mevcut cihazınızı ve temel ihtiyaçlarınızı önceden belirtmeniz görüşmenin planlanmasına yardımcı olur.",
        "İlk randevuda cihaz teslim edilir mi? Her uygulama için böyle bir beklenti uygun değildir. Değerlendirme, ölçü, üretim ve prova adımlarının hangilerinin gerekli olduğu görüşmede belirlenir. Bu içerik genel süreç bilgisidir; tıbbi kararlar hekim ve ilgili sağlık ekibiyle alınır."
      ]
    }
  ]
},

  {
    slug: "kutahya-afo-kisiye-ozel-ayak-ayak-bilegi-ortezi-rehberi",
    featured: true,
    featuredOrder: 1,
    title: "Kütahya AFO: Kişiye Özel Ayak ve Ayak Bileği Ortezi Rehberi",
    excerpt: "AFO çeşitleri, kişiye özel üretim süreci, kullanım önerileri ve çocuklarda AFO takibi hakkında kapsamlı rehber.",
    category: "Ortez",
    tags: ["Kütahya AFO", "ayak bileği ortezi", "düşük ayak ortezi", "kişiye özel ortez", "çocuk AFO"],
    readingTime: 10,
    publishedAt: "2026-08-30",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da kişiye özel AFO rehberi: AFO çeşitleri, kimlere uygulanır, ölçü ve üretim süreci, ayakkabı seçimi ve kullanım önerileri.",
    keywords: ["kütahya afo", "kişiye özel afo", "ayak bileği ortezi", "düşük ayak ortezi", "çocuk afo kütahya"],
    coverColor: "#0AADA8",
    coverImage: "/kutahya-afo-ayak-bilegi-ortezi.png",
    sections: [
      {
        id: "afo-nedir",
        heading: "AFO Nedir?",
        level: 2,
        content: [
          "AFO, İngilizce “Ankle-Foot Orthosis” ifadesinin kısaltmasıdır. Türkçede ayak-ayak bileği ortezi veya ayak bileği ortezi olarak adlandırılır. Diz altından başlayarak ayak ve ayak bileğini kapsayan bu yardımcı cihaz; ihtiyaç duyulan bölgeyi desteklemek, eklem hareketlerini kontrol etmek ve daha güvenli bir yürüme düzenine yardımcı olmak amacıyla tasarlanır.",
          "Uygun şekilde planlanan bir AFO; ayak ve ayak bileğinin hizalanmasına, yürürken ayak ucunun yere takılma riskinin azaltılmasına, zayıf kas gruplarının desteklenmesine ve basma ile salınım evrelerinde hareket kontrolüne katkıda bulunabilir.",
          "AFO bir hastalığı tek başına tedavi eden standart bir ürün değildir. Uygun model; hekim değerlendirmesi, reçete, kişinin anatomik özellikleri ve yürüme gereksinimleri dikkate alınarak belirlenmelidir. Genel ortez uygulamalarını daha yakından tanımak için [çocuklarda ortez kullanımı rehberimizi](/blog/cocuklarda-ortez-kullanimi-ne-zaman-gerekli) inceleyebilirsiniz.",
        ],
      },
      {
        id: "kimlere-onerilebilir",
        heading: "Kütahya'da AFO Kimlere Önerilebilir?",
        level: 2,
        content: [
          "AFO kullanımı çocuklarda ve yetişkinlerde farklı nedenlerle gündeme gelebilir. Hekim tarafından gerekli görüldüğünde düşük ayak, serebral palsi, inme sonrası hareket kayıpları, multipl skleroz, peroneal sinir hasarı, kas güçsüzlüğü, spastisite ve ayak bileği instabilitesi gibi durumlarda değerlendirilebilir.",
          "Doğuştan veya sonradan gelişen ayak deformiteleri, travma ya da ameliyat sonrası destek ihtiyacı, yürüyüş sırasında ayak ucunun yere takılması ve çocuklardaki gelişimsel yürüme problemleri de değerlendirme nedenleri arasındadır.",
          "Benzer belirtilere sahip kişilerde bile aynı AFO modeli uygun olmayabilir. Kas gücü, eklem hareket açıklığı, kas tonusu, yaş, kilo, aktivite düzeyi ve kullanılacak ayakkabı birlikte değerlendirilmelidir.",
        ],
      },
      {
        id: "kisiye-ozel-afo",
        heading: "Kişiye Özel AFO Neden Önemlidir?",
        level: 2,
        content: [
          "Ayak ve ayak bileğinin biçimi, hareket kapasitesi ve destek ihtiyacı kişiden kişiye değişir. Bu nedenle doğru ölçü; AFO'nun vücuda uyumu, kullanım konforu ve işlevi açısından önemlidir.",
          "Kişiye özel AFO hazırlanırken yalnızca ayak numarası dikkate alınmaz. Baldır çevresi, ayak bileği yapısı, topuk pozisyonu, ayağın uzunluğu, deformitenin yönü ve yürüyüş sırasında ihtiyaç duyulan kontrol seviyesi de incelenir.",
          "Uygun olmayan veya kontrol edilmeden kullanılan bir ortez baskı, sürtünme, ağrı ve yürüme güçlüğü oluşturabilir. Uygulama merkezi seçerken dikkat edilecek ölçütleri [Kütahya'da ortez ve protez merkezi seçimi yazımızda](/blog/kutahyada-ortez-protez-merkezi-secerken-nelere-dikkat-etmelisiniz) bulabilirsiniz.",
        ],
      },
      {
        id: "afo-cesitleri",
        heading: "AFO Çeşitleri Nelerdir?",
        level: 2,
        content: [
          "AFO tek bir modelden oluşmaz. Malzeme, sertlik ve hareket kontrolü bakımından farklı türleri bulunur. Solid AFO ayak bileği hareketini daha fazla sınırlandırırken eklemli AFO belirlenen yönde harekete izin verebilir.",
          "Posterior Leaf Spring AFO salınım evresinde ayağın yukarı kaldırılmasına destek olmak üzere daha esnek tasarlanır. Karbon AFO hafif ve enerji geri dönüşü sağlayabilen bir seçenektir. GRAFO ise yer reaksiyon kuvvetinden yararlanarak diz kontrolüne de katkıda bulunmayı amaçlar. Diz bölgesine yönelik diğer seçenekleri [diz ortezi rehberimizde](/blog/diz-ortezi-cesitleri-kullanim-alanlari) bulabilirsiniz.",
          "Pediatrik AFO ve DAFO modelleri çocukların büyümesi, kas tonusu, eklem hareketi ve gelişimsel ihtiyaçları dikkate alınarak hazırlanır. Model seçimi görünüm veya hafifliğe göre değil; reçete, muayene bulguları ve işlevsel hedeflere göre yapılmalıdır.",
        ],
      },
      {
        id: "afo-yapim-sureci",
        heading: "Kütahya'da Kişiye Özel AFO Yapım Süreci",
        level: 2,
        content: [
          "1. Reçete ve ihtiyaç değerlendirmesi: Hekim reçetesi ve sağlık bilgileri incelenir; günlük yaşam, yürüme güçlüğü ve ortezden beklenen işlev değerlendirilir. Reçete ve geri ödeme adımları için [SGK ile ortez-protez alma rehberimizi](/blog/sgk-ile-ortez-protez-nasil-alinir-adim-adim-rehber) okuyabilirsiniz.",
          "2. Ayak ve yürüyüş değerlendirmesi: Ayakta duruş, basış, eklem hareketleri ve yürüyüş özellikleri gözlemlenir. Yaş, aktivite düzeyi ve ayakkabı tercihleri dikkate alınır.",
          "3. Kişiye özel ölçü: Anatomik ölçüler bilgisayarlı yöntemlerle veya uygun klasik ölçü teknikleriyle kaydedilir; gerekli düzeltmeler modele aktarılır.",
          "4. Üretim ve malzeme seçimi: Reçeteye göre termoplastik, karbon veya uygun başka bir malzeme seçilir. Ortezin sertliği, eklem yapısı ve kayışları kullanım amacına göre planlanır.",
          "5. İlk prova: Topuğun yerleşimi, basınç noktaları, kayışların konumu ve ayakkabı uyumu kontrol edilerek gerekli düzenlemeler yapılır.",
          "6. Yürüyüş kontrolü: Kullanıcı AFO ile yürütülür; gerekiyorsa açı, destek veya konfor düzenlemeleri gerçekleştirilir.",
          "7. Kullanım ve takip: Takma, çıkarma, temizlik ve cilt kontrolü anlatılır. Çocuklarda büyüme, yetişkinlerde kullanım ve vücut yapısındaki değişiklikler nedeniyle düzenli kontrol gerekebilir.",
        ],
      },
      {
        id: "kullanimda-dikkat",
        heading: "AFO Kullanırken Nelere Dikkat Edilmelidir?",
        level: 2,
        content: [
          "Yeni bir AFO'ya alışma süresi kişiye göre değişebilir. Kullanım süresi, hekimin ve ortez-protez uzmanının önerdiği program doğrultusunda kademeli artırılmalıdır.",
          "Topuğun ortezin yuvasına tam oturduğundan emin olun; önerilen çorap ve uygun genişlikte ayakkabı kullanın. Her kullanımdan sonra cildi, plastik parçaları, eklemleri, kayışları ve pedleri kontrol edin. Ortezi doğrudan ısı kaynağında kurutmayın; kendiniz kesmeyin, bükmeyin veya tamir etmeyin.",
          "Hafif ve kısa süreli izler görülebilse de uzun süre geçmeyen kızarıklık, ağrı, yara veya su toplaması normal kabul edilmemelidir. Böyle bir durumda kullanıma ara vererek uygulama merkezinden kontrol talep edin.",
        ],
      },
      {
        id: "afo-ayakkabi-secimi",
        heading: "AFO ile Hangi Ayakkabı Kullanılmalıdır?",
        level: 2,
        content: [
          "AFO'nun işlevi uygun ayakkabı seçimiyle yakından ilişkilidir. Genellikle geniş ağızlı, bağcıklı veya cırt cırtlı, tabanı dengeli ve iç tabanı çıkarılabilen ayakkabılar kullanım kolaylığı sağlar.",
          "Dar, yüksek topuklu veya ayağı yeterince kavramayan ayakkabılar AFO'nun yerleşimini bozabilir. Ayakkabının satın alınmadan önce mümkünse AFO ile birlikte denenmesi önerilir.",
        ],
      },
      {
        id: "cocuklarda-afo",
        heading: "Çocuklarda AFO Kullanımı",
        level: 2,
        content: [
          "Çocuklarda AFO; büyüme, gelişim ve aktivite düzeyi dikkate alınarak planlanmalıdır. Ayak parmaklarının ortezin ucunu geçmesi, bilek çevresinde yeni baskı izleri oluşması, çocuğun yürümek istememesi ya da yeni rahatsızlıkların başlaması kontrol gerektirebilir.",
          "AFO'nun fizyoterapi, egzersiz veya hekim tarafından önerilen diğer uygulamaların yerine geçmediği unutulmamalıdır. Erken değerlendirme hakkında ayrıntılı bilgi için [Kütahya'da çocuk ortez tedavisi yazımızı](/blog/kutahyada-cocuklar-icin-ortez-tedavisi-neden-erken-baslamalidir) inceleyebilirsiniz.",
        ],
      },
      {
        id: "sik-sorulan-sorular",
        heading: "Kütahya AFO Hakkında Sık Sorulan Sorular",
        level: 2,
        content: [
          "AFO ne işe yarar? Ayak ve ayak bileğini desteklemeye ve hareketlerini kontrol etmeye yardımcı olur; dengeyi, ayak pozisyonunu ve yürüme güvenliğini destekleyebilir.",
          "AFO düşük ayakta kullanılır mı? Düşük ayakta sık değerlendirilen yardımcı cihazlardan biridir. Ancak neden ve hareket kapasitesi incelenmeden model seçilmemelidir.",
          "Hazır AFO mu, kişiye özel AFO mu tercih edilmeli? Karar klinik ihtiyaca bağlıdır. Belirgin deformite, özel hareket kontrolü veya uzun süreli kullanımda kişiye özel üretim gerekebilir.",
          "AFO bütün gün kullanılır mı? Süre kişiye ve reçeteye göre değişir; yeni AFO'ya genellikle kademeli alışılır.",
          "AFO ağrı yapar mı? Doğru uygulanmış AFO'nun belirgin ağrıya, yaraya veya su toplamasına neden olması beklenmez. Böyle bir durumda uygulama merkeziyle görüşülmelidir.",
          "Çocuklarda AFO ne sıklıkla kontrol edilmelidir? Sıklık büyüme hızına ve klinik duruma göre belirlenir. Kalıcı kızarıklık, daralma veya yeni yürüme güçlüğünde planlanan tarih beklenmemelidir.",
        ],
      },
      {
        id: "iletisim",
        heading: "Kütahya'da AFO Değerlendirmesi İçin Bize Ulaşın",
        level: 2,
        content: [
          "Kütahya Merkez, Tavşanlı, Simav, Gediz ve çevre ilçelerden AFO hakkında bilgi almak isteyenler Arıkan Ortopedi - Ortez & Protez ile iletişime geçebilir.",
          "Mevcut reçeteniz ve sağlık belgeleriniz incelenerek ölçü, üretim, prova ve takip süreci hakkında bilgi verilir. Her kullanıcı için uygun ortez türü hekim önerisi ve bireysel değerlendirme doğrultusunda belirlenmelidir.",
          "Randevu ve bilgi için [WhatsApp üzerinden bize ulaşabilir](https://wa.me/905536660343) veya 0274 600 03 43 numaralı telefonu arayabilirsiniz.",
          "Bu içerik genel bilgilendirme amacı taşır; tanı veya kişisel tedavi önerisi yerine geçmez. AFO kullanımı ve model seçimi için hekiminize ve yetkili sağlık uzmanlarına danışınız.",
        ],
      },
    ],
  },

  {
    slug: "kutahyada-cocuklar-icin-ortez-tedavisi-neden-erken-baslamalidir",
    title: "Kütahya'da Çocuklar İçin Ortez Tedavisi Neden Erken Başlamalıdır?",
    excerpt: "Çocuklarda ortez tedavisinde erken müdahalenin önemi, gelişim döneminde doğru zamanlama ve ailelere öneriler.",
    category: "Ortez",
    tags: ["çocuk ortezi Kütahya", "pediatrik ortez Kütahya", "çocuk ortez tedavisi", "erken tedavi"],
    readingTime: 7,
    publishedAt: "2026-07-01",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da çocuklar için ortez tedavisi neden erken başlamalıdır? Gelişim dönemi, doğru zamanlama ve ailelere öneriler.",
    keywords: ["çocuk ortezi kütahya", "pediatrik ortez kütahya", "çocuk ortez tedavisi", "afo çocuk kütahya"],
    featured: false,
    coverColor: "#0AADA8",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
    sections: [
      {
        id: "erken-tedavi-neden-onemli",
        heading: "Erken Tedavi Neden Kritik Önem Taşır?",
        level: 2,
        content: [
          "Çocuklarda iskelet sistemi henüz gelişim aşamasında olduğundan, ortopedik problemlerin erken tespiti ve tedavisi yaşam boyu sürecek sonuçları belirler. Erken dönemde başlanan ortez tedavisi, gelişmekte olan iskelet yapısını doğru yönlendirerek kalıcı düzeltme şansı sunar.",
          "0-7 yaş arası dönem, iskelet gelişiminin en aktif olduğu dönemdir. Bu dönemde uygulanan ortez müdahaleleri, kemik ve eklem yapılarını şekillendirme potansiyeline sahiptir. Gecikmiş tedavi ise deformitelerin kalıcı hale gelmesine, cerrahi gereksinimin artmasına ve tedavi süresinin uzamasına yol açar.",
          "Çocuğunuzun ortopedik gelişimi konusunda endişeleriniz varsa, [Arıkan Ortopedi - Ortez & Protez](https://arikanortopedi.com/) uzman ekibiyle görüşerek erken değerlendirme yaptırabilirsiniz.",
        ],
      },
      {
        id: "gelisim-donemu",
        heading: "Gelişim Dönemi ve Ortez İhtiyacı",
        level: 2,
        content: [
          "Çocukların motor gelişimi belirli kilometre taşlarını izler. Bu aşamalarda ortopedik değerlendirme, potansiyel sorunların erken saptanmasını sağlar.",
          "0-1 yaş: Baş kontrolü, oturma, emekleme ve ayakta durma becerisinin geliştiği dönem. Bu aşamada kalça displazisi, tortikollis ve konjenital ayak deformiteleri taraması yapılmalıdır.",
          "1-3 yaş: İlk adımların atıldığı, yürüyüş paterninin oluştuğu kritik dönem. Düz tabanlık, içe yürüyüş ve varus/valgus deformiteleri bu dönemde değerlendirilir. Düz tabanlık tedavisi hakkında detaylı bilgi için [FootBalance ortopedik tabanlık](https://arikanortopedi.com/blog/footbalance-ortopedik-tabanlik-kimlere-uygun) yazımızı inceleyebilirsiniz.",
          "3-7 yaş: Koşma, zıplama ve karmaşık motor aktivitelerin geliştiği dönem. Skolyoz taraması, diz ve ayak bileği problemleri izlenmelidir. Skolyoz tedavisinde korse kullanımı hakkında [omurga ortezi ve korse çeşitleri](https://arikanortopedi.com/blog/omurga-ortezi-korse-turleri-kullanim) yazımızdan bilgi alabilirsiniz.",
        ],
      },
      {
        id: "dogru-zamanlama",
        heading: "Doğru Zamanlama: Ne Zaman Ortez Başlanmalı?",
        level: 2,
        content: [
          "Her ortopedik durum için ideal ortez başlama zamanı farklıdır. Erken müdahale avantajı ile gereksiz tedavi riski arasında denge kurulmalıdır.",
          "Konjenital ayak deformiteleri (clubfoot): Doğum sonrası ilk günlerde Ponseti yöntemi ile tedavi başlamalıdır. Geç kalınmış vakalarda cerrahi gereksinim artar.",
          "Gelişimsel kalça displazisi: İlk 6 ay içinde tespit edilen vakalarda pavlik bandajı ile %90'ın üzerinde başarı sağlanır. 1 yaş sonrasında tedavi zorlaşır.",
          "Serebral palsi: Motor gelişim takibi sırasında saptanan anormalliklerde, spastisite yönetimi ve deformite önleme amacıyla erken dönemde AFO, KAFO gibi ortezler başlanabilir.",
          "Adolesan skolyoz: Cobb açısı 25°'yi geçen eğrilerde, iskelet maturasyonu tamamlanana kadar korse tedavisi önerilir. Erken başlamak, tedavi başarısını artırır.",
        ],
      },
      {
        id: "ailelere-oneriler",
        heading: "Aileler İçin Öneriler",
        level: 2,
        content: [
          "Çocuk ortez tedavisinde aile uyumu en kritik başarı faktörlerinden biridir. İşte ailelerin dikkat etmesi gereken noktalar:",
          "Düzenli takip: Ortez kullanırken 3-6 ay aralıklarla kontrol randevularına gidilmelidir. Çocukların hızlı büyümesi nedeniyle ortez sık sık değiştirilmek zorunda kalınabilir.",
          "Cilt bakımı: Çocuk cildi hassastır. Her kullanım sonrası deri kontrolü yapılmalı, kızarıklık veya tahriş durumunda merkezle iletişime geçilmelidir.",
          "Psikososyal destek: Özellikle okul çağındaki çocuklarda ortez kullanımı özgüveni etkileyebilir. Aile desteği ve gerekirse psikolojik danışmanlık önemlidir.",
          "Egzersiz rutini: Ortez tek başına yeterli değildir; çocuk için özel tasarlanan fizyoterapi egzersiz programına da uyulmalıdır.",
        ],
      },
      {
        id: "kutahyada-cocuk-ortez",
        heading: "Kütahya'da Çocuk Ortez Hizmetleri",
        level: 2,
        content: [
          "Arıkan Ortopedi - Ortez & Protez Kütahya merkezimizde çocuk ortezleri için özel bir yaklaşım benimsenmektedir. Çocukların büyüme sürecini izleyerek, gelişim dönemine uygun tedavi planları hazırlanmaktadır.",
          "Merkezimizde pediatrik AFO, KAFO, skolyoz korseleri, SMO (supra-malleolar orthosis), UCBL tabanlıklar ve düz tabanlık tabanlıklar kişiye özel üretilmektedir. Çocuk hastalarımıza ücretsiz büyüme takibi ve periyodik kontrol hizmeti sunulmaktadır. Protez hizmetlerimiz hakkında bilgi almak için [Kütahya'da alt ekstremite protezi rehberi](https://arikanortopedi.com/blog/kutahyada-alt-ekstremite-protezi-yaptirmayi-dusunenler-icin-rehber) yazımızı inceleyebilirsiniz.",
        ],
      },
      {
        id: "ucretsiz-randevu",
        heading: "Ücretsiz Ön Değerlendirme Randevusu",
        level: 2,
        content: [
          "Çocuğunuzun ortopedik gelişimi konusunda endişeleriniz varsa, uzman ekibimizle ücretsiz ön değerlendirme randevusu alabilirsiniz. Kütahya merkezimizde yapılan değerlendirmede çocuğunuzun durumu detaylı incelenerek en uygun tedavi planı belirlenmektedir.",
          "Randevu almak için WhatsApp hattımızdan bize ulaşabilirsiniz: [WhatsApp ile İletişim](https://wa.me/905536660343) veya 0274 600 03 43 numaralı telefondan arayabilirsiniz. Tüm sorularınızı yanıtlamaktan memnuniyet duyarız.",
          "Merkezimiz SGK anlaşmalı olup, çocuk ortez tedavisi için gerekli SGK süreçlerinde de size rehberlik etmektedir. SGK başvuru süreci hakkında detaylı bilgi için [SGK anlaşmalı protez ve ortez hizmeti](https://arikanortopedi.com/blog/kutahyada-sgk-anlasmali-protez-ortez-hizmeti-nasil-alinir) yazımızı inceleyebilirsiniz.",
        ],
      },
    ],
  },

  {
    slug: "kutahyada-alt-ekstremite-protezi-yaptirmayi-dusunenler-icin-rehber",
    title: "Kütahya'da Alt Ekstremite Protezi Yaptırmayı Düşünenler İçin Rehber",
    excerpt: "Bacak protezi hakkında bilmeniz gerekenler: kimlere uygulanır, süreç nasıl işler ve adaptasyon dönemi.",
    category: "Protez",
    tags: ["bacak protezi Kütahya", "alt ekstremite protezi Kütahya", "diz altı protez Kütahya", "protez rehberi"],
    readingTime: 8,
    publishedAt: "2026-06-30",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da alt ekstremite protezi rehberi: bacak protezi kimlere uygulanır, süreç nasıl işler, adaptasyon dönemi ve SGK.",
    keywords: ["bacak protezi kütahya", "alt ekstremite protezi kütahya", "diz altı protez kütahya", "diz üstü protez kütahya"],
    featured: false,
    coverColor: "#123B6D",
    coverImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80&auto=format&fit=crop",
    sections: [
      {
        id: "alt-ekstremite-protezi-nedir",
        heading: "Alt Ekstremite Protezi Nedir?",
        level: 2,
        content: [
          "Alt ekstremite protezi, bacak amputasyonu sonrasında kaybedilen fonksiyonları geri kazandırmak amacıyla kullanılan tıbbi cihazlardır. Protez, ampütasyon seviyesine, aktivite düzeyine ve bireysel gereksinimlere göre farklı bileşen kombinasyonları şeklinde tasarlanır.",
          "Amputasyon; travma, damar hastalıkları (periferik arter hastalığı, diyabet), tümör veya konjenital nedenlerle gerçekleştirilebilir. Amputasyon seviyesi protez seçimini doğrudan etkiler: diz altı (trans-tibial), diz dezartikülasyon, diz üstü (trans-femoral) ve kalça dezartikülasyon.",
        ],
      },
      {
        id: "kimlere-uygulanir",
        heading: "Alt Ekstremite Protezi Kimlere Uygulanır?",
        level: 2,
        content: [
          "Her ampute birey protez adayı değildir. Protez kullanımı için belirli kriterlerin karşılanması gerekir.",
          "Medikal uygunluk: Güdük iyileşmesi tamamlanmış olmalı, cilt sağlığı yeterli olmalı, yeterli kardiyovasküler kapasite bulunmalıdır. Yaygın periferik nöropati, ciddi kognitif bozukluk veya ağır eklem kontraktürleri protez kullanımını zorlaştırabilir.",
          "Fonksiyonel potansiyel: Dünya genelinde K-Seviyesi sınıflaması kullanılır. K0: Protez kullanım kapasitesi yok. K1: Ev içi yürüyüş. K2: Sınırlı dış mekan yürüyüşü. K3: Gelişmiş toplum yürüyüşü. K4: Yüksek aktivite (spor dahil). Bu sınıflama protez bileşen seçimini belirler.",
          "Motivasyon ve destek: Protez kullanımı aktif bir öğrenme ve adaptasyon süreci gerektirir. Aile desteği, rehabilitasyon imkanları ve sosyoekonomik durum da başarıyı etkiler.",
        ],
      },
      {
        id: "surec-nasil-isler",
        heading: "Protez Süreci Nasıl İşler?",
        level: 2,
        content: [
          "Alt ekstremite protezi süreci multidisipliner bir yaklaşımla yönetilir. Ameliyattan adaptasyona kadar tipik süreç şu şekildedir:",
          "Ameliyat sonrası dönem (0-6 hafta): Yara iyileşmesi, güdük şekillendirme, ağrı yönetimi ve erken mobilizasyon bu dönemin hedefleridir. Elastik bandaj veya silikon şekillendirici kullanımı güdük formunu iyileştirir.",
          "Geçici protez dönemi (6-12 hafta): İlk protez uygulaması, yürüyüş eğitimi ve güdük hacmi değişimlerinin izlenmesi. Bu dönemde soket sık sık değiştirilir.",
          "Kalıcı protez dönemi (3-6 ay ve sonrası): Güdük hacmi stabilize olduğunda kalıcı protez üretilir. Yıllık kontrol, bakım ve gerektiğinde yenileme yapılır.",
        ],
      },
      {
        id: "adaptasyon-donemi",
        heading: "Adaptasyon Dönemi ve Beklentiler",
        level: 2,
        content: [
          "Yeni protez kullanıcısının adaptasyon süreci kademeli ilerler. Beklentilerin doğru yönetilmesi, başarıyı olumlu etkiler.",
          "İlk haftalar: Protez aşina olma, denge çalışmaları, paralel bar içinde yürüyüş, kısa süreli kullanım (1-2 saat/gün) ile başlanır.",
          "1-3 ay: Artan yürüyüş süresi ve mesafesi, merdiven eğitimi, tek baston destekli yürüyüş. Günlük aktivite süresi tedricen artırılır.",
          "3-12 ay: Gelişmiş aktiviteler (rampa, düzensiz zemin), yönsüz yürüyüş, tekrar eden aktiviteler. Çoğu hasta bu dönemde fonksiyonel bağımsızlığa ulaşır.",
          "Psikolojik adaptasyon: Ampütasyon bir yas süreci tetikler. Bu sürecin kabulü ve proteze uyum zaman alır. Gereğinde psikolojik destek almak faydalıdır.",
        ],
      },
      {
        id: "kutahyada-protez-hizmetleri",
        heading: "Kütahya'da Alt Ekstremite Protez Hizmetleri",
        level: 2,
        content: [
          "Arıkan Ortopedi - Ortez & Protez Kütahya merkezimizde diz altı, diz üstü ve tüm alt ekstremite protezleri için kapsamlı hizmet sunulmaktadır.",
          "Hizmetlerimiz arasında: 3D dijital güdük tarama ve CAD/CAM soket tasarımı, karbon fiber ve kompozit malzeme seçenekleri, mikro işlemcili diz protezi uygulaması, spor protezi danışmanlığı, SGK süreci yönetimi ve ücretsiz takip randevuları yer almaktadır.",
          "Ampute değerlendirmesi için ücretsiz randevu alabilirsiniz: 0274 600 03 43 veya WhatsApp.",
        ],
      },
    ],
  },

  {
    slug: "kisiye-ozel-protez-uretimi-kutahyada-nasil-yapiliyor",
    title: "Kişiye Özel Protez Üretimi Kütahya'da Nasıl Yapılıyor?",
    excerpt: "Kişiye özel protez üretim süreci: ölçü alma, tasarım, üretim, deneme ve teslim aşamaları.",
    category: "Protez",
    tags: ["kişiye özel protez Kütahya", "Kütahya protez üretimi", "özel protez Kütahya", "CAD/CAM protez"],
    readingTime: 7,
    publishedAt: "2026-06-28",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da kişiye özel protez nasıl üretilir? Ölçü alma, 3D tarama, tasarım, üretim, deneme ve teslim süreci.",
    keywords: ["kişiye özel protez kütahya", "kütahya protez üretimi", "özel protez kütahya", "cadcad protez kütahya"],
    featured: false,
    coverColor: "#0AADA8",
    coverImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80&auto=format&fit=crop",
    sections: [
      {
        id: "kisiye-ozel-protez-nedir",
        heading: "Kişiye Özel Protez Nedir?",
        level: 2,
        content: [
          "Her bireyin anatomisi farklıdır. Ampütasyon seviyesi aynı olsa bile güdük uzunluğu, şekli, deri kalitesi, kas gücü ve aktivite gereksinimleri kişiden kişiye değişir. Bu nedenle protez üretimi standart bir prosedür değil, her hasta için özel planlanmış bir süreçtir.",
          "Kişiye özel üretim, off-the-shelf (hazır) ürünlerin aksine tam hastanın anatomisine ve fonksiyonel hedeflerine göre tasarlanan protezlerdir. Bu yaklaşım; maksimum konfor, optimal fonksiyon ve azaltılmış komplikasyon riski sağlar.",
        ],
      },
      {
        id: "olcu-alma",
        heading: "1. Aşama: Ölçü Alma",
        level: 2,
        content: [
          "Doğru ölçü alma, protez başarısının temelidir. Merkezimizde modern dijital ve geleneksel yöntemler birlikte kullanılır.",
          "3D dijital tarama: Structure Sensor veya benzeri 3D tarayıcılar ile güdük ve vücut konturları milimetre hassasiyetle dijital ortama aktarılır. Bu yöntem, alçıya göre daha hızlı, daha temiz ve daha doğrudur.",
          "Geleneksel alçı: Bazı durumlarda (cilt hassasiyeti, kompleks deformite) el ile alçı kalıbı alınması gerekebilir. Bu kalıp sonrasında yine dijital ortama aktarılır.",
          "Antropometrik ölçümler: Güdük çevresi, uzunluğu, eklem hareket açısı, kas gücü ve kontraktür varlığı detaylı kaydedilir. Karşı taraf değerlendirmesi de yapılır.",
        ],
      },
      {
        id: "tasarim",
        heading: "2. Aşama: Tasarım",
        level: 2,
        content: [
          "Ölçüler alındıktan sonra CAD (Computer-Aided Design) yazılımı ile protez tasarımı hazırlanır.",
          "Soket tasarımı: Güdük-anatomi temel alınarak yük transfer bölgeleri, hassas bölgeler ve basınç alanları belirlenir. Modern yazılımlar bu bölgeleri renk kodlarıyla göstererek tasarımı optimize eder.",
          "Bileşen seçimi: Hastanın aktivite düzeyine (K-seviyesi), yaşına, mesleğine ve hedeflerine göre ayak, diz ve bağlantı bileşenleri seçilir. Karbon fiber, titanyum veya alüminyum seçenekleri değerlendirilir.",
          "Simülasyon: Bazı gelişmiş sistemlerde yürüyüş simülasyonu yapılarak tasarımın biyomekanik etkinliği öngörülür.",
        ],
      },
      {
        id: "uretim",
        heading: "3. Aşama: Üretim",
        level: 2,
        content: [
          "Onaylanan tasarımın üretimi modern imalat teknikleriyle gerçekleştirilir.",
          "CAM (Computer-Aided Manufacturing): 5-eksenli CNC freze veya 3D yazıcılarla soket kalıbı üretilir. Bu yöntem, el yapımı teslimata göre %50'ye varan süre kısalması ve tutarlı kalite sağlar.",
          "Malzeme uygulaması: Karbon fiber, akrilik veya termoset reçine ile lamine edilerek nihai soket oluşturulur. Modüler sistemlerde parçalar hazırlanır ve monte edilir.",
          "Kozmetik kaplama: Gerektiğinde estetik köpük veya silikon dış kaplama uygulaması yapılır. Renk ve doku eşleştirmesi sağlanır.",
        ],
      },
      {
        id: "deneme-teslim",
        heading: "4. Aşama: Deneme ve Teslim",
        level: 2,
        content: [
          "Üretim sonrası protez hastaya uygulanır ve klinik değerlendirme yapılır.",
          "Statik uyum: Ayakta duruş, ağırlık merkezi, pelvis düzlüğü ve ayak konumu kontrol edilir. Gerekli ayarlar anında yapılır.",
          "Dinamik uyum: Yürüyüş analizi ile adım uzunluğu, tempo, yürüyüş simetrisi ve genel mobilite değerlendirilir. Tuvizyon ve düzeltmeler uygulanır.",
          "Hasta eğitimi: Protezin nasıl takılıp çıkarılacağı, günlük bakım, cilt hijyeni ve olası sorunlarda ne yapılması gerektiği anlatılır.",
          "Takip randevuları: 1. hafta, 1. ay ve 3. ayda kontrol randevuları planlanır. Uzun dönem bakım ve servis desteği sağlanır.",
        ],
      },
    ],
  },

  {
    slug: "kutahyada-sgk-anlasmali-protez-ortez-hizmeti-nasil-alinir",
    title: "Kütahya'da SGK Anlaşmalı Protez ve Ortez Hizmeti Nasıl Alınır?",
    excerpt: "SGK anlaşmalı protez ve ortez hizmeti için gerekli evraklar, başvuru süreci, teslim ve SGK'nın karşıladığı ürünler.",
    category: "SGK & Mevzuat",
    tags: ["SGK protez Kütahya", "SGK ortez Kütahya", "Kütahya SGK protez merkezi", "SGK anlaşmalı merkez"],
    readingTime: 8,
    publishedAt: "2026-06-26",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da SGK anlaşmalı protez ve ortez hizmeti nasıl alınır? Evraklar, başvuru süreci, teslim ve karşılanan ürünler.",
    keywords: ["sgk protez kütahya", "sgk ortez kütahya", "kütahya sgk protez merkezi", "sgk anlaşmalı ortez protez"],
    featured: false,
    coverColor: "#123B6D",
    coverImage: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&q=80&auto=format&fit=crop",
    sections: [
      {
        id: "sgk-anlasmali-merkez-nedir",
        heading: "SGK Anlaşmalı Merkez Nedir?",
        level: 2,
        content: [
          "SGK anlaşmalı ortez protez merkezleri, Sosyal Güvenlik Kurumu ile protokol imzalayarak belirli tıbbi cihazları SGK geri ödeme kapsamında sunan kuruluşlardır. Bu merkezlerde hasta, SGK'nın belirlediği tavan tutar dahilinde cihazı fark ücreti ödemeden veya minimum fark ile alabilir.",
          "Arıkan Ortopedi - Ortez & Protez Kütahya merkezimiz tam SGK anlaşmalıdır. Bu sayede Kütahya ve çevresindeki hastalarımız SGK garantörlüğü altında ortez ve protez hizmetlerine erişebilir.",
        ],
      },
      {
        id: "gerekli-evraklar",
        heading: "Gerekli Evraklar Nelerdir?",
        level: 2,
        content: [
          "SGK kapsamında ortez veya protez almak için hazırlanması gereken belgeler şunlardır:",
          "Kimlik ve sigortalılık belgesi: TC kimlik fotokopisi ve SGK'ya kayıtlı sağlık güvencesinin olduğunu gösteren belge (e-Devlet'ten alınabilir).",
          "Hekim raporu ve reçete: Ortopedi ve Travmatoloji, Fiziksel Tıp ve Rehabilitasyon veya Nöroloji uzmanı tarafından düzenlenmiş ortez/protez endikasyon raporu ve reçete.",
          "Sağlık kurulu raporu (gerektiğinde): Yüksek maliyetli cihazlar ve bazı özel durumlar için birden fazla uzman imzası taşıyan heyet raporu istenebilir.",
          "Ameliyat notu / epikriz: Protez başvurularında ampütasyon ameliyatının yapıldığına dair ameliyat notu veya hastane epikrizi.",
          "Proforma fatura: Merkezimiz tarafından hazırlanan, cihazın teknik özellikleri ve fiyatını gösteren ön fatura.",
        ],
      },
      {
        id: "basvuru-sureci",
        heading: "Başvuru Süreci Nasıl İşler?",
        level: 2,
        content: [
          "Kütahya merkezimizde SGK başvuru süreci şu şekilde yönetilmektedir:",
          "1. Ücretsiz ön değerlendirme: Merkezimize başvurunuzda uzmanlarımız tıbbi durumunuzu değerlendirir, SGK kapsamına uygun cihaz seçeneklerini belirler.",
          "2. Belge hazırlama: Reçete, rapor ve diğer belgelerin hazırlanması için yönlendirme yapılır. Gerekirse hastane başvurularınızda size eşlik edilir.",
          "3. SGK ön onay başvurusu: Belgeler eksiksiz toplandıktan sonra merkezimiz SGK'ya ön onay başvurusu yapar. Bu süreç genellikle 3-10 iş günü sürer.",
          "4. Onay ve üretim: SGK onayının ardından cihaz üretim süreci başlar. Kişiye özel üretimde 1-3 hafta içinde cihazınız hazır olur.",
          "5. Cihaz teslim: Uyum kontrolleri ve gerekli ayarlamaların ardından cihaz teslim edilir.",
        ],
      },
      {
        id: "sgk-karsiladigi-urunler",
        heading: "SGK Hangi Ürünleri Karşılıyor?",
        level: 2,
        content: [
          "Sağlık Uygulama Tebliği (SUT) çerçevesinde SGK'nın karşıladığı başlıca ortez ve protez grubu şunlardır:",
          "Alt ekstremite protezleri: Diz altı (trans-tibial), diz üstü (trans-femoral), diz dezartikülasyon protezleri. Mikroişlemcili diz protezleri ek heyet raporu ile belirli endikasyonlarda karşılanmaktadır.",
          "Üst ekstremite protezleri: Parmak, el, ön kol, üst kol protezleri. Miyoelektrik (biyonik) protezler özel komisyon onayı gerektirir.",
          "Ortezler: AFO (ayak-bilek ortezi), KAFO (diz-bacak ortezi), TLSO (skolyoz korsesi), lomber korseler, boyunluklar ve el bileği/diz ortezleri.",
          "Ortopedik tabanlıklar: Hekim reçetesi ile belirli endikasyonlarda (düz tabanlık, plantar fasiit vb.) karşılanabilmektedir.",
        ],
      },
      {
        id: "teslim-sureci",
        heading: "Teslim Süreci ve Takip",
        level: 2,
        content: [
          "Cihazınız teslim edildiğinde bir yıl boyunca ücretsiz kontrol, bakım ve küçük ayarlamalar merkezimizce sağlanır.",
          "Yenileme süresi: SGK, cihaz türüne göre yenileme süresi belirler. Yetişkin protezlerinde genellikle 3-5 yıl, çocuk protezlerinde büyüme hızına göre daha kısa aralıklar geçerlidir.",
          "Merkezimiz, yenileme zamanı yaklaşan hastalarımıza proaktif olarak bildirim yapmaktadır. Sorularınız için 0274 600 03 43 veya WhatsApp hattımızdan bize ulaşabilirsiniz.",
        ],
      },
    ],
  },

  {
    slug: "kutahyada-ortez-protez-merkezi-secerken-nelere-dikkat-etmelisiniz",
    title: "Kütahya'da Ortez ve Protez Merkezi Seçerken Nelere Dikkat Etmelisiniz?",
    excerpt: "Kütahya'da ortez protez merkezi seçerken dikkat edilmesi gereken kriterler: uzman ekip, SGK anlaşması, kişiye özel üretim, deneyim ve takip hizmeti.",
    category: "Genel",
    tags: ["Kütahya ortez protez merkezi", "Kütahya protez merkezi", "Kütahya ortez merkezi", "ortez protez seçimi"],
    readingTime: 6,
    publishedAt: "2026-06-24",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da ortez protez merkezi seçerken nelere dikkat etmelisiniz? Uzman ekip, SGK anlaşması, kişiye özel üretim ve takip hizmeti kriterleri.",
    keywords: ["kütahya ortez protez merkezi", "kütahya protez merkezi", "kütahya ortez merkezi", "en iyi ortez protez merkezi"],
    featured: false,
    coverColor: "#1a5276",
    coverImage: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&q=80&auto=format&fit=crop",
    sections: [
      {
        id: "merkez-seciminin-onemi",
        heading: "Doğru Merkez Seçimi Neden Önemli?",
        level: 2,
        content: [
          "Ortez ve protez, günlük yaşam kalitesini doğrudan etkileyen tıbbi cihazlardır. Yanlış merkez seçimi; uyumsuz cihaz, tekrar eden değişimler, ağrı ve yaralanma riski, maliyet artışı ve psikolojik stres gibi sonuçlara yol açabilir.",
          "Doğru merkez seçimi ise konforlu, işlevsel ve uzun ömürlü bir cihaz kullanımının kapısını açar. Bu seçim yapılırken değerlendirilmesi gereken başlıca kriterler şunlardır:",
        ],
      },
      {
        id: "uzman-ekip",
        heading: "Uzman Ekip ve Sertifikasyon",
        level: 2,
        content: [
          "Ortez protez uygulamaları, tıbbi bilgi, biyomekanik anlayış ve teknik beceri gerektiren uzmanlık gerektiren alandır. Merkez seçiminde dikkat edilmesi gereken ilk kriter ekibin niteliğidir.",
          "Sertifikalı ortez-protez uzmanları (O&P) mi çalışmaktadır? Bu uzmanlar, üniversite veya yüksekokul mezunu olup alanlarında resmi sertifikaya sahiptir.",
          "Merkezin ISO 13485 (tıbbi cihaz kalite yönetim sistemi) veya benzeri kalite belgesi var mı? Bu belgeler, üretim standartlarının denetlendiğini gösterir.",
          "Yıllık cihaz üretim hacmi nedir? Tecrübeli merkezler daha hızlı ve daha kaliteli üretim kapasitesine sahiptir.",
        ],
      },
      {
        id: "sgk-anlasmasi",
        heading: "SGK Anlaşması ve Güvence",
        level: 2,
        content: [
          "Ortez ve protez cihazları maliyetli tıbbi ürünlerdir. SGK anlaşmalı merkezlerde belirli cihazlar SGK garantörlüğü altında sunulur, bu da hasta üzerindeki finansal yükü önemli ölçüde azaltır.",
          "Merkez, SGK ile tam anlaşmalı mı? Hangi cihazların SGK kapsamında olduğunu öğrenin. Fark ücreti şeffaf bir şekilde açıklanıyor mu?",
          "Merkez, SGK başvuru sürecinde size rehberlik ediyor mu? Belgelerin hazırlanması, hastane başvuruları ve takip süreçlerinde destek sağlanıyor mu?",
        ],
      },
      {
        id: "kisiye-ozel-uretim",
        heading: "Kişiye Özel Üretim Kapasitesi",
        level: 2,
        content: [
          "Her hastanın anatomisi ve fonksiyonel gereksinimi farklıdır. Off-the-shelf (hazır) cihazlar yetersiz kaldığında kişiye özel üretim kaçınılmazdır.",
          "Merkezde dijital ölçü teknolojisi (3D tarama, CAD/CAM) kullanılıyor mu? Bu teknolojiler ölçü doğruluğunu artırır ve süreyi kısaltır.",
          "Hangi malzeme ve bileşen seçenekleri sunuluyor? Karbon fiber, titanyum, silikon ve mikro işlemcili sistemler gibi gelişmiş seçeneklere erişim var mı?",
          "Tasarım sürecine hasta dahil ediliyor mu? İhtiyaç ve tercihlerinizi belirterek size özel çözümler üretilebiliyor mu?",
        ],
      },
      {
        id: "deneyim",
        heading: "Deneyim ve Referanslar",
        level: 2,
        content: [
          "Merkezin sektördeki deneyimi, kalite ve güvenilirliğin önemli bir göstergesidir.",
          "Merkez kaç yıldır faaliyet gösteriyor? Uzun yıllar hizmet veren merkezler, deneyim ve istikrar açısından daha güvenilirdir.",
          "Kaç hasta cihazı teslim edilmiş? Referanslar ve hasta hikayelerini inceleyin. Gerekirse önceki hastalarla görüşme imkanı sunuluyor mu?",
          "Merkeğin uzmanlaşmış olduğu cihaz türleri neler? Alt ekstremite protezi, üst ekstremite, çocuk ortezleri, skolyoz korsesi gibi alanlarda deneyimi var mı?",
        ],
      },
      {
        id: "takip-hizmeti",
        heading: "Takip Hizmeti ve Sonrası Destek",
        level: 2,
        content: [
          "Ortez protez kullanımı ömür boyu devam eden bir süreçtir. Cihaz teslimi ile iş bitmez; düzenli kontrol, bakım ve gerektiğinde yenileme gerekir.",
          "Ücretsiz takip randevuları sunuluyor mu? Cihaz teslimi sonrası belirli sürelerde kontrol ve ayarlama yapılıyor mu?",
          "Bakım ve onarım hizmeti var mı? Cihaz arızalandığında hızlı şekilde onarım yapılıyor mu? Yedek parça temini nasıl sağlanıyor?",
          "Acil durumda erişim: Sorun oluştuğunda merkeze ne kadar hızlı ulaşabiliyorsunuz? Telefon, WhatsApp veya online destek mevcut mu?",
        ],
      },
      {
        id: "kutahyada-merkez-secimi",
        heading: "Kütahya'da Ortez Protez Merkezi Seçimi",
        level: 2,
        content: [
          "Arıkan Ortopedi - Ortez & Protez Kütahya merkezimiz, yukarıdaki tüm kriterleri karşılayan tam donanımlı bir ortez protez merkezidir.",
          "Uzman kadromuz, SGK anlaşmalı hizmetlerimiz, 3D tarama ve CAD/CAM teknolojimiz, 15 yılı aşkın deneyimimiz ve kapsamlı takip hizmetlerimizle Kütahya ve çevresinde güvenilir çözümler sunuyoruz. Ücretsiz ön değerlendirme için bizi arayabilirsiniz: 0274 600 03 43.",
        ],
      },
    ],
  },

  {
    slug: "kutahyada-ortez-protez-sgk-kapsami-rehberi",
    title: "Kütahya'da Ortez ve Protez Hizmetleri: SGK Kapsamı ve Başvuru Rehberi",
    excerpt: "Kütahya'daki ortez ve protez hizmetlerini, SGK'nın hangi cihazları karşıladığını ve başvuru sürecini adım adım öğrenin.",
    category: "SGK & Mevzuat",
    tags: ["SGK", "ortez", "protez", "Kütahya", "sigorta"],
    readingTime: 7,
    publishedAt: "2026-05-10",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Kütahya'da SGK kapsamında ortez ve protez nasıl alınır? Başvuru belgesi, hekim raporu ve raporlama süreci hakkında eksiksiz rehber.",
    keywords: ["kütahya ortez protez", "sgk ortez protez", "kütahya protez merkezi", "sgk protez başvurusu"],
    featured: false,
    coverColor: "#123B6D",
    coverImage: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&q=80&auto=format&fit=crop",
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
          "Arıkan Ortopedi - Ortez & Protez olarak Kütahya merkezimizde SGK ile anlaşmalı şekilde hizmet vermekteyiz. Uzman kadromuz, cihaz ölçümünden takibe kadar tüm süreci yanınızda yürütmektedir.",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Alt ekstremite amputasyonu sonrası protez seçimini etkileyen faktörler, protez tipleri ve rehabilitasyon sürecine dair uzman rehberi.",
    keywords: ["bacak protezi", "alt ekstremite protezi", "ampütasyon protez", "trans-tibial protez", "trans-femoral protez"],
    featured: false,
    coverColor: "#0AADA8",
    coverImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80&auto=format&fit=crop",
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
          "Arıkan Ortopedi - Ortez & Protez Kütahya merkezimizde alt ekstremite protezleri için komple hizmet sunulmaktadır. İlk değerlendirmeden protez teslimi ve düzenli bakıma kadar sürecin tamamı tek merkezde yönetilmektedir.",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Diz ortezi türleri, endikasyonları ve doğru ortez seçimi hakkında uzman rehberi. ACL, menisküs, artrit ve cerrahi sonrası diz ortezi.",
    keywords: ["diz ortezi", "diz ortezi çeşitleri", "acl ortezi", "menisküs ortezi", "diz stabilizatörü"],
    featured: false,
    coverColor: "#1a5276",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
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
    featured: true,
    featuredOrder: 3,
    title: "FootBalance Ortopedik Tabanlık: Kimler İçin Uygundur ve Nasıl Çalışır?",
    excerpt: "FootBalance'ın %100 kişiye özel tabanlık teknolojisi, hangi sorunlara çözüm sunduğu ve Kütahya'da nasıl yaptırabileceğinizi öğrenin.",
    category: "Tabanlık",
    tags: ["FootBalance", "ortopedik tabanlık", "düz tabanlık", "plantar fasiit", "ayak ağrısı"],
    readingTime: 6,
    publishedAt: "2026-06-02",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "FootBalance ortopedik tabanlık nedir, kimlere uygundur? Düz tabanlık, plantar fasiit, diz ve sırt ağrısı için 10 dakikada kişiye özel tabanlık hizmeti.",
    keywords: ["footbalance tabanlık", "ortopedik tabanlık kütahya", "kişiye özel tabanlık", "düz tabanlık tedavisi", "plantar fasiit tabanlık"],
    coverColor: "#0AADA8",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
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
          "SGK geri ödemesi için gerekli reçete ve belgeler konusunda merkezimiz size yol göstermektedir. SGK'nın karşılamadığı fark tutarı için merkezimiz uygun ödeme koşulları sunmaktadır. Detaylı bilgi için 0274 600 03 43 numaralı hattı arayabilir ya da WhatsApp üzerinden iletişime geçebilirsiniz.",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Plantar fasiit ve düz tabanlık (pes planus) tedavisinde ortopedik tabanlığın rolü, egzersiz protokolleri ve Kütahya'da tedavi seçenekleri.",
    keywords: ["plantar fasiit tedavisi", "düz tabanlık tedavisi", "topuk ağrısı", "pes planus kütahya", "ayak tabanı ağrısı"],
    featured: false,
    coverColor: "#1a7a5e",
    coverImage: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=1200&q=80&auto=format&fit=crop",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Çocuklarda ortez kullanımı ne zaman gereklidir? Serebral palsi, düz tabanlık ve gelişimsel sorunlarda pediyatrik ortez rehberi.",
    keywords: ["çocuk ortezi", "pediyatrik ortez", "afo çocuk", "çocuk düz tabanlık", "serebral palsi ortezi"],
    featured: false,
    coverColor: "#6c3483",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Mikroişlemcili diz protezi nedir, nasıl çalışır? Kimler aday olabilir, SGK kapsamı var mı? Kütahya'da akıllı protez hizmetleri.",
    keywords: ["mikroişlemcili diz protezi", "akıllı protez", "c-leg protez", "biyonik diz", "trans-femoral protez"],
    featured: false,
    coverColor: "#1a3a5c",
    coverImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80&auto=format&fit=crop",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Üst ekstremite amputasyonunda el ve kol protez seçenekleri: pasif, body-powered ve miyoelektrik protezler ile SGK kapsamı.",
    keywords: ["el protezi", "kol protezi", "miyoelektrik el", "biyonik kol", "üst ekstremite protezi kütahya"],
    featured: false,
    coverColor: "#2e4057",
    coverImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80&auto=format&fit=crop",
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
    featured: true,
    featuredOrder: 5,
    title: "SGK ile Ortez Protez Cihazı Nasıl Alınır? Adım Adım Tam Rehber",
    excerpt: "SGK üzerinden ortez veya protez almak için izlenmesi gereken tüm adımlar, gerekli belgeler ve dikkat edilmesi gereken noktalar.",
    category: "SGK & Mevzuat",
    tags: ["SGK ortez", "SGK protez", "sağlık güvencesi", "cihaz başvurusu", "devlet katkısı"],
    readingTime: 8,
    publishedAt: "2026-06-22",
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "SGK ile ortez ve protez cihazı almak için hangi adımları izlemeniz gerekiyor? Gerekli belgeler, heyet raporu ve fark ücreti konusunda eksiksiz rehber.",
    keywords: ["sgk ortez protez başvuru", "sgk protez nasıl alınır", "sgk cihaz", "ortez protez devlet katkısı", "sut ortez"],
    coverColor: "#1a3a1a",
    coverImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80&auto=format&fit=crop",
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
    author: "Arıkan Ortopedi - Ortez & Protez Uzman Ekibi",
    metaDescription: "Bel fıtığı, skolyoz, osteoporoz kırığı ve cerrahi sonrası dönemde kullanılan omurga ortezleri ve korseler hakkında kapsamlı rehber.",
    keywords: ["omurga ortezi", "bel korsesi", "skolyoz korsesi", "lomber ortez", "tlso brace"],
    featured: false,
    coverColor: "#4a235a",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
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
