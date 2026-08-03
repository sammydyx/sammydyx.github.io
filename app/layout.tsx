import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lin Yu — Independent Designer & Creative Developer",
  description: "Lin Yu’s portfolio for digital products, brand experiences, and creative development.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Lin Yu / Independent Designer", description: "Digital product designer and creative developer.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Lin Yu / Independent Designer", description: "Digital product designer and creative developer.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
