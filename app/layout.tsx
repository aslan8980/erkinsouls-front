import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MENSTORE | Premium Menswear",
  description: "Modern and minimalist menswear store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          min-h-screen 
          flex 
          flex-col 
          bg-neutral-50 
          text-neutral-900 
          antialiased
        `}
      >
        <Header />

        <main className="flex-1 w-full">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}