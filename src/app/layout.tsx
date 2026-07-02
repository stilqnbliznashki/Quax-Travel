import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quax Travel",
  description:
    "A tourism discovery MVP for browsing hotels, restaurants, attractions, offers, maps, and destination info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
