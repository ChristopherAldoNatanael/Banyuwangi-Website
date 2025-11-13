import type React from "react";
import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import { ClientLayout } from "@/components/client-layout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Pesona Budaya Banyuwangi",
  description: "Jelajahi kekayaan budaya, kuliner, dan tradisi Banyuwangi - The Sunrise of Java",
  generator: "v0.app",
  icons: {
    icon: "/Lambang_Kabupaten_Banyuwangi.png",
    apple: "/Lambang_Kabupaten_Banyuwangi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
