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
      className={`w-full bg-white shadow-md sticky top-0 z-50 ${
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
          <nav className="hidden md:flex items-center gap-4">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-black hover:text-orange-600 transition-colors font-bold group"
            >
              {t.orderNow}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 opacity-0 group-hover:opacity-100"></span>
            </a>
            <Link
              href="/about"
              className="relative px-4 py-2 text-black hover:text-orange-600 transition-colors font-bold group"
            >
              {t.aboutUs}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/our-work"
              className="relative px-4 py-2 text-black hover:text-orange-600 transition-colors font-bold group"
            >
              {t.ourWork}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/contact"
              className="relative px-4 py-2 text-black hover:text-orange-600 transition-colors font-bold group"
            >
              {t.contactUs}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 opacity-0 group-hover:opacity-100"></span>
            </Link>
          </nav>

          {/* Language Switcher - Desktop Only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang('ar')}
              className={`px-3 py-1 rounded-md text-sm font-bold transition-colors cursor-pointer ${
                lang === 'ar'
                  ? 'bg-orange-600 text-white'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-md text-sm font-bold transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-orange-600 text-white'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                className="fixed top-0 bottom-0 right-0 w-64 sm:w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                <div className="flex flex-col h-full py-8 px-6">
                  {/* Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="self-end mb-8 w-8 h-8 flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-4 mb-8">
                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-black hover:text-orange-600 hover:bg-orange-50 transition-colors font-bold rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.orderNow}
                    </a>
                    <Link
                      href="/about"
                      className="px-4 py-3 text-black hover:text-orange-600 hover:bg-orange-50 transition-colors font-bold rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.aboutUs}
                    </Link>
                    <Link
                      href="/our-work"
                      className="px-4 py-3 text-black hover:text-orange-600 hover:bg-orange-50 transition-colors font-bold rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.ourWork}
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-3 text-black hover:text-orange-600 hover:bg-orange-50 transition-colors font-bold rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.contactUs}
                    </Link>
                  </div>

                  {/* Language Switcher */}
                  <div className="mt-auto pt-8 border-t border-gray-200">
                    <p className={`text-sm font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                      {lang === 'ar' ? 'اللغة' : 'Language'}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setLang('ar');
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                          lang === 'ar'
                            ? 'bg-orange-600 text-white'
                            : 'bg-black text-white hover:bg-gray-900'
                        }`}
                      >
                        عربي
                      </button>
                      <button
                        onClick={() => {
                          setLang('en');
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                          lang === 'en'
                            ? 'bg-orange-600 text-white'
                            : 'bg-black text-white hover:bg-gray-900'
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

