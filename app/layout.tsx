import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono, Cairo } from "next/font/google";
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
  title: "المنيو الإلكتروني الأول | تصميم منيو الكتروني مميز لمطعمك.",
  description: "يعرض جميع الأطعمة مع وصفٍ موجزٍ والسعرِ والسعراتِ الحرارية، بطريقةٍ أنيقةٍ وجذّابةٍ متجاوبةٍ على جميع الأجهزة، جوال أو كمبيوتر، مع اتصالٍ فوريٍّ بضغطة زر.",
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
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
