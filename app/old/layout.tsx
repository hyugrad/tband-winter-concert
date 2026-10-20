import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이전 디자인",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OldLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
