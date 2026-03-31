import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono, Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emenu1.com"),
  title: {
    default: "المنيو الإلكتروني الأول | تصميم منيو إلكتروني احترافي للمطاعم",
    template: "%s | eMenu1",
  },
  description:
    "منيو إلكتروني احترافي للمطاعم والمقاهي مع تصميم سريع ومتجاوب يساعدك على عرض المنتجات ورفع الطلبات والمبيعات.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "المنيو الإلكتروني الأول | eMenu1",
    description:
      "صمم منيو إلكتروني سريع وجذاب لمطعمك مع تجربة استخدام ممتازة على الجوال والكمبيوتر.",
    url: "https://emenu1.com",
    siteName: "eMenu1",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/emenulogo.jpg",
        width: 1200,
        height: 630,
        alt: "eMenu1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eMenu1 | المنيو الإلكتروني الأول",
    description:
      "منيو إلكتروني سريع ومتجاوب للمطاعم والمقاهي يساعدك على تحسين تجربة العميل وزيادة المبيعات.",
    images: ["/emenulogo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eMenu1",
    url: "https://emenu1.com",
    logo: "https://emenu1.com/emenulogo.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@emenu1.com",
      telephone: "0551781111",
      availableLanguage: ["ar", "en"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eMenu1",
    url: "https://emenu1.com",
    inLanguage: ["ar", "en"],
  };

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Script
          id="metricool-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c8dc9cf269c98d5ade72ab3146f19d88"})});
            `
          }}
        />
      </body>
    </html>
  );
}
