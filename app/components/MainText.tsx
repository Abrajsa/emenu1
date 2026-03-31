'use client';

import Link from 'next/link';

interface MainTextProps {
  lang: 'ar' | 'en';
}

const translations = {
  ar: {
    ctaText: 'اطلب منيو إلكتروني مميز الآن من Emenu1.com، ودع مطعمك يتميّز بخدمات احترافية وميزات حصرية لا يقدّمها أحد آخر.',
    buttonText: 'اطلب الآن',
  },
  en: {
    ctaText: 'Order your digital menu now from Emenu1.com and let your restaurant stand out with professional services and exclusive features that no one else offers.',
    buttonText: 'Order Now',
  },
};

export default function MainText({ lang }: MainTextProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      className={`w-full py-16 sm:py-20 lg:py-24 ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ backgroundColor: '#000000', background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8 font-bold ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t.ctaText}
          </p>
          <div>
            <Link
              href="/order-menu"
              className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-lg sm:text-xl font-bold rounded-full shadow-2xl cursor-pointer hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-yellow-500/50 hover:scale-105"
            >
              {t.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

