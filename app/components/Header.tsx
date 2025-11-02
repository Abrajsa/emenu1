'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
}

const translations = {
  ar: {
    orderNow: 'اطلب الآن',
    aboutUs: 'من نحن',
    ourWork: 'أعمالنا',
    contactUs: 'اتصل بنا',
  },
  en: {
    orderNow: 'Order Now',
    aboutUs: 'About Us',
    ourWork: 'Our Work',
    contactUs: 'Contact Us',
  },
};

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const orderUrl = 'https://new-mall.com/onBOBnV';

  return (
    <header
      className={`w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 ${
        isRTL ? 'rtl font-arabic' : 'ltr'
      } ${!isRTL ? '[font-family:var(--font-poppins),Arial,Helvetica,sans-serif]' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        fontFamily: isRTL 
          ? 'var(--font-cairo), "Segoe UI", Arial, sans-serif'
          : 'var(--font-poppins), Arial, Helvetica, sans-serif'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/emenulogo.jpg"
                alt="eMenu Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-black">
              {lang === 'ar' ? 'المنيو الالكتروني الاول' : 'The First Electronic Menu'}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-black hover:text-yellow-500 transition-all duration-300 font-bold group rounded-lg"
            >
              {t.orderNow}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <Link
              href="/about"
              className="relative px-4 py-2 text-black hover:text-yellow-500 transition-all duration-300 font-bold group rounded-lg"
            >
              {t.aboutUs}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/our-work"
              className="relative px-4 py-2 text-black hover:text-yellow-500 transition-all duration-300 font-bold group rounded-lg"
            >
              {t.ourWork}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="relative px-4 py-2 text-black hover:text-yellow-500 transition-all duration-300 font-bold group rounded-lg"
            >
              {t.contactUs}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </nav>

          {/* Language Switcher - Desktop Only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang('ar')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105 ${
                lang === 'ar'
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105 ${
                lang === 'en'
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-black hover:bg-gray-900 transition-all active:scale-95 shadow-sm hover:shadow-md"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-center gap-1.5">
              <span 
                className={`absolute top-0 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 top-2' : ''
                }`}
                style={{ backgroundColor: '#fff1b8' }}
              ></span>
              <span 
                className={`absolute top-2 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: '#fff1b8' }}
              ></span>
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 bottom-2' : ''
                }`}
                style={{ backgroundColor: '#fff1b8' }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay with Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 backdrop-blur-md bg-transparent z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* Sidebar */}
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, type: 'tween' }}
                className="fixed top-0 bottom-0 right-0 w-64 sm:w-80 bg-white/95 backdrop-blur-md shadow-2xl z-50 md:hidden overflow-y-auto border-l border-gray-100"
              >
                <div className="flex flex-col h-full py-8 px-6">
                  {/* Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="self-end mb-8 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 transition-all hover:scale-110 active:scale-95"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-3 mb-8">
                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4 text-black hover:text-yellow-600 hover:bg-yellow-50 transition-all font-bold rounded-xl group shadow-sm hover:shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </div>
                      <span>{t.orderNow}</span>
                    </a>
                    <Link
                      href="/about"
                      className="flex items-center gap-4 px-5 py-4 text-black hover:text-yellow-600 hover:bg-yellow-50 transition-all font-bold rounded-xl group shadow-sm hover:shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                      </div>
                      <span>{t.aboutUs}</span>
                    </Link>
                    <Link
                      href="/our-work"
                      className="flex items-center gap-4 px-5 py-4 text-black hover:text-yellow-600 hover:bg-yellow-50 transition-all font-bold rounded-xl group shadow-sm hover:shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.125c.621 0 1.125-.504 1.125-1.125V11.25c0-1.037-.46-2.128-1.17-2.833a5.375 5.375 0 00-6.953-6.953 5.375 5.375 0 00-6.953 6.953c-.71.705-1.17 1.796-1.17 2.833v1.775c0 .621.504 1.125 1.125 1.125h4.125m6.75 2v-8.5a1.125 1.125 0 00-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v8.5m12 0V12.75a1.125 1.125 0 00-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v3.75m6.75 0v-6.75a1.125 1.125 0 011.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75m-9 0V18.75a1.125 1.125 0 01-1.125 1.125H5.25c-.621 0-1.125-.504-1.125-1.125v-5.25a1.125 1.125 0 011.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v4.125" />
                        </svg>
                      </div>
                      <span>{t.ourWork}</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-4 px-5 py-4 text-black hover:text-yellow-600 hover:bg-yellow-50 transition-all font-bold rounded-xl group shadow-sm hover:shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <span>{t.contactUs}</span>
                    </Link>
                  </div>

                  {/* Language Switcher */}
                  <div className="mt-auto pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 text-yellow-500">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-2.716 0A8.95 8.95 0 0112 21a8.95 8.95 0 01-6-2.747M12 21a8.95 8.95 0 006-2.747M12 21a8.95 8.95 0 01-6-2.747m12 0A8.959 8.959 0 003 12c0-.778.099-1.533.284-2.253m2.716 0A8.95 8.95 0 0112 3a8.95 8.95 0 016 2.747M12 3a8.95 8.95 0 00-6 2.747" />
                        </svg>
                      </div>
                      <p className={`text-sm font-bold text-black ${isRTL ? 'font-arabic' : ''}`}>
                        {lang === 'ar' ? 'اللغة' : 'Language'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setLang('ar');
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-105 active:scale-95 ${
                          lang === 'ar'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        عربي
                      </button>
                      <button
                        onClick={() => {
                          setLang('en');
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-105 active:scale-95 ${
                          lang === 'en'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

