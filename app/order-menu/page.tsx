'use client';

import { useState, FormEvent } from 'react';
import { LanguageProvider, useLanguage } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OrderMenuContent() {
  const { lang, setLang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    menuSpecifications: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    ar: {
      pageTitle: 'اطلب المنيو',
      orderForm: 'نموذج طلب المنيو',
      name: 'الاسم',
      phone: 'رقم الجوال',
      email: 'البريد الإلكتروني',
      menuSpecifications: 'مواصفات المنيو المطلوبة',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      success: 'تم إرسال طلبك بنجاح. سنتواصل معك قريباً.',
      error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
      description: 'املأ النموذج أدناه لطلب منيو إلكتروني مخصص لمطعمك. سنتواصل معك قريباً لمناقشة التفاصيل.',
    },
    en: {
      pageTitle: 'Order Menu',
      orderForm: 'Menu Order Form',
      name: 'Name',
      phone: 'Phone Number',
      email: 'Email',
      menuSpecifications: 'Menu Specifications Required',
      submit: 'Submit Order',
      submitting: 'Submitting...',
      success: 'Your order has been sent successfully. We will contact you soon.',
      error: 'An error occurred while sending. Please try again.',
      description: 'Fill out the form below to order a custom electronic menu for your restaurant. We will contact you soon to discuss the details.',
    },
  };

  const t = translations[lang];
  const isRTL = lang === 'ar';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/order-menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', menuSpecifications: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mx-auto rounded-full shadow-md"></div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p
              className={`text-lg sm:text-xl text-gray-700 text-center leading-relaxed ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t.description}
            </p>
          </div>

          {/* Order Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h2
                className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {t.orderForm}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-bold text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-bold text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-bold text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="menuSpecifications"
                      className={`block text-sm font-bold text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.menuSpecifications}
                    </label>
                    <textarea
                      id="menuSpecifications"
                      required
                      rows={8}
                      value={formData.menuSpecifications}
                      onChange={(e) => setFormData({ ...formData, menuSpecifications: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                      placeholder={lang === 'ar' ? 'اكتب مواصفات المنيو المطلوبة...' : 'Enter menu specifications required...'}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      {t.success}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                      {t.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:shadow-yellow-500/50"
                  >
                    {isSubmitting ? t.submitting : t.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function OrderMenuPage() {
  return (
    <LanguageProvider>
      <OrderMenuContent />
    </LanguageProvider>
  );
}
