import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fnl.css";

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
  "FNL — 2026년 12월 11일, 합정 001클럽에서 열리는 NEW RIVER와 24 Hz의 Friday Night Live.";
const socialImageUrl = "og.png?v=20261021-fnl-r2";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FNL — Friday Night Live",
    template: "%s | FNL",
  },
  description: siteDescription,
  applicationName: "FNL — Friday Night Live",
  keywords: ["FNL", "Friday Night Live", "NEW RIVER", "24Hz", "합동공연", "001클럽", "인디밴드"],
  openGraph: {
    title: "FNL — Friday Night Live",
    description: siteDescription,
    url: siteUrl,
    siteName: "FNL — Friday Night Live",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "FNL Friday Night Live 공연 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FNL — Friday Night Live",
    description: siteDescription,
    images: [socialImageUrl],
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
