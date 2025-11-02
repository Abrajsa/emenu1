'use client';

import { LanguageProvider, useLanguage } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

function AboutContent() {
  const { lang, setLang } = useLanguage();

  const translations = {
    ar: {
      pageTitle: 'من نحن',
      paragraph1: 'نحن شركة رائدة في تصميم وتطوير القوائم الرقمية التفاعلية للمطاعم والمقاهي والفنادق، مع أكثر من 10 سنوات من الخبرة في هذا المجال.',
      paragraph2: 'نلتزم بتقديم قائمة رقمية متميزة مصممة خصيصاً لهويتك التجارية، تعرض منتجاتك بأفضل طريقة ممكنة وتجذب العملاء للطلب أكثر.',
      paragraph3: 'لقد أثبتت حلولنا نجاحها في زيادة مبيعات المطاعم وتعزيز مشاركة العملاء بشكل كبير.',
      paragraph4: 'اختر Emenu1، الخيار الأول والأفضل لأولئك الذين يسعون للحصول على الجودة والأناقة وتجربة رقمية تتجاوز التوقعات.',
    },
    en: {
      pageTitle: 'About Us',
      paragraph1: 'We are a leading company in designing and developing interactive digital menus for restaurants, cafés, and hotels, with over 10 years of experience in this field.',
      paragraph2: 'We are committed to providing a distinctive digital menu customized to your brand identity, showcasing your products in the best possible way and attracting customers to order more.',
      paragraph3: 'Our solutions have proven successful in increasing restaurant sales and enhancing customer engagement significantly.',
      paragraph4: 'Choose Emenu1, the first and best choice for those seeking quality, elegance, and a digital experience beyond expectations.',
    },
  };

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
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t.pageTitle}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mx-auto rounded-full shadow-md"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-yellow-50/30 border border-gray-100 hover:shadow-3xl transition-all duration-300">
                  <Image
                    src="/emenulogo.jpg"
                    alt={lang === 'ar' ? 'شعار الشركة' : 'Company Logo'}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <p
                    className={`text-lg sm:text-xl text-black leading-relaxed mb-6 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {t.paragraph1}
                  </p>
                  <p
                    className={`text-lg sm:text-xl text-black leading-relaxed mb-6 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {t.paragraph2}
                  </p>
                  <p
                    className={`text-lg sm:text-xl text-black leading-relaxed mb-6 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {t.paragraph3}
                  </p>
                  <p
                    className={`text-lg sm:text-xl text-black leading-relaxed font-semibold ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {t.paragraph4}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <p className={`text-black group-hover:text-gray-700 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                  {lang === 'ar' ? '  سنوات من الخبرة' : 'Years of Experience'}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <p className={`text-black group-hover:text-gray-700 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                  {lang === 'ar' ? '  عميل سعيد' : 'Happy Clients'}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <p className={`text-black group-hover:text-gray-700 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                  {lang === 'ar' ? ' منيو الكتروني' : 'Digital Menus'}
                </p>
              </div>
            </div>
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

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}

