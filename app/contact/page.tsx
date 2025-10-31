'use client';

import { useState, FormEvent } from 'react';
import { LanguageProvider, useLanguage } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactContent() {
  const { lang, setLang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    ar: {
      pageTitle: 'اتصل بنا',
      contactInfo: 'معلومات الاتصال',
      getInTouch: 'تواصل معنا',
      contactForm: 'نموذج الاتصال',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
      error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
      businessHours: 'ساعات العمل',
      hours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      responseTime: 'وقت الاستجابة',
      response: 'نرد على جميع الاستفسارات خلال 24 ساعة',
    },
    en: {
      pageTitle: 'Contact Us',
      contactInfo: 'Contact Information',
      getInTouch: 'Get in Touch',
      contactForm: 'Contact Form',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Your message has been sent successfully. We will contact you soon.',
      error: 'An error occurred while sending. Please try again.',
      businessHours: 'Business Hours',
      hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      responseTime: 'Response Time',
      response: 'We respond to all inquiries within 24 hours',
    },
  };

  const t = translations[lang];
  const isRTL = lang === 'ar';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link or use API route
      const mailtoLink = `mailto:info@emenu1.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      // Simulate success (since mailto doesn't provide feedback)
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

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
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2
                className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {t.contactInfo}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold text-gray-900 mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h3>
                      <a
                        href="mailto:info@emenu1.com"
                        className="text-yellow-500 hover:text-yellow-600 transition-colors"
                      >
                        info@emenu1.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold text-gray-900 mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                        {lang === 'ar' ? 'رقم الهاتف' : 'Phone'}
                      </h3>
                      <a
                        href="tel:0551781111"
                        className="text-yellow-500 hover:text-yellow-600 transition-colors"
                      >
                        0551781111
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className={`font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {t.businessHours}
                </h3>
                <p className={`text-gray-600 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {t.hours}
                </p>
                <h3 className={`font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {t.responseTime}
                </h3>
                <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                  {t.response}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {t.contactForm}
              </h2>
              
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none"
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
                    className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? t.sending : t.send}
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

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}



