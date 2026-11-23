import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 pb-14 sm:pb-0">
        <CartProvider>
          <div>
            <AnnouncementBar />
            <Header />
            <main className="max-w-6xl mx-auto px-3 sm:px-4">{children}</main>
          </div>
          <Footer />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
