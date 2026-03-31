'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  lang: 'ar' | 'en';
}

const translations = {
  ar: {
    heroText: 'احصل على افضل منيو يرتقي بخدمتك و يزيد مبيعاتك',
    orderNow: 'اطلب الآن',
  },
  en: {
    heroText: 'Get the best menu to elevate your service and increase your sales',
    orderNow: 'Order Now',
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      className={`relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden ${
        isRTL ? 'rtl' : 'ltr'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heromenu.png"
          alt={lang === 'ar' ? 'صورة رئيسية للمنيو الإلكتروني' : 'Main electronic menu hero image'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="text-center w-full">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg px-2 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t.heroText}
          </h1>
          <div>
            <Link
              href="/order-menu"
              className="inline-block mt-4 sm:mt-8 px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl cursor-pointer hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-yellow-500/50 hover:scale-105"
            >
              {t.orderNow}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

