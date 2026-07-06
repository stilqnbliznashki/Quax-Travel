import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CartProvider } from "@/src/context/CartContext"; 
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iter — Discover, Eat, Rest",
  description: "We provide stability, comfort, and security for your next trip.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <CartProvider>
          <Navbar />
          <div className="min-h-screen flex flex-col pb-16 lg:pb-0">{children}</div>
          <Footer />
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
