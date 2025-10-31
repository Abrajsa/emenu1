'use client';

import { motion } from 'framer-motion';

interface AdvantagesProps {
  lang: 'ar' | 'en';
}

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const translations = {
  ar: {
    sectionTitle: 'المزايا',
    advantages: [
      {
        title: 'رمز شريطي ذكي رقمي',
        description: 'عملاؤك لا يحتاجون لطلب القائمة. فقط وجه الكاميرا على الرمز الشريطي، وسيتم نقلهم مباشرة إلى القائمة الإلكترونية بسرعة وسهولة.',
      },
      {
        title: 'قائمة إلكترونية كاملة',
        description: 'تعرض جميع الأطعمة والمشروبات مع وصف موجز والسعر وعدد السعرات الحرارية، معروضة بطريقة أنيقة وجذابة على جميع الأجهزة.',
      },
      {
        title: 'اتصال فوري',
        description: 'بضغطة زر واحدة فقط، يمكن لعملائك الاتصال بك مباشرة أو مراسلتك عبر واتساب لطلب سريع وسهل.',
      },
      {
        title: 'توجيه موقع مباشر',
        description: 'بضغطة زر واحدة، يمكن لعملائك الوصول إلى موقعك وتفعيل التنقل التلقائي عبر خرائط جوجل.',
      },
      {
        title: 'زيادة العملاء والمبيعات',
        description: 'القائمة الإلكترونية تساعد على جذب عملاء جدد وبناء ولاء دائم مع العملاء الحاليين.',
      },
      {
        title: 'حماية وتعزيز الصورة الصحية',
        description: 'تخلّ عن القوائم الورقية وأظهر لعملائك التزامك بصحتهم وسلامتهم.',
      },
      {
        title: 'تسويق ذاتي لمطعمك',
        description: 'العميل الراضي هو أفضل شكل من أشكال الإعلان. يمكنهم بسهولة مشاركة قائمتك مع أصدقائهم ومعارفهم.',
      },
      {
        title: 'متوافق مع الأنظمة الرسمية',
        description: 'نلتزم بمتطلبات وزارة الصحة والبلديات، مثل عرض عدد السعرات الحرارية والأسعار شاملة الضريبة، مما يضمن أن قائمتك جاهزة ومُعتمدة دون أي رفض رسمي.',
      },
      {
        title: 'تحسين محركات البحث',
        description: 'ستحتل قائمتك المراكز الأولى عند البحث عن مطعمك على جوجل، بفضل تحسينات SEO المدمجة في نظامنا.',
      },
    ],
  },
  en: {
    sectionTitle: 'Advantages of the First Electronic Menu',
    advantages: [
      {
        title: 'Smart Digital Barcode',
        description: 'Your customers don\'t need to ask for the menu. Simply point your camera at the barcode, and they\'ll be taken directly to the electronic menu quickly and easily.',
      },
      {
        title: 'Complete Electronic Menu',
        description: 'Displays all food and drinks with a brief description, price, and calorie count, presented in a sleek and attractive way on all devices.',
      },
      {
        title: 'Instant Contact',
        description: 'Just one button allows your customers to contact you directly or message you via WhatsApp for quick and easy ordering.',
      },
      {
        title: 'Direct Location Directions',
        description: 'With the touch of a button, your customers can reach your location and activate automatic navigation via Google Maps.',
      },
      {
        title: 'Increased Customers and Sales',
        description: 'The electronic menu helps attract new customers and build lasting loyalty with existing ones.',
      },
      {
        title: 'Protecting and Enhancing a Healthy Image',
        description: 'Abandon paper menus and show your customers your commitment to their health and safety.',
      },
      {
        title: 'Self-Marketing for Your Restaurant',
        description: 'A satisfied customer is the best form of advertising. They can easily share your menu with their friends and acquaintances.',
      },
      {
        title: 'Compliant with official regulations',
        description: 'We adhere to the requirements of the Ministry of Health and municipalities, such as displaying calorie counts and prices including tax, ensuring your menu is ready and approved without any official rejection.',
      },
      {
        title: 'Search engine optimization',
        description: 'Your menu will rank among the top results when someone searches for your restaurant on Google, thanks to the SEO optimizations integrated into our system.',
      },
    ],
  },
};

const icons = [
  // Smart Digital Barcode
  <svg key="barcode" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
  </svg>,
  
  // Complete Electronic Menu
  <svg key="menu" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  
  // Instant Contact
  <svg key="contact" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  
  // Direct Location Directions
  <svg key="location" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  
  // Increased Customers and Sales
  <svg key="sales" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  
  // Protecting and Enhancing a Healthy Image
  <svg key="health" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  
  // Self-Marketing for Your Restaurant
  <svg key="marketing" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>,
  
  // Compliant with official regulations
  <svg key="compliant" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  
  // Search engine optimization
  <svg key="seo" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
];

export default function Advantages({ lang }: AdvantagesProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const advantages: Advantage[] = t.advantages.map((adv, index) => ({
    icon: icons[index],
    title: adv.title,
    description: adv.description,
  }));

  return (
    <section
      className={`w-full py-16 sm:py-20 lg:py-24 ${isRTL ? 'rtl' : 'ltr'}`}
      style={{ backgroundColor: '#fcfbf6' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t.sectionTitle}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 border border-gray-100 hover:border-yellow-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors duration-300">
                {advantage.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {advantage.title}
              </h3>

              {/* Description */}
              <p
                className={`text-gray-600 leading-relaxed text-sm sm:text-base ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

