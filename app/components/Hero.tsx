'use client';

import { motion } from 'framer-motion';

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
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/heromenu.png)',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg px-2 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t.heroText}
          </motion.h1>
          <motion.a
            href="https://new-mall.com/onBOBnV"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transition: 'none'
            }}
            className="inline-block mt-4 sm:mt-8 px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl cursor-pointer"
          >
            {t.orderNow}
          </motion.a>
        </div>
      </div>
    </section>
  );
}

