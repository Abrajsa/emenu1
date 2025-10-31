'use client';

import { LanguageProvider, useLanguage } from './components/LanguageProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import MainText from './components/MainText';
import Footer from './components/Footer';

function HomeContent() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'rtl' : 'ltr'}`} style={{ backgroundColor: '#fcfbf6' }} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Advantages lang={lang} />
      <MainText lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
