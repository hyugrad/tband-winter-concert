import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://hyugrad.github.io/tband-winter-concert/";
const siteDescription =
  "2026년 12월 11일, 합정 001클럽에서 열리는 NEW RIVER와 24 Hz의 합동공연.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2026 NEW RIVER X 24 Hz 합동공연",
    template: "%s | NEW RIVER X 24 Hz",
  },
  description: siteDescription,
  applicationName: "NEW RIVER X 24 Hz",
  keywords: ["NEW RIVER", "24Hz", "합동공연", "001클럽", "인디밴드"],
  openGraph: {
    title: "2026 NEW RIVER X 24 Hz 합동공연",
    description: siteDescription,
    url: siteUrl,
    siteName: "NEW RIVER X 24 Hz",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "og.png",
        width: 1200,
        height: 630,
        alt: "NEW RIVER와 24 Hz 합동공연 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 NEW RIVER X 24 Hz 합동공연",
    description: siteDescription,
    images: ["og.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
