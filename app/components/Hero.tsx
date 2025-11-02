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
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="text-center w-full">
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
              boxShadow: '0 20px 40px rgba(234, 179, 8, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transition: 'none'
            }}
            className="inline-block mt-4 sm:mt-8 px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl cursor-pointer hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-yellow-500/50 hover:scale-105"
          >
            {t.orderNow}
          </motion.a>
        </div>
      </div>
    </section>
  );
}

