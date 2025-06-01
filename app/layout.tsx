import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import { Inter,Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}${playfair.variable}`}>{children}</body>
    </html>
  );
}
