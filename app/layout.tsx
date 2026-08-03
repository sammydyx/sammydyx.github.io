import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "林屿 — 数字产品设计师与创意开发者",
  description: "林屿的个人作品集，专注数字产品、品牌体验与创意开发。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "林屿 / LIN YU", description: "数字产品设计师 · 创意开发者", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "林屿 / LIN YU", description: "数字产品设计师 · 创意开发者", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
