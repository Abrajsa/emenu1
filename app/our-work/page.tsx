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
      nameAr: 'ليالي الشامية',
      nameEn: 'Layali Al Shamiah',
      url: 'https://lyalishamih.emenu1.com',
      imageUrl: '/ly.webp',
    },
    {
      nameAr: 'مطعم الفيشاوي',
      nameEn: 'Feshawi Restaurant',
      url: 'https://feshawi.emenu1.com',
      imageUrl: '/fesh.webp',
    },
    {
      nameAr: 'مطعم فخر الشامية',
      nameEn: 'Fakhr Al Shamiah Restaurant',
      url: 'https://fkhr.emenu1.com',
      imageUrl: '/alshmasih.webp',
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
          <div className="text-center mb-16">
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
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mx-auto rounded-full shadow-md mb-4"></div>
            <p className={`text-base sm:text-lg text-black font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {lang === 'ar' ? 'لمشاهدة المنيو اضغط على الصورة' : 'Click on the image to view the menu'}
            </p>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
            {works.map((work, index) => (
              <a
                key={index}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-2xl"
              >
                <img
                  src={work.imageUrl}
                  alt={lang === 'ar' ? work.nameAr : work.nameEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Restaurant Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`text-white font-bold text-lg ${isRTL ? 'font-arabic' : ''}`}>
                    {lang === 'ar' ? work.nameAr : work.nameEn}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 max-w-4xl mx-auto">
            <div className="bg-black rounded-2xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {lang === 'ar'
                  ? 'أبهر عملاءك بمنيو إلكتروني ذكي يجذبهم للطلب فورً'
                  : 'Impress your customers with a smart electronic menu that attracts them to order immediately'}
              </h2>
              <p
                className={`text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {lang === 'ar'
                  ? 'كسب رضا عملائك بمنيو إلكتروني يسهّل عليهم الاختيار ويجعل تجربتهم أمتع.'
                  : 'Gain customer satisfaction with an electronic menu that makes it easier for them to choose and makes their experience more enjoyable.'}
              </p>
              <a
                href="https://new-mall.com/onBOBnV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50"
              >
                {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </a>
            </div>
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

