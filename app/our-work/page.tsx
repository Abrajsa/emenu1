'use client';

import { LanguageProvider, useLanguage } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OurWorkContent() {
  const { lang, setLang } = useLanguage();

  const translations = {
    ar: {
      pageTitle: 'أعمالنا',
      subtitle: 'استعرض بعضًا من قوائم الطعام الإلكترونية التي صممناها لعملائنا الكرام',
      viewMenu: 'عرض القائمة',
    },
    en: {
      pageTitle: 'Our Work',
      subtitle: 'Browse some of the electronic menus we have designed for our valued clients',
      viewMenu: 'View Menu',
    },
  };

  const works = [
    {
      nameAr: 'مطعم بلاميدا',
      nameEn: 'Blameda Restaurant',
      url: 'https://blameda.emenu1.com',
      imageUrl: '/WhatsApp-Image-2021-01-31-at-3.45.07-PM-2.webp',
    },
    {
      nameAr: 'ليالي الشامية',
      nameEn: 'Layali Al Shamiah',
      url: 'https://lyalishamih.emenu1.com',
      imageUrl: '/ly.webp',
    },
    {
      nameAr: 'مطاعم وفطائر ابن الوزير',
      nameEn: 'Ibn Al Wazir Restaurants & Pastries',
      url: 'https://ibnalwzir.emenu1.com',
      imageUrl: '/fatar.webp',
    },
    {
      nameAr: 'مطعم الفيشاوي',
      nameEn: 'Feshawi Restaurant',
      url: 'https://feshawi.emenu1.com',
      imageUrl: '/fesh.webp',
    },
    {
      nameAr: 'واي ات للحلويات',
      nameEn: 'Y-It Sweets',
      url: 'https://y-it.emenu1.com',
      imageUrl: '/yit.webp',
    },
    {
      nameAr: 'فيس تو فيس',
      nameEn: 'Face 2 Face',
      url: 'https://face2face.emenu1.com',
      imageUrl: '/face2face.webp',
    },
    {
      nameAr: 'العسيري كافية',
      nameEn: 'Al Asiri Cafe',
      url: 'https://alasiricafe.emenu1.com',
      imageUrl: 'alisri.webp',
    },
    {
      nameAr: 'مطعم حكاية طبق',
      nameEn: 'Hikyat Tabk Restaurant',
      url: 'https://hikyatabk.emenu1.com',
      imageUrl: '/hkaiatabak.webp',
    },
    {
      nameAr: 'مطعم فخر الشامية',
      nameEn: 'Fakhr Al Shamiah Restaurant',
      url: 'https://fkhr.emenu1.com',
      imageUrl: '/alshmasih.webp',
    },
    {
      nameAr: 'مقهى تو قو',
      nameEn: '2OG Cafe',
      url: 'https://2og.emenu1.com',
      imageUrl: '/2og.webp',
    },
  ];

  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} setLang={setLang} />
      
      <main className="w-full py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#fcfbf6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t.pageTitle}
            </h1>
            <p
              className={`text-lg sm:text-xl text-gray-600 mb-6 ${isRTL ? 'font-arabic' : ''}`}
            >
              {t.subtitle}
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {works.map((work, index) => (
              <a
                key={index}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <img
                  src={work.imageUrl}
                  alt={lang === 'ar' ? work.nameAr : work.nameEn}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function OurWorkPage() {
  return (
    <LanguageProvider>
      <OurWorkContent />
    </LanguageProvider>
  );
}

