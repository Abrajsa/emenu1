'use client';

import { motion } from 'framer-motion';

interface MainTextProps {
  lang: 'ar' | 'en';
}

const translations = {
  ar: {
    ctaText: 'اطلب قائمتك الرقمية الآن من Emenu1.com ودع مطعمك يتميز بخدمات احترافية وميزات حصرية لا يقدمها أحد آخر.',
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
  const orderUrl = 'https://new-mall.com/onBOBnV';

  return (
    <section
      className={`w-full py-16 sm:py-20 lg:py-24 ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ backgroundColor: '#F54927' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8 font-bold ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t.ctaText}
          </motion.p>
          <motion.a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-white text-orange-600 text-lg sm:text-xl font-bold rounded-full shadow-2xl cursor-pointer"
          >
            {t.buttonText}
          </motion.a>
        </div>
      </div>
    </section>
  );
}

